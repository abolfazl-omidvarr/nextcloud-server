const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import "./index-SdYoB8n_.chunk.mjs";
import { b as defineComponent, u as useSlots, c as createElementBlock, o as openBlock, e as createBaseVNode, f as createCommentVNode, r as renderSlot, g as createTextVNode, t as toDisplayString, n as normalizeClass } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import { _ as _export_sfc, c as createElementId } from "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
import { g as getLoggerBuilder } from "./mdi-CCQ2KgUK.chunk.mjs";
const _hoisted_1 = ["aria-describedby"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NcFormGroup",
  props: {
    label: { default: () => void 0 },
    description: { default: () => void 0 },
    hideLabel: { type: Boolean, default: false },
    hideDescription: { type: Boolean, default: false },
    noGap: { type: Boolean, default: false }
  },
  setup(__props) {
    const slots = useSlots();
    const id = `nc-form-group-${createElementId()}`;
    const descriptionId = `${id}-description`;
    const hasDescription = () => !!__props.description || !!slots.description;
    const getDescriptionId = () => hasDescription() ? descriptionId : void 0;
    const hasContentOnly = () => __props.hideLabel && (!hasDescription() || __props.hideDescription);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("fieldset", {
        class: normalizeClass([_ctx.$style.formGroup, { [_ctx.$style.formGroup_noGap]: _ctx.noGap }]),
        "aria-describedby": getDescriptionId()
      }, [
        createBaseVNode("legend", {
          class: normalizeClass([_ctx.$style.formGroup__label, { "hidden-visually": _ctx.hideLabel }])
        }, [
          renderSlot(_ctx.$slots, "label", {}, () => [
            createTextVNode(toDisplayString(_ctx.label || "⚠️ Missing label"), 1)
          ])
        ], 2),
        hasDescription() ? (openBlock(), createElementBlock("div", {
          key: 0,
          id: descriptionId,
          class: normalizeClass([_ctx.$style.formGroup__description, { "hidden-visually": _ctx.hideDescription }])
        }, [
          renderSlot(_ctx.$slots, "description", {}, () => [
            createTextVNode(toDisplayString(_ctx.description), 1)
          ])
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass([_ctx.$style.formGroup__content, { [_ctx.$style.formGroup__content_only]: hasContentOnly() }])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ], 10, _hoisted_1);
    };
  }
});
const formGroup = "_formGroup_9p8a1_20";
const formGroup_noGap = "_formGroup_noGap_9p8a1_24";
const formGroup__label = "_formGroup__label_9p8a1_28";
const formGroup__description = "_formGroup__description_9p8a1_34";
const formGroup__content = "_formGroup__content_9p8a1_39";
const formGroup__content_only = "_formGroup__content_only_9p8a1_45";
const style0 = {
  "material-design-icon": "_material-design-icon_9p8a1_12",
  formGroup,
  formGroup_noGap,
  formGroup__label,
  formGroup__description,
  formGroup__content,
  formGroup__content_only
};
const cssModules = {
  "$style": style0
};
const NcFormGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
/*!
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
const logger = getLoggerBuilder().setApp("encryption").build();
/*!
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
const InitStatus = Object.freeze({
  NotInitialized: "0",
  InitExecuted: "1",
  InitSuccessful: "2"
});
export {
  InitStatus as I,
  NcFormGroup as N,
  logger as l
};
//# sourceMappingURL=types-DOfPB-hv.chunk.mjs.map
