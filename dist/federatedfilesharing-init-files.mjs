const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { c as cancelableClient, i as isAxiosError } from "./index-iNeUnB75.chunk.mjs";
import { b as showInfo, a as showError } from "./index-JpgrUA2Z-CDVhFt4l.chunk.mjs";
import { s as subscribe } from "./mdi-CCQ2KgUK.chunk.mjs";
import { a as _export_sfc, l as loadState } from "./index-CEzAKfoK.chunk.mjs";
import { t as translate } from "./translation-DoG5ZELJ-BX7lsMna.chunk.mjs";
import { g as generateUrl } from "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
import { a as NcDialog, s as spawnDialog } from "./index-DZkDsHXr.chunk.mjs";
import { b as defineComponent, h as computed, p as ref, i as createBlock, o as openBlock, w as withCtx, e as createBaseVNode, f as createCommentVNode, t as toDisplayString, n as normalizeClass } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import { N as NcPasswordField } from "./NcPasswordField-djttkA5Q-B3cAwMPj.chunk.mjs";
import { l as logger } from "./logger-HI62-qWN.chunk.mjs";
import "./string_decoder-CSsspFHV.chunk.mjs";
import "./NcNoteCard-CVhtNL04-xGysk9Jq.chunk.mjs";
import "./logger-D3RVzcfQ-D08Lqsc3.chunk.mjs";
import "./PencilOutline-CRype3Oz.chunk.mjs";
import "./NcInputField-Bwsh2aHY-DY6YZAwi.chunk.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RemoteShareDialog",
  props: {
    name: { type: String, required: true },
    owner: { type: String, required: true },
    remote: { type: String, required: true },
    passwordRequired: { type: Boolean, required: true }
  },
  emits: ["close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const password = ref("");
    const buttons = computed(() => [
      {
        label: translate("federatedfilesharing", "Cancel"),
        callback: () => emit("close", false)
      },
      {
        label: translate("federatedfilesharing", "Add remote share"),
        type: props.passwordRequired ? "submit" : void 0,
        variant: "primary",
        callback: () => emit("close", true, password.value)
      }
    ]);
    const __returned__ = { props, emit, password, buttons, get t() {
      return translate;
    }, get NcDialog() {
      return NcDialog;
    }, get NcPasswordField() {
      return NcPasswordField;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const remoteShareDialog__password = "_remoteShareDialog__password_1ccpy_2";
const style0 = {
  remoteShareDialog__password
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["NcDialog"], {
    buttons: $setup.buttons,
    isForm: $props.passwordRequired,
    name: $setup.t("federatedfilesharing", "Remote share"),
    onSubmit: _cache[1] || (_cache[1] = ($event) => $setup.emit("close", true, $setup.password))
  }, {
    default: withCtx(() => [
      createBaseVNode(
        "p",
        null,
        toDisplayString($setup.t("federatedfilesharing", "Do you want to add the remote share {name} from {owner}@{remote}?", { name: $props.name, owner: $props.owner, remote: $props.remote })),
        1
        /* TEXT */
      ),
      $props.passwordRequired ? (openBlock(), createBlock($setup["NcPasswordField"], {
        key: 0,
        modelValue: $setup.password,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.password = $event),
        class: normalizeClass(_ctx.$style.remoteShareDialog__password),
        label: $setup.t("federatedfilesharing", "Remote share password")
      }, null, 8, ["modelValue", "class", "label"])) : createCommentVNode("v-if", true)
    ]),
    _: 1
    /* STABLE */
  }, 8, ["buttons", "isForm", "name"]);
}
const cssModules = {
  "$style": style0
};
const RemoteShareDialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__cssModules", cssModules], ["__file", "/home/abolfazl/code/nextcloud/build/frontend/apps/federatedfilesharing/src/components/RemoteShareDialog.vue"]]);
async function showRemoteShareDialog(name, owner, remote, passwordRequired = false) {
  const [status, password] = await spawnDialog(RemoteShareDialog, {
    name,
    owner,
    remote,
    passwordRequired
  });
  if (passwordRequired && status) {
    return password;
  } else if (status) {
    return;
  } else {
    throw new Error("Dialog was cancelled");
  }
}
window.addEventListener("DOMContentLoaded", () => {
  processIncomingShareFromUrl();
  if (loadState("federatedfilesharing", "notificationsEnabled", true) !== true) {
    processSharesToConfirm();
  }
  subscribe("notifications:action:executed", ({ action, notification }) => {
    if (notification.app === "files_sharing" && notification.object_type === "remote_share" && action.type === "POST") {
      reloadFilesList();
    }
  });
});
function reloadFilesList() {
  if (!window?.OCP?.Files?.Router?.goToRoute) {
    window.location.reload();
    return;
  }
  window.OCP.Files.Router.goToRoute(
    null,
    { ...window.OCP.Files.Router.params, fileid: void 0 },
    { ...window.OCP.Files.Router.query, dir: "/", openfile: void 0 }
  );
}
function processIncomingShareFromUrl() {
  const params = window.OC.Util.History.parseUrlQuery();
  if (params.remote && params.token && params.name) {
    const callbackAddShare = (result, share) => {
      if (result === false) {
        return;
      }
      cancelableClient.post(
        generateUrl("apps/federatedfilesharing/askForFederatedShare"),
        {
          remote: share.remote,
          token: share.token,
          owner: share.owner,
          ownerDisplayName: share.ownerDisplayName || share.owner,
          name: share.name,
          password: share.password || ""
        }
      ).then(({ data }) => {
        if (Object.hasOwn(data, "legacyMount")) {
          reloadFilesList();
        } else {
          showInfo(data.message);
        }
      }).catch((error) => {
        logger.error("Error while processing incoming share", { error });
        if (isAxiosError(error) && error.response.data.message) {
          showError(error.response.data.message);
        } else {
          showError(translate("federatedfilesharing", "Incoming share could not be processed"));
        }
      });
    };
    location.hash = "";
    params.passwordProtected = parseInt(params.protected, 10) === 1;
    showAddExternalDialog(
      params,
      params.passwordProtected,
      callbackAddShare
    );
  }
}
async function processSharesToConfirm() {
  const { data: shares } = await cancelableClient.get(generateUrl("/apps/files_sharing/api/externalShares"));
  for (let index = 0; index < shares.length; ++index) {
    showAddExternalDialog(
      shares[index],
      false,
      function(result, share) {
        if (result === false) {
          cancelableClient.delete(generateUrl("/apps/files_sharing/api/externalShares/" + share.id));
        } else {
          cancelableClient.post(generateUrl("/apps/files_sharing/api/externalShares"), { id: share.id }).then(() => reloadFilesList());
        }
      }
    );
  }
}
function showAddExternalDialog(share, passwordProtected, callback) {
  const owner = share.ownerDisplayName || share.owner;
  const name = share.name;
  const remote = share.remote.replace(/^https?:\/\//, "").replace(/\/$/, "");
  showRemoteShareDialog(name, owner, remote, passwordProtected).then((password) => callback(true, { ...share, password })).catch(() => callback(false, share));
}
//# sourceMappingURL=federatedfilesharing-init-files.mjs.map
