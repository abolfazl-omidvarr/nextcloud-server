const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { b as defineComponent, A as onMounted, B as onUnmounted, c as createElementBlock, o as openBlock, r as renderSlot, p as ref, i as createBlock, w as withCtx, e as createBaseVNode, f as createCommentVNode, t as toDisplayString, F as Fragment, C as renderList, j as createVNode, n as normalizeClass, g as createTextVNode, m as createApp } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import { h as getRequestToken } from "./mdi-CCQ2KgUK.chunk.mjs";
import { l as loadState, a as _export_sfc$1 } from "./index-CEzAKfoK.chunk.mjs";
import { t as translate } from "./translation-DoG5ZELJ-BX7lsMna.chunk.mjs";
import { c as NcButton } from "./logger-D3RVzcfQ-D08Lqsc3.chunk.mjs";
/* empty css                                        */
import { _ as _export_sfc } from "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
import { N as NcNoteCard } from "./NcNoteCard-CVhtNL04-xGysk9Jq.chunk.mjs";
import { N as NcPasswordField } from "./NcPasswordField-djttkA5Q-B3cAwMPj.chunk.mjs";
import "./index-iNeUnB75.chunk.mjs";
import "./string_decoder-CSsspFHV.chunk.mjs";
import "./NcInputField-Bwsh2aHY-DY6YZAwi.chunk.mjs";
const _hoisted_1$1 = { id: "guest-content-vue" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NcGuestContent",
  setup(__props) {
    onMounted(() => {
      document.getElementById("content").classList.add("nc-guest-content");
    });
    onUnmounted(() => {
      document.getElementById("content").classList.remove("nc-guest-content");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
const NcGuestContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-26ad2498"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RenewPassword",
  setup(__props, { expose: __expose }) {
    __expose();
    const renewPasswordParameters = loadState("user_ldap", "renewPasswordParameters");
    const hasInvalidPassword = renewPasswordParameters.errors.includes("invalidpassword");
    const requestToken = getRequestToken();
    const isRenewing = ref(false);
    function onSubmit() {
      isRenewing.value = true;
    }
    const __returned__ = { renewPasswordParameters, hasInvalidPassword, requestToken, isRenewing, onSubmit, get t() {
      return translate;
    }, get NcButton() {
      return NcButton;
    }, get NcGuestContent() {
      return NcGuestContent;
    }, get NcNoteCard() {
      return NcNoteCard;
    }, get NcPasswordField() {
      return NcPasswordField;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const renewPassword__actions = "_renewPassword__actions_1bcqw_2";
const style0 = {
  renewPassword__actions
};
const _hoisted_1 = ["action"];
const _hoisted_2 = ["value"];
const _hoisted_3 = ["value"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["NcGuestContent"], null, {
    default: withCtx(() => [
      createBaseVNode(
        "h2",
        null,
        toDisplayString($setup.t("user_ldap", "Please renew your password")),
        1
        /* TEXT */
      ),
      $setup.renewPasswordParameters.messages.length ? (openBlock(), createBlock($setup["NcNoteCard"], {
        key: 0,
        type: "warning"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($setup.renewPasswordParameters.messages, (message, index) => {
              return openBlock(), createElementBlock(
                "p",
                { key: index },
                toDisplayString(message),
                1
                /* TEXT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      })) : createCommentVNode("v-if", true),
      $setup.renewPasswordParameters.errors.includes("internalexception") ? (openBlock(), createBlock($setup["NcNoteCard"], {
        key: 1,
        heading: $setup.t("user_ldap", "An internal error occurred."),
        text: $setup.t("user_ldap", "Please try again or contact your administrator."),
        type: "warning"
      }, null, 8, ["heading", "text"])) : createCommentVNode("v-if", true),
      createBaseVNode("form", {
        method: "post",
        name: "renewpassword",
        action: $setup.renewPasswordParameters.tryRenewPasswordUrl,
        onSubmit: $setup.onSubmit
      }, [
        createVNode($setup["NcPasswordField"], {
          autofocus: "",
          autocomplete: "off",
          autocapitalize: "off",
          error: $setup.hasInvalidPassword,
          helperText: $setup.hasInvalidPassword ? $setup.t("user_ldap", "Wrong password.") : "",
          label: $setup.t("user_ldap", "Current password"),
          required: "",
          spellcheck: "false",
          name: "oldPassword"
        }, null, 8, ["error", "helperText", "label"]),
        createVNode($setup["NcPasswordField"], {
          autofocus: "",
          autocomplete: "off",
          autocapitalize: "off",
          label: $setup.t("user_ldap", "New password"),
          required: "",
          spellcheck: "false",
          name: "newPassword"
        }, null, 8, ["label"]),
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.$style.renewPassword__actions)
          },
          [
            createVNode($setup["NcButton"], {
              href: $setup.renewPasswordParameters.cancelRenewUrl,
              variant: "error"
            }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString($setup.t("user_ldap", "Cancel")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["href"]),
            createVNode($setup["NcButton"], {
              disabled: $setup.isRenewing,
              type: "submit",
              variant: "primary"
            }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString($setup.isRenewing ? $setup.t("user_ldap", "Renewing…") : $setup.t("user_ldap", "Renew password")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["disabled"])
          ],
          2
          /* CLASS */
        ),
        createBaseVNode("input", {
          type: "hidden",
          name: "user",
          value: $setup.renewPasswordParameters.user
        }, null, 8, _hoisted_2),
        createBaseVNode("input", {
          type: "hidden",
          name: "requesttoken",
          value: $setup.requestToken
        }, null, 8, _hoisted_3)
      ], 40, _hoisted_1)
    ]),
    _: 1
    /* STABLE */
  });
}
const cssModules = {
  "$style": style0
};
const RenewPasswordView = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["render", _sfc_render], ["__cssModules", cssModules], ["__file", "/home/abolfazl/code/nextcloud/build/frontend/apps/user_ldap/src/views/RenewPassword.vue"]]);
const app = createApp(RenewPasswordView);
app.mount("#user_ldap-renewPassword");
//# sourceMappingURL=user_ldap-renewPassword.mjs.map
