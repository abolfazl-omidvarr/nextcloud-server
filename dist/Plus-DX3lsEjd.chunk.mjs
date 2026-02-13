const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { b as defineComponent, c as createElementBlock, o as openBlock, f as createCommentVNode, r as renderSlot, k as unref, g as createTextVNode, t as toDisplayString, e as createBaseVNode, z as mergeProps } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import { _ as _export_sfc, c as createElementId } from "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
import { a as _export_sfc$1 } from "./index-CEzAKfoK.chunk.mjs";
const _hoisted_1$1 = ["aria-labelledby"];
const _hoisted_2$1 = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
};
const _hoisted_3$1 = ["id"];
const _hoisted_4$1 = {
  key: 2,
  class: "empty-content__description"
};
const _hoisted_5 = {
  key: 3,
  class: "empty-content__action"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(__props) {
    const nameId = createElementId();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        "aria-labelledby": unref(nameId),
        class: "empty-content",
        role: "note"
      }, [
        _ctx.$slots.icon ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          renderSlot(_ctx.$slots, "icon", {}, void 0, true)
        ])) : createCommentVNode("", true),
        _ctx.name !== "" || _ctx.$slots.name ? (openBlock(), createElementBlock("div", {
          key: 1,
          id: unref(nameId),
          class: "empty-content__name"
        }, [
          renderSlot(_ctx.$slots, "name", {}, () => [
            createTextVNode(toDisplayString(_ctx.name), 1)
          ], true)
        ], 8, _hoisted_3$1)) : createCommentVNode("", true),
        _ctx.description !== "" || _ctx.$slots.description ? (openBlock(), createElementBlock("p", _hoisted_4$1, [
          renderSlot(_ctx.$slots, "description", {}, () => [
            createTextVNode(toDisplayString(_ctx.description), 1)
          ], true)
        ])) : createCommentVNode("", true),
        _ctx.$slots.action ? (openBlock(), createElementBlock("div", _hoisted_5, [
          renderSlot(_ctx.$slots, "action", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ], 8, _hoisted_1$1);
    };
  }
});
const NcEmptyContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b101d636"]]);
const _sfc_main = {
  name: "PlusIcon",
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
const _hoisted_3 = { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" };
const _hoisted_4 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon plus-icon",
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
const PlusIcon = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["render", _sfc_render], ["__file", "/home/abolfazl/code/nextcloud/node_modules/vue-material-design-icons/Plus.vue"]]);
export {
  NcEmptyContent as N,
  PlusIcon as P
};
//# sourceMappingURL=Plus-DX3lsEjd.chunk.mjs.map
