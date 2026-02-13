const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { b as defineComponent, p as ref, i as createBlock, o as openBlock, w as withCtx, f as createCommentVNode, j as createVNode } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import { t as translate } from "./translation-DoG5ZELJ-BX7lsMna.chunk.mjs";
import { a as NcDialog } from "./index-DZkDsHXr.chunk.mjs";
import { N as NcNoteCard } from "./NcNoteCard-CVhtNL04-xGysk9Jq.chunk.mjs";
import { N as NcPasswordField } from "./NcPasswordField-djttkA5Q-B3cAwMPj.chunk.mjs";
import { _ as _sfc_main$1 } from "./TrashCanOutline-BquAR0NR.chunk.mjs";
import { a as _export_sfc } from "./index-CEzAKfoK.chunk.mjs";
import "./mdi-CCQ2KgUK.chunk.mjs";
import "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
import "./logger-D3RVzcfQ-D08Lqsc3.chunk.mjs";
import "./PencilOutline-CRype3Oz.chunk.mjs";
import "./index-iNeUnB75.chunk.mjs";
import "./string_decoder-CSsspFHV.chunk.mjs";
import "./NcInputField-Bwsh2aHY-DY6YZAwi.chunk.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CredentialsDialog",
  emits: ["close"],
  setup(__props, { expose: __expose }) {
    __expose();
    const login = ref("");
    const password = ref("");
    const dialogButtons = [{
      label: translate("files_external", "Confirm"),
      type: "submit",
      variant: "primary"
    }];
    const __returned__ = { login, password, dialogButtons, get t() {
      return translate;
    }, get NcDialog() {
      return NcDialog;
    }, get NcNoteCard() {
      return NcNoteCard;
    }, get NcPasswordField() {
      return NcPasswordField;
    }, get NcTextField() {
      return _sfc_main$1;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["NcDialog"], {
    buttons: $setup.dialogButtons,
    class: "external-storage-auth",
    closeOnClickOutside: "",
    "data-cy-external-storage-auth": "",
    isForm: "",
    name: $setup.t("files_external", "Storage credentials"),
    outTransition: "",
    onSubmit: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("close", { login: $setup.login, password: $setup.password })),
    "onUpdate:open": _cache[3] || (_cache[3] = ($event) => _ctx.$emit("close"))
  }, {
    default: withCtx(() => [
      createCommentVNode(" Header "),
      createVNode($setup["NcNoteCard"], {
        class: "external-storage-auth__header",
        text: $setup.t("files_external", "To access the storage, you need to provide the authentication credentials."),
        type: "info"
      }, null, 8, ["text"]),
      createCommentVNode(" Login "),
      createVNode($setup["NcTextField"], {
        modelValue: $setup.login,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.login = $event),
        autofocus: "",
        class: "external-storage-auth__login",
        "data-cy-external-storage-auth-dialog-login": "",
        label: $setup.t("files_external", "Login"),
        placeholder: $setup.t("files_external", "Enter the storage login"),
        minlength: "2",
        name: "login",
        required: ""
      }, null, 8, ["modelValue", "label", "placeholder"]),
      createCommentVNode(" Password "),
      createVNode($setup["NcPasswordField"], {
        modelValue: $setup.password,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.password = $event),
        class: "external-storage-auth__password",
        "data-cy-external-storage-auth-dialog-password": "",
        label: $setup.t("files_external", "Password"),
        placeholder: $setup.t("files_external", "Enter the storage password"),
        name: "password",
        required: ""
      }, null, 8, ["modelValue", "label", "placeholder"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["name"]);
}
const CredentialsDialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/abolfazl/code/nextcloud/build/frontend/apps/files_external/src/views/CredentialsDialog.vue"]]);
export {
  CredentialsDialog as default
};
//# sourceMappingURL=CredentialsDialog-C2hULxX8.chunk.mjs.map
