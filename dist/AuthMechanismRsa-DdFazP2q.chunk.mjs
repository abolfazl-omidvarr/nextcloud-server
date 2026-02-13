const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { b as defineComponent, q as mergeModels, s as useModel, i as createBlock, o as openBlock, M as resolveDynamicComponent, w as withCtx, g as createTextVNode, t as toDisplayString, v as watch, p as ref, c as createElementBlock, j as createVNode, F as Fragment, C as renderList, E as withDirectives, G as vShow } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import { c as cancelableClient } from "./index-iNeUnB75.chunk.mjs";
import { a as showError } from "./index-JpgrUA2Z-CDVhFt4l.chunk.mjs";
import { t as translate } from "./translation-DoG5ZELJ-BX7lsMna.chunk.mjs";
import { g as generateUrl } from "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
import { c as NcButton } from "./logger-D3RVzcfQ-D08Lqsc3.chunk.mjs";
import { N as NcSelect } from "./NcSelect-Czzsi3P_-DrnUjQ4_.chunk.mjs";
import { N as NcCheckboxRadioSwitch } from "./NcCheckboxRadioSwitch-BCSKF7Tk-CVZU7Pjt.chunk.mjs";
import { N as NcPasswordField } from "./NcPasswordField-djttkA5Q-B3cAwMPj.chunk.mjs";
import { _ as _sfc_main$2 } from "./TrashCanOutline-BquAR0NR.chunk.mjs";
import { C as ConfigurationType, a as ConfigurationFlag } from "./types-cvVeoaZM.chunk.mjs";
import { a as _export_sfc } from "./index-CEzAKfoK.chunk.mjs";
import { l as logger } from "./logger-CHMHherF.chunk.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ConfigurationEntry",
  props: /* @__PURE__ */ mergeModels({
    configKey: { type: String, required: true },
    configOption: { type: Object, required: true }
  }, {
    "modelValue": { type: [String, Boolean], ...{ default: "" } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const value = useModel(__props, "modelValue");
    const __returned__ = { value, get NcCheckboxRadioSwitch() {
      return NcCheckboxRadioSwitch;
    }, get NcPasswordField() {
      return NcPasswordField;
    }, get NcTextField() {
      return _sfc_main$2;
    }, get ConfigurationFlag() {
      return ConfigurationFlag;
    }, get ConfigurationType() {
      return ConfigurationType;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.configOption.type !== $setup.ConfigurationType.Boolean ? (openBlock(), createBlock(resolveDynamicComponent($props.configOption.type === $setup.ConfigurationType.Password ? $setup.NcPasswordField : $setup.NcTextField), {
    key: 0,
    modelValue: $setup.value,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value = $event),
    name: $props.configKey,
    required: !($props.configOption.flags & $setup.ConfigurationFlag.Optional),
    label: $props.configOption.value,
    title: $props.configOption.tooltip
  }, null, 8, ["modelValue", "name", "required", "label", "title"])) : (openBlock(), createBlock($setup["NcCheckboxRadioSwitch"], {
    key: 1,
    modelValue: $setup.value,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.value = $event),
    type: "switch",
    title: $props.configOption.tooltip
  }, {
    default: withCtx(() => [
      createTextVNode(
        toDisplayString($props.configOption.value),
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue", "title"]));
}
const ConfigurationEntry = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/abolfazl/code/nextcloud/build/frontend/apps/files_external/src/components/AddExternalStorageDialog/ConfigurationEntry.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AuthMechanismRsa",
  props: /* @__PURE__ */ mergeModels({
    authMechanism: { type: Object, required: true }
  }, {
    "modelValue": { type: Object, ...{ required: true } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const modelValue = useModel(__props, "modelValue");
    const keySize = ref();
    watch(keySize, () => {
      if (keySize.value) {
        modelValue.value.private_key = "";
        modelValue.value.public_key = "";
      }
    });
    async function generateKeys() {
      try {
        const { data } = await cancelableClient.post(generateUrl("/apps/files_external/ajax/public_key.php"), {
          keyLength: keySize.value
        });
        modelValue.value.private_key = data.data.private_key;
        modelValue.value.public_key = data.data.public_key;
      } catch (error) {
        logger.error("Error generating RSA key pair", { error });
        showError(translate("files_external", "Error generating key pair"));
      }
    }
    const __returned__ = { modelValue, keySize, generateKeys, get t() {
      return translate;
    }, get NcButton() {
      return NcButton;
    }, get NcSelect() {
      return NcSelect;
    }, ConfigurationEntry, get ConfigurationFlag() {
      return ConfigurationFlag;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($props.authMechanism.configuration, (configOption, configKey) => {
        return withDirectives((openBlock(), createBlock($setup["ConfigurationEntry"], {
          key: configOption.value,
          modelValue: $setup.modelValue[configKey],
          "onUpdate:modelValue": ($event) => $setup.modelValue[configKey] = $event,
          configKey,
          configOption
        }, null, 8, ["modelValue", "onUpdate:modelValue", "configKey", "configOption"])), [
          [vShow, !(configOption.flags & $setup.ConfigurationFlag.Hidden)]
        ]);
      }),
      128
      /* KEYED_FRAGMENT */
    )),
    createVNode($setup["NcSelect"], {
      modelValue: $setup.keySize,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.keySize = $event),
      clearable: false,
      inputLabel: $setup.t("files_external", "Key size"),
      options: [1024, 2048, 4096],
      required: ""
    }, null, 8, ["modelValue", "inputLabel"]),
    createVNode($setup["NcButton"], {
      disabled: !$setup.keySize,
      wide: "",
      onClick: $setup.generateKeys
    }, {
      default: withCtx(() => [
        createTextVNode(
          toDisplayString($setup.t("files_external", "Generate keys")),
          1
          /* TEXT */
        )
      ]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])
  ]);
}
const AuthMechanismRsa = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/abolfazl/code/nextcloud/build/frontend/apps/files_external/src/views/AuthMechanismRsa.vue"]]);
const AuthMechanismRsa$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AuthMechanismRsa
}, Symbol.toStringTag, { value: "Module" }));
export {
  AuthMechanismRsa$1 as A,
  ConfigurationEntry as C
};
//# sourceMappingURL=AuthMechanismRsa-DdFazP2q.chunk.mjs.map
