const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { l as resolveComponent, i as createBlock, o as openBlock, w as withCtx, j as createVNode, g as createTextVNode, t as toDisplayString, m as createApp } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import { c as cancelableClient } from "./index-iNeUnB75.chunk.mjs";
import { a as showError } from "./index-JpgrUA2Z-CDVhFt4l.chunk.mjs";
import { a as _export_sfc, l as loadState } from "./index-CEzAKfoK.chunk.mjs";
import { t as translate } from "./translation-DoG5ZELJ-BX7lsMna.chunk.mjs";
import { c as confirmPassword } from "./index-ly_D7ZWO.chunk.mjs";
import { b as generateOcsUrl } from "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
import { N as NcCheckboxRadioSwitch } from "./NcCheckboxRadioSwitch-BCSKF7Tk-CVZU7Pjt.chunk.mjs";
import { N as NcSettingsSection } from "./ContentCopy-B6NO0ksw.chunk.mjs";
import { g as getLoggerBuilder } from "./mdi-CCQ2KgUK.chunk.mjs";
import "./string_decoder-CSsspFHV.chunk.mjs";
import "./index-DZkDsHXr.chunk.mjs";
import "./logger-D3RVzcfQ-D08Lqsc3.chunk.mjs";
import "./PencilOutline-CRype3Oz.chunk.mjs";
import "./NcNoteCard-CVhtNL04-xGysk9Jq.chunk.mjs";
import "./NcPasswordField-djttkA5Q-B3cAwMPj.chunk.mjs";
import "./NcInputField-Bwsh2aHY-DY6YZAwi.chunk.mjs";
const logger = getLoggerBuilder().detectLogLevel().setApp("sharebymail").build();
const _sfc_main = {
  name: "AdminSettings",
  components: {
    NcCheckboxRadioSwitch,
    NcSettingsSection
  },
  setup() {
    return { t: translate };
  },
  data() {
    return {
      sendPasswordMail: loadState("sharebymail", "sendPasswordMail"),
      replyToInitiator: loadState("sharebymail", "replyToInitiator")
    };
  },
  watch: {
    sendPasswordMail(newValue) {
      this.update("sendpasswordmail", newValue);
    },
    replyToInitiator(newValue) {
      this.update("replyToInitiator", newValue);
    }
  },
  methods: {
    async update(key, value) {
      await confirmPassword();
      const url = generateOcsUrl("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}", {
        appId: "sharebymail",
        key
      });
      const stringValue = value ? "yes" : "no";
      try {
        const { data } = await cancelableClient.post(url, {
          value: stringValue
        });
        this.handleResponse({
          status: data.ocs?.meta?.status
        });
      } catch (e) {
        this.handleResponse({
          errorMessage: translate("sharebymail", "Unable to update share by mail config"),
          error: e
        });
      }
    },
    async handleResponse({ status, errorMessage, error }) {
      if (status !== "ok") {
        showError(errorMessage);
        logger.error(errorMessage, { error });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NcCheckboxRadioSwitch = resolveComponent("NcCheckboxRadioSwitch");
  const _component_NcSettingsSection = resolveComponent("NcSettingsSection");
  return openBlock(), createBlock(_component_NcSettingsSection, {
    name: $setup.t("sharebymail", "Share by mail"),
    description: $setup.t("sharebymail", "Allows people to share a personalized link to a file or folder by putting in an email address.")
  }, {
    default: withCtx(() => [
      createVNode(_component_NcCheckboxRadioSwitch, {
        modelValue: $data.sendPasswordMail,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.sendPasswordMail = $event),
        type: "switch"
      }, {
        default: withCtx(() => [
          createTextVNode(
            toDisplayString($setup.t("sharebymail", "Send password by mail")),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      createVNode(_component_NcCheckboxRadioSwitch, {
        modelValue: $data.replyToInitiator,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.replyToInitiator = $event),
        type: "switch"
      }, {
        default: withCtx(() => [
          createTextVNode(
            toDisplayString($setup.t("sharebymail", "Reply to initiator")),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["name", "description"]);
}
const AdminSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/abolfazl/code/nextcloud/build/frontend/apps/sharebymail/src/components/AdminSettings.vue"]]);
const app = createApp(AdminSettings);
app.mount("#vue-admin-sharebymail");
//# sourceMappingURL=sharebymail-admin-settings.mjs.map
