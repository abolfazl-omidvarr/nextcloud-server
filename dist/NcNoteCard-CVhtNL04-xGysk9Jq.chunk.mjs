const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { r as routerKey, o as routeLocationKey, p as isBrowser, q as isRouteLocation, s as noop, w as warn$1, t as isSameRouteRecord, u as isSameRouteLocationParams, v as isArray, N as NcIconSvgWrapper, i as isLegacy, x as mdiAlert, y as mdiInformation, z as mdiCheckboxMarkedCircle, A as mdiAlertDecagram } from "./logger-D3RVzcfQ-D08Lqsc3.chunk.mjs";
import { b as defineComponent, N as reactive, L as inject, h as computed, $ as h, a8 as getCurrentInstance, _ as watchEffect, k as unref, c as createElementBlock, o as openBlock, r as renderSlot, e as createBaseVNode, j as createVNode, n as normalizeClass, f as createCommentVNode, t as toDisplayString } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import { _ as _export_sfc } from "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
function useLink(props) {
  const router = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  let hasPrevious = false;
  let previousTo = null;
  const route = computed(() => {
    const to = unref(props.to);
    if (!hasPrevious || to !== previousTo) {
      if (!isRouteLocation(to)) if (hasPrevious) warn$1(`Invalid value for prop "to" in useLink()
- to:`, to, `
- previous to:`, previousTo, `
- props:`, props);
      else warn$1(`Invalid value for prop "to" in useLink()
- to:`, to, `
- props:`, props);
      previousTo = to;
      hasPrevious = true;
    }
    return router.resolve(to);
  });
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length) return -1;
    const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1) return index;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e = {}) {
    if (guardEvent(e)) {
      const p = router[unref(props.replace) ? "replace" : "push"](unref(props.to)).catch(noop);
      if (props.viewTransition && typeof document !== "undefined" && "startViewTransition" in document) document.startViewTransition(() => p);
      return p;
    }
    return Promise.resolve();
  }
  if (isBrowser) {
    const instance = getCurrentInstance();
    if (instance) {
      const linkContextDevtools = {
        route: route.value,
        isActive: isActive.value,
        isExactActive: isExactActive.value,
        error: null
      };
      instance.__vrl_devtools = instance.__vrl_devtools || [];
      instance.__vrl_devtools.push(linkContextDevtools);
      watchEffect(() => {
        linkContextDevtools.route = route.value;
        linkContextDevtools.isActive = isActive.value;
        linkContextDevtools.isExactActive = isExactActive.value;
        linkContextDevtools.error = isRouteLocation(unref(props.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
function preferSingleVNode(vnodes) {
  return vnodes.length === 1 ? vnodes[0] : vnodes;
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    },
    viewTransition: Boolean
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && preferSingleVNode(slots.default(link));
      return props.custom ? children : h("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
  if (e.defaultPrevented) return;
  if (e.button !== void 0 && e.button !== 0) return;
  if (e.currentTarget && e.currentTarget.getAttribute) {
    const target = e.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target)) return;
  }
  if (e.preventDefault) e.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue) return false;
    } else if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i])) return false;
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const _hoisted_1 = ["role"];
const _hoisted_2 = {
  key: 0,
  class: "notecard__heading"
};
const _hoisted_3 = { class: "notecard__text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NcNoteCard",
  props: {
    heading: { default: void 0 },
    showAlert: { type: Boolean },
    text: { default: void 0 },
    type: { default: "warning" }
  },
  setup(__props) {
    const props = __props;
    const shouldShowAlert = computed(() => props.showAlert || props.type === "error");
    const iconPath = computed(() => {
      switch (props.type) {
        case "error":
          return mdiAlertDecagram;
        case "success":
          return mdiCheckboxMarkedCircle;
        case "info":
          return mdiInformation;
        case "warning":
        default:
          return mdiAlert;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["notecard", {
          [`notecard--${_ctx.type}`]: _ctx.type,
          "notecard--legacy": unref(isLegacy)
        }]),
        role: shouldShowAlert.value ? "alert" : "note"
      }, [
        renderSlot(_ctx.$slots, "icon", {}, () => [
          createVNode(unref(NcIconSvgWrapper), {
            path: iconPath.value,
            class: normalizeClass(["notecard__icon", { "notecard__icon--heading": _ctx.heading }]),
            inline: ""
          }, null, 8, ["path", "class"])
        ], true),
        createBaseVNode("div", null, [
          _ctx.heading ? (openBlock(), createElementBlock("p", _hoisted_2, toDisplayString(_ctx.heading), 1)) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default", {}, () => [
            createBaseVNode("p", _hoisted_3, toDisplayString(_ctx.text), 1)
          ], true)
        ])
      ], 10, _hoisted_1);
    };
  }
});
const NcNoteCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7e4656f9"]]);
export {
  NcNoteCard as N,
  RouterLink as R
};
//# sourceMappingURL=NcNoteCard-CVhtNL04-xGysk9Jq.chunk.mjs.map
