const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { b as defineComponent, h as computed, c as createElementBlock, o as openBlock, e as createBaseVNode, f as createCommentVNode, t as toDisplayString, z as mergeProps } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import { _ as _export_sfc } from "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
import { a as _export_sfc$1 } from "./index-CEzAKfoK.chunk.mjs";
const _hoisted_1$1 = ["aria-label"];
const _hoisted_2$1 = ["width", "height"];
const _hoisted_3$1 = ["fill"];
const _hoisted_4$1 = ["fill"];
const _hoisted_5 = { key: 0 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NcLoadingIcon",
  props: {
    appearance: { default: "auto" },
    name: { default: "" },
    size: { default: 20 }
  },
  setup(__props) {
    const props = __props;
    const colors = computed(() => {
      const colors2 = ["#777", "#CCC"];
      if (props.appearance === "light") {
        return colors2;
      } else if (props.appearance === "dark") {
        return colors2.reverse();
      }
      return ["var(--color-loading-light)", "var(--color-loading-dark)"];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        "aria-label": _ctx.name,
        role: "img",
        class: "material-design-icon loading-icon"
      }, [
        (openBlock(), createElementBlock("svg", {
          width: _ctx.size,
          height: _ctx.size,
          viewBox: "0 0 24 24"
        }, [
          createBaseVNode("path", {
            fill: colors.value[0],
            d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
          }, null, 8, _hoisted_3$1),
          createBaseVNode("path", {
            fill: colors.value[1],
            d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
          }, [
            _ctx.name ? (openBlock(), createElementBlock("title", _hoisted_5, toDisplayString(_ctx.name), 1)) : createCommentVNode("", true)
          ], 8, _hoisted_4$1)
        ], 8, _hoisted_2$1))
      ], 8, _hoisted_1$1);
    };
  }
});
const NcLoadingIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cf399190"]]);
const _sfc_main = {
  name: "PencilOutlineIcon",
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
const _hoisted_3 = { d: "M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" };
const _hoisted_4 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon pencil-outline-icon",
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
const PencilIcon = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["render", _sfc_render], ["__file", "/home/abolfazl/code/nextcloud/node_modules/vue-material-design-icons/PencilOutline.vue"]]);
export {
  NcLoadingIcon as N,
  PencilIcon as P
};
//# sourceMappingURL=PencilOutline-CRype3Oz.chunk.mjs.map
