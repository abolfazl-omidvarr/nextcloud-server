const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[window.OC.filePath('', '', 'dist/CredentialsDialog-C2hULxX8.chunk.mjs'),window.OC.filePath('', '', 'dist/vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs'),window.OC.filePath('', '', 'dist/translation-DoG5ZELJ-BX7lsMna.chunk.mjs'),window.OC.filePath('', '', 'dist/mdi-CCQ2KgUK.chunk.mjs'),window.OC.filePath('', '', 'dist/index-DZkDsHXr.chunk.mjs'),window.OC.filePath('', '', 'dist/createElementId-DhjFt1I9-D95yphbb.chunk.mjs'),window.OC.filePath('', '', 'dist/logger-D3RVzcfQ-D08Lqsc3.chunk.mjs'),window.OC.filePath('', '', 'dist/logger-D3RVzcfQ-DWAMka5N.chunk.css'),window.OC.filePath('', '', 'dist/PencilOutline-CRype3Oz.chunk.mjs'),window.OC.filePath('', '', 'dist/index-CEzAKfoK.chunk.mjs'),window.OC.filePath('', '', 'dist/PencilOutline-CWUlo4XY.chunk.css'),window.OC.filePath('', '', 'dist/index-DFa5IGZB.chunk.css'),window.OC.filePath('', '', 'dist/NcNoteCard-CVhtNL04-xGysk9Jq.chunk.mjs'),window.OC.filePath('', '', 'dist/NcNoteCard-CVhtNL04-DZSuYX4-.chunk.css'),window.OC.filePath('', '', 'dist/NcPasswordField-djttkA5Q-B3cAwMPj.chunk.mjs'),window.OC.filePath('', '', 'dist/index-iNeUnB75.chunk.mjs'),window.OC.filePath('', '', 'dist/string_decoder-CSsspFHV.chunk.mjs'),window.OC.filePath('', '', 'dist/NcInputField-Bwsh2aHY-DY6YZAwi.chunk.mjs'),window.OC.filePath('', '', 'dist/NcInputField-Bwsh2aHY-B9DSDOEd.chunk.css'),window.OC.filePath('', '', 'dist/NcPasswordField-djttkA5Q-BCJ0LHSS.chunk.css'),window.OC.filePath('', '', 'dist/TrashCanOutline-BquAR0NR.chunk.mjs')])))=>i.map(i=>d[i]);
const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { D as DefaultType, g as getNavigation, V as View, C as Column, b as registerFileAction } from "./index-DiROoqva.chunk.mjs";
import { _ as __vitePreload, l as loadState } from "./index-CEzAKfoK.chunk.mjs";
import { t as translate } from "./translation-DoG5ZELJ-BX7lsMna.chunk.mjs";
import { c as cancelableClient } from "./index-iNeUnB75.chunk.mjs";
import { c as showSuccess, a as showError, s as showWarning, d as showConfirmation } from "./index-JpgrUA2Z-CDVhFt4l.chunk.mjs";
import { i as emit, a as getCurrentUser } from "./mdi-CCQ2KgUK.chunk.mjs";
import { a as addPasswordConfirmationInterceptors, P as PwdConfirmationMode } from "./index-ly_D7ZWO.chunk.mjs";
import { g as generateUrl, b as generateOcsUrl, e as generateRemoteUrl } from "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
import { s as spawnDialog } from "./index-DZkDsHXr.chunk.mjs";
import { a as defineAsyncComponent } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import { S as StorageStatus } from "./types-cvVeoaZM.chunk.mjs";
import { F as FileType, b as Folder, P as Permission } from "./public-SXOFh1vA.chunk.mjs";
import "./string_decoder-CSsspFHV.chunk.mjs";
import "./NcNoteCard-CVhtNL04-xGysk9Jq.chunk.mjs";
import "./logger-D3RVzcfQ-D08Lqsc3.chunk.mjs";
import "./NcPasswordField-djttkA5Q-B3cAwMPj.chunk.mjs";
import "./NcInputField-Bwsh2aHY-DY6YZAwi.chunk.mjs";
import "./PencilOutline-CRype3Oz.chunk.mjs";
const FolderNetworkSvg = '<svg xmlns="http://www.w3.org/2000/svg" id="mdi-folder-network-outline" viewBox="0 0 24 24"><path d="M15 20C15 19.45 14.55 19 14 19H13V17H19C20.11 17 21 16.11 21 15V7C21 5.9 20.11 5 19 5H13L11 3H5C3.9 3 3 3.9 3 5V15C3 16.11 3.9 17 5 17H11V19H10C9.45 19 9 19.45 9 20H2V22H9C9 22.55 9.45 23 10 23H14C14.55 23 15 22.55 15 22H22V20H15M5 15V7H19V15H5Z" /></svg>';
const LoginSvg = '<svg xmlns="http://www.w3.org/2000/svg" id="mdi-login" viewBox="0 0 24 24"><path d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7M20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z" /></svg>';
/*!
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
function isMissingAuthConfig(config) {
  if (config.status === void 0 || config.status === StorageStatus.Success) {
    return false;
  }
  return config.userProvided || config.authMechanism === "password::global::user";
}
/*!
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
function isNodeExternalStorage(node) {
  if (node.type === FileType.File) {
    return false;
  }
  const attributes = node.attributes;
  if (!attributes.scope || !attributes.backend) {
    return false;
  }
  return attributes.scope === "personal" || attributes.scope === "system";
}
addPasswordConfirmationInterceptors(cancelableClient);
async function setCredentials(node, login, password) {
  const configResponse = await cancelableClient.request({
    method: "PUT",
    url: generateUrl("apps/files_external/userglobalstorages/{id}", { id: node.id }),
    confirmPassword: PwdConfirmationMode.Strict,
    data: {
      backendOptions: { user: login, password }
    }
  });
  const config = configResponse.data;
  if (config.status !== StorageStatus.Success) {
    showError(translate("files_external", "Unable to update this external storage config. {statusMessage}", {
      statusMessage: config?.statusMessage || ""
    }));
    return null;
  }
  showSuccess(translate("files_external", "New configuration successfully saved"));
  node.attributes.config = config;
  emit("files:node:updated", node);
  return true;
}
const ACTION_CREDENTIALS_EXTERNAL_STORAGE = "credentials-external-storage";
const action$2 = {
  id: ACTION_CREDENTIALS_EXTERNAL_STORAGE,
  displayName: () => translate("files", "Enter missing credentials"),
  iconSvgInline: () => LoginSvg,
  enabled: ({ nodes }) => {
    if (nodes.length !== 1 || !nodes[0]) {
      return false;
    }
    const node = nodes[0];
    if (!isNodeExternalStorage(node)) {
      return false;
    }
    const config = node.attributes?.config || {};
    if (isMissingAuthConfig(config)) {
      return true;
    }
    return false;
  },
  async exec({ nodes }) {
    const { login, password } = await spawnDialog(defineAsyncComponent(() => __vitePreload(() => import("./CredentialsDialog-C2hULxX8.chunk.mjs"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]) : void 0, import.meta.url))) ?? {};
    if (login && password) {
      try {
        await setCredentials(nodes[0], login, password);
        showSuccess(translate("files_external", "Credentials successfully set"));
      } catch (error) {
        showError(translate("files_external", "Error while setting credentials: {error}", {
          error: error.message
        }));
      }
    }
    return null;
  },
  // Before openFolderAction
  order: -1e3,
  default: DefaultType.DEFAULT,
  inline: () => true
};
const AlertSvg = '<svg xmlns="http://www.w3.org/2000/svg" id="mdi-alert-circle" viewBox="0 0 24 24"><path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';
const rootPath = `/files/${getCurrentUser()?.uid}`;
function entryToFolder(ocsEntry) {
  const path = (ocsEntry.path + "/" + ocsEntry.name).replace(/^\//gm, "");
  return new Folder({
    id: ocsEntry.id,
    source: generateRemoteUrl("dav" + rootPath + "/" + path),
    root: rootPath,
    owner: getCurrentUser()?.uid || null,
    permissions: ocsEntry.config.status !== StorageStatus.Success ? Permission.NONE : ocsEntry?.permissions || Permission.READ,
    attributes: {
      displayName: path,
      ...ocsEntry
    }
  });
}
async function getContents() {
  const response = await cancelableClient.get(generateOcsUrl("apps/files_external/api/v1/mounts"));
  const contents = response.data.ocs.data.map(entryToFolder);
  return {
    folder: new Folder({
      id: 0,
      source: generateRemoteUrl("dav" + rootPath),
      root: rootPath,
      owner: getCurrentUser()?.uid || null,
      permissions: Permission.READ
    }),
    contents
  };
}
function getStatus(id, global = true) {
  const type = global ? "userglobalstorages" : "userstorages";
  return cancelableClient.get(generateUrl(`apps/files_external/${type}/${id}?testOnly=false`));
}
/*!
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
const action$1 = {
  id: "check-external-storage",
  displayName: () => "",
  iconSvgInline: () => "",
  enabled: ({ nodes }) => {
    return nodes.every((node) => isNodeExternalStorage(node) === true);
  },
  exec: async () => null,
  /**
   * Use this function to check the storage availability
   * We then update the node attributes directly.
   *
   * @param context - The action context
   * @param context.nodes - The node to render inline
   */
  async renderInline({ nodes }) {
    if (nodes.length !== 1 || !nodes[0]) {
      return null;
    }
    const node = nodes[0];
    const span = document.createElement("span");
    span.className = "files-list__row-status";
    span.innerHTML = translate("files_external", "Checking storage …");
    let config;
    try {
      const { data } = await getStatus(node.id, node.attributes.scope === "system");
      config = data;
      node.attributes.config = config;
      emit("files:node:updated", node);
      if (config.status !== StorageStatus.Success) {
        throw new Error(config?.statusMessage || translate("files_external", "There was an error with this external storage."));
      }
      span.remove();
    } catch (error) {
      if (error.response && !config) {
        showWarning(translate("files_external", "We were unable to check the external storage {basename}", {
          basename: node.basename
        }));
      }
      span.innerHTML = "";
      const isWarning = !config ? false : isMissingAuthConfig(config);
      const overlay = document.createElement("span");
      overlay.classList.add(`files-list__row-status--${isWarning ? "warning" : "error"}`);
      if (!isWarning) {
        span.innerHTML = AlertSvg;
        span.title = error.message;
      }
      span.prepend(overlay);
    }
    return span;
  },
  order: 10
};
/*!
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
const action = {
  id: "open-in-files-external-storage",
  displayName: ({ nodes }) => {
    const config = nodes?.[0]?.attributes?.config || { status: StorageStatus.Indeterminate };
    if (config.status !== StorageStatus.Success) {
      return translate("files_external", "Examine this faulty external storage configuration");
    }
    return translate("files", "Open in Files");
  },
  iconSvgInline: () => "",
  enabled: ({ view }) => view.id === "extstoragemounts",
  async exec({ nodes }) {
    const config = nodes[0]?.attributes?.config;
    if (config?.status !== StorageStatus.Success) {
      const redirect = await showConfirmation({
        name: translate("files_external", "External mount error"),
        text: translate("files_external", "There was an error with this external storage. Do you want to review this mount point config in the settings page?"),
        labelConfirm: translate("files_external", "Open settings"),
        labelReject: translate("files_external", "Ignore")
      });
      if (redirect === true) {
        const scope = getCurrentUser()?.isAdmin ? "admin" : "user";
        window.location.href = generateUrl(`/settings/${scope}/externalstorages`);
      }
      return null;
    }
    window.OCP.Files.Router.goToRoute(
      null,
      // use default route
      { view: "files" },
      { dir: nodes[0].path }
    );
    return null;
  },
  // Before openFolderAction
  order: -1e3,
  default: DefaultType.HIDDEN
};
const allowUserMounting = loadState("files_external", "allowUserMounting", false);
const Navigation = getNavigation();
Navigation.register(new View({
  id: "extstoragemounts",
  name: translate("files_external", "External storage"),
  caption: translate("files_external", "List of external storage."),
  emptyCaption: allowUserMounting ? translate("files_external", "There is no external storage configured. You can configure them in your Personal settings.") : translate("files_external", "There is no external storage configured and you don't have the permission to configure them."),
  emptyTitle: translate("files_external", "No external storage"),
  icon: FolderNetworkSvg,
  order: 30,
  columns: [
    new Column({
      id: "storage-type",
      title: translate("files_external", "Storage type"),
      render(node) {
        const backend = node.attributes?.backend || translate("files_external", "Unknown");
        const span = document.createElement("span");
        span.textContent = backend;
        return span;
      }
    }),
    new Column({
      id: "scope",
      title: translate("files_external", "Scope"),
      render(node) {
        const span = document.createElement("span");
        let scope = translate("files_external", "Personal");
        if (node.attributes?.scope === "system") {
          scope = translate("files_external", "System");
        }
        span.textContent = scope;
        return span;
      }
    })
  ],
  getContents
}));
registerFileAction(action$2);
registerFileAction(action$1);
registerFileAction(action);
//# sourceMappingURL=files_external-init.mjs.map
