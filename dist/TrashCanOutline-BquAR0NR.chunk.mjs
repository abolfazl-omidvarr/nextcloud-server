const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { b as defineComponent, q as mergeModels, s as useModel, x as useTemplateRef, h as computed, i as createBlock, o as openBlock, y as createSlots, w as withCtx, r as renderSlot, k as unref, z as mergeProps, c as createElementBlock, e as createBaseVNode, f as createCommentVNode, t as toDisplayString } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import { N as NcIconSvgWrapper, k as mdiArrowRight, n as mdiUndo, m as mdiClose } from "./logger-D3RVzcfQ-D08Lqsc3.chunk.mjs";
import { r as register, t } from "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
import { N as NcInputField } from "./NcInputField-Bwsh2aHY-DY6YZAwi.chunk.mjs";
import { a as _export_sfc } from "./index-CEzAKfoK.chunk.mjs";
register();
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NcTextField",
  props: /* @__PURE__ */ mergeModels({
    class: {},
    inputClass: {},
    id: {},
    label: {},
    labelOutside: { type: Boolean },
    type: {},
    placeholder: {},
    showTrailingButton: { type: Boolean },
    trailingButtonLabel: { default: void 0 },
    success: { type: Boolean },
    error: { type: Boolean },
    helperText: {},
    disabled: { type: Boolean },
    pill: { type: Boolean },
    trailingButtonIcon: { default: "close" }
  }, {
    "modelValue": { default: "" },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const modelValue = useModel(__props, "modelValue");
    const props = __props;
    __expose({
      focus,
      select
    });
    const inputFieldInstance = useTemplateRef("inputField");
    const defaultTrailingButtonLabels = {
      arrowEnd: t("Save changes"),
      close: t("Clear text"),
      undo: t("Undo changes")
    };
    const NcInputFieldPropNames = new Set(Object.keys(NcInputField.props));
    const propsToForward = computed(() => {
      const sharedProps = Object.fromEntries(Object.entries(props).filter(([key]) => NcInputFieldPropNames.has(key)));
      sharedProps.trailingButtonLabel ??= defaultTrailingButtonLabels[props.trailingButtonIcon];
      return sharedProps;
    });
    function focus(options) {
      inputFieldInstance.value.focus(options);
    }
    function select() {
      inputFieldInstance.value.select();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(NcInputField), mergeProps(propsToForward.value, {
        ref: "inputField",
        modelValue: modelValue.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event)
      }), createSlots({ _: 2 }, [
        !!_ctx.$slots.icon ? {
          name: "icon",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "icon")
          ]),
          key: "0"
        } : void 0,
        _ctx.type !== "search" ? {
          name: "trailing-button-icon",
          fn: withCtx(() => [
            _ctx.trailingButtonIcon === "arrowEnd" ? (openBlock(), createBlock(unref(NcIconSvgWrapper), {
              key: 0,
              directional: "",
              path: unref(mdiArrowRight)
            }, null, 8, ["path"])) : (openBlock(), createBlock(unref(NcIconSvgWrapper), {
              key: 1,
              path: _ctx.trailingButtonIcon === "undo" ? unref(mdiUndo) : unref(mdiClose)
            }, null, 8, ["path"]))
          ]),
          key: "1"
        } : void 0
      ]), 1040, ["modelValue"]);
    };
  }
});
const _sfc_main = {
  name: "TrashCanOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
const _hoisted_1 = ["aria-hidden", "aria-label"];
const _hoisted_2 = ["fill", "width", "height"];
const _hoisted_3 = { d: "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" };
const _hoisted_4 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon trash-can-outline-icon",
    role: "img",
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
  }), [
    (openBlock(), createElementBlock("svg", {
      fill: $props.fillColor,
      class: "material-design-icon__svg",
      width: $props.size,
      height: $props.size,
      viewBox: "0 0 24 24"
    }, [
      createBaseVNode("path", _hoisted_3, [
        $props.title ? (openBlock(), createElementBlock(
          "title",
          _hoisted_4,
          toDisplayString($props.title),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true)
      ])
    ], 8, _hoisted_2))
  ], 16, _hoisted_1);
}
const Delete = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/abolfazl/code/nextcloud/node_modules/vue-material-design-icons/TrashCanOutline.vue"]]);
export {
  Delete as D,
  _sfc_main$1 as _
};
//# sourceMappingURL=TrashCanOutline-BquAR0NR.chunk.mjs.map
