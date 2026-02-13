const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { b as defineComponent, u as useSlots, h as computed, c as createElementBlock, o as openBlock, f as createCommentVNode, e as createBaseVNode, i as createBlock, r as renderSlot, g as createTextVNode, t as toDisplayString, w as withCtx, j as createVNode, k as unref, n as normalizeClass } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import { N as NcIconSvgWrapper, m as mdiClose } from "./logger-D3RVzcfQ-D08Lqsc3.chunk.mjs";
import { N as NcActionButton } from "./NcActionButton-pKOSrlGE-By2YA-_F.chunk.mjs";
import { N as NcActions } from "./index-DZkDsHXr.chunk.mjs";
import { r as register, t, _ as _export_sfc } from "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
register();
const _hoisted_1 = {
  key: 0,
  class: "nc-chip__icon"
};
const _hoisted_2 = { class: "nc-chip__text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NcChip",
  props: {
    ariaLabelClose: { default: t("Close") },
    actionsContainer: { default: "body" },
    text: { default: "" },
    iconPath: { default: void 0 },
    iconSvg: { default: void 0 },
    noClose: { type: Boolean },
    variant: { default: "secondary" }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const slots = useSlots();
    const canClose = computed(() => !props.noClose);
    const hasActions = () => !!slots.actions;
    const hasIcon = () => Boolean(props.iconPath || props.iconSvg || !!slots.icon);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["nc-chip", {
          [`nc-chip--${_ctx.variant}`]: true,
          "nc-chip--no-actions": _ctx.noClose && !hasActions(),
          "nc-chip--no-icon": !hasIcon()
        }])
      }, [
        hasIcon() ? (openBlock(), createElementBlock("span", _hoisted_1, [
          renderSlot(_ctx.$slots, "icon", {}, () => [
            _ctx.iconPath || _ctx.iconSvg ? (openBlock(), createBlock(NcIconSvgWrapper, {
              key: 0,
              inline: "",
              path: _ctx.iconPath,
              svg: _ctx.iconPath ? void 0 : _ctx.iconSvg,
              size: 18
            }, null, 8, ["path", "svg"])) : createCommentVNode("", true)
          ], true)
        ])) : createCommentVNode("", true),
        createBaseVNode("span", _hoisted_2, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.text), 1)
          ], true)
        ]),
        canClose.value || hasActions() ? (openBlock(), createBlock(NcActions, {
          key: 1,
          class: "nc-chip__actions",
          container: _ctx.actionsContainer,
          "force-menu": !canClose.value,
          variant: "tertiary-no-background"
        }, {
          default: withCtx(() => [
            canClose.value ? (openBlock(), createBlock(NcActionButton, {
              key: 0,
              "close-after-click": "",
              onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
            }, {
              icon: withCtx(() => [
                createVNode(NcIconSvgWrapper, {
                  path: unref(mdiClose),
                  size: 20
                }, null, 8, ["path"])
              ]),
              default: withCtx(() => [
                createTextVNode(" " + toDisplayString(_ctx.ariaLabelClose), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "actions", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["container", "force-menu"])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const NcChip = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2aa1d7ea"]]);
export {
  NcChip as N
};
//# sourceMappingURL=NcChip-D8tGFzRl-CkdhiclE.chunk.mjs.map
