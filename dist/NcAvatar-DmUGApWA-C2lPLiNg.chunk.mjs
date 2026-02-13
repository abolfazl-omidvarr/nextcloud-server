const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { v as getBuilder, a as getCurrentUser, u as unsubscribe, s as subscribe } from "./mdi-CCQ2KgUK.chunk.mjs";
import { c as cancelableClient } from "./index-iNeUnB75.chunk.mjs";
import { _ as _export_sfc, l as getBaseUrl, h as getRootUrl, g as generateUrl, r as register, m as t10, b as generateOcsUrl, t } from "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
import { c as NC_ACTIONS_IS_SEMANTIC_MENU, e as createSharedComposable, g as checkIfDarkTheme, h as useMutationObserver, i as usePreferredDark, o as onClickOutside, N as NcActions, I as IconDotsHorizontal } from "./index-DZkDsHXr.chunk.mjs";
import { c as createElementBlock, o as openBlock, e as createBaseVNode, r as renderSlot, f as createCommentVNode, J as normalizeStyle, n as normalizeClass, t as toDisplayString, L as inject, h as computed, V as toValue, p as ref, v as watch, W as readonly, b as defineComponent, $ as h$1, l as resolveComponent, a0 as resolveDirective, E as withDirectives, i as createBlock, w as withCtx, y as createSlots, j as createVNode, F as Fragment, C as renderList, M as resolveDynamicComponent, z as mergeProps, g as createTextVNode } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import { l as logger, N as NcIconSvgWrapper, c as NcButton } from "./logger-D3RVzcfQ-D08Lqsc3.chunk.mjs";
import { g as generatePalette } from "./colors-Go3zmZRD-CRyYiZ-p.chunk.mjs";
import "./translation-DoG5ZELJ-BX7lsMna.chunk.mjs";
import { g as getCapabilities } from "./index-CEzAKfoK.chunk.mjs";
import { N as NcUserStatusIcon, g as getUserStatusText } from "./NcUserStatusIcon-CGEf7fej-CB09VdBp.chunk.mjs";
import { a as ActionTextMixin, N as NcActionButton } from "./NcActionButton-pKOSrlGE-By2YA-_F.chunk.mjs";
import { a as NcActionRouter, N as NcActionLink } from "./NcDateTime.vue_vue_type_script_setup_true_lang-BhB8yA4U-3Cg9SqZ9.chunk.mjs";
import { N as NcLoadingIcon } from "./PencilOutline-CRype3Oz.chunk.mjs";
const _sfc_main$1 = {
  name: "NcActionText",
  mixins: [ActionTextMixin],
  inject: {
    isInSemanticMenu: {
      from: NC_ACTIONS_IS_SEMANTIC_MENU,
      default: false
    }
  }
};
const _hoisted_1$1 = ["role"];
const _hoisted_2$1 = {
  key: 0,
  class: "action-text__longtext-wrapper"
};
const _hoisted_3$1 = { class: "action-text__name" };
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["textContent"];
const _hoisted_6 = {
  key: 2,
  class: "action-text__text"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", {
    class: "action",
    role: $options.isInSemanticMenu && "presentation"
  }, [
    createBaseVNode("span", {
      class: "action-text",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
    }, [
      renderSlot(_ctx.$slots, "icon", {}, () => [
        _ctx.icon !== "" ? (openBlock(), createElementBlock("span", {
          key: 0,
          "aria-hidden": "true",
          class: normalizeClass(["action-text__icon", [_ctx.isIconUrl ? "action-text__icon--url" : _ctx.icon]]),
          style: normalizeStyle({ backgroundImage: _ctx.isIconUrl ? `url(${_ctx.icon})` : null })
        }, null, 6)) : createCommentVNode("", true)
      ], true),
      _ctx.name ? (openBlock(), createElementBlock("span", _hoisted_2$1, [
        createBaseVNode("strong", _hoisted_3$1, toDisplayString(_ctx.name), 1),
        createBaseVNode("span", {
          class: "action-text__longtext",
          textContent: toDisplayString(_ctx.text)
        }, null, 8, _hoisted_4)
      ])) : _ctx.isLongText ? (openBlock(), createElementBlock("span", {
        key: 1,
        class: "action-text__longtext",
        textContent: toDisplayString(_ctx.text)
      }, null, 8, _hoisted_5)) : (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(_ctx.text), 1)),
      createCommentVNode("", true)
    ])
  ], 8, _hoisted_1$1);
}
const NcActionText = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-fa684b48"]]);
/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
const INJECTION_KEY_THEME = /* @__PURE__ */ Symbol.for("nc:theme:enforced");
/*!
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
function useIsDarkThemeElement(el) {
  const element = computed(() => toValue(el) ?? document.body);
  const isDarkTheme = ref(checkIfDarkTheme(element.value));
  const isDarkSystemTheme = usePreferredDark();
  function updateIsDarkTheme() {
    isDarkTheme.value = checkIfDarkTheme(element.value);
  }
  useMutationObserver(element, updateIsDarkTheme, { attributes: true });
  watch(element, updateIsDarkTheme);
  watch(isDarkSystemTheme, updateIsDarkTheme, { immediate: true });
  return readonly(isDarkTheme);
}
const useInternalIsDarkTheme = createSharedComposable(() => useIsDarkThemeElement());
function useIsDarkTheme() {
  const isDarkTheme = useInternalIsDarkTheme();
  const enforcedTheme = inject(INJECTION_KEY_THEME, void 0);
  return computed(() => {
    if (enforcedTheme?.value) {
      return enforcedTheme.value === "dark";
    }
    return isDarkTheme.value;
  });
}
const stopClickOutsideMap = /* @__PURE__ */ new WeakMap();
const vOnClickOutside = {
  mounted(el, binding) {
    const capture = !binding.modifiers.bubble;
    let stop;
    if (typeof binding.value === "function") stop = onClickOutside(el, binding.value, { capture });
    else {
      const [handler, options] = binding.value;
      stop = onClickOutside(el, handler, Object.assign({ capture }, options));
    }
    stopClickOutsideMap.set(el, stop);
  },
  unmounted(el) {
    const stop = stopClickOutsideMap.get(el);
    if (stop && typeof stop === "function") stop();
    else stop === null || stop === void 0 || stop.stop();
    stopClickOutsideMap.delete(el);
  }
};
function u(type, props, value) {
  const node = { type: String(type) };
  if ((value === void 0 || value === null) && (typeof props === "string" || Array.isArray(props))) {
    value = props;
  } else {
    Object.assign(node, props);
  }
  if (Array.isArray(value)) {
    node.children = value;
  } else if (value !== void 0 && value !== null) {
    node.value = String(value);
  }
  return node;
}
const convert = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  (function(test) {
    if (test === null || test === void 0) {
      return ok;
    }
    if (typeof test === "function") {
      return castFactory(test);
    }
    if (typeof test === "object") {
      return Array.isArray(test) ? anyFactory(test) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        propertiesFactory(
          /** @type {Props} */
          test
        )
      );
    }
    if (typeof test === "string") {
      return typeFactory(test);
    }
    throw new Error("Expected function, string, or object as test");
  })
);
function anyFactory(tests) {
  const checks = [];
  let index = -1;
  while (++index < tests.length) {
    checks[index] = convert(tests[index]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index2 = -1;
    while (++index2 < checks.length) {
      if (checks[index2].apply(this, parameters)) return true;
    }
    return false;
  }
}
function propertiesFactory(check) {
  const checkAsRecord = (
    /** @type {Record<string, unknown>} */
    check
  );
  return castFactory(all);
  function all(node) {
    const nodeAsRecord = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      node
    );
    let key;
    for (key in check) {
      if (nodeAsRecord[key] !== checkAsRecord[key]) return false;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node) {
    return node && node.type === check;
  }
}
function castFactory(testFunction) {
  return check;
  function check(value, index, parent) {
    return Boolean(
      looksLikeANode(value) && testFunction.call(
        this,
        value,
        typeof index === "number" ? index : void 0,
        parent || void 0
      )
    );
  }
}
function ok() {
  return true;
}
function looksLikeANode(value) {
  return value !== null && typeof value === "object" && "type" in value;
}
function color(d) {
  return d;
}
const empty = [];
const CONTINUE = true;
const EXIT = false;
const SKIP = "skip";
function visitParents(tree, test, visitor, reverse) {
  let check;
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
  } else {
    check = test;
  }
  const is = convert(check);
  const step = reverse ? -1 : 1;
  factory(tree, void 0, [])();
  function factory(node, index, parents) {
    const value = (
      /** @type {Record<string, unknown>} */
      node && typeof node === "object" ? node : {}
    );
    if (typeof value.type === "string") {
      const name = (
        // `hast`
        typeof value.tagName === "string" ? value.tagName : (
          // `xast`
          typeof value.name === "string" ? value.name : void 0
        )
      );
      Object.defineProperty(visit2, "name", {
        value: "node (" + color(node.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit2;
    function visit2() {
      let result = empty;
      let subresult;
      let offset;
      let grandparents;
      if (!test || is(node, index, parents[parents.length - 1] || void 0)) {
        result = toResult(visitor(node, parents));
        if (result[0] === EXIT) {
          return result;
        }
      }
      if ("children" in node && node.children) {
        const nodeAsParent = (
          /** @type {UnistParent} */
          node
        );
        if (nodeAsParent.children && result[0] !== SKIP) {
          offset = (reverse ? nodeAsParent.children.length : -1) + step;
          grandparents = parents.concat(nodeAsParent);
          while (offset > -1 && offset < nodeAsParent.children.length) {
            const child = nodeAsParent.children[offset];
            subresult = factory(child, offset, grandparents)();
            if (subresult[0] === EXIT) {
              return subresult;
            }
            offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
          }
        }
      }
      return result;
    }
  }
}
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return value === null || value === void 0 ? empty : [value];
}
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
  let reverse;
  let test;
  let visitor;
  if (typeof testOrVisitor === "function" && typeof visitorOrReverse !== "function") {
    test = void 0;
    visitor = testOrVisitor;
    reverse = visitorOrReverse;
  } else {
    test = testOrVisitor;
    visitor = visitorOrReverse;
    reverse = maybeReverse;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    const parent = parents[parents.length - 1];
    const index = parent ? parent.children.indexOf(node) : void 0;
    return visitor(node, index, parent);
  }
}
/*!
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
const URL_PATTERN = /(\s|^)(https?:\/\/)([-A-Z0-9+_.]+(?::[0-9]+)?(?:\/[-A-Z0-9+&@#%?=~_|!:,.;()]*)*)(\s|$)/ig;
const URL_PATTERN_AUTOLINK = /(\s|\(|^)((https?:\/\/)([-A-Z0-9+_.]+[-A-Z0-9]+(?::[0-9]+)?(?:\/[-A-Z0-9+&@#%?=~_|!:,.;()]*)*))(?=\s|\)|$)/ig;
const NcLink = defineComponent({
  name: "NcLink",
  props: {
    href: {
      type: String,
      required: true
    }
  },
  render() {
    return h$1("a", {
      href: this.href,
      rel: "noopener noreferrer",
      target: "_blank",
      class: "rich-text--external-link"
    }, [this.href.trim()]);
  }
});
function remarkAutolink({ autolink, useMarkdown, useExtendedMarkdown }) {
  return function(tree) {
    if (useExtendedMarkdown || !useMarkdown || !autolink) {
      return;
    }
    visit(tree, (node) => node.type === "text", (node, index, parent) => {
      let parsed = parseUrl(node.value);
      if (typeof parsed === "string") {
        parsed = [u("text", parsed)];
      } else {
        parsed = parsed.map((n) => {
          if (typeof n === "string") {
            return u("text", n);
          }
          return u("link", {
            url: n.props.href
          }, [u("text", n.props.href)]);
        }).filter((x) => x).flat();
      }
      parent.children.splice(index, 1, ...parsed);
      return [SKIP, (index ?? 0) + parsed.length];
    });
  };
}
function parseUrl(text) {
  let match = URL_PATTERN_AUTOLINK.exec(text);
  const list = [];
  let start = 0;
  while (match !== null) {
    let href = match[2];
    let textAfter;
    let textBefore = text.substring(start, match.index + match[1].length);
    if (href[0] === " ") {
      textBefore += href[0];
      href = href.substring(1).trim();
    }
    const lastChar = href[href.length - 1];
    if (lastChar === "." || lastChar === "," || lastChar === ";" || match[0][0] === "(" && lastChar === ")") {
      href = href.substring(0, href.length - 1);
      textAfter = lastChar;
    }
    list.push(textBefore);
    list.push({ component: NcLink, props: { href } });
    if (textAfter) {
      list.push(textAfter);
    }
    start = match.index + match[0].length;
    match = URL_PATTERN_AUTOLINK.exec(text);
  }
  list.push(text.substring(start));
  const joinedText = list.map((item) => typeof item === "string" ? item : item.props.href).join("");
  if (text === joinedText) {
    return list;
  }
  logger.error("[NcRichText] Failed to reassemble the chunked text: " + text);
  return text;
}
function getRoute(router, url) {
  const removePrefix = (str, prefix) => str.startsWith(prefix) ? str.slice(prefix.length) : str;
  const removePrefixes = (str, ...prefixes) => prefixes.reduce((acc, prefix) => removePrefix(acc, prefix), str);
  if (!router) {
    return null;
  }
  const isAbsoluteURL = /^https?:\/\//.test(url);
  const isNonHttpLink = /^[a-z][a-z0-9+.-]*:.+/.test(url);
  if (!isAbsoluteURL && isNonHttpLink) {
    return null;
  }
  if (isAbsoluteURL && !url.startsWith(getBaseUrl())) {
    return null;
  }
  if (!isAbsoluteURL && !url.startsWith("/")) {
    return null;
  }
  const relativeUrl = isAbsoluteURL ? removePrefixes(url, getBaseUrl(), "/index.php") : url;
  const relativeRouterBase = removePrefixes(router.options.history.base, getRootUrl(), "/index.php");
  const potentialRouterPath = removePrefixes(relativeUrl, relativeRouterBase) || "/";
  const route = router.resolve(potentialRouterPath);
  if (!route.matched.length) {
    return null;
  }
  return route.fullPath;
}
function getEnabledContactsMenuActions(entry) {
  if (!window._nc_contacts_menu_hooks) {
    return [];
  }
  return Object.values(window._nc_contacts_menu_hooks).filter((action) => action.enabled(entry));
}
const c = new Int32Array(4);
class h {
  static hashStr(i, a = false) {
    return this.onePassHasher.start().appendStr(i).end(a);
  }
  static hashAsciiStr(i, a = false) {
    return this.onePassHasher.start().appendAsciiStr(i).end(a);
  }
  // Private Static Variables
  static stateIdentity = new Int32Array([
    1732584193,
    -271733879,
    -1732584194,
    271733878
  ]);
  static buffer32Identity = new Int32Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]);
  static hexChars = "0123456789abcdef";
  static hexOut = [];
  // Permanent instance is to use for one-call hashing
  static onePassHasher = new h();
  static _hex(i) {
    const a = h.hexChars, t2 = h.hexOut;
    let e, s, r, n;
    for (n = 0; n < 4; n += 1)
      for (s = n * 8, e = i[n], r = 0; r < 8; r += 2)
        t2[s + 1 + r] = a.charAt(e & 15), e >>>= 4, t2[s + 0 + r] = a.charAt(e & 15), e >>>= 4;
    return t2.join("");
  }
  static _md5cycle(i, a) {
    let t2 = i[0], e = i[1], s = i[2], r = i[3];
    t2 += (e & s | ~e & r) + a[0] - 680876936 | 0, t2 = (t2 << 7 | t2 >>> 25) + e | 0, r += (t2 & e | ~t2 & s) + a[1] - 389564586 | 0, r = (r << 12 | r >>> 20) + t2 | 0, s += (r & t2 | ~r & e) + a[2] + 606105819 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t2) + a[3] - 1044525330 | 0, e = (e << 22 | e >>> 10) + s | 0, t2 += (e & s | ~e & r) + a[4] - 176418897 | 0, t2 = (t2 << 7 | t2 >>> 25) + e | 0, r += (t2 & e | ~t2 & s) + a[5] + 1200080426 | 0, r = (r << 12 | r >>> 20) + t2 | 0, s += (r & t2 | ~r & e) + a[6] - 1473231341 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t2) + a[7] - 45705983 | 0, e = (e << 22 | e >>> 10) + s | 0, t2 += (e & s | ~e & r) + a[8] + 1770035416 | 0, t2 = (t2 << 7 | t2 >>> 25) + e | 0, r += (t2 & e | ~t2 & s) + a[9] - 1958414417 | 0, r = (r << 12 | r >>> 20) + t2 | 0, s += (r & t2 | ~r & e) + a[10] - 42063 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t2) + a[11] - 1990404162 | 0, e = (e << 22 | e >>> 10) + s | 0, t2 += (e & s | ~e & r) + a[12] + 1804603682 | 0, t2 = (t2 << 7 | t2 >>> 25) + e | 0, r += (t2 & e | ~t2 & s) + a[13] - 40341101 | 0, r = (r << 12 | r >>> 20) + t2 | 0, s += (r & t2 | ~r & e) + a[14] - 1502002290 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t2) + a[15] + 1236535329 | 0, e = (e << 22 | e >>> 10) + s | 0, t2 += (e & r | s & ~r) + a[1] - 165796510 | 0, t2 = (t2 << 5 | t2 >>> 27) + e | 0, r += (t2 & s | e & ~s) + a[6] - 1069501632 | 0, r = (r << 9 | r >>> 23) + t2 | 0, s += (r & e | t2 & ~e) + a[11] + 643717713 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t2 | r & ~t2) + a[0] - 373897302 | 0, e = (e << 20 | e >>> 12) + s | 0, t2 += (e & r | s & ~r) + a[5] - 701558691 | 0, t2 = (t2 << 5 | t2 >>> 27) + e | 0, r += (t2 & s | e & ~s) + a[10] + 38016083 | 0, r = (r << 9 | r >>> 23) + t2 | 0, s += (r & e | t2 & ~e) + a[15] - 660478335 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t2 | r & ~t2) + a[4] - 405537848 | 0, e = (e << 20 | e >>> 12) + s | 0, t2 += (e & r | s & ~r) + a[9] + 568446438 | 0, t2 = (t2 << 5 | t2 >>> 27) + e | 0, r += (t2 & s | e & ~s) + a[14] - 1019803690 | 0, r = (r << 9 | r >>> 23) + t2 | 0, s += (r & e | t2 & ~e) + a[3] - 187363961 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t2 | r & ~t2) + a[8] + 1163531501 | 0, e = (e << 20 | e >>> 12) + s | 0, t2 += (e & r | s & ~r) + a[13] - 1444681467 | 0, t2 = (t2 << 5 | t2 >>> 27) + e | 0, r += (t2 & s | e & ~s) + a[2] - 51403784 | 0, r = (r << 9 | r >>> 23) + t2 | 0, s += (r & e | t2 & ~e) + a[7] + 1735328473 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t2 | r & ~t2) + a[12] - 1926607734 | 0, e = (e << 20 | e >>> 12) + s | 0, t2 += (e ^ s ^ r) + a[5] - 378558 | 0, t2 = (t2 << 4 | t2 >>> 28) + e | 0, r += (t2 ^ e ^ s) + a[8] - 2022574463 | 0, r = (r << 11 | r >>> 21) + t2 | 0, s += (r ^ t2 ^ e) + a[11] + 1839030562 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t2) + a[14] - 35309556 | 0, e = (e << 23 | e >>> 9) + s | 0, t2 += (e ^ s ^ r) + a[1] - 1530992060 | 0, t2 = (t2 << 4 | t2 >>> 28) + e | 0, r += (t2 ^ e ^ s) + a[4] + 1272893353 | 0, r = (r << 11 | r >>> 21) + t2 | 0, s += (r ^ t2 ^ e) + a[7] - 155497632 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t2) + a[10] - 1094730640 | 0, e = (e << 23 | e >>> 9) + s | 0, t2 += (e ^ s ^ r) + a[13] + 681279174 | 0, t2 = (t2 << 4 | t2 >>> 28) + e | 0, r += (t2 ^ e ^ s) + a[0] - 358537222 | 0, r = (r << 11 | r >>> 21) + t2 | 0, s += (r ^ t2 ^ e) + a[3] - 722521979 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t2) + a[6] + 76029189 | 0, e = (e << 23 | e >>> 9) + s | 0, t2 += (e ^ s ^ r) + a[9] - 640364487 | 0, t2 = (t2 << 4 | t2 >>> 28) + e | 0, r += (t2 ^ e ^ s) + a[12] - 421815835 | 0, r = (r << 11 | r >>> 21) + t2 | 0, s += (r ^ t2 ^ e) + a[15] + 530742520 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t2) + a[2] - 995338651 | 0, e = (e << 23 | e >>> 9) + s | 0, t2 += (s ^ (e | ~r)) + a[0] - 198630844 | 0, t2 = (t2 << 6 | t2 >>> 26) + e | 0, r += (e ^ (t2 | ~s)) + a[7] + 1126891415 | 0, r = (r << 10 | r >>> 22) + t2 | 0, s += (t2 ^ (r | ~e)) + a[14] - 1416354905 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t2)) + a[5] - 57434055 | 0, e = (e << 21 | e >>> 11) + s | 0, t2 += (s ^ (e | ~r)) + a[12] + 1700485571 | 0, t2 = (t2 << 6 | t2 >>> 26) + e | 0, r += (e ^ (t2 | ~s)) + a[3] - 1894986606 | 0, r = (r << 10 | r >>> 22) + t2 | 0, s += (t2 ^ (r | ~e)) + a[10] - 1051523 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t2)) + a[1] - 2054922799 | 0, e = (e << 21 | e >>> 11) + s | 0, t2 += (s ^ (e | ~r)) + a[8] + 1873313359 | 0, t2 = (t2 << 6 | t2 >>> 26) + e | 0, r += (e ^ (t2 | ~s)) + a[15] - 30611744 | 0, r = (r << 10 | r >>> 22) + t2 | 0, s += (t2 ^ (r | ~e)) + a[6] - 1560198380 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t2)) + a[13] + 1309151649 | 0, e = (e << 21 | e >>> 11) + s | 0, t2 += (s ^ (e | ~r)) + a[4] - 145523070 | 0, t2 = (t2 << 6 | t2 >>> 26) + e | 0, r += (e ^ (t2 | ~s)) + a[11] - 1120210379 | 0, r = (r << 10 | r >>> 22) + t2 | 0, s += (t2 ^ (r | ~e)) + a[2] + 718787259 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t2)) + a[9] - 343485551 | 0, e = (e << 21 | e >>> 11) + s | 0, i[0] = t2 + i[0] | 0, i[1] = e + i[1] | 0, i[2] = s + i[2] | 0, i[3] = r + i[3] | 0;
  }
  _dataLength = 0;
  _bufferLength = 0;
  _state = new Int32Array(4);
  _buffer = new ArrayBuffer(68);
  _buffer8;
  _buffer32;
  constructor() {
    this._buffer8 = new Uint8Array(this._buffer, 0, 68), this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start();
  }
  /**
   * Initialise buffer to be hashed
   */
  start() {
    return this._dataLength = 0, this._bufferLength = 0, this._state.set(h.stateIdentity), this;
  }
  // Char to code point to to array conversion:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
  /**
   * Append a UTF-8 string to the hash buffer
   * @param str String to append
   */
  appendStr(i) {
    const a = this._buffer8, t2 = this._buffer32;
    let e = this._bufferLength, s, r;
    for (r = 0; r < i.length; r += 1) {
      if (s = i.charCodeAt(r), s < 128)
        a[e++] = s;
      else if (s < 2048)
        a[e++] = (s >>> 6) + 192, a[e++] = s & 63 | 128;
      else if (s < 55296 || s > 56319)
        a[e++] = (s >>> 12) + 224, a[e++] = s >>> 6 & 63 | 128, a[e++] = s & 63 | 128;
      else {
        if (s = (s - 55296) * 1024 + (i.charCodeAt(++r) - 56320) + 65536, s > 1114111)
          throw new Error(
            "Unicode standard supports code points up to U+10FFFF"
          );
        a[e++] = (s >>> 18) + 240, a[e++] = s >>> 12 & 63 | 128, a[e++] = s >>> 6 & 63 | 128, a[e++] = s & 63 | 128;
      }
      e >= 64 && (this._dataLength += 64, h._md5cycle(this._state, t2), e -= 64, t2[0] = t2[16]);
    }
    return this._bufferLength = e, this;
  }
  /**
   * Append an ASCII string to the hash buffer
   * @param str String to append
   */
  appendAsciiStr(i) {
    const a = this._buffer8, t2 = this._buffer32;
    let e = this._bufferLength, s, r = 0;
    for (; ; ) {
      for (s = Math.min(i.length - r, 64 - e); s--; )
        a[e++] = i.charCodeAt(r++);
      if (e < 64)
        break;
      this._dataLength += 64, h._md5cycle(this._state, t2), e = 0;
    }
    return this._bufferLength = e, this;
  }
  /**
   * Append a byte array to the hash buffer
   * @param input array to append
   */
  appendByteArray(i) {
    const a = this._buffer8, t2 = this._buffer32;
    let e = this._bufferLength, s, r = 0;
    for (; ; ) {
      for (s = Math.min(i.length - r, 64 - e); s--; )
        a[e++] = i[r++];
      if (e < 64)
        break;
      this._dataLength += 64, h._md5cycle(this._state, t2), e = 0;
    }
    return this._bufferLength = e, this;
  }
  /**
   * Get the state of the hash buffer
   */
  getState() {
    const i = this._state;
    return {
      buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
      buflen: this._bufferLength,
      length: this._dataLength,
      state: [i[0], i[1], i[2], i[3]]
    };
  }
  /**
   * Override the current state of the hash buffer
   * @param state New hash buffer state
   */
  setState(i) {
    const a = i.buffer, t2 = i.state, e = this._state;
    let s;
    for (this._dataLength = i.length, this._bufferLength = i.buflen, e[0] = t2[0], e[1] = t2[1], e[2] = t2[2], e[3] = t2[3], s = 0; s < a.length; s += 1)
      this._buffer8[s] = a.charCodeAt(s);
  }
  /**
   * Hash the current state of the hash buffer and return the result
   * @param raw Whether to return the value as an `Int32Array`
   */
  end(i = false) {
    const a = this._bufferLength, t2 = this._buffer8, e = this._buffer32, s = (a >> 2) + 1;
    this._dataLength += a;
    const r = this._dataLength * 8;
    if (t2[a] = 128, t2[a + 1] = t2[a + 2] = t2[a + 3] = 0, e.set(h.buffer32Identity.subarray(s), s), a > 55 && (h._md5cycle(this._state, e), e.set(h.buffer32Identity)), r <= 4294967295)
      e[14] = r;
    else {
      const n = r.toString(16).match(/(.*?)(.{0,8})$/);
      if (n === null) return i ? c : "";
      const o = parseInt(n[2], 16), _ = parseInt(n[1], 16) || 0;
      e[14] = o, e[15] = _;
    }
    return h._md5cycle(this._state, e), i ? this._state : h._hex(this._state);
  }
}
if (h.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592")
  throw new Error("Md5 self test failed.");
function hashCode(str) {
  let hash = str;
  if (str.match(/^([0-9a-f]{4}-?){8}$/) === null) {
    hash = h.hashStr(str);
  }
  hash = hash.replace(/[^0-9a-f]/g, "");
  let finalInt = 0;
  for (let i = 0; i < hash.length; i++) {
    finalInt += parseInt(hash.charAt(i), 16);
  }
  return finalInt;
}
function usernameToColor(username) {
  const steps = 6;
  const finalPalette = generatePalette(steps);
  const hash = hashCode(username.toLocaleLowerCase());
  return finalPalette[hash % finalPalette.length];
}
var striptags$1 = { exports: {} };
var striptags = striptags$1.exports;
var hasRequiredStriptags;
function requireStriptags() {
  if (hasRequiredStriptags) return striptags$1.exports;
  hasRequiredStriptags = 1;
  (function(module) {
    (function(global) {
      if (typeof Symbol2 !== "function") {
        var Symbol2 = function(name) {
          return name;
        };
        Symbol2.nonNative = true;
      }
      const STATE_PLAINTEXT = Symbol2("plaintext");
      const STATE_HTML = Symbol2("html");
      const STATE_COMMENT = Symbol2("comment");
      const ALLOWED_TAGS_REGEX = /<(\w*)>/g;
      const NORMALIZE_TAG_REGEX = /<\/?([^\s\/>]+)/;
      function striptags2(html, allowable_tags, tag_replacement) {
        html = html || "";
        allowable_tags = allowable_tags || [];
        tag_replacement = tag_replacement || "";
        let context = init_context(allowable_tags, tag_replacement);
        return striptags_internal(html, context);
      }
      function init_striptags_stream(allowable_tags, tag_replacement) {
        allowable_tags = allowable_tags || [];
        tag_replacement = tag_replacement || "";
        let context = init_context(allowable_tags, tag_replacement);
        return function striptags_stream(html) {
          return striptags_internal(html || "", context);
        };
      }
      striptags2.init_streaming_mode = init_striptags_stream;
      function init_context(allowable_tags, tag_replacement) {
        allowable_tags = parse_allowable_tags(allowable_tags);
        return {
          allowable_tags,
          tag_replacement,
          state: STATE_PLAINTEXT,
          tag_buffer: "",
          depth: 0,
          in_quote_char: ""
        };
      }
      function striptags_internal(html, context) {
        if (typeof html != "string") {
          throw new TypeError("'html' parameter must be a string");
        }
        let allowable_tags = context.allowable_tags;
        let tag_replacement = context.tag_replacement;
        let state = context.state;
        let tag_buffer = context.tag_buffer;
        let depth = context.depth;
        let in_quote_char = context.in_quote_char;
        let output = "";
        for (let idx = 0, length = html.length; idx < length; idx++) {
          let char = html[idx];
          if (state === STATE_PLAINTEXT) {
            switch (char) {
              case "<":
                state = STATE_HTML;
                tag_buffer += char;
                break;
              default:
                output += char;
                break;
            }
          } else if (state === STATE_HTML) {
            switch (char) {
              case "<":
                if (in_quote_char) {
                  break;
                }
                depth++;
                break;
              case ">":
                if (in_quote_char) {
                  break;
                }
                if (depth) {
                  depth--;
                  break;
                }
                in_quote_char = "";
                state = STATE_PLAINTEXT;
                tag_buffer += ">";
                if (allowable_tags.has(normalize_tag(tag_buffer))) {
                  output += tag_buffer;
                } else {
                  output += tag_replacement;
                }
                tag_buffer = "";
                break;
              case '"':
              case "'":
                if (char === in_quote_char) {
                  in_quote_char = "";
                } else {
                  in_quote_char = in_quote_char || char;
                }
                tag_buffer += char;
                break;
              case "-":
                if (tag_buffer === "<!-") {
                  state = STATE_COMMENT;
                }
                tag_buffer += char;
                break;
              case " ":
              case "\n":
                if (tag_buffer === "<") {
                  state = STATE_PLAINTEXT;
                  output += "< ";
                  tag_buffer = "";
                  break;
                }
                tag_buffer += char;
                break;
              default:
                tag_buffer += char;
                break;
            }
          } else if (state === STATE_COMMENT) {
            switch (char) {
              case ">":
                if (tag_buffer.slice(-2) == "--") {
                  state = STATE_PLAINTEXT;
                }
                tag_buffer = "";
                break;
              default:
                tag_buffer += char;
                break;
            }
          }
        }
        context.state = state;
        context.tag_buffer = tag_buffer;
        context.depth = depth;
        context.in_quote_char = in_quote_char;
        return output;
      }
      function parse_allowable_tags(allowable_tags) {
        let tag_set = /* @__PURE__ */ new Set();
        if (typeof allowable_tags === "string") {
          let match;
          while (match = ALLOWED_TAGS_REGEX.exec(allowable_tags)) {
            tag_set.add(match[1]);
          }
        } else if (!Symbol2.nonNative && typeof allowable_tags[Symbol2.iterator] === "function") {
          tag_set = new Set(allowable_tags);
        } else if (typeof allowable_tags.forEach === "function") {
          allowable_tags.forEach(tag_set.add, tag_set);
        }
        return tag_set;
      }
      function normalize_tag(tag_buffer) {
        let match = NORMALIZE_TAG_REGEX.exec(tag_buffer);
        return match ? match[1].toLowerCase() : null;
      }
      if (module.exports) {
        module.exports = striptags2;
      } else {
        global.striptags = striptags2;
      }
    })(striptags);
  })(striptags$1);
  return striptags$1.exports;
}
requireStriptags();
function getAvatarUrl(user, options) {
  const size = (options?.size || 64) <= 64 ? 64 : 512;
  const guestUrl = options?.isGuest ? "/guest" : "";
  const themeUrl = options?.isDarkTheme ?? checkIfDarkTheme(document.body) ? "/dark" : "";
  return generateUrl(`/avatar${guestUrl}/{user}/{size}${themeUrl}`, {
    user,
    size
  });
}
register(t10);
const userStatus = {
  data() {
    return {
      hasStatus: false,
      userStatus: {
        status: null,
        message: null,
        icon: null
      }
    };
  },
  methods: {
    /**
     * Fetches the user-status from the server
     *
     * @param {string} userId UserId of the user to fetch the status for
     *
     * @return {Promise<void>}
     */
    async fetchUserStatus(userId) {
      if (!userId) {
        return;
      }
      const capabilities = getCapabilities();
      if (!Object.hasOwn(capabilities, "user_status") || !capabilities.user_status.enabled) {
        return;
      }
      if (!getCurrentUser()) {
        return;
      }
      try {
        const { data } = await cancelableClient.get(generateOcsUrl("apps/user_status/api/v1/statuses/{userId}", { userId }));
        this.setUserStatus(data.ocs.data);
      } catch (e) {
        if (e.response.status === 404 && e.response.data.ocs?.data?.length === 0) {
          return;
        }
        logger.error("Failed to fetch user status", { error: e });
      }
    },
    /**
     * Sets the user status
     *
     * @param {string} status user's status
     * @param {string} message user's message
     * @param {string} icon user's icon
     */
    setUserStatus({ status, message, icon }) {
      this.userStatus.status = status || "";
      this.userStatus.message = message || "";
      this.userStatus.icon = icon || "";
      this.hasStatus = !!status;
    }
  }
};
const browserStorage = getBuilder("nextcloud").persist().build();
function getUserHasAvatar(userId) {
  const flag = browserStorage.getItem("user-has-avatar." + userId);
  if (typeof flag === "string") {
    return Boolean(flag);
  }
  return null;
}
function setUserHasAvatar(userId, flag) {
  if (userId) {
    browserStorage.setItem("user-has-avatar." + userId, flag);
  }
}
const _sfc_main = {
  name: "NcAvatar",
  directives: {
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: vOnClickOutside
  },
  components: {
    IconDotsHorizontal,
    NcActions,
    NcButton,
    NcIconSvgWrapper,
    NcLoadingIcon,
    NcUserStatusIcon
  },
  mixins: [userStatus],
  props: {
    /**
     * Set a custom url to the avatar image
     * either the url, user or displayName property must be defined
     */
    url: {
      type: String,
      default: void 0
    },
    /**
     * Set a css icon-class for an icon to be used instead of the avatar.
     */
    iconClass: {
      type: String,
      default: void 0
    },
    /**
     * Set the user id to fetch the avatar
     * either the url, user or displayName property must be defined
     */
    user: {
      type: String,
      default: void 0
    },
    /**
     * Do not show the user status on the avatar.
     */
    hideStatus: {
      type: Boolean,
      default: false
    },
    /**
     * Show the verbose user status (e.g. "online" / "away") instead of just the status icon.
     */
    verboseStatus: {
      type: Boolean,
      default: false
    },
    /**
     * When the user status was preloaded via another source it can be handed in with this property to save the request.
     * If this property is not set the status will be fetched automatically.
     * If a preloaded no-status is available provide this object with properties "status", "icon" and "message" set to null.
     */
    preloadedUserStatus: {
      type: Object,
      default: void 0
    },
    /**
     * Is the user a guest user (then we have to user a different endpoint)
     */
    isGuest: {
      type: Boolean,
      default: false
    },
    /**
     * Set a display name that will be rendered as a tooltip
     * either the url, user or displayName property must be defined
     * specify just the displayname to generate a placeholder avatar without
     * trying to fetch the avatar based on the user id
     */
    displayName: {
      type: String,
      default: void 0
    },
    /**
     * Set a size in px for the rendered avatar
     */
    size: {
      type: Number,
      default: 32
    },
    /**
     * Do not automatically generate a placeholder avatars if there is no real avatar is available.
     */
    noPlaceholder: {
      type: Boolean,
      default: false
    },
    /**
     * Disable the tooltip
     */
    disableTooltip: {
      type: Boolean,
      default: false
    },
    /**
     * Disable the menu
     */
    disableMenu: {
      type: Boolean,
      default: false
    },
    /**
     * Declares a custom tooltip when not null
     * Fallback will be the displayName
     *
     * requires disableTooltip not to be set to true
     */
    tooltipMessage: {
      type: String,
      default: null
    },
    /**
     * Declares username is not a user's name, when true.
     * Prevents loading user's avatar from server and forces generating colored initials,
     * i.e. if the user is a group
     */
    isNoUser: {
      type: Boolean,
      default: false
    },
    /**
     * Selector for the popover menu container
     */
    menuContainer: {
      type: [Boolean, String, Object, Element],
      default: "body"
    }
  },
  setup() {
    const isDarkTheme = useIsDarkTheme();
    return {
      isDarkTheme
    };
  },
  data() {
    return {
      avatarUrlLoaded: null,
      avatarSrcSetLoaded: null,
      userDoesNotExist: false,
      isAvatarLoaded: false,
      isMenuLoaded: false,
      contactsMenuLoading: false,
      contactsMenuData: {},
      contactsMenuActions: [],
      contactsMenuOpenState: false
    };
  },
  computed: {
    avatarAriaLabel() {
      if (!this.hasMenu) {
        return;
      }
      if (this.canDisplayUserStatus || this.showUserStatusIconOnAvatar) {
        return t("Avatar of {displayName}, {status}", { displayName: this.displayName ?? this.user, status: getUserStatusText(this.userStatus.status) });
      }
      return t("Avatar of {displayName}", { displayName: this.displayName ?? this.user });
    },
    canDisplayUserStatus() {
      return !this.hideStatus && this.hasStatus && ["online", "away", "busy", "dnd"].includes(this.userStatus.status);
    },
    showUserStatusIconOnAvatar() {
      return !this.hideStatus && !this.verboseStatus && this.hasStatus && this.userStatus.status !== "dnd" && this.userStatus.icon;
    },
    /**
     * The user identifier, either the display name if set or the user property
     * If both properties are not set an empty string is returned
     */
    userIdentifier() {
      if (this.isDisplayNameDefined) {
        return this.displayName;
      }
      if (this.isUserDefined) {
        return this.user;
      }
      return "";
    },
    isUserDefined() {
      return typeof this.user !== "undefined";
    },
    isDisplayNameDefined() {
      return typeof this.displayName !== "undefined";
    },
    isUrlDefined() {
      return typeof this.url !== "undefined";
    },
    hasMenu() {
      if (this.disableMenu) {
        return false;
      }
      if (this.isMenuLoaded) {
        return this.menu.length > 0;
      }
      return !(this.user === getCurrentUser()?.uid || this.userDoesNotExist || this.url);
    },
    /**
     * True if initials should be shown as the user icon fallback
     */
    showInitials() {
      return !this.noPlaceholder && this.userDoesNotExist && !(this.iconClass || this.$slots.icon);
    },
    avatarStyle() {
      return {
        "--avatar-size": this.size + "px",
        lineHeight: this.showInitials ? this.size + "px" : 0,
        fontSize: Math.round(this.size * 0.45) + "px"
      };
    },
    initialsWrapperStyle() {
      const { r, g, b } = usernameToColor(this.userIdentifier);
      return {
        backgroundColor: `rgba(${r}, ${g}, ${b}, 0.1)`
      };
    },
    initialsStyle() {
      const { r, g, b } = usernameToColor(this.userIdentifier);
      return {
        color: `rgb(${r}, ${g}, ${b})`
      };
    },
    tooltip() {
      if (this.disableTooltip) {
        return null;
      }
      if (this.tooltipMessage) {
        return this.tooltipMessage;
      }
      return this.displayName;
    },
    /**
     * Get the (max. two) initials of the user as uppcase string
     */
    initials() {
      let initials = "?";
      if (this.showInitials) {
        const user = this.userIdentifier.trim();
        if (user === "") {
          return initials;
        }
        const filteredChars = user.match(/[\p{L}\p{N}\s]/gu);
        if (!filteredChars) {
          return initials;
        }
        const filtered = filteredChars.join("");
        const idx = filtered.lastIndexOf(" ");
        initials = String.fromCodePoint(filtered.codePointAt(0));
        if (idx !== -1) {
          initials = initials.concat(String.fromCodePoint(filtered.codePointAt(idx + 1)));
        }
      }
      return initials.toLocaleUpperCase();
    },
    menu() {
      const actions = this.contactsMenuActions.map((item) => {
        const route = getRoute(this.$router, item.hyperlink);
        return {
          ncActionComponent: route ? NcActionRouter : NcActionLink,
          ncActionComponentProps: route ? {
            to: route,
            icon: item.icon
          } : {
            href: item.hyperlink,
            icon: item.icon
          },
          text: item.title
        };
      });
      for (const action of getEnabledContactsMenuActions(this.contactsMenuData)) {
        try {
          actions.push({
            ncActionComponent: NcActionButton,
            ncActionComponentProps: {
              onClick: () => action.callback(this.contactsMenuData)
            },
            text: action.displayName(this.contactsMenuData),
            iconSvg: action.iconSvg(this.contactsMenuData)
          });
        } catch (error) {
          logger.error(`Failed to render ContactsMenu action ${action.id}`, {
            error,
            action
          });
        }
      }
      function escape(html) {
        const text = document.createTextNode(html);
        const p = document.createElement("p");
        p.appendChild(text);
        return p.innerHTML;
      }
      if (!this.hideStatus && (this.userStatus.icon || this.userStatus.message)) {
        const emojiIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
					<text x="50%" y="50%" text-anchor="middle" style="dominant-baseline: central; font-size: 85%">${escape(this.userStatus.icon)}</text>
				</svg>`;
        return [{
          ncActionComponent: NcActionText,
          ncActionComponentProps: {},
          iconSvg: this.userStatus.icon ? emojiIcon : void 0,
          text: `${this.userStatus.message}`
        }].concat(actions);
      }
      return actions;
    }
  },
  watch: {
    url() {
      this.userDoesNotExist = false;
      this.loadAvatarUrl();
    },
    user() {
      this.userDoesNotExist = false;
      this.isMenuLoaded = false;
      this.loadAvatarUrl();
    }
  },
  mounted() {
    this.loadAvatarUrl();
    subscribe("settings:avatar:updated", this.loadAvatarUrl);
    subscribe("settings:display-name:updated", this.loadAvatarUrl);
    if (!this.hideStatus && this.user && !this.isNoUser) {
      if (!this.preloadedUserStatus) {
        this.fetchUserStatus(this.user);
      } else {
        this.setUserStatus(this.preloadedUserStatus);
      }
      subscribe("user_status:status.updated", this.handleUserStatusUpdated);
    } else if (!this.hideStatus && this.preloadedUserStatus) {
      this.setUserStatus(this.preloadedUserStatus);
    }
  },
  beforeUnmount() {
    unsubscribe("settings:avatar:updated", this.loadAvatarUrl);
    unsubscribe("settings:display-name:updated", this.loadAvatarUrl);
    unsubscribe("user_status:status.updated", this.handleUserStatusUpdated);
  },
  methods: {
    t,
    handleUserStatusUpdated(state) {
      if (this.user === state.userId) {
        this.userStatus = {
          status: state.status,
          icon: state.icon,
          message: state.message
        };
        this.hasStatus = state.status !== null;
      }
    },
    /**
     * Toggle the popover menu on click or enter
     *
     * @param {KeyboardEvent|MouseEvent} event the UI event
     */
    async toggleMenu(event) {
      if (event.type === "keydown" && event.key !== "Enter") {
        return;
      }
      if (!this.contactsMenuOpenState) {
        await this.fetchContactsMenu();
      }
      this.contactsMenuOpenState = !this.contactsMenuOpenState;
    },
    closeMenu() {
      this.contactsMenuOpenState = false;
    },
    async fetchContactsMenu() {
      this.contactsMenuLoading = true;
      try {
        const user = encodeURIComponent(this.user);
        const { data } = await cancelableClient.post(generateUrl("contactsmenu/findOne"), `shareType=0&shareWith=${user}`);
        this.contactsMenuData = data;
        this.contactsMenuActions = data.topAction ? [data.topAction].concat(data.actions) : data.actions;
      } catch {
        this.contactsMenuOpenState = false;
      }
      this.contactsMenuLoading = false;
      this.isMenuLoaded = true;
    },
    /**
     * Handle avatar loading if user or url defined
     */
    loadAvatarUrl() {
      this.isAvatarLoaded = false;
      if (!this.isUrlDefined && (!this.isUserDefined || this.isNoUser || this.iconClass || this.$slots.icon)) {
        this.isAvatarLoaded = true;
        this.userDoesNotExist = true;
        return;
      }
      if (this.isUrlDefined) {
        this.updateImageIfValid(this.url);
        return;
      }
      if (this.size <= 64) {
        const avatarUrl = this.avatarUrlGenerator(this.user, 64);
        const srcset = [
          avatarUrl + " 1x",
          this.avatarUrlGenerator(this.user, 512) + " 8x"
        ].join(", ");
        this.updateImageIfValid(avatarUrl, srcset);
      } else {
        const avatarUrl = this.avatarUrlGenerator(this.user, 512);
        this.updateImageIfValid(avatarUrl);
      }
    },
    /**
     * Generate an avatar url from the server's avatar endpoint
     *
     * @param {string} user the user id
     * @param {number} size the desired size
     * @return {string}
     */
    avatarUrlGenerator(user, size) {
      let avatarUrl = getAvatarUrl(user, {
        size,
        isDarkTheme: this.isDarkTheme,
        isGuest: this.isGuest
      });
      if (user === getCurrentUser()?.uid && typeof oc_userconfig !== "undefined") {
        avatarUrl += "?v=" + window.oc_userconfig.avatar.version;
      }
      return avatarUrl;
    },
    /**
     * Check if the provided url is valid and update Avatar if so
     *
     * @param {string} url the avatar url
     * @param {Array} srcset the avatar srcset
     */
    updateImageIfValid(url, srcset = null) {
      const userHasAvatar = getUserHasAvatar(this.user);
      if (this.isUserDefined && typeof userHasAvatar === "boolean") {
        this.isAvatarLoaded = true;
        this.avatarUrlLoaded = url;
        if (srcset) {
          this.avatarSrcSetLoaded = srcset;
        }
        if (userHasAvatar === false) {
          this.userDoesNotExist = true;
        }
        return;
      }
      const img = new Image();
      img.onload = () => {
        this.avatarUrlLoaded = url;
        if (srcset) {
          this.avatarSrcSetLoaded = srcset;
        }
        this.isAvatarLoaded = true;
        setUserHasAvatar(this.user, true);
      };
      img.onerror = (error) => {
        logger.debug("[NcAvatar] Invalid avatar url", { error, url });
        this.avatarUrlLoaded = null;
        this.avatarSrcSetLoaded = null;
        this.userDoesNotExist = true;
        this.isAvatarLoaded = false;
        setUserHasAvatar(this.user, false);
      };
      if (srcset) {
        img.srcset = srcset;
      }
      img.src = url;
    }
  }
};
const _hoisted_1 = ["title"];
const _hoisted_2 = ["src", "srcset"];
const _hoisted_3 = {
  key: 2,
  class: "avatardiv__user-status avatardiv__user-status--icon"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NcLoadingIcon = resolveComponent("NcLoadingIcon");
  const _component_IconDotsHorizontal = resolveComponent("IconDotsHorizontal");
  const _component_NcButton = resolveComponent("NcButton");
  const _component_NcIconSvgWrapper = resolveComponent("NcIconSvgWrapper");
  const _component_NcActions = resolveComponent("NcActions");
  const _component_NcUserStatusIcon = resolveComponent("NcUserStatusIcon");
  const _directive_click_outside = resolveDirective("click-outside");
  return withDirectives((openBlock(), createElementBlock("span", {
    class: normalizeClass(["avatardiv popovermenu-wrapper", {
      "avatardiv--unknown": $data.userDoesNotExist,
      "avatardiv--with-menu": $options.hasMenu,
      "avatardiv--with-menu-loading": $data.contactsMenuLoading
    }]),
    style: normalizeStyle($options.avatarStyle),
    title: $options.tooltip
  }, [
    renderSlot(_ctx.$slots, "icon", {}, () => [
      $props.iconClass ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass([$props.iconClass, "avatar-class-icon"])
      }, null, 2)) : $data.isAvatarLoaded && !$data.userDoesNotExist ? (openBlock(), createElementBlock("img", {
        key: 1,
        src: $data.avatarUrlLoaded,
        srcset: $data.avatarSrcSetLoaded,
        alt: ""
      }, null, 8, _hoisted_2)) : createCommentVNode("", true)
    ], true),
    $options.hasMenu && $options.menu.length === 0 ? (openBlock(), createBlock(_component_NcButton, {
      key: 0,
      "aria-label": $options.avatarAriaLabel,
      class: "action-item action-item__menutoggle",
      variant: "tertiary-no-background",
      onClick: $options.toggleMenu
    }, {
      icon: withCtx(() => [
        $data.contactsMenuLoading ? (openBlock(), createBlock(_component_NcLoadingIcon, { key: 0 })) : (openBlock(), createBlock(_component_IconDotsHorizontal, {
          key: 1,
          size: 20
        }))
      ]),
      _: 1
    }, 8, ["aria-label", "onClick"])) : $options.hasMenu ? (openBlock(), createBlock(_component_NcActions, {
      key: 1,
      open: $data.contactsMenuOpenState,
      "onUpdate:open": _cache[0] || (_cache[0] = ($event) => $data.contactsMenuOpenState = $event),
      "aria-label": $options.avatarAriaLabel,
      container: $props.menuContainer,
      "force-menu": "",
      "manual-open": "",
      variant: "tertiary-no-background",
      onClick: $options.toggleMenu
    }, createSlots({
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.menu, (item, key) => {
          return openBlock(), createBlock(resolveDynamicComponent(item.ncActionComponent), mergeProps({ key }, { ref_for: true }, item.ncActionComponentProps), createSlots({
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(item.text), 1)
            ]),
            _: 2
          }, [
            item.iconSvg ? {
              name: "icon",
              fn: withCtx(() => [
                createVNode(_component_NcIconSvgWrapper, {
                  svg: item.iconSvg
                }, null, 8, ["svg"])
              ]),
              key: "0"
            } : void 0
          ]), 1040);
        }), 128))
      ]),
      _: 2
    }, [
      $data.contactsMenuLoading ? {
        name: "icon",
        fn: withCtx(() => [
          createVNode(_component_NcLoadingIcon)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "aria-label", "container", "onClick"])) : createCommentVNode("", true),
    $options.showUserStatusIconOnAvatar ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(_ctx.userStatus.icon), 1)) : $options.canDisplayUserStatus ? (openBlock(), createBlock(_component_NcUserStatusIcon, {
      key: 3,
      class: "avatardiv__user-status",
      status: _ctx.userStatus.status,
      "aria-hidden": String($options.hasMenu)
    }, null, 8, ["status", "aria-hidden"])) : createCommentVNode("", true),
    $options.showInitials ? (openBlock(), createElementBlock("span", {
      key: 4,
      style: normalizeStyle($options.initialsWrapperStyle),
      class: "avatardiv__initials-wrapper"
    }, [
      createBaseVNode("span", {
        style: normalizeStyle($options.initialsStyle),
        class: "avatardiv__initials"
      }, toDisplayString($options.initials), 5)
    ], 4)) : createCommentVNode("", true)
  ], 14, _hoisted_1)), [
    [_directive_click_outside, $options.closeMenu]
  ]);
}
const NcAvatar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d7dc2a1f"]]);
export {
  EXIT as E,
  NcAvatar as N,
  SKIP as S,
  URL_PATTERN as U,
  visitParents as a,
  userStatus as b,
  convert as c,
  getRoute as g,
  parseUrl as p,
  remarkAutolink as r,
  u,
  visit as v
};
//# sourceMappingURL=NcAvatar-DmUGApWA-C2lPLiNg.chunk.mjs.map
