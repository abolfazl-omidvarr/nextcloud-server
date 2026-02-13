const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { b as defineComponent, K as useCssVars, h as computed, c as createElementBlock, o as openBlock, e as createBaseVNode, n as normalizeClass, H as warn, L as inject, i as createBlock, w as withCtx, r as renderSlot, g as createTextVNode, t as toDisplayString, z as mergeProps, k as unref, M as resolveDynamicComponent } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import { p as purify } from "./translation-DoG5ZELJ-BX7lsMna.chunk.mjs";
import { _ as _export_sfc } from "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
import { g as getLoggerBuilder } from "./mdi-CCQ2KgUK.chunk.mjs";
var mdiAlert = "M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z";
var mdiAlertCircleOutline = "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z";
var mdiAlertDecagram = "M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M13,17H11V15H13V17M13,13H11V7H13V13Z";
var mdiArrowLeft = "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z";
var mdiArrowRight = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z";
var mdiCalendarBlank = "M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1";
var mdiCheck = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";
var mdiCheckboxMarkedCircle = "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";
var mdiChevronDown = "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z";
var mdiChevronLeft = "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";
var mdiChevronRight = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";
var mdiChevronUp = "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z";
var mdiClock = "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z";
var mdiClose = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
var mdiCloseCircleOutline = "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z";
var mdiContentCopy = "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z";
var mdiDotsHorizontal = "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z";
var mdiEye = "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z";
var mdiEyeOff = "M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z";
var mdiInformation = "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";
var mdiPause = "M14,19H18V5H14M6,19H10V5H6V19Z";
var mdiPlay = "M8,5.14V19.14L19,12.14L8,5.14Z";
var mdiUndo = "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z";
const _hoisted_1$1 = ["aria-hidden", "aria-label"];
const _hoisted_2$1 = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_3$1 = ["d"];
const _hoisted_4 = ["innerHTML"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NcIconSvgWrapper",
  props: {
    directional: { type: Boolean },
    inline: { type: Boolean },
    svg: { default: "" },
    name: { default: void 0 },
    path: { default: "" },
    size: { default: 20 }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "fb515064": iconSize.value
    }));
    const props = __props;
    const iconSize = computed(() => typeof props.size === "number" ? `${props.size}px` : props.size);
    const cleanSvg = computed(() => {
      if (!props.svg || props.path) {
        return;
      }
      const svg = purify.sanitize(props.svg);
      const svgDocument = new DOMParser().parseFromString(svg, "image/svg+xml");
      if (svgDocument.querySelector("parsererror")) {
        warn("SVG is not valid");
        return "";
      }
      if (svgDocument.documentElement.id) {
        svgDocument.documentElement.removeAttribute("id");
      }
      return svgDocument.documentElement.outerHTML;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        "aria-hidden": _ctx.name ? void 0 : "true",
        "aria-label": _ctx.name || void 0,
        class: normalizeClass(["icon-vue", {
          "icon-vue--directional": _ctx.directional,
          "icon-vue--inline": _ctx.inline
        }]),
        role: "img"
      }, [
        !cleanSvg.value ? (openBlock(), createElementBlock("svg", _hoisted_2$1, [
          createBaseVNode("path", { d: _ctx.path }, null, 8, _hoisted_3$1)
        ])) : (openBlock(), createElementBlock("span", {
          key: 1,
          innerHTML: cleanSvg.value
        }, null, 8, _hoisted_4))
      ], 10, _hoisted_1$1);
    };
  }
});
const NcIconSvgWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-aaedb1c3"]]);
/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const isBrowser = typeof document !== "undefined";
const noop = () => {
};
const isArray = Array.isArray;
function warn$1(msg) {
  const args = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + msg].concat(args));
}
function isSameRouteRecord(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false;
  for (const key in a) if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
  return true;
}
function isSameRouteLocationParamsValue(a, b) {
  return isArray(a) ? isEquivalentArray(a, b) : isArray(b) ? isEquivalentArray(b, a) : a === b;
}
function isEquivalentArray(a, b) {
  return isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
const routerKey = /* @__PURE__ */ Symbol("router");
const routeLocationKey = /* @__PURE__ */ Symbol("route location");
const [majorVersion] = window.OC?.config?.version?.split(".") ?? [];
const isLegacy = Number.parseInt(majorVersion ?? "32") < 32;
const NC_FORM_BOX_CONTEXT_KEY = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function useNcFormBox() {
  return inject(NC_FORM_BOX_CONTEXT_KEY, {
    isInFormBox: false,
    formBoxItemClass: void 0
  });
}
const _hoisted_1 = { class: "button-vue__wrapper" };
const _hoisted_2 = { class: "button-vue__icon" };
const _hoisted_3 = { class: "button-vue__text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NcButton",
  props: {
    alignment: { default: "center" },
    ariaLabel: { default: void 0 },
    disabled: { type: Boolean },
    download: { type: [String, Boolean], default: void 0 },
    href: { default: void 0 },
    pressed: { type: Boolean, default: void 0 },
    size: { default: "normal" },
    target: { default: "_self" },
    text: { default: void 0 },
    to: { default: void 0 },
    type: { default: "button" },
    variant: { default: "secondary" },
    wide: { type: Boolean }
  },
  emits: ["click", "update:pressed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { formBoxItemClass } = useNcFormBox();
    const hasVueRouterContext = inject(routerKey, null) !== null;
    const tag = computed(() => {
      if (hasVueRouterContext && props.to) {
        return "RouterLink";
      } else if (props.href) {
        return "a";
      } else {
        return "button";
      }
    });
    const hasPressedState = computed(() => tag.value === "button" && typeof props.pressed === "boolean");
    const variantWithPressed = computed(() => {
      if (props.pressed) {
        return "primary";
      }
      if (props.pressed === false && props.variant === "primary") {
        return "secondary";
      }
      return props.variant;
    });
    const isTertiaryVariant = computed(() => variantWithPressed.value.startsWith("tertiary"));
    const flexAlignment = computed(() => props.alignment.split("-")[0]);
    const isReverseAligned = computed(() => props.alignment.includes("-"));
    const getNcPopoverTriggerAttrs = inject("NcPopover:trigger:attrs", () => ({}), false);
    const ncPopoverTriggerAttrs = computed(() => getNcPopoverTriggerAttrs());
    const attrs = computed(() => {
      if (tag.value === "RouterLink") {
        return {
          to: props.to,
          activeClass: "active"
        };
      } else if (tag.value === "a") {
        return {
          href: props.href || "#",
          target: props.target,
          rel: "nofollow noreferrer noopener",
          download: props.download || void 0
        };
      } else if (tag.value === "button") {
        return {
          ...ncPopoverTriggerAttrs.value,
          "aria-pressed": props.pressed,
          type: props.type,
          disabled: props.disabled
        };
      }
      return void 0;
    });
    function onClick(event) {
      if (hasPressedState.value) {
        emit("update:pressed", !props.pressed);
      }
      emit("click", event);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(tag.value), mergeProps({
        class: ["button-vue", [
          `button-vue--size-${_ctx.size}`,
          {
            [`button-vue--${variantWithPressed.value}`]: variantWithPressed.value,
            "button-vue--tertiary": isTertiaryVariant.value,
            "button-vue--wide": _ctx.wide,
            [`button-vue--${flexAlignment.value}`]: flexAlignment.value !== "center",
            "button-vue--reverse": isReverseAligned.value,
            "button-vue--legacy": unref(isLegacy)
          },
          unref(formBoxItemClass)
        ]],
        "aria-label": _ctx.ariaLabel
      }, attrs.value, { onClick }), {
        default: withCtx(() => [
          createBaseVNode("span", _hoisted_1, [
            createBaseVNode("span", _hoisted_2, [
              renderSlot(_ctx.$slots, "icon", {}, void 0, true)
            ]),
            createBaseVNode("span", _hoisted_3, [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(_ctx.text), 1)
              ], true)
            ])
          ])
        ]),
        _: 3
      }, 16, ["class", "aria-label"]);
    };
  }
});
const NcButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e3b1a10b"]]);
const logger = getLoggerBuilder().detectUser().setApp("@nextcloud/vue").build();
export {
  mdiAlertDecagram as A,
  mdiPause as B,
  mdiPlay as C,
  mdiChevronLeft as D,
  mdiContentCopy as E,
  mdiChevronUp as F,
  mdiChevronDown as G,
  mdiClock as H,
  mdiCalendarBlank as I,
  NcIconSvgWrapper as N,
  mdiEyeOff as a,
  mdiEye as b,
  NcButton as c,
  mdiCheck as d,
  mdiAlertCircleOutline as e,
  mdiChevronRight as f,
  mdiCloseCircleOutline as g,
  mdiArrowLeft as h,
  isLegacy as i,
  mdiDotsHorizontal as j,
  mdiArrowRight as k,
  logger as l,
  mdiClose as m,
  mdiUndo as n,
  routeLocationKey as o,
  isBrowser as p,
  isRouteLocation as q,
  routerKey as r,
  noop as s,
  isSameRouteRecord as t,
  isSameRouteLocationParams as u,
  isArray as v,
  warn$1 as w,
  mdiAlert as x,
  mdiInformation as y,
  mdiCheckboxMarkedCircle as z
};
//# sourceMappingURL=logger-D3RVzcfQ-D08Lqsc3.chunk.mjs.map
