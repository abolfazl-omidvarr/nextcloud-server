const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { a as getCurrentUser, h as getRequestToken, o as onRequestTokenUpdate } from "./mdi-CCQ2KgUK.chunk.mjs";
import { e as generateRemoteUrl } from "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
import { l as loadState } from "./index-CEzAKfoK.chunk.mjs";
import { l as lr, _ } from "./index-CIWHtE7-.chunk.mjs";
import { s as scopedGlobals, l as logger, N as NodeStatus, a as File, b as Folder, P as Permission } from "./public-SXOFh1vA.chunk.mjs";
/*!
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
function isPublicShare() {
  return loadState("files_sharing", "isPublic", null) ?? document.querySelector('input#isPublic[type="hidden"][name="isPublic"][value="1"]') !== null;
}
function getSharingToken() {
  return loadState("files_sharing", "sharingToken", null) ?? document.querySelector('input#sharingToken[type="hidden"]')?.value ?? null;
}
/*!
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
function parsePermissions(permString = "") {
  let permissions = Permission.NONE;
  if (!permString) {
    return permissions;
  }
  if (permString.includes("G")) {
    permissions |= Permission.READ;
  }
  if (permString.includes("W")) {
    permissions |= Permission.WRITE;
  }
  if (permString.includes("CK")) {
    permissions |= Permission.CREATE;
  }
  if (permString.includes("NV")) {
    permissions |= Permission.UPDATE;
  }
  if (permString.includes("D")) {
    permissions |= Permission.DELETE;
  }
  if (permString.includes("R")) {
    permissions |= Permission.SHARE;
  }
  return permissions;
}
const defaultDavProperties = [
  "d:getcontentlength",
  "d:getcontenttype",
  "d:getetag",
  "d:getlastmodified",
  "d:creationdate",
  "d:displayname",
  "d:quota-available-bytes",
  "d:resourcetype",
  "nc:has-preview",
  "nc:is-encrypted",
  "nc:mount-type",
  "oc:comments-unread",
  "oc:favorite",
  "oc:fileid",
  "oc:owner-display-name",
  "oc:owner-id",
  "oc:permissions",
  "oc:size"
];
const defaultDavNamespaces = {
  d: "DAV:",
  nc: "http://nextcloud.org/ns",
  oc: "http://owncloud.org/ns",
  ocs: "http://open-collaboration-services.org/ns"
};
function registerDavProperty(prop, namespace = { nc: "http://nextcloud.org/ns" }) {
  scopedGlobals.davNamespaces ??= { ...defaultDavNamespaces };
  scopedGlobals.davProperties ??= [...defaultDavProperties];
  const namespaces = { ...scopedGlobals.davNamespaces, ...namespace };
  if (scopedGlobals.davProperties.find((search) => search === prop)) {
    logger.warn(`${prop} already registered`, { prop });
    return false;
  }
  if (prop.startsWith("<") || prop.split(":").length !== 2) {
    logger.error(`${prop} is not valid. See example: 'oc:fileid'`, { prop });
    return false;
  }
  const ns = prop.split(":")[0];
  if (!namespaces[ns]) {
    logger.error(`${prop} namespace unknown`, { prop, namespaces });
    return false;
  }
  scopedGlobals.davProperties.push(prop);
  scopedGlobals.davNamespaces = namespaces;
  return true;
}
function getDavProperties() {
  scopedGlobals.davProperties ??= [...defaultDavProperties];
  return scopedGlobals.davProperties.map((prop) => `<${prop} />`).join(" ");
}
function getDavNameSpaces() {
  scopedGlobals.davNamespaces ??= { ...defaultDavNamespaces };
  return Object.keys(scopedGlobals.davNamespaces).map((ns) => `xmlns:${ns}="${scopedGlobals.davNamespaces?.[ns]}"`).join(" ");
}
function getRootPath() {
  if (isPublicShare()) {
    return `/files/${getSharingToken()}`;
  }
  return `/files/${getCurrentUser()?.uid}`;
}
const defaultRootPath = getRootPath();
function getRemoteURL() {
  const url = generateRemoteUrl("dav");
  if (isPublicShare()) {
    return url.replace("remote.php", "public.php");
  }
  return url;
}
const defaultRemoteURL = getRemoteURL();
function getClient(remoteURL = defaultRemoteURL, headers = {}) {
  const client = lr(remoteURL, { headers });
  function setHeaders(token) {
    client.setHeaders({
      ...headers,
      // Add this so the server knows it is an request from the browser
      "X-Requested-With": "XMLHttpRequest",
      // Inject user auth
      requesttoken: token ?? ""
    });
  }
  onRequestTokenUpdate(setHeaders);
  setHeaders(getRequestToken());
  const patcher = _();
  patcher.patch("fetch", (url, options) => {
    const headers2 = options.headers;
    if (headers2?.method) {
      options.method = headers2.method;
      delete headers2.method;
    }
    return fetch(url, options);
  });
  return client;
}
function resultToNode(node, filesRoot = defaultRootPath, remoteURL = defaultRemoteURL) {
  let userId = getCurrentUser()?.uid;
  if (isPublicShare()) {
    userId = userId ?? "anonymous";
  } else if (!userId) {
    throw new Error("No user id found");
  }
  const props = node.props;
  const permissions = parsePermissions(props?.permissions);
  const owner = String(props?.["owner-id"] || userId);
  const id = props.fileid || 0;
  const mtime = new Date(Date.parse(node.lastmod));
  const crtime = new Date(Date.parse(props.creationdate));
  const nodeData = {
    id,
    source: `${remoteURL}${node.filename}`,
    mtime: !isNaN(mtime.getTime()) && mtime.getTime() !== 0 ? mtime : void 0,
    crtime: !isNaN(crtime.getTime()) && crtime.getTime() !== 0 ? crtime : void 0,
    mime: node.mime || "application/octet-stream",
    // Manually cast to work around for https://github.com/perry-mitchell/webdav-client/pull/380
    displayname: props.displayname !== void 0 ? String(props.displayname) : void 0,
    size: props?.size || Number.parseInt(props.getcontentlength || "0"),
    // The fileid is set to -1 for failed requests
    status: id < 0 ? NodeStatus.FAILED : void 0,
    permissions,
    owner,
    root: filesRoot,
    attributes: {
      ...node,
      ...props,
      hasPreview: props?.["has-preview"]
    }
  };
  delete nodeData.attributes?.props;
  return node.type === "file" ? new File(nodeData) : new Folder(nodeData);
}
export {
  getDavNameSpaces as a,
  getDavProperties as b,
  registerDavProperty as c,
  defaultRemoteURL as d,
  getRemoteURL as e,
  getRootPath as f,
  getClient as g,
  resultToNode as r
};
//# sourceMappingURL=dav-CCFVdbCj.chunk.mjs.map
