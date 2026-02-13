const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { l as resolveComponent, c as createElementBlock, o as openBlock, i as createBlock, f as createCommentVNode, j as createVNode, y as createSlots, w as withCtx, r as renderSlot, e as createBaseVNode, n as normalizeClass, g as createTextVNode, t as toDisplayString, z as mergeProps, I as withModifiers, F as Fragment, ag as cloneVNode, $ as h, _ as watchEffect, p as ref, V as toValue, b as defineComponent, h as computed, v as watch, ah as shallowRef, A as onMounted, k as unref, x as useTemplateRef, C as renderList, q as mergeModels, s as useModel, O as nextTick, B as onUnmounted, S as toHandlers, Z as toRef, J as normalizeStyle } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import { u as unsubscribe, f as debounce, s as subscribe, g as getLoggerBuilder, a as getCurrentUser, h as getRequestToken, o as onRequestTokenUpdate, t as getDefaultExportFromCjs, B as process$1, i as emit, C as mdiFolder, D as mdiClock, E as mdiStar, F as mdiKey, G as mdiTagOutline, H as mdiLink, I as mdiAccountPlus, A as mdiAccountGroupOutline, d as mdiNetworkOutline } from "./mdi-CCQ2KgUK.chunk.mjs";
import { N as NcActions, H as isSlotPopulated, a as NcDialog } from "./index-DZkDsHXr.chunk.mjs";
import { N as NcEmptyContent } from "./Plus-DX3lsEjd.chunk.mjs";
import { r as requireString_decoder, B as Buffer } from "./string_decoder-CSsspFHV.chunk.mjs";
import { l as loadState, e as encodePath, b as basename, c as extname, d as dirname, j as join, g as getCapabilities } from "./index-CEzAKfoK.chunk.mjs";
import { _ as _export_sfc$1, c as createElementId, e as generateRemoteUrl, g as generateUrl } from "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
import { l as lr, _ } from "./index-CIWHtE7-.chunk.mjs";
import { a as getCanonicalLocale, g as getLanguage } from "./translation-DoG5ZELJ-BX7lsMna.chunk.mjs";
import { c as NcButton, N as NcIconSvgWrapper } from "./logger-D3RVzcfQ-D08Lqsc3.chunk.mjs";
import { N as NcCheckboxRadioSwitch } from "./NcCheckboxRadioSwitch-BCSKF7Tk-CVZU7Pjt.chunk.mjs";
import { N as NcActionLink, a as NcActionRouter, _ as _sfc_main$i } from "./NcDateTime.vue_vue_type_script_setup_true_lang-BhB8yA4U-3Cg9SqZ9.chunk.mjs";
import { P as PQueue, a as NcActionInput } from "./NcBreadcrumbs-DYfGaSjT-BVqo2_j4.chunk.mjs";
import { t, l as logger$1, a as showError } from "./index-JpgrUA2Z-CDVhFt4l.chunk.mjs";
import { c as cancelableClient } from "./index-iNeUnB75.chunk.mjs";
import { N as NcActionButton } from "./NcActionButton-pKOSrlGE-By2YA-_F.chunk.mjs";
import { N as NcSelect } from "./NcSelect-Czzsi3P_-DrnUjQ4_.chunk.mjs";
import { _ as _sfc_main$h } from "./TrashCanOutline-BquAR0NR.chunk.mjs";
import "./PencilOutline-CRype3Oz.chunk.mjs";
import "./NcPasswordField-djttkA5Q-B3cAwMPj.chunk.mjs";
import "./NcInputField-Bwsh2aHY-DY6YZAwi.chunk.mjs";
import "./NcNoteCard-CVhtNL04-xGysk9Jq.chunk.mjs";
const _sfc_main$1$2 = {
  name: "ChevronRightIcon",
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
const _hoisted_1$1$1 = ["aria-hidden", "aria-label"];
const _hoisted_2$d = ["fill", "width", "height"];
const _hoisted_3$c = { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" };
const _hoisted_4$c = { key: 0 };
function _sfc_render$1$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon chevron-right-icon",
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
      createBaseVNode("path", _hoisted_3$c, [
        $props.title ? (openBlock(), createElementBlock("title", _hoisted_4$c, toDisplayString($props.title), 1)) : createCommentVNode("", true)
      ])
    ], 8, _hoisted_2$d))
  ], 16, _hoisted_1$1$1);
}
const ChevronRight = /* @__PURE__ */ _export_sfc$1(_sfc_main$1$2, [["render", _sfc_render$1$1]]);
const _sfc_main$g = {
  name: "NcBreadcrumb",
  components: {
    NcActions,
    ChevronRight,
    NcButton
  },
  inheritAttrs: false,
  props: {
    /**
     * The main text content of the entry.
     */
    name: {
      type: String,
      required: true
    },
    /**
     * The title attribute of the element.
     */
    title: {
      type: String,
      default: null
    },
    /**
     * Route Location the link should navigate to when clicked on.
     *
     * @see https://v3.router.vuejs.org/api/#to
     */
    to: {
      type: [String, Object],
      default: void 0
    },
    /**
     * Set this prop if your app doesn't use vue-router, breadcrumbs will show as normal links.
     */
    href: {
      type: String,
      default: void 0
    },
    /**
     * Set a css icon-class to show an icon along name text (if forceIconText is provided, otherwise just icon).
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * Enables text to accompany the icon, if the icon was provided. The text that will be displayed is the name prop.
     */
    forceIconText: {
      type: Boolean,
      default: false
    },
    /**
     * Disable dropping on this breadcrumb.
     */
    disableDrop: {
      type: Boolean,
      default: false
    },
    /**
     * Force the actions to display in a three dot menu
     */
    forceMenu: {
      type: Boolean,
      default: false
    },
    /**
     * Open state of the Actions menu
     */
    open: {
      type: Boolean,
      default: false
    },
    /**
     * CSS class to apply to the root element.
     */
    class: {
      type: [String, Array, Object],
      default: ""
    }
  },
  emits: [
    "dragenter",
    "dragleave",
    "dropped",
    "update:open"
  ],
  setup() {
    const crumbId = createElementId();
    return {
      actionsContainer: `.vue-crumb[data-crumb-id="${crumbId}"]`,
      crumbId
    };
  },
  data() {
    return {
      /**
       * Variable to track if we hover over the breadcrumb
       */
      hovering: false
    };
  },
  computed: {
    /**
     * The attributes to pass to `router-link` or `a`
     */
    linkAttributes() {
      if (this.to) {
        return { to: this.to, ...this.$attrs };
      } else if (this.href) {
        return { href: this.href, ...this.$attrs };
      }
      return this.$attrs;
    }
  },
  methods: {
    /**
     * Function to handle changing the open state of the Actions menu
     * $emit the open state.
     *
     * @param {boolean} open The open state of the Actions menu
     */
    onOpenChange(open) {
      this.$emit("update:open", open);
    },
    /**
     * Function to handle a drop on the breadcrumb.
     * $emit the event and the path, remove the hovering state.
     *
     * @param {object} e The drop event
     * @return {boolean}
     */
    dropped(e) {
      if (this.disableDrop) {
        return false;
      }
      this.$emit("dropped", e, this.to || this.href);
      this.$parent.$emit("dropped", e, this.to || this.href);
      this.hovering = false;
      return false;
    },
    /**
     * Add the hovering state on drag enter
     *
     * @param {DragEvent} e The drag-enter event
     */
    dragEnter(e) {
      this.$emit("dragenter", e);
      if (this.disableDrop) {
        return;
      }
      this.hovering = true;
    },
    /**
     * Remove the hovering state on drag leave
     *
     * @param {DragEvent} e The drag leave event
     */
    dragLeave(e) {
      this.$emit("dragleave", e);
      if (this.disableDrop) {
        return;
      }
      if (e.target.contains(e.relatedTarget) || this.$refs.crumb.contains(e.relatedTarget)) {
        return;
      }
      this.hovering = false;
    }
  }
};
const _hoisted_1$e = ["data-crumb-id"];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NcButton = resolveComponent("NcButton");
  const _component_NcActions = resolveComponent("NcActions");
  const _component_ChevronRight = resolveComponent("ChevronRight");
  return openBlock(), createElementBlock("li", {
    ref: "crumb",
    class: normalizeClass(["vue-crumb", [{ "vue-crumb--hovered": $data.hovering }, _ctx.$props.class]]),
    "data-crumb-id": $setup.crumbId,
    draggable: "false",
    onDragstart: withModifiers(() => {
    }, ["prevent"]),
    onDrop: _cache[0] || (_cache[0] = withModifiers((...args) => $options.dropped && $options.dropped(...args), ["prevent"])),
    onDragover: withModifiers(() => {
    }, ["prevent"]),
    onDragenter: _cache[1] || (_cache[1] = (...args) => $options.dragEnter && $options.dragEnter(...args)),
    onDragleave: _cache[2] || (_cache[2] = (...args) => $options.dragLeave && $options.dragLeave(...args))
  }, [
    ($props.name || $props.icon || _ctx.$slots.icon) && !_ctx.$slots.default ? (openBlock(), createBlock(_component_NcButton, mergeProps({
      key: 0,
      "aria-label": $props.icon ? $props.name : void 0,
      variant: "tertiary"
    }, $options.linkAttributes), createSlots({ _: 2 }, [
      _ctx.$slots.icon || $props.icon ? {
        name: "icon",
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, "icon", {}, () => [
            createBaseVNode("span", {
              class: normalizeClass([$props.icon, "icon"])
            }, null, 2)
          ], true)
        ]),
        key: "0"
      } : void 0,
      !(_ctx.$slots.icon || $props.icon) || $props.forceIconText ? {
        name: "default",
        fn: withCtx(() => [
          createTextVNode(toDisplayString($props.name), 1)
        ]),
        key: "1"
      } : void 0
    ]), 1040, ["aria-label"])) : createCommentVNode("", true),
    _ctx.$slots.default ? (openBlock(), createBlock(_component_NcActions, {
      key: 1,
      ref: "actions",
      container: $setup.actionsContainer,
      "force-menu": $props.forceMenu,
      "force-name": "",
      "menu-name": $props.name,
      open: $props.open,
      title: $props.title,
      variant: "tertiary",
      "onUpdate:open": $options.onOpenChange
    }, {
      icon: withCtx(() => [
        renderSlot(_ctx.$slots, "menu-icon", {}, void 0, true)
      ]),
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]),
      _: 3
    }, 8, ["container", "force-menu", "menu-name", "open", "title", "onUpdate:open"])) : createCommentVNode("", true),
    createVNode(_component_ChevronRight, {
      class: "vue-crumb__separator",
      size: 20
    })
  ], 42, _hoisted_1$e);
}
const NcBreadcrumb = /* @__PURE__ */ _export_sfc$1(_sfc_main$g, [["render", _sfc_render$9], ["__scopeId", "data-v-28ef52a4"]]);
const _sfc_main$1$1 = {
  name: "FolderIcon",
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
const _hoisted_1$d = ["aria-hidden", "aria-label"];
const _hoisted_2$c = ["fill", "width", "height"];
const _hoisted_3$b = { d: "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" };
const _hoisted_4$b = { key: 0 };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon folder-icon",
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
      createBaseVNode("path", _hoisted_3$b, [
        $props.title ? (openBlock(), createElementBlock("title", _hoisted_4$b, toDisplayString($props.title), 1)) : createCommentVNode("", true)
      ])
    ], 8, _hoisted_2$c))
  ], 16, _hoisted_1$d);
}
const IconFolder$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$1$1, [["render", _sfc_render$8]]);
const crumbClass = "vue-crumb";
const _sfc_main$f = {
  name: "NcBreadcrumbs",
  components: {
    NcActions,
    NcActionButton,
    NcActionRouter,
    NcActionLink,
    NcBreadcrumb,
    IconFolder: IconFolder$1
  },
  props: {
    /**
     * Set a css icon-class for the icon of the root breadcrumb to be used.
     */
    rootIcon: {
      type: String,
      default: "icon-home"
    },
    /**
     * Set the aria-label of the nav element.
     */
    ariaLabel: {
      type: String,
      default: null
    }
  },
  emits: ["dropped"],
  data() {
    return {
      /**
       * Array to track the hidden breadcrumbs by their index.
       * Comparing two crumbs somehow does not work, so we use the indices.
       */
      hiddenIndices: [],
      /**
       * This is the props of the middle Action menu
       * that show the ellipsised breadcrumbs
       */
      menuBreadcrumbProps: {
        // Don't show a name for this breadcrumb, only the Actions menu
        name: "",
        forceMenu: true,
        // Don't allow dropping directly on the actions breadcrumb
        disableDrop: true,
        // Is the menu open or not
        open: false
      },
      breadcrumbsRefs: []
    };
  },
  created() {
    window.addEventListener("resize", debounce(() => {
      this.handleWindowResize();
    }, 100));
    subscribe("navigation-toggled", this.delayedResize);
  },
  mounted() {
    this.handleWindowResize();
  },
  updated() {
    this.delayedResize();
    this.$nextTick(() => {
      this.hideCrumbs();
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    unsubscribe("navigation-toggled", this.delayedResize);
  },
  methods: {
    /**
     * Close the actions menu
     *
     * @param {object} e The event
     */
    closeActions(e) {
      if (this.$refs.actionsBreadcrumb.$el.contains(e.relatedTarget)) {
        return;
      }
      this.menuBreadcrumbProps.open = false;
    },
    /**
     * Call the resize function after a delay
     */
    async delayedResize() {
      await this.$nextTick();
      this.handleWindowResize();
    },
    /**
     * Check the width of the breadcrumb and hide breadcrumbs
     * if we overflow otherwise.
     */
    handleWindowResize() {
      if (!this.$refs.container) {
        return;
      }
      const nrCrumbs = this.breadcrumbsRefs.length;
      const hiddenIndices = [];
      const availableWidth = this.$refs.container.offsetWidth;
      let totalWidth = this.getTotalWidth();
      if (this.$refs.breadcrumb__actions) {
        totalWidth += this.$refs.breadcrumb__actions.offsetWidth;
      }
      let overflow = totalWidth - availableWidth;
      overflow += overflow > 0 ? 64 : 0;
      let i = 0;
      const startIndex = Math.floor(nrCrumbs / 2);
      while (overflow > 0 && i < nrCrumbs - 2) {
        const currentIndex = startIndex + (i % 2 ? i + 1 : i) / 2 * Math.pow(-1, i + nrCrumbs % 2);
        overflow -= this.getWidth(this.breadcrumbsRefs[currentIndex]?.$el, currentIndex === this.breadcrumbsRefs.length - 1);
        hiddenIndices.push(currentIndex);
        i++;
      }
      if (!this.arraysEqual(this.hiddenIndices, hiddenIndices.sort((a, b) => a - b))) {
        this.hiddenIndices = hiddenIndices;
      }
    },
    /**
     * Checks if two arrays are equal.
     * Only works for primitive arrays, but that's enough here.
     *
     * @param {Array} a The first array
     * @param {Array} b The second array
     * @return {boolean} Wether the arrays are equal
     */
    arraysEqual(a, b) {
      if (a.length !== b.length) {
        return false;
      } else if (a === b) {
        return true;
      } else if (a === null || b === null) {
        return false;
      }
      for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    },
    /**
     * Calculates the total width of all breadcrumbs
     *
     * @return {number} The total width
     */
    getTotalWidth() {
      return this.breadcrumbsRefs.reduce((width, crumb, index) => width + this.getWidth(crumb.$el, index === this.breadcrumbsRefs.length - 1), 0);
    },
    /**
     * Calculates the width of the provided element
     *
     * @param {object} el The element
     * @param {boolean} isLast Is this the last crumb
     * @return {number} The width
     */
    getWidth(el, isLast) {
      if (!el?.classList) {
        return 0;
      }
      const hide = el.classList.contains(`${crumbClass}--hidden`);
      el.style.minWidth = "auto";
      if (isLast) {
        el.style.maxWidth = "210px";
      }
      el.classList.remove(`${crumbClass}--hidden`);
      const w = el.offsetWidth;
      if (hide) {
        el.classList.add(`${crumbClass}--hidden`);
      }
      el.style.minWidth = "";
      el.style.maxWidth = "";
      return w;
    },
    /**
     * Prevents the default of a provided event
     *
     * @param {object} e The event
     * @return {boolean}
     */
    preventDefault(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      return false;
    },
    /**
     * Handles the drag start.
     * Prevents a breadcrumb from being draggable.
     *
     * @param {object} e The event
     * @return {boolean}
     */
    dragStart(e) {
      return this.preventDefault(e);
    },
    /**
     * Handles when something is dropped on the breadcrumb.
     *
     * @param {object} e The drop event
     * @param {string} path The path of the breadcrumb
     * @param {boolean} disabled Whether dropping is disabled for this breadcrumb
     * @return {boolean}
     */
    dropped(e, path, disabled) {
      if (!disabled) {
        this.$emit("dropped", e, path);
      }
      this.menuBreadcrumbProps.open = false;
      const crumbs = document.querySelectorAll(`.${crumbClass}`);
      for (const crumb of crumbs) {
        crumb.classList.remove(`${crumbClass}--hovered`);
      }
      return this.preventDefault(e);
    },
    /**
     * Handles the drag over event
     *
     * @param {object} e The drag over event
     * @return {boolean}
     */
    dragOver(e) {
      return this.preventDefault(e);
    },
    /**
     * Handles the drag enter event
     *
     * @param {object} e The drag over event
     * @param {boolean} disabled Whether dropping is disabled for this breadcrumb
     */
    dragEnter(e, disabled) {
      if (disabled) {
        return;
      }
      if (e.target.closest) {
        const target = e.target.closest(`.${crumbClass}`);
        if (target.classList && target.classList.contains(crumbClass)) {
          const crumbs = document.querySelectorAll(`.${crumbClass}`);
          for (const crumb of crumbs) {
            crumb.classList.remove(`${crumbClass}--hovered`);
          }
          target.classList.add(`${crumbClass}--hovered`);
        }
      }
    },
    /**
     * Handles the drag leave event
     *
     * @param {object} e The drag leave event
     * @param {boolean} disabled Whether dropping is disabled for this breadcrumb
     */
    dragLeave(e, disabled) {
      if (disabled) {
        return;
      }
      if (e.target.contains(e.relatedTarget)) {
        return;
      }
      if (e.target.closest) {
        const target = e.target.closest(`.${crumbClass}`);
        if (target.contains(e.relatedTarget)) {
          return;
        }
        if (target.classList && target.classList.contains(crumbClass)) {
          target.classList.remove(`${crumbClass}--hovered`);
        }
      }
    },
    /**
     * Check for each crumb if we have to hide it and
     * add it to the array of all crumbs.
     */
    hideCrumbs() {
      this.breadcrumbsRefs.forEach((crumb, i) => {
        if (crumb?.$el?.classList) {
          if (this.hiddenIndices.includes(i)) {
            crumb.$el.classList.add(`${crumbClass}--hidden`);
          } else {
            crumb.$el.classList.remove(`${crumbClass}--hidden`);
          }
        }
      });
    },
    isBreadcrumb(vnode) {
      return vnode?.type?.name === "NcBreadcrumb";
    }
  },
  /**
   * The render function to display the component
   *
   * @return {object|undefined} The created VNode
   */
  render() {
    let breadcrumbs = [];
    this.$slots.default?.().forEach((vnode) => {
      if (this.isBreadcrumb(vnode)) {
        breadcrumbs.push(vnode);
        return;
      }
      if (vnode?.type === Fragment) {
        vnode?.children?.forEach?.((child) => {
          if (this.isBreadcrumb(child)) {
            breadcrumbs.push(child);
          }
        });
      }
    });
    if (breadcrumbs.length === 0) {
      return;
    }
    breadcrumbs[0] = cloneVNode(breadcrumbs[0], {
      icon: this.rootIcon,
      ref: "breadcrumbs"
    });
    const breadcrumbsRefs = [];
    breadcrumbs = breadcrumbs.map((crumb, index) => cloneVNode(crumb, {
      ref: (crumb2) => {
        breadcrumbsRefs[index] = crumb2;
      }
    }));
    const crumbs = [...breadcrumbs];
    if (this.hiddenIndices.length) {
      crumbs.splice(
        Math.round(breadcrumbs.length / 2),
        0,
        // The Actions menu
        // Use a breadcrumb component for the hidden breadcrumbs
        // eslint-disable-line @stylistic/function-call-argument-newline
        h(NcBreadcrumb, {
          class: "dropdown",
          ...this.menuBreadcrumbProps,
          // Hide the dropdown menu from screen-readers,
          // since the crumbs in the menu are still in the list.
          "aria-hidden": true,
          // Add a ref to the Actions menu
          ref: "actionsBreadcrumb",
          key: "actions-breadcrumb-1",
          // Add handlers so the Actions menu opens on hover
          onDragenter: () => {
            this.menuBreadcrumbProps.open = true;
          },
          onDragleave: this.closeActions,
          // Make sure we keep the same open state
          // as the Actions component
          "onUpdate:open": (open) => {
            this.menuBreadcrumbProps.open = open;
          }
          // Add all hidden breadcrumbs as ActionRouter or ActionLink
        }, {
          default: () => this.hiddenIndices.filter((index) => index <= breadcrumbs.length - 1).map((index) => {
            const crumb = breadcrumbs[index];
            const {
              // Get the parameters from the breadcrumb component props
              to,
              href,
              disableDrop,
              name,
              // Props to forward
              ...propsToForward
            } = crumb.props;
            delete propsToForward.ref;
            let element = NcActionButton;
            let path = "";
            if (href) {
              element = NcActionLink;
              path = href;
            }
            if (to) {
              element = NcActionRouter;
              path = to;
            }
            const folderIcon = h(IconFolder$1, {
              size: 20
            });
            return h(element, {
              ...propsToForward,
              class: crumbClass,
              href: href || null,
              to: to || null,
              // Prevent the breadcrumbs from being draggable
              draggable: false,
              // Add the drag and drop handlers
              onDragstart: this.dragStart,
              onDrop: ($event) => this.dropped($event, path, disableDrop),
              onDragover: this.dragOver,
              onDragenter: ($event) => this.dragEnter($event, disableDrop),
              onDragleave: ($event) => this.dragLeave($event, disableDrop)
            }, {
              default: () => name,
              icon: () => folderIcon
            });
          })
        })
      );
    }
    const wrapper = [h("nav", { "aria-label": this.ariaLabel }, [h("ul", { class: "breadcrumb__crumbs" }, [crumbs])])];
    if (isSlotPopulated(this.$slots.actions?.())) {
      wrapper.push(h("div", { class: "breadcrumb__actions", ref: "breadcrumb__actions" }, this.$slots.actions?.()));
    }
    this.breadcrumbsRefs = breadcrumbsRefs;
    return h("div", { class: ["breadcrumb", { "breadcrumb--collapsed": this.hiddenIndices.length === breadcrumbs.length - 2 }], ref: "container" }, wrapper);
  }
};
const NcBreadcrumbs = /* @__PURE__ */ _export_sfc$1(_sfc_main$f, [["__scopeId", "data-v-af2b1226"]]);
/*!
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
function isPublicShare() {
  return loadState("files_sharing", "isPublic", null) ?? document.querySelector('input#isPublic[type="hidden"][name="isPublic"][value="1"]') !== null;
}
function getSharingToken() {
  return loadState("files_sharing", "sharingToken", null) ?? document.querySelector('input#sharingToken[type="hidden"]')?.value ?? null;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
  return _classApplyDescriptorGet(receiver, descriptor);
}
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}
function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  _classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }
  return privateMap.get(receiver);
}
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}
var toStringTag = typeof Symbol !== "undefined" ? Symbol.toStringTag : "@@toStringTag";
var _internals = /* @__PURE__ */ new WeakMap();
var _promise = /* @__PURE__ */ new WeakMap();
class CancelablePromiseInternal {
  constructor(_ref) {
    var {
      executor = () => {
      },
      internals = defaultInternals(),
      promise = new Promise((resolve2, reject2) => executor(resolve2, reject2, (onCancel) => {
        internals.onCancelList.push(onCancel);
      }))
    } = _ref;
    _classPrivateFieldInitSpec(this, _internals, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _promise, {
      writable: true,
      value: void 0
    });
    _defineProperty(this, toStringTag, "CancelablePromise");
    this.cancel = this.cancel.bind(this);
    _classPrivateFieldSet(this, _internals, internals);
    _classPrivateFieldSet(this, _promise, promise || new Promise((resolve2, reject2) => executor(resolve2, reject2, (onCancel) => {
      internals.onCancelList.push(onCancel);
    })));
  }
  then(onfulfilled, onrejected) {
    return makeCancelable(_classPrivateFieldGet(this, _promise).then(createCallback(onfulfilled, _classPrivateFieldGet(this, _internals)), createCallback(onrejected, _classPrivateFieldGet(this, _internals))), _classPrivateFieldGet(this, _internals));
  }
  catch(onrejected) {
    return makeCancelable(_classPrivateFieldGet(this, _promise).catch(createCallback(onrejected, _classPrivateFieldGet(this, _internals))), _classPrivateFieldGet(this, _internals));
  }
  finally(onfinally, runWhenCanceled) {
    if (runWhenCanceled) {
      _classPrivateFieldGet(this, _internals).onCancelList.push(onfinally);
    }
    return makeCancelable(_classPrivateFieldGet(this, _promise).finally(createCallback(() => {
      if (onfinally) {
        if (runWhenCanceled) {
          _classPrivateFieldGet(this, _internals).onCancelList = _classPrivateFieldGet(this, _internals).onCancelList.filter((callback) => callback !== onfinally);
        }
        return onfinally();
      }
    }, _classPrivateFieldGet(this, _internals))), _classPrivateFieldGet(this, _internals));
  }
  cancel() {
    _classPrivateFieldGet(this, _internals).isCanceled = true;
    var callbacks = _classPrivateFieldGet(this, _internals).onCancelList;
    _classPrivateFieldGet(this, _internals).onCancelList = [];
    for (var callback of callbacks) {
      if (typeof callback === "function") {
        try {
          callback();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  isCanceled() {
    return _classPrivateFieldGet(this, _internals).isCanceled === true;
  }
}
class CancelablePromise extends CancelablePromiseInternal {
  constructor(executor) {
    super({
      executor
    });
  }
}
_defineProperty(CancelablePromise, "all", function all(iterable) {
  return makeAllCancelable(iterable, Promise.all(iterable));
});
_defineProperty(CancelablePromise, "allSettled", function allSettled(iterable) {
  return makeAllCancelable(iterable, Promise.allSettled(iterable));
});
_defineProperty(CancelablePromise, "any", function any(iterable) {
  return makeAllCancelable(iterable, Promise.any(iterable));
});
_defineProperty(CancelablePromise, "race", function race(iterable) {
  return makeAllCancelable(iterable, Promise.race(iterable));
});
_defineProperty(CancelablePromise, "resolve", function resolve(value) {
  return cancelable(Promise.resolve(value));
});
_defineProperty(CancelablePromise, "reject", function reject(reason) {
  return cancelable(Promise.reject(reason));
});
_defineProperty(CancelablePromise, "isCancelable", isCancelablePromise);
function cancelable(promise) {
  return makeCancelable(promise, defaultInternals());
}
function isCancelablePromise(promise) {
  return promise instanceof CancelablePromise || promise instanceof CancelablePromiseInternal;
}
function createCallback(onResult, internals) {
  if (onResult) {
    return (arg) => {
      if (!internals.isCanceled) {
        var result = onResult(arg);
        if (isCancelablePromise(result)) {
          internals.onCancelList.push(result.cancel);
        }
        return result;
      }
      return arg;
    };
  }
}
function makeCancelable(promise, internals) {
  return new CancelablePromiseInternal({
    internals,
    promise
  });
}
function makeAllCancelable(iterable, promise) {
  var internals = defaultInternals();
  internals.onCancelList.push(() => {
    for (var resolvable of iterable) {
      if (isCancelablePromise(resolvable)) {
        resolvable.cancel();
      }
    }
  });
  return new CancelablePromiseInternal({
    internals,
    promise
  });
}
function defaultInternals() {
  return {
    isCanceled: false,
    onCancelList: []
  };
}
const logger = getLoggerBuilder().setApp("@nextcloud/files").detectUser().build();
var FileType = /* @__PURE__ */ ((FileType2) => {
  FileType2["Folder"] = "folder";
  FileType2["File"] = "file";
  return FileType2;
})(FileType || {});
var Permission = /* @__PURE__ */ ((Permission2) => {
  Permission2[Permission2["NONE"] = 0] = "NONE";
  Permission2[Permission2["CREATE"] = 4] = "CREATE";
  Permission2[Permission2["READ"] = 1] = "READ";
  Permission2[Permission2["UPDATE"] = 2] = "UPDATE";
  Permission2[Permission2["DELETE"] = 8] = "DELETE";
  Permission2[Permission2["SHARE"] = 16] = "SHARE";
  Permission2[Permission2["ALL"] = 31] = "ALL";
  return Permission2;
})(Permission || {});
const isDavResource = function(source, davService) {
  return source.match(davService) !== null;
};
const validateData = (data, davService) => {
  if (data.id && typeof data.id !== "number") {
    throw new Error("Invalid id type of value");
  }
  if (!data.source) {
    throw new Error("Missing mandatory source");
  }
  try {
    new URL(data.source);
  } catch (e) {
    throw new Error("Invalid source format, source must be a valid URL");
  }
  if (!data.source.startsWith("http")) {
    throw new Error("Invalid source format, only http(s) is supported");
  }
  if (data.displayname && typeof data.displayname !== "string") {
    throw new Error("Invalid displayname type");
  }
  if (data.mtime && !(data.mtime instanceof Date)) {
    throw new Error("Invalid mtime type");
  }
  if (data.crtime && !(data.crtime instanceof Date)) {
    throw new Error("Invalid crtime type");
  }
  if (!data.mime || typeof data.mime !== "string" || !data.mime.match(/^[-\w.]+\/[-+\w.]+$/gi)) {
    throw new Error("Missing or invalid mandatory mime");
  }
  if ("size" in data && typeof data.size !== "number" && data.size !== void 0) {
    throw new Error("Invalid size type");
  }
  if ("permissions" in data && data.permissions !== void 0 && !(typeof data.permissions === "number" && data.permissions >= Permission.NONE && data.permissions <= Permission.ALL)) {
    throw new Error("Invalid permissions");
  }
  if (data.owner && data.owner !== null && typeof data.owner !== "string") {
    throw new Error("Invalid owner type");
  }
  if (data.attributes && typeof data.attributes !== "object") {
    throw new Error("Invalid attributes type");
  }
  if (data.root && typeof data.root !== "string") {
    throw new Error("Invalid root type");
  }
  if (data.root && !data.root.startsWith("/")) {
    throw new Error("Root must start with a leading slash");
  }
  if (data.root && !data.source.includes(data.root)) {
    throw new Error("Root must be part of the source");
  }
  if (data.root && isDavResource(data.source, davService)) {
    const service = data.source.match(davService)[0];
    if (!data.source.includes(join(service, data.root))) {
      throw new Error("The root must be relative to the service. e.g /files/emma");
    }
  }
  if (data.status && !Object.values(NodeStatus).includes(data.status)) {
    throw new Error("Status must be a valid NodeStatus");
  }
};
var NodeStatus = /* @__PURE__ */ ((NodeStatus2) => {
  NodeStatus2["NEW"] = "new";
  NodeStatus2["FAILED"] = "failed";
  NodeStatus2["LOADING"] = "loading";
  NodeStatus2["LOCKED"] = "locked";
  return NodeStatus2;
})(NodeStatus || {});
class Node {
  _data;
  _attributes;
  _knownDavService = /(remote|public)\.php\/(web)?dav/i;
  readonlyAttributes = Object.entries(Object.getOwnPropertyDescriptors(Node.prototype)).filter((e) => typeof e[1].get === "function" && e[0] !== "__proto__").map((e) => e[0]);
  handler = {
    set: (target, prop, value) => {
      if (this.readonlyAttributes.includes(prop)) {
        return false;
      }
      return Reflect.set(target, prop, value);
    },
    deleteProperty: (target, prop) => {
      if (this.readonlyAttributes.includes(prop)) {
        return false;
      }
      return Reflect.deleteProperty(target, prop);
    },
    // TODO: This is deprecated and only needed for files v3
    get: (target, prop, receiver) => {
      if (this.readonlyAttributes.includes(prop)) {
        logger.warn(`Accessing "Node.attributes.${prop}" is deprecated, access it directly on the Node instance.`);
        return Reflect.get(this, prop);
      }
      return Reflect.get(target, prop, receiver);
    }
  };
  constructor(data, davService) {
    if (!data.mime) {
      data.mime = "application/octet-stream";
    }
    validateData(data, davService || this._knownDavService);
    this._data = {
      // TODO: Remove with next major release, this is just for compatibility
      displayname: data.attributes?.displayname,
      ...data,
      attributes: {}
    };
    this._attributes = new Proxy(this._data.attributes, this.handler);
    this.update(data.attributes ?? {});
    if (davService) {
      this._knownDavService = davService;
    }
  }
  /**
   * Get the source url to this object
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get source() {
    return this._data.source.replace(/\/$/i, "");
  }
  /**
   * Get the encoded source url to this object for requests purposes
   */
  get encodedSource() {
    const { origin } = new URL(this.source);
    return origin + encodePath(this.source.slice(origin.length));
  }
  /**
   * Get this object name
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get basename() {
    return basename(this.source);
  }
  /**
   * The nodes displayname
   * By default the display name and the `basename` are identical,
   * but it is possible to have a different name. This happens
   * on the files app for example for shared folders.
   */
  get displayname() {
    return this._data.displayname || this.basename;
  }
  /**
   * Set the displayname
   */
  set displayname(displayname) {
    validateData({ ...this._data, displayname }, this._knownDavService);
    this._data.displayname = displayname;
  }
  /**
   * Get this object's extension
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get extension() {
    return extname(this.source);
  }
  /**
   * Get the directory path leading to this object
   * Will use the relative path to root if available
   *
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get dirname() {
    if (this.root) {
      let source = this.source;
      if (this.isDavResource) {
        source = source.split(this._knownDavService).pop();
      }
      const firstMatch = source.indexOf(this.root);
      const root = this.root.replace(/\/$/, "");
      return dirname(source.slice(firstMatch + root.length) || "/");
    }
    const url = new URL(this.source);
    return dirname(url.pathname);
  }
  /**
   * Get the file mime
   */
  get mime() {
    return this._data.mime || "application/octet-stream";
  }
  /**
   * Set the file mime
   * Removing the mime type will set it to `application/octet-stream`
   */
  set mime(mime) {
    mime ??= "application/octet-stream";
    validateData({ ...this._data, mime }, this._knownDavService);
    this._data.mime = mime;
  }
  /**
   * Get the file modification time
   */
  get mtime() {
    return this._data.mtime;
  }
  /**
   * Set the file modification time
   */
  set mtime(mtime) {
    validateData({ ...this._data, mtime }, this._knownDavService);
    this._data.mtime = mtime;
  }
  /**
   * Get the file creation time
   * There is no setter as the creation time is not meant to be changed
   */
  get crtime() {
    return this._data.crtime;
  }
  /**
   * Get the file size
   */
  get size() {
    return this._data.size;
  }
  /**
   * Set the file size
   */
  set size(size) {
    validateData({ ...this._data, size }, this._knownDavService);
    this.updateMtime();
    this._data.size = size;
  }
  /**
   * Get the file attribute
   * This contains all additional attributes not provided by the Node class
   */
  get attributes() {
    return this._attributes;
  }
  /**
   * Get the file permissions
   */
  get permissions() {
    if (this.owner === null && !this.isDavResource) {
      return Permission.READ;
    }
    return this._data.permissions !== void 0 ? this._data.permissions : Permission.NONE;
  }
  /**
   * Set the file permissions
   */
  set permissions(permissions) {
    validateData({ ...this._data, permissions }, this._knownDavService);
    this.updateMtime();
    this._data.permissions = permissions;
  }
  /**
   * Get the file owner
   * There is no setter as the owner is not meant to be changed
   */
  get owner() {
    if (!this.isDavResource) {
      return null;
    }
    return this._data.owner;
  }
  /**
   * Is this a dav-related resource ?
   */
  get isDavResource() {
    return isDavResource(this.source, this._knownDavService);
  }
  /**
   * @deprecated use `isDavResource` instead - will be removed in next major version.
   */
  get isDavRessource() {
    return this.isDavResource;
  }
  /**
   * Get the dav root of this object
   * There is no setter as the root is not meant to be changed
   */
  get root() {
    if (this._data.root) {
      return this._data.root.replace(/^(.+)\/$/, "$1");
    }
    if (this.isDavResource) {
      const root = dirname(this.source);
      return root.split(this._knownDavService).pop() || null;
    }
    return null;
  }
  /**
   * Get the absolute path of this object relative to the root
   */
  get path() {
    if (this.root) {
      let source = this.source;
      if (this.isDavResource) {
        source = source.split(this._knownDavService).pop();
      }
      const firstMatch = source.indexOf(this.root);
      const root = this.root.replace(/\/$/, "");
      return source.slice(firstMatch + root.length) || "/";
    }
    return (this.dirname + "/" + this.basename).replace(/\/\//g, "/");
  }
  /**
   * Get the node id if defined.
   * There is no setter as the fileid is not meant to be changed
   */
  get fileid() {
    return this._data?.id;
  }
  /**
   * Get the node status.
   */
  get status() {
    return this._data?.status;
  }
  /**
   * Set the node status.
   */
  set status(status) {
    validateData({ ...this._data, status }, this._knownDavService);
    this._data.status = status;
  }
  /**
   * Get the node data
   */
  get data() {
    return structuredClone(this._data);
  }
  /**
   * Move the node to a new destination
   *
   * @param {string} destination the new source.
   * e.g. https://cloud.domain.com/remote.php/dav/files/emma/Photos/picture.jpg
   */
  move(destination) {
    validateData({ ...this._data, source: destination }, this._knownDavService);
    const oldBasename = this.basename;
    this._data.source = destination;
    if (this.displayname === oldBasename && this.basename !== oldBasename) {
      this.displayname = this.basename;
    }
  }
  /**
   * Rename the node
   * This aliases the move method for easier usage
   *
   * @param basename The new name of the node
   */
  rename(basename2) {
    if (basename2.includes("/")) {
      throw new Error("Invalid basename");
    }
    this.move(dirname(this.source) + "/" + basename2);
  }
  /**
   * Update the mtime if exists
   */
  updateMtime() {
    if (this._data.mtime) {
      this._data.mtime = /* @__PURE__ */ new Date();
    }
  }
  /**
   * Update the attributes of the node
   * Warning, updating attributes will NOT automatically update the mtime.
   *
   * @param attributes The new attributes to update on the Node attributes
   */
  update(attributes) {
    for (const [name, value] of Object.entries(attributes)) {
      try {
        if (value === void 0) {
          delete this.attributes[name];
        } else {
          this.attributes[name] = value;
        }
      } catch (e) {
        if (e instanceof TypeError) {
          continue;
        }
        throw e;
      }
    }
  }
}
class File extends Node {
  get type() {
    return FileType.File;
  }
  /**
   * Returns a clone of the file
   */
  clone() {
    return new File(this.data);
  }
}
class Folder extends Node {
  constructor(data) {
    super({
      ...data,
      mime: "httpd/unix-directory"
    });
  }
  get type() {
    return FileType.Folder;
  }
  get extension() {
    return null;
  }
  get mime() {
    return "httpd/unix-directory";
  }
  /**
   * Returns a clone of the folder
   */
  clone() {
    return new Folder(this.data);
  }
}
const parsePermissions = function(permString = "") {
  let permissions = Permission.NONE;
  if (!permString) {
    return permissions;
  }
  if (permString.includes("C") || permString.includes("K")) {
    permissions |= Permission.CREATE;
  }
  if (permString.includes("G")) {
    permissions |= Permission.READ;
  }
  if (permString.includes("W") || permString.includes("N") || permString.includes("V")) {
    permissions |= Permission.UPDATE;
  }
  if (permString.includes("D")) {
    permissions |= Permission.DELETE;
  }
  if (permString.includes("R")) {
    permissions |= Permission.SHARE;
  }
  return permissions;
};
const defaultDavProperties = [
  "d:getcontentlength",
  "d:getcontenttype",
  "d:getetag",
  "d:getlastmodified",
  "d:creationdate",
  "d:displayname",
  "d:quota-available-bytes",
  "d:resourcetype",
  "nc:has-preview",
  "nc:is-encrypted",
  "nc:mount-type",
  "oc:comments-unread",
  "oc:favorite",
  "oc:fileid",
  "oc:owner-display-name",
  "oc:owner-id",
  "oc:permissions",
  "oc:size"
];
const defaultDavNamespaces = {
  d: "DAV:",
  nc: "http://nextcloud.org/ns",
  oc: "http://owncloud.org/ns",
  ocs: "http://open-collaboration-services.org/ns"
};
const getDavProperties = function() {
  if (typeof window._nc_dav_properties === "undefined") {
    window._nc_dav_properties = [...defaultDavProperties];
  }
  return window._nc_dav_properties.map((prop) => `<${prop} />`).join(" ");
};
const getDavNameSpaces = function() {
  if (typeof window._nc_dav_namespaces === "undefined") {
    window._nc_dav_namespaces = { ...defaultDavNamespaces };
  }
  return Object.keys(window._nc_dav_namespaces).map((ns) => `xmlns:${ns}="${window._nc_dav_namespaces?.[ns]}"`).join(" ");
};
const getDefaultPropfind = function() {
  return `<?xml version="1.0"?>
		<d:propfind ${getDavNameSpaces()}>
			<d:prop>
				${getDavProperties()}
			</d:prop>
		</d:propfind>`;
};
const getFavoritesReport = function() {
  return `<?xml version="1.0"?>
		<oc:filter-files ${getDavNameSpaces()}>
			<d:prop>
				${getDavProperties()}
			</d:prop>
			<oc:filter-rules>
				<oc:favorite>1</oc:favorite>
			</oc:filter-rules>
		</oc:filter-files>`;
};
const getRecentSearch = function(lastModified) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<d:searchrequest ${getDavNameSpaces()}
	xmlns:ns="https://github.com/icewind1991/SearchDAV/ns">
	<d:basicsearch>
		<d:select>
			<d:prop>
				${getDavProperties()}
			</d:prop>
		</d:select>
		<d:from>
			<d:scope>
				<d:href>/files/${getCurrentUser()?.uid}/</d:href>
				<d:depth>infinity</d:depth>
			</d:scope>
		</d:from>
		<d:where>
			<d:and>
				<d:or>
					<d:not>
						<d:eq>
							<d:prop>
								<d:getcontenttype/>
							</d:prop>
							<d:literal>httpd/unix-directory</d:literal>
						</d:eq>
					</d:not>
					<d:eq>
						<d:prop>
							<oc:size/>
						</d:prop>
						<d:literal>0</d:literal>
					</d:eq>
				</d:or>
				<d:gt>
					<d:prop>
						<d:getlastmodified/>
					</d:prop>
					<d:literal>${lastModified}</d:literal>
				</d:gt>
			</d:and>
		</d:where>
		<d:orderby>
			<d:order>
				<d:prop>
					<d:getlastmodified/>
				</d:prop>
				<d:descending/>
			</d:order>
		</d:orderby>
		<d:limit>
			<d:nresults>100</d:nresults>
			<ns:firstresult>0</ns:firstresult>
		</d:limit>
	</d:basicsearch>
</d:searchrequest>`;
};
function getRootPath() {
  if (isPublicShare()) {
    return `/files/${getSharingToken()}`;
  }
  return `/files/${getCurrentUser()?.uid}`;
}
const defaultRootPath = getRootPath();
function getRemoteURL() {
  const url = generateRemoteUrl("dav");
  if (isPublicShare()) {
    return url.replace("remote.php", "public.php");
  }
  return url;
}
const defaultRemoteURL = getRemoteURL();
const getClient = function(remoteURL = defaultRemoteURL, headers = {}) {
  const client = lr(remoteURL, { headers });
  function setHeaders(token) {
    client.setHeaders({
      ...headers,
      // Add this so the server knows it is an request from the browser
      "X-Requested-With": "XMLHttpRequest",
      // Inject user auth
      requesttoken: token ?? ""
    });
  }
  onRequestTokenUpdate(setHeaders);
  setHeaders(getRequestToken());
  const patcher = _();
  patcher.patch("fetch", (url, options) => {
    const headers2 = options.headers;
    if (headers2?.method) {
      options.method = headers2.method;
      delete headers2.method;
    }
    return fetch(url, options);
  });
  return client;
};
const getFavoriteNodes = (davClient, path = "/", davRoot = defaultRootPath) => {
  const controller = new AbortController();
  return new CancelablePromise(async (resolve2, reject2, onCancel) => {
    onCancel(() => controller.abort());
    try {
      const contentsResponse = await davClient.getDirectoryContents(`${davRoot}${path}`, {
        signal: controller.signal,
        details: true,
        data: getFavoritesReport(),
        headers: {
          // see getClient for patched webdav client
          method: "REPORT"
        },
        includeSelf: true
      });
      const nodes = contentsResponse.data.filter((node) => node.filename !== path).map((result) => resultToNode(result, davRoot));
      resolve2(nodes);
    } catch (error) {
      reject2(error);
    }
  });
};
const resultToNode = function(node, filesRoot = defaultRootPath, remoteURL = defaultRemoteURL) {
  let userId = getCurrentUser()?.uid;
  if (isPublicShare()) {
    userId = userId ?? "anonymous";
  } else if (!userId) {
    throw new Error("No user id found");
  }
  const props = node.props;
  const permissions = parsePermissions(props?.permissions);
  const owner = String(props?.["owner-id"] || userId);
  const id = props.fileid || 0;
  const mtime = new Date(Date.parse(node.lastmod));
  const crtime = new Date(Date.parse(props.creationdate));
  const nodeData = {
    id,
    source: `${remoteURL}${node.filename}`,
    mtime: !isNaN(mtime.getTime()) && mtime.getTime() !== 0 ? mtime : void 0,
    crtime: !isNaN(crtime.getTime()) && crtime.getTime() !== 0 ? crtime : void 0,
    mime: node.mime || "application/octet-stream",
    // Manually cast to work around for https://github.com/perry-mitchell/webdav-client/pull/380
    displayname: props.displayname !== void 0 ? String(props.displayname) : void 0,
    size: props?.size || Number.parseInt(props.getcontentlength || "0"),
    // The fileid is set to -1 for failed requests
    status: id < 0 ? NodeStatus.FAILED : void 0,
    permissions,
    owner,
    root: filesRoot,
    attributes: {
      ...node,
      ...props,
      hasPreview: props?.["has-preview"]
    }
  };
  delete nodeData.attributes?.props;
  return node.type === "file" ? new File(nodeData) : new Folder(nodeData);
};
var string_decoderExports = requireString_decoder();
const require$$1 = /* @__PURE__ */ getDefaultExportFromCjs(string_decoderExports);
var define_process_env_default = {};
var debug_1;
var hasRequiredDebug;
function requireDebug() {
  if (hasRequiredDebug) return debug_1;
  hasRequiredDebug = 1;
  const debug = typeof process$1 === "object" && define_process_env_default && define_process_env_default.NODE_DEBUG && /\bsemver\b/i.test(define_process_env_default.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
  };
  debug_1 = debug;
  return debug_1;
}
var constants;
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants) return constants;
  hasRequiredConstants = 1;
  const SEMVER_SPEC_VERSION = "2.0.0";
  const MAX_LENGTH = 256;
  const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991;
  const MAX_SAFE_COMPONENT_LENGTH = 16;
  const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
  const RELEASE_TYPES = [
    "major",
    "premajor",
    "minor",
    "preminor",
    "patch",
    "prepatch",
    "prerelease"
  ];
  constants = {
    MAX_LENGTH,
    MAX_SAFE_COMPONENT_LENGTH,
    MAX_SAFE_BUILD_LENGTH,
    MAX_SAFE_INTEGER,
    RELEASE_TYPES,
    SEMVER_SPEC_VERSION,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  };
  return constants;
}
var re = { exports: {} };
var hasRequiredRe;
function requireRe() {
  if (hasRequiredRe) return re.exports;
  hasRequiredRe = 1;
  (function(module, exports) {
    const {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = requireConstants();
    const debug = requireDebug();
    exports = module.exports = {};
    const re2 = exports.re = [];
    const safeRe = exports.safeRe = [];
    const src = exports.src = [];
    const safeSrc = exports.safeSrc = [];
    const t2 = exports.t = {};
    let R = 0;
    const LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    const safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    const makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    const createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug(name, index, value);
      t2[name] = index;
      src[index] = value;
      safeSrc[index] = safe;
      re2[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t2.NONNUMERICIDENTIFIER]}|${src[t2.NUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t2.NONNUMERICIDENTIFIER]}|${src[t2.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASE", `(?:-(${src[t2.PRERELEASEIDENTIFIER]}(?:\\.${src[t2.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t2.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t2.BUILDIDENTIFIER]}(?:\\.${src[t2.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t2.MAINVERSION]}${src[t2.PRERELEASE]}?${src[t2.BUILD]}?`);
    createToken("FULL", `^${src[t2.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t2.MAINVERSIONLOOSE]}${src[t2.PRERELEASELOOSE]}?${src[t2.BUILD]}?`);
    createToken("LOOSE", `^${src[t2.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t2.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:${src[t2.PRERELEASE]})?${src[t2.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:${src[t2.PRERELEASELOOSE]})?${src[t2.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t2.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t2.COERCEPLAIN] + `(?:${src[t2.PRERELEASE]})?(?:${src[t2.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t2.COERCE], true);
    createToken("COERCERTLFULL", src[t2.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t2.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t2.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t2.GTLT]}\\s*(${src[t2.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]}|${src[t2.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t2.XRANGEPLAIN]})\\s+-\\s+(${src[t2.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t2.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t2.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(re, re.exports);
  return re.exports;
}
var parseOptions_1;
var hasRequiredParseOptions;
function requireParseOptions() {
  if (hasRequiredParseOptions) return parseOptions_1;
  hasRequiredParseOptions = 1;
  const looseOption = Object.freeze({ loose: true });
  const emptyOpts = Object.freeze({});
  const parseOptions = (options) => {
    if (!options) {
      return emptyOpts;
    }
    if (typeof options !== "object") {
      return looseOption;
    }
    return options;
  };
  parseOptions_1 = parseOptions;
  return parseOptions_1;
}
var identifiers;
var hasRequiredIdentifiers;
function requireIdentifiers() {
  if (hasRequiredIdentifiers) return identifiers;
  hasRequiredIdentifiers = 1;
  const numeric = /^[0-9]+$/;
  const compareIdentifiers = (a2, b2) => {
    if (typeof a2 === "number" && typeof b2 === "number") {
      return a2 === b2 ? 0 : a2 < b2 ? -1 : 1;
    }
    const anum = numeric.test(a2);
    const bnum = numeric.test(b2);
    if (anum && bnum) {
      a2 = +a2;
      b2 = +b2;
    }
    return a2 === b2 ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a2 < b2 ? -1 : 1;
  };
  const rcompareIdentifiers = (a2, b2) => compareIdentifiers(b2, a2);
  identifiers = {
    compareIdentifiers,
    rcompareIdentifiers
  };
  return identifiers;
}
var semver;
var hasRequiredSemver;
function requireSemver() {
  if (hasRequiredSemver) return semver;
  hasRequiredSemver = 1;
  const debug = requireDebug();
  const { MAX_LENGTH, MAX_SAFE_INTEGER } = requireConstants();
  const { safeRe: re2, t: t2 } = requireRe();
  const parseOptions = requireParseOptions();
  const { compareIdentifiers } = requireIdentifiers();
  class SemVer {
    constructor(version, options) {
      options = parseOptions(options);
      if (version instanceof SemVer) {
        if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
          return version;
        } else {
          version = version.version;
        }
      } else if (typeof version !== "string") {
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
      }
      if (version.length > MAX_LENGTH) {
        throw new TypeError(
          `version is longer than ${MAX_LENGTH} characters`
        );
      }
      debug("SemVer", version, options);
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      const m2 = version.trim().match(options.loose ? re2[t2.LOOSE] : re2[t2.FULL]);
      if (!m2) {
        throw new TypeError(`Invalid Version: ${version}`);
      }
      this.raw = version;
      this.major = +m2[1];
      this.minor = +m2[2];
      this.patch = +m2[3];
      if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
        throw new TypeError("Invalid major version");
      }
      if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
        throw new TypeError("Invalid minor version");
      }
      if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
        throw new TypeError("Invalid patch version");
      }
      if (!m2[4]) {
        this.prerelease = [];
      } else {
        this.prerelease = m2[4].split(".").map((id) => {
          if (/^[0-9]+$/.test(id)) {
            const num = +id;
            if (num >= 0 && num < MAX_SAFE_INTEGER) {
              return num;
            }
          }
          return id;
        });
      }
      this.build = m2[5] ? m2[5].split(".") : [];
      this.format();
    }
    format() {
      this.version = `${this.major}.${this.minor}.${this.patch}`;
      if (this.prerelease.length) {
        this.version += `-${this.prerelease.join(".")}`;
      }
      return this.version;
    }
    toString() {
      return this.version;
    }
    compare(other) {
      debug("SemVer.compare", this.version, this.options, other);
      if (!(other instanceof SemVer)) {
        if (typeof other === "string" && other === this.version) {
          return 0;
        }
        other = new SemVer(other, this.options);
      }
      if (other.version === this.version) {
        return 0;
      }
      return this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      if (this.major < other.major) {
        return -1;
      }
      if (this.major > other.major) {
        return 1;
      }
      if (this.minor < other.minor) {
        return -1;
      }
      if (this.minor > other.minor) {
        return 1;
      }
      if (this.patch < other.patch) {
        return -1;
      }
      if (this.patch > other.patch) {
        return 1;
      }
      return 0;
    }
    comparePre(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      if (this.prerelease.length && !other.prerelease.length) {
        return -1;
      } else if (!this.prerelease.length && other.prerelease.length) {
        return 1;
      } else if (!this.prerelease.length && !other.prerelease.length) {
        return 0;
      }
      let i2 = 0;
      do {
        const a2 = this.prerelease[i2];
        const b2 = other.prerelease[i2];
        debug("prerelease compare", i2, a2, b2);
        if (a2 === void 0 && b2 === void 0) {
          return 0;
        } else if (b2 === void 0) {
          return 1;
        } else if (a2 === void 0) {
          return -1;
        } else if (a2 === b2) {
          continue;
        } else {
          return compareIdentifiers(a2, b2);
        }
      } while (++i2);
    }
    compareBuild(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      let i2 = 0;
      do {
        const a2 = this.build[i2];
        const b2 = other.build[i2];
        debug("build compare", i2, a2, b2);
        if (a2 === void 0 && b2 === void 0) {
          return 0;
        } else if (b2 === void 0) {
          return 1;
        } else if (a2 === void 0) {
          return -1;
        } else if (a2 === b2) {
          continue;
        } else {
          return compareIdentifiers(a2, b2);
        }
      } while (++i2);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(release, identifier, identifierBase) {
      if (release.startsWith("pre")) {
        if (!identifier && identifierBase === false) {
          throw new Error("invalid increment argument: identifier is empty");
        }
        if (identifier) {
          const match = `-${identifier}`.match(this.options.loose ? re2[t2.PRERELEASELOOSE] : re2[t2.PRERELEASE]);
          if (!match || match[1] !== identifier) {
            throw new Error(`invalid identifier: ${identifier}`);
          }
        }
      }
      switch (release) {
        case "premajor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor = 0;
          this.major++;
          this.inc("pre", identifier, identifierBase);
          break;
        case "preminor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor++;
          this.inc("pre", identifier, identifierBase);
          break;
        case "prepatch":
          this.prerelease.length = 0;
          this.inc("patch", identifier, identifierBase);
          this.inc("pre", identifier, identifierBase);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          if (this.prerelease.length === 0) {
            this.inc("patch", identifier, identifierBase);
          }
          this.inc("pre", identifier, identifierBase);
          break;
        case "release":
          if (this.prerelease.length === 0) {
            throw new Error(`version ${this.raw} is not a prerelease`);
          }
          this.prerelease.length = 0;
          break;
        case "major":
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
            this.major++;
          }
          this.minor = 0;
          this.patch = 0;
          this.prerelease = [];
          break;
        case "minor":
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++;
          }
          this.patch = 0;
          this.prerelease = [];
          break;
        case "patch":
          if (this.prerelease.length === 0) {
            this.patch++;
          }
          this.prerelease = [];
          break;
        // This probably shouldn't be used publicly.
        // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
        case "pre": {
          const base = Number(identifierBase) ? 1 : 0;
          if (this.prerelease.length === 0) {
            this.prerelease = [base];
          } else {
            let i2 = this.prerelease.length;
            while (--i2 >= 0) {
              if (typeof this.prerelease[i2] === "number") {
                this.prerelease[i2]++;
                i2 = -2;
              }
            }
            if (i2 === -1) {
              if (identifier === this.prerelease.join(".") && identifierBase === false) {
                throw new Error("invalid increment argument: identifier already exists");
              }
              this.prerelease.push(base);
            }
          }
          if (identifier) {
            let prerelease = [identifier, base];
            if (identifierBase === false) {
              prerelease = [identifier];
            }
            if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = prerelease;
              }
            } else {
              this.prerelease = prerelease;
            }
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${release}`);
      }
      this.raw = this.format();
      if (this.build.length) {
        this.raw += `+${this.build.join(".")}`;
      }
      return this;
    }
  }
  semver = SemVer;
  return semver;
}
var major_1;
var hasRequiredMajor;
function requireMajor() {
  if (hasRequiredMajor) return major_1;
  hasRequiredMajor = 1;
  const SemVer = requireSemver();
  const major2 = (a2, loose) => new SemVer(a2, loose).major;
  major_1 = major2;
  return major_1;
}
requireMajor();
var parse_1;
var hasRequiredParse;
function requireParse() {
  if (hasRequiredParse) return parse_1;
  hasRequiredParse = 1;
  const SemVer = requireSemver();
  const parse = (version, options, throwErrors = false) => {
    if (version instanceof SemVer) {
      return version;
    }
    try {
      return new SemVer(version, options);
    } catch (er) {
      if (!throwErrors) {
        return null;
      }
      throw er;
    }
  };
  parse_1 = parse;
  return parse_1;
}
var valid_1;
var hasRequiredValid;
function requireValid() {
  if (hasRequiredValid) return valid_1;
  hasRequiredValid = 1;
  const parse = requireParse();
  const valid2 = (version, options) => {
    const v = parse(version, options);
    return v ? v.version : null;
  };
  valid_1 = valid2;
  return valid_1;
}
requireValid();
var sax$1 = {};
var hasRequiredSax;
function requireSax() {
  if (hasRequiredSax) return sax$1;
  hasRequiredSax = 1;
  (function(exports) {
    (function(sax2) {
      sax2.parser = function(strict, opt) {
        return new SAXParser(strict, opt);
      };
      sax2.SAXParser = SAXParser;
      sax2.SAXStream = SAXStream;
      sax2.createStream = createStream;
      sax2.MAX_BUFFER_LENGTH = 64 * 1024;
      var buffers = [
        "comment",
        "sgmlDecl",
        "textNode",
        "tagName",
        "doctype",
        "procInstName",
        "procInstBody",
        "entity",
        "attribName",
        "attribValue",
        "cdata",
        "script"
      ];
      sax2.EVENTS = [
        "text",
        "processinginstruction",
        "sgmldeclaration",
        "doctype",
        "comment",
        "opentagstart",
        "attribute",
        "opentag",
        "closetag",
        "opencdata",
        "cdata",
        "closecdata",
        "error",
        "end",
        "ready",
        "script",
        "opennamespace",
        "closenamespace"
      ];
      function SAXParser(strict, opt) {
        if (!(this instanceof SAXParser)) {
          return new SAXParser(strict, opt);
        }
        var parser = this;
        clearBuffers(parser);
        parser.q = parser.c = "";
        parser.bufferCheckPosition = sax2.MAX_BUFFER_LENGTH;
        parser.opt = opt || {};
        parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
        parser.looseCase = parser.opt.lowercase ? "toLowerCase" : "toUpperCase";
        parser.tags = [];
        parser.closed = parser.closedRoot = parser.sawRoot = false;
        parser.tag = parser.error = null;
        parser.strict = !!strict;
        parser.noscript = !!(strict || parser.opt.noscript);
        parser.state = S.BEGIN;
        parser.strictEntities = parser.opt.strictEntities;
        parser.ENTITIES = parser.strictEntities ? Object.create(sax2.XML_ENTITIES) : Object.create(sax2.ENTITIES);
        parser.attribList = [];
        if (parser.opt.xmlns) {
          parser.ns = Object.create(rootNS);
        }
        if (parser.opt.unquotedAttributeValues === void 0) {
          parser.opt.unquotedAttributeValues = !strict;
        }
        parser.trackPosition = parser.opt.position !== false;
        if (parser.trackPosition) {
          parser.position = parser.line = parser.column = 0;
        }
        emit2(parser, "onready");
      }
      if (!Object.create) {
        Object.create = function(o) {
          function F() {
          }
          F.prototype = o;
          var newf = new F();
          return newf;
        };
      }
      if (!Object.keys) {
        Object.keys = function(o) {
          var a2 = [];
          for (var i2 in o) if (o.hasOwnProperty(i2)) a2.push(i2);
          return a2;
        };
      }
      function checkBufferLength(parser) {
        var maxAllowed = Math.max(sax2.MAX_BUFFER_LENGTH, 10);
        var maxActual = 0;
        for (var i2 = 0, l2 = buffers.length; i2 < l2; i2++) {
          var len = parser[buffers[i2]].length;
          if (len > maxAllowed) {
            switch (buffers[i2]) {
              case "textNode":
                closeText(parser);
                break;
              case "cdata":
                emitNode(parser, "oncdata", parser.cdata);
                parser.cdata = "";
                break;
              case "script":
                emitNode(parser, "onscript", parser.script);
                parser.script = "";
                break;
              default:
                error(parser, "Max buffer length exceeded: " + buffers[i2]);
            }
          }
          maxActual = Math.max(maxActual, len);
        }
        var m2 = sax2.MAX_BUFFER_LENGTH - maxActual;
        parser.bufferCheckPosition = m2 + parser.position;
      }
      function clearBuffers(parser) {
        for (var i2 = 0, l2 = buffers.length; i2 < l2; i2++) {
          parser[buffers[i2]] = "";
        }
      }
      function flushBuffers(parser) {
        closeText(parser);
        if (parser.cdata !== "") {
          emitNode(parser, "oncdata", parser.cdata);
          parser.cdata = "";
        }
        if (parser.script !== "") {
          emitNode(parser, "onscript", parser.script);
          parser.script = "";
        }
      }
      SAXParser.prototype = {
        end: function() {
          end(this);
        },
        write,
        resume: function() {
          this.error = null;
          return this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          flushBuffers(this);
        }
      };
      var Stream;
      try {
        Stream = require("stream").Stream;
      } catch (ex) {
        Stream = function() {
        };
      }
      if (!Stream) Stream = function() {
      };
      var streamWraps = sax2.EVENTS.filter(function(ev) {
        return ev !== "error" && ev !== "end";
      });
      function createStream(strict, opt) {
        return new SAXStream(strict, opt);
      }
      function SAXStream(strict, opt) {
        if (!(this instanceof SAXStream)) {
          return new SAXStream(strict, opt);
        }
        Stream.apply(this);
        this._parser = new SAXParser(strict, opt);
        this.writable = true;
        this.readable = true;
        var me = this;
        this._parser.onend = function() {
          me.emit("end");
        };
        this._parser.onerror = function(er) {
          me.emit("error", er);
          me._parser.error = null;
        };
        this._decoder = null;
        streamWraps.forEach(function(ev) {
          Object.defineProperty(me, "on" + ev, {
            get: function() {
              return me._parser["on" + ev];
            },
            set: function(h2) {
              if (!h2) {
                me.removeAllListeners(ev);
                me._parser["on" + ev] = h2;
                return h2;
              }
              me.on(ev, h2);
            },
            enumerable: true,
            configurable: false
          });
        });
      }
      SAXStream.prototype = Object.create(Stream.prototype, {
        constructor: {
          value: SAXStream
        }
      });
      SAXStream.prototype.write = function(data) {
        if (typeof Buffer === "function" && typeof Buffer.isBuffer === "function" && Buffer.isBuffer(data)) {
          if (!this._decoder) {
            var SD = require$$1.StringDecoder;
            this._decoder = new SD("utf8");
          }
          data = this._decoder.write(data);
        }
        this._parser.write(data.toString());
        this.emit("data", data);
        return true;
      };
      SAXStream.prototype.end = function(chunk) {
        if (chunk && chunk.length) {
          this.write(chunk);
        }
        this._parser.end();
        return true;
      };
      SAXStream.prototype.on = function(ev, handler) {
        var me = this;
        if (!me._parser["on" + ev] && streamWraps.indexOf(ev) !== -1) {
          me._parser["on" + ev] = function() {
            var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
            args.splice(0, 0, ev);
            me.emit.apply(me, args);
          };
        }
        return Stream.prototype.on.call(me, ev, handler);
      };
      var CDATA = "[CDATA[";
      var DOCTYPE = "DOCTYPE";
      var XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace";
      var XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";
      var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE };
      var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function isWhitespace(c2) {
        return c2 === " " || c2 === "\n" || c2 === "\r" || c2 === "	";
      }
      function isQuote(c2) {
        return c2 === '"' || c2 === "'";
      }
      function isAttribEnd(c2) {
        return c2 === ">" || isWhitespace(c2);
      }
      function isMatch(regex, c2) {
        return regex.test(c2);
      }
      function notMatch(regex, c2) {
        return !isMatch(regex, c2);
      }
      var S = 0;
      sax2.STATE = {
        BEGIN: S++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: S++,
        // leading whitespace
        TEXT: S++,
        // general stuff
        TEXT_ENTITY: S++,
        // &amp and such.
        OPEN_WAKA: S++,
        // <
        SGML_DECL: S++,
        // <!BLARG
        SGML_DECL_QUOTED: S++,
        // <!BLARG foo "bar
        DOCTYPE: S++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: S++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: S++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: S++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: S++,
        // <!-
        COMMENT: S++,
        // <!--
        COMMENT_ENDING: S++,
        // <!-- blah -
        COMMENT_ENDED: S++,
        // <!-- blah --
        CDATA: S++,
        // <![CDATA[ something
        CDATA_ENDING: S++,
        // ]
        CDATA_ENDING_2: S++,
        // ]]
        PROC_INST: S++,
        // <?hi
        PROC_INST_BODY: S++,
        // <?hi there
        PROC_INST_ENDING: S++,
        // <?hi "there" ?
        OPEN_TAG: S++,
        // <strong
        OPEN_TAG_SLASH: S++,
        // <strong /
        ATTRIB: S++,
        // <a
        ATTRIB_NAME: S++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: S++,
        // <a foo _
        ATTRIB_VALUE: S++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: S++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: S++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: S++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: S++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: S++,
        // <foo bar=&quot
        CLOSE_TAG: S++,
        // </a
        CLOSE_TAG_SAW_WHITE: S++,
        // </a   >
        SCRIPT: S++,
        // <script> ...
        SCRIPT_ENDING: S++
        // <script> ... <
      };
      sax2.XML_ENTITIES = {
        "amp": "&",
        "gt": ">",
        "lt": "<",
        "quot": '"',
        "apos": "'"
      };
      sax2.ENTITIES = {
        "amp": "&",
        "gt": ">",
        "lt": "<",
        "quot": '"',
        "apos": "'",
        "AElig": 198,
        "Aacute": 193,
        "Acirc": 194,
        "Agrave": 192,
        "Aring": 197,
        "Atilde": 195,
        "Auml": 196,
        "Ccedil": 199,
        "ETH": 208,
        "Eacute": 201,
        "Ecirc": 202,
        "Egrave": 200,
        "Euml": 203,
        "Iacute": 205,
        "Icirc": 206,
        "Igrave": 204,
        "Iuml": 207,
        "Ntilde": 209,
        "Oacute": 211,
        "Ocirc": 212,
        "Ograve": 210,
        "Oslash": 216,
        "Otilde": 213,
        "Ouml": 214,
        "THORN": 222,
        "Uacute": 218,
        "Ucirc": 219,
        "Ugrave": 217,
        "Uuml": 220,
        "Yacute": 221,
        "aacute": 225,
        "acirc": 226,
        "aelig": 230,
        "agrave": 224,
        "aring": 229,
        "atilde": 227,
        "auml": 228,
        "ccedil": 231,
        "eacute": 233,
        "ecirc": 234,
        "egrave": 232,
        "eth": 240,
        "euml": 235,
        "iacute": 237,
        "icirc": 238,
        "igrave": 236,
        "iuml": 239,
        "ntilde": 241,
        "oacute": 243,
        "ocirc": 244,
        "ograve": 242,
        "oslash": 248,
        "otilde": 245,
        "ouml": 246,
        "szlig": 223,
        "thorn": 254,
        "uacute": 250,
        "ucirc": 251,
        "ugrave": 249,
        "uuml": 252,
        "yacute": 253,
        "yuml": 255,
        "copy": 169,
        "reg": 174,
        "nbsp": 160,
        "iexcl": 161,
        "cent": 162,
        "pound": 163,
        "curren": 164,
        "yen": 165,
        "brvbar": 166,
        "sect": 167,
        "uml": 168,
        "ordf": 170,
        "laquo": 171,
        "not": 172,
        "shy": 173,
        "macr": 175,
        "deg": 176,
        "plusmn": 177,
        "sup1": 185,
        "sup2": 178,
        "sup3": 179,
        "acute": 180,
        "micro": 181,
        "para": 182,
        "middot": 183,
        "cedil": 184,
        "ordm": 186,
        "raquo": 187,
        "frac14": 188,
        "frac12": 189,
        "frac34": 190,
        "iquest": 191,
        "times": 215,
        "divide": 247,
        "OElig": 338,
        "oelig": 339,
        "Scaron": 352,
        "scaron": 353,
        "Yuml": 376,
        "fnof": 402,
        "circ": 710,
        "tilde": 732,
        "Alpha": 913,
        "Beta": 914,
        "Gamma": 915,
        "Delta": 916,
        "Epsilon": 917,
        "Zeta": 918,
        "Eta": 919,
        "Theta": 920,
        "Iota": 921,
        "Kappa": 922,
        "Lambda": 923,
        "Mu": 924,
        "Nu": 925,
        "Xi": 926,
        "Omicron": 927,
        "Pi": 928,
        "Rho": 929,
        "Sigma": 931,
        "Tau": 932,
        "Upsilon": 933,
        "Phi": 934,
        "Chi": 935,
        "Psi": 936,
        "Omega": 937,
        "alpha": 945,
        "beta": 946,
        "gamma": 947,
        "delta": 948,
        "epsilon": 949,
        "zeta": 950,
        "eta": 951,
        "theta": 952,
        "iota": 953,
        "kappa": 954,
        "lambda": 955,
        "mu": 956,
        "nu": 957,
        "xi": 958,
        "omicron": 959,
        "pi": 960,
        "rho": 961,
        "sigmaf": 962,
        "sigma": 963,
        "tau": 964,
        "upsilon": 965,
        "phi": 966,
        "chi": 967,
        "psi": 968,
        "omega": 969,
        "thetasym": 977,
        "upsih": 978,
        "piv": 982,
        "ensp": 8194,
        "emsp": 8195,
        "thinsp": 8201,
        "zwnj": 8204,
        "zwj": 8205,
        "lrm": 8206,
        "rlm": 8207,
        "ndash": 8211,
        "mdash": 8212,
        "lsquo": 8216,
        "rsquo": 8217,
        "sbquo": 8218,
        "ldquo": 8220,
        "rdquo": 8221,
        "bdquo": 8222,
        "dagger": 8224,
        "Dagger": 8225,
        "bull": 8226,
        "hellip": 8230,
        "permil": 8240,
        "prime": 8242,
        "Prime": 8243,
        "lsaquo": 8249,
        "rsaquo": 8250,
        "oline": 8254,
        "frasl": 8260,
        "euro": 8364,
        "image": 8465,
        "weierp": 8472,
        "real": 8476,
        "trade": 8482,
        "alefsym": 8501,
        "larr": 8592,
        "uarr": 8593,
        "rarr": 8594,
        "darr": 8595,
        "harr": 8596,
        "crarr": 8629,
        "lArr": 8656,
        "uArr": 8657,
        "rArr": 8658,
        "dArr": 8659,
        "hArr": 8660,
        "forall": 8704,
        "part": 8706,
        "exist": 8707,
        "empty": 8709,
        "nabla": 8711,
        "isin": 8712,
        "notin": 8713,
        "ni": 8715,
        "prod": 8719,
        "sum": 8721,
        "minus": 8722,
        "lowast": 8727,
        "radic": 8730,
        "prop": 8733,
        "infin": 8734,
        "ang": 8736,
        "and": 8743,
        "or": 8744,
        "cap": 8745,
        "cup": 8746,
        "int": 8747,
        "there4": 8756,
        "sim": 8764,
        "cong": 8773,
        "asymp": 8776,
        "ne": 8800,
        "equiv": 8801,
        "le": 8804,
        "ge": 8805,
        "sub": 8834,
        "sup": 8835,
        "nsub": 8836,
        "sube": 8838,
        "supe": 8839,
        "oplus": 8853,
        "otimes": 8855,
        "perp": 8869,
        "sdot": 8901,
        "lceil": 8968,
        "rceil": 8969,
        "lfloor": 8970,
        "rfloor": 8971,
        "lang": 9001,
        "rang": 9002,
        "loz": 9674,
        "spades": 9824,
        "clubs": 9827,
        "hearts": 9829,
        "diams": 9830
      };
      Object.keys(sax2.ENTITIES).forEach(function(key) {
        var e2 = sax2.ENTITIES[key];
        var s3 = typeof e2 === "number" ? String.fromCharCode(e2) : e2;
        sax2.ENTITIES[key] = s3;
      });
      for (var s2 in sax2.STATE) {
        sax2.STATE[sax2.STATE[s2]] = s2;
      }
      S = sax2.STATE;
      function emit2(parser, event, data) {
        parser[event] && parser[event](data);
      }
      function emitNode(parser, nodeType, data) {
        if (parser.textNode) closeText(parser);
        emit2(parser, nodeType, data);
      }
      function closeText(parser) {
        parser.textNode = textopts(parser.opt, parser.textNode);
        if (parser.textNode) emit2(parser, "ontext", parser.textNode);
        parser.textNode = "";
      }
      function textopts(opt, text) {
        if (opt.trim) text = text.trim();
        if (opt.normalize) text = text.replace(/\s+/g, " ");
        return text;
      }
      function error(parser, er) {
        closeText(parser);
        if (parser.trackPosition) {
          er += "\nLine: " + parser.line + "\nColumn: " + parser.column + "\nChar: " + parser.c;
        }
        er = new Error(er);
        parser.error = er;
        emit2(parser, "onerror", er);
        return parser;
      }
      function end(parser) {
        if (parser.sawRoot && !parser.closedRoot) strictFail(parser, "Unclosed root tag");
        if (parser.state !== S.BEGIN && parser.state !== S.BEGIN_WHITESPACE && parser.state !== S.TEXT) {
          error(parser, "Unexpected end");
        }
        closeText(parser);
        parser.c = "";
        parser.closed = true;
        emit2(parser, "onend");
        SAXParser.call(parser, parser.strict, parser.opt);
        return parser;
      }
      function strictFail(parser, message) {
        if (typeof parser !== "object" || !(parser instanceof SAXParser)) {
          throw new Error("bad call to strictFail");
        }
        if (parser.strict) {
          error(parser, message);
        }
      }
      function newTag(parser) {
        if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]();
        var parent = parser.tags[parser.tags.length - 1] || parser;
        var tag = parser.tag = { name: parser.tagName, attributes: {} };
        if (parser.opt.xmlns) {
          tag.ns = parent.ns;
        }
        parser.attribList.length = 0;
        emitNode(parser, "onopentagstart", tag);
      }
      function qname(name, attribute) {
        var i2 = name.indexOf(":");
        var qualName = i2 < 0 ? ["", name] : name.split(":");
        var prefix = qualName[0];
        var local = qualName[1];
        if (attribute && name === "xmlns") {
          prefix = "xmlns";
          local = "";
        }
        return { prefix, local };
      }
      function attrib(parser) {
        if (!parser.strict) {
          parser.attribName = parser.attribName[parser.looseCase]();
        }
        if (parser.attribList.indexOf(parser.attribName) !== -1 || parser.tag.attributes.hasOwnProperty(parser.attribName)) {
          parser.attribName = parser.attribValue = "";
          return;
        }
        if (parser.opt.xmlns) {
          var qn = qname(parser.attribName, true);
          var prefix = qn.prefix;
          var local = qn.local;
          if (prefix === "xmlns") {
            if (local === "xml" && parser.attribValue !== XML_NAMESPACE) {
              strictFail(
                parser,
                "xml: prefix must be bound to " + XML_NAMESPACE + "\nActual: " + parser.attribValue
              );
            } else if (local === "xmlns" && parser.attribValue !== XMLNS_NAMESPACE) {
              strictFail(
                parser,
                "xmlns: prefix must be bound to " + XMLNS_NAMESPACE + "\nActual: " + parser.attribValue
              );
            } else {
              var tag = parser.tag;
              var parent = parser.tags[parser.tags.length - 1] || parser;
              if (tag.ns === parent.ns) {
                tag.ns = Object.create(parent.ns);
              }
              tag.ns[local] = parser.attribValue;
            }
          }
          parser.attribList.push([parser.attribName, parser.attribValue]);
        } else {
          parser.tag.attributes[parser.attribName] = parser.attribValue;
          emitNode(parser, "onattribute", {
            name: parser.attribName,
            value: parser.attribValue
          });
        }
        parser.attribName = parser.attribValue = "";
      }
      function openTag(parser, selfClosing) {
        if (parser.opt.xmlns) {
          var tag = parser.tag;
          var qn = qname(parser.tagName);
          tag.prefix = qn.prefix;
          tag.local = qn.local;
          tag.uri = tag.ns[qn.prefix] || "";
          if (tag.prefix && !tag.uri) {
            strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(parser.tagName));
            tag.uri = qn.prefix;
          }
          var parent = parser.tags[parser.tags.length - 1] || parser;
          if (tag.ns && parent.ns !== tag.ns) {
            Object.keys(tag.ns).forEach(function(p2) {
              emitNode(parser, "onopennamespace", {
                prefix: p2,
                uri: tag.ns[p2]
              });
            });
          }
          for (var i2 = 0, l2 = parser.attribList.length; i2 < l2; i2++) {
            var nv = parser.attribList[i2];
            var name = nv[0];
            var value = nv[1];
            var qualName = qname(name, true);
            var prefix = qualName.prefix;
            var local = qualName.local;
            var uri = prefix === "" ? "" : tag.ns[prefix] || "";
            var a2 = {
              name,
              value,
              prefix,
              local,
              uri
            };
            if (prefix && prefix !== "xmlns" && !uri) {
              strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(prefix));
              a2.uri = prefix;
            }
            parser.tag.attributes[name] = a2;
            emitNode(parser, "onattribute", a2);
          }
          parser.attribList.length = 0;
        }
        parser.tag.isSelfClosing = !!selfClosing;
        parser.sawRoot = true;
        parser.tags.push(parser.tag);
        emitNode(parser, "onopentag", parser.tag);
        if (!selfClosing) {
          if (!parser.noscript && parser.tagName.toLowerCase() === "script") {
            parser.state = S.SCRIPT;
          } else {
            parser.state = S.TEXT;
          }
          parser.tag = null;
          parser.tagName = "";
        }
        parser.attribName = parser.attribValue = "";
        parser.attribList.length = 0;
      }
      function closeTag(parser) {
        if (!parser.tagName) {
          strictFail(parser, "Weird empty close tag.");
          parser.textNode += "</>";
          parser.state = S.TEXT;
          return;
        }
        if (parser.script) {
          if (parser.tagName !== "script") {
            parser.script += "</" + parser.tagName + ">";
            parser.tagName = "";
            parser.state = S.SCRIPT;
            return;
          }
          emitNode(parser, "onscript", parser.script);
          parser.script = "";
        }
        var t2 = parser.tags.length;
        var tagName = parser.tagName;
        if (!parser.strict) {
          tagName = tagName[parser.looseCase]();
        }
        var closeTo = tagName;
        while (t2--) {
          var close = parser.tags[t2];
          if (close.name !== closeTo) {
            strictFail(parser, "Unexpected close tag");
          } else {
            break;
          }
        }
        if (t2 < 0) {
          strictFail(parser, "Unmatched closing tag: " + parser.tagName);
          parser.textNode += "</" + parser.tagName + ">";
          parser.state = S.TEXT;
          return;
        }
        parser.tagName = tagName;
        var s3 = parser.tags.length;
        while (s3-- > t2) {
          var tag = parser.tag = parser.tags.pop();
          parser.tagName = parser.tag.name;
          emitNode(parser, "onclosetag", parser.tagName);
          var x = {};
          for (var i2 in tag.ns) {
            x[i2] = tag.ns[i2];
          }
          var parent = parser.tags[parser.tags.length - 1] || parser;
          if (parser.opt.xmlns && tag.ns !== parent.ns) {
            Object.keys(tag.ns).forEach(function(p2) {
              var n2 = tag.ns[p2];
              emitNode(parser, "onclosenamespace", { prefix: p2, uri: n2 });
            });
          }
        }
        if (t2 === 0) parser.closedRoot = true;
        parser.tagName = parser.attribValue = parser.attribName = "";
        parser.attribList.length = 0;
        parser.state = S.TEXT;
      }
      function parseEntity(parser) {
        var entity = parser.entity;
        var entityLC = entity.toLowerCase();
        var num;
        var numStr = "";
        if (parser.ENTITIES[entity]) {
          return parser.ENTITIES[entity];
        }
        if (parser.ENTITIES[entityLC]) {
          return parser.ENTITIES[entityLC];
        }
        entity = entityLC;
        if (entity.charAt(0) === "#") {
          if (entity.charAt(1) === "x") {
            entity = entity.slice(2);
            num = parseInt(entity, 16);
            numStr = num.toString(16);
          } else {
            entity = entity.slice(1);
            num = parseInt(entity, 10);
            numStr = num.toString(10);
          }
        }
        entity = entity.replace(/^0+/, "");
        if (isNaN(num) || numStr.toLowerCase() !== entity) {
          strictFail(parser, "Invalid character entity");
          return "&" + parser.entity + ";";
        }
        return String.fromCodePoint(num);
      }
      function beginWhiteSpace(parser, c2) {
        if (c2 === "<") {
          parser.state = S.OPEN_WAKA;
          parser.startTagPosition = parser.position;
        } else if (!isWhitespace(c2)) {
          strictFail(parser, "Non-whitespace before first tag.");
          parser.textNode = c2;
          parser.state = S.TEXT;
        }
      }
      function charAt(chunk, i2) {
        var result = "";
        if (i2 < chunk.length) {
          result = chunk.charAt(i2);
        }
        return result;
      }
      function write(chunk) {
        var parser = this;
        if (this.error) {
          throw this.error;
        }
        if (parser.closed) {
          return error(
            parser,
            "Cannot write after close. Assign an onready handler."
          );
        }
        if (chunk === null) {
          return end(parser);
        }
        if (typeof chunk === "object") {
          chunk = chunk.toString();
        }
        var i2 = 0;
        var c2 = "";
        while (true) {
          c2 = charAt(chunk, i2++);
          parser.c = c2;
          if (!c2) {
            break;
          }
          if (parser.trackPosition) {
            parser.position++;
            if (c2 === "\n") {
              parser.line++;
              parser.column = 0;
            } else {
              parser.column++;
            }
          }
          switch (parser.state) {
            case S.BEGIN:
              parser.state = S.BEGIN_WHITESPACE;
              if (c2 === "\uFEFF") {
                continue;
              }
              beginWhiteSpace(parser, c2);
              continue;
            case S.BEGIN_WHITESPACE:
              beginWhiteSpace(parser, c2);
              continue;
            case S.TEXT:
              if (parser.sawRoot && !parser.closedRoot) {
                var starti = i2 - 1;
                while (c2 && c2 !== "<" && c2 !== "&") {
                  c2 = charAt(chunk, i2++);
                  if (c2 && parser.trackPosition) {
                    parser.position++;
                    if (c2 === "\n") {
                      parser.line++;
                      parser.column = 0;
                    } else {
                      parser.column++;
                    }
                  }
                }
                parser.textNode += chunk.substring(starti, i2 - 1);
              }
              if (c2 === "<" && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
                parser.state = S.OPEN_WAKA;
                parser.startTagPosition = parser.position;
              } else {
                if (!isWhitespace(c2) && (!parser.sawRoot || parser.closedRoot)) {
                  strictFail(parser, "Text data outside of root node.");
                }
                if (c2 === "&") {
                  parser.state = S.TEXT_ENTITY;
                } else {
                  parser.textNode += c2;
                }
              }
              continue;
            case S.SCRIPT:
              if (c2 === "<") {
                parser.state = S.SCRIPT_ENDING;
              } else {
                parser.script += c2;
              }
              continue;
            case S.SCRIPT_ENDING:
              if (c2 === "/") {
                parser.state = S.CLOSE_TAG;
              } else {
                parser.script += "<" + c2;
                parser.state = S.SCRIPT;
              }
              continue;
            case S.OPEN_WAKA:
              if (c2 === "!") {
                parser.state = S.SGML_DECL;
                parser.sgmlDecl = "";
              } else if (isWhitespace(c2)) ;
              else if (isMatch(nameStart, c2)) {
                parser.state = S.OPEN_TAG;
                parser.tagName = c2;
              } else if (c2 === "/") {
                parser.state = S.CLOSE_TAG;
                parser.tagName = "";
              } else if (c2 === "?") {
                parser.state = S.PROC_INST;
                parser.procInstName = parser.procInstBody = "";
              } else {
                strictFail(parser, "Unencoded <");
                if (parser.startTagPosition + 1 < parser.position) {
                  var pad = parser.position - parser.startTagPosition;
                  c2 = new Array(pad).join(" ") + c2;
                }
                parser.textNode += "<" + c2;
                parser.state = S.TEXT;
              }
              continue;
            case S.SGML_DECL:
              if (parser.sgmlDecl + c2 === "--") {
                parser.state = S.COMMENT;
                parser.comment = "";
                parser.sgmlDecl = "";
                continue;
              }
              if (parser.doctype && parser.doctype !== true && parser.sgmlDecl) {
                parser.state = S.DOCTYPE_DTD;
                parser.doctype += "<!" + parser.sgmlDecl + c2;
                parser.sgmlDecl = "";
              } else if ((parser.sgmlDecl + c2).toUpperCase() === CDATA) {
                emitNode(parser, "onopencdata");
                parser.state = S.CDATA;
                parser.sgmlDecl = "";
                parser.cdata = "";
              } else if ((parser.sgmlDecl + c2).toUpperCase() === DOCTYPE) {
                parser.state = S.DOCTYPE;
                if (parser.doctype || parser.sawRoot) {
                  strictFail(
                    parser,
                    "Inappropriately located doctype declaration"
                  );
                }
                parser.doctype = "";
                parser.sgmlDecl = "";
              } else if (c2 === ">") {
                emitNode(parser, "onsgmldeclaration", parser.sgmlDecl);
                parser.sgmlDecl = "";
                parser.state = S.TEXT;
              } else if (isQuote(c2)) {
                parser.state = S.SGML_DECL_QUOTED;
                parser.sgmlDecl += c2;
              } else {
                parser.sgmlDecl += c2;
              }
              continue;
            case S.SGML_DECL_QUOTED:
              if (c2 === parser.q) {
                parser.state = S.SGML_DECL;
                parser.q = "";
              }
              parser.sgmlDecl += c2;
              continue;
            case S.DOCTYPE:
              if (c2 === ">") {
                parser.state = S.TEXT;
                emitNode(parser, "ondoctype", parser.doctype);
                parser.doctype = true;
              } else {
                parser.doctype += c2;
                if (c2 === "[") {
                  parser.state = S.DOCTYPE_DTD;
                } else if (isQuote(c2)) {
                  parser.state = S.DOCTYPE_QUOTED;
                  parser.q = c2;
                }
              }
              continue;
            case S.DOCTYPE_QUOTED:
              parser.doctype += c2;
              if (c2 === parser.q) {
                parser.q = "";
                parser.state = S.DOCTYPE;
              }
              continue;
            case S.DOCTYPE_DTD:
              if (c2 === "]") {
                parser.doctype += c2;
                parser.state = S.DOCTYPE;
              } else if (c2 === "<") {
                parser.state = S.OPEN_WAKA;
                parser.startTagPosition = parser.position;
              } else if (isQuote(c2)) {
                parser.doctype += c2;
                parser.state = S.DOCTYPE_DTD_QUOTED;
                parser.q = c2;
              } else {
                parser.doctype += c2;
              }
              continue;
            case S.DOCTYPE_DTD_QUOTED:
              parser.doctype += c2;
              if (c2 === parser.q) {
                parser.state = S.DOCTYPE_DTD;
                parser.q = "";
              }
              continue;
            case S.COMMENT:
              if (c2 === "-") {
                parser.state = S.COMMENT_ENDING;
              } else {
                parser.comment += c2;
              }
              continue;
            case S.COMMENT_ENDING:
              if (c2 === "-") {
                parser.state = S.COMMENT_ENDED;
                parser.comment = textopts(parser.opt, parser.comment);
                if (parser.comment) {
                  emitNode(parser, "oncomment", parser.comment);
                }
                parser.comment = "";
              } else {
                parser.comment += "-" + c2;
                parser.state = S.COMMENT;
              }
              continue;
            case S.COMMENT_ENDED:
              if (c2 !== ">") {
                strictFail(parser, "Malformed comment");
                parser.comment += "--" + c2;
                parser.state = S.COMMENT;
              } else if (parser.doctype && parser.doctype !== true) {
                parser.state = S.DOCTYPE_DTD;
              } else {
                parser.state = S.TEXT;
              }
              continue;
            case S.CDATA:
              if (c2 === "]") {
                parser.state = S.CDATA_ENDING;
              } else {
                parser.cdata += c2;
              }
              continue;
            case S.CDATA_ENDING:
              if (c2 === "]") {
                parser.state = S.CDATA_ENDING_2;
              } else {
                parser.cdata += "]" + c2;
                parser.state = S.CDATA;
              }
              continue;
            case S.CDATA_ENDING_2:
              if (c2 === ">") {
                if (parser.cdata) {
                  emitNode(parser, "oncdata", parser.cdata);
                }
                emitNode(parser, "onclosecdata");
                parser.cdata = "";
                parser.state = S.TEXT;
              } else if (c2 === "]") {
                parser.cdata += "]";
              } else {
                parser.cdata += "]]" + c2;
                parser.state = S.CDATA;
              }
              continue;
            case S.PROC_INST:
              if (c2 === "?") {
                parser.state = S.PROC_INST_ENDING;
              } else if (isWhitespace(c2)) {
                parser.state = S.PROC_INST_BODY;
              } else {
                parser.procInstName += c2;
              }
              continue;
            case S.PROC_INST_BODY:
              if (!parser.procInstBody && isWhitespace(c2)) {
                continue;
              } else if (c2 === "?") {
                parser.state = S.PROC_INST_ENDING;
              } else {
                parser.procInstBody += c2;
              }
              continue;
            case S.PROC_INST_ENDING:
              if (c2 === ">") {
                emitNode(parser, "onprocessinginstruction", {
                  name: parser.procInstName,
                  body: parser.procInstBody
                });
                parser.procInstName = parser.procInstBody = "";
                parser.state = S.TEXT;
              } else {
                parser.procInstBody += "?" + c2;
                parser.state = S.PROC_INST_BODY;
              }
              continue;
            case S.OPEN_TAG:
              if (isMatch(nameBody, c2)) {
                parser.tagName += c2;
              } else {
                newTag(parser);
                if (c2 === ">") {
                  openTag(parser);
                } else if (c2 === "/") {
                  parser.state = S.OPEN_TAG_SLASH;
                } else {
                  if (!isWhitespace(c2)) {
                    strictFail(parser, "Invalid character in tag name");
                  }
                  parser.state = S.ATTRIB;
                }
              }
              continue;
            case S.OPEN_TAG_SLASH:
              if (c2 === ">") {
                openTag(parser, true);
                closeTag(parser);
              } else {
                strictFail(parser, "Forward-slash in opening tag not followed by >");
                parser.state = S.ATTRIB;
              }
              continue;
            case S.ATTRIB:
              if (isWhitespace(c2)) {
                continue;
              } else if (c2 === ">") {
                openTag(parser);
              } else if (c2 === "/") {
                parser.state = S.OPEN_TAG_SLASH;
              } else if (isMatch(nameStart, c2)) {
                parser.attribName = c2;
                parser.attribValue = "";
                parser.state = S.ATTRIB_NAME;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S.ATTRIB_NAME:
              if (c2 === "=") {
                parser.state = S.ATTRIB_VALUE;
              } else if (c2 === ">") {
                strictFail(parser, "Attribute without value");
                parser.attribValue = parser.attribName;
                attrib(parser);
                openTag(parser);
              } else if (isWhitespace(c2)) {
                parser.state = S.ATTRIB_NAME_SAW_WHITE;
              } else if (isMatch(nameBody, c2)) {
                parser.attribName += c2;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S.ATTRIB_NAME_SAW_WHITE:
              if (c2 === "=") {
                parser.state = S.ATTRIB_VALUE;
              } else if (isWhitespace(c2)) {
                continue;
              } else {
                strictFail(parser, "Attribute without value");
                parser.tag.attributes[parser.attribName] = "";
                parser.attribValue = "";
                emitNode(parser, "onattribute", {
                  name: parser.attribName,
                  value: ""
                });
                parser.attribName = "";
                if (c2 === ">") {
                  openTag(parser);
                } else if (isMatch(nameStart, c2)) {
                  parser.attribName = c2;
                  parser.state = S.ATTRIB_NAME;
                } else {
                  strictFail(parser, "Invalid attribute name");
                  parser.state = S.ATTRIB;
                }
              }
              continue;
            case S.ATTRIB_VALUE:
              if (isWhitespace(c2)) {
                continue;
              } else if (isQuote(c2)) {
                parser.q = c2;
                parser.state = S.ATTRIB_VALUE_QUOTED;
              } else {
                if (!parser.opt.unquotedAttributeValues) {
                  error(parser, "Unquoted attribute value");
                }
                parser.state = S.ATTRIB_VALUE_UNQUOTED;
                parser.attribValue = c2;
              }
              continue;
            case S.ATTRIB_VALUE_QUOTED:
              if (c2 !== parser.q) {
                if (c2 === "&") {
                  parser.state = S.ATTRIB_VALUE_ENTITY_Q;
                } else {
                  parser.attribValue += c2;
                }
                continue;
              }
              attrib(parser);
              parser.q = "";
              parser.state = S.ATTRIB_VALUE_CLOSED;
              continue;
            case S.ATTRIB_VALUE_CLOSED:
              if (isWhitespace(c2)) {
                parser.state = S.ATTRIB;
              } else if (c2 === ">") {
                openTag(parser);
              } else if (c2 === "/") {
                parser.state = S.OPEN_TAG_SLASH;
              } else if (isMatch(nameStart, c2)) {
                strictFail(parser, "No whitespace between attributes");
                parser.attribName = c2;
                parser.attribValue = "";
                parser.state = S.ATTRIB_NAME;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S.ATTRIB_VALUE_UNQUOTED:
              if (!isAttribEnd(c2)) {
                if (c2 === "&") {
                  parser.state = S.ATTRIB_VALUE_ENTITY_U;
                } else {
                  parser.attribValue += c2;
                }
                continue;
              }
              attrib(parser);
              if (c2 === ">") {
                openTag(parser);
              } else {
                parser.state = S.ATTRIB;
              }
              continue;
            case S.CLOSE_TAG:
              if (!parser.tagName) {
                if (isWhitespace(c2)) {
                  continue;
                } else if (notMatch(nameStart, c2)) {
                  if (parser.script) {
                    parser.script += "</" + c2;
                    parser.state = S.SCRIPT;
                  } else {
                    strictFail(parser, "Invalid tagname in closing tag.");
                  }
                } else {
                  parser.tagName = c2;
                }
              } else if (c2 === ">") {
                closeTag(parser);
              } else if (isMatch(nameBody, c2)) {
                parser.tagName += c2;
              } else if (parser.script) {
                parser.script += "</" + parser.tagName;
                parser.tagName = "";
                parser.state = S.SCRIPT;
              } else {
                if (!isWhitespace(c2)) {
                  strictFail(parser, "Invalid tagname in closing tag");
                }
                parser.state = S.CLOSE_TAG_SAW_WHITE;
              }
              continue;
            case S.CLOSE_TAG_SAW_WHITE:
              if (isWhitespace(c2)) {
                continue;
              }
              if (c2 === ">") {
                closeTag(parser);
              } else {
                strictFail(parser, "Invalid characters in closing tag");
              }
              continue;
            case S.TEXT_ENTITY:
            case S.ATTRIB_VALUE_ENTITY_Q:
            case S.ATTRIB_VALUE_ENTITY_U:
              var returnState;
              var buffer;
              switch (parser.state) {
                case S.TEXT_ENTITY:
                  returnState = S.TEXT;
                  buffer = "textNode";
                  break;
                case S.ATTRIB_VALUE_ENTITY_Q:
                  returnState = S.ATTRIB_VALUE_QUOTED;
                  buffer = "attribValue";
                  break;
                case S.ATTRIB_VALUE_ENTITY_U:
                  returnState = S.ATTRIB_VALUE_UNQUOTED;
                  buffer = "attribValue";
                  break;
              }
              if (c2 === ";") {
                var parsedEntity = parseEntity(parser);
                if (parser.opt.unparsedEntities && !Object.values(sax2.XML_ENTITIES).includes(parsedEntity)) {
                  parser.entity = "";
                  parser.state = returnState;
                  parser.write(parsedEntity);
                } else {
                  parser[buffer] += parsedEntity;
                  parser.entity = "";
                  parser.state = returnState;
                }
              } else if (isMatch(parser.entity.length ? entityBody : entityStart, c2)) {
                parser.entity += c2;
              } else {
                strictFail(parser, "Invalid character in entity name");
                parser[buffer] += "&" + parser.entity + c2;
                parser.entity = "";
                parser.state = returnState;
              }
              continue;
            default: {
              throw new Error(parser, "Unknown state: " + parser.state);
            }
          }
        }
        if (parser.position >= parser.bufferCheckPosition) {
          checkBufferLength(parser);
        }
        return parser;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      if (!String.fromCodePoint) {
        (function() {
          var stringFromCharCode = String.fromCharCode;
          var floor = Math.floor;
          var fromCodePoint = function() {
            var MAX_SIZE = 16384;
            var codeUnits = [];
            var highSurrogate;
            var lowSurrogate;
            var index = -1;
            var length = arguments.length;
            if (!length) {
              return "";
            }
            var result = "";
            while (++index < length) {
              var codePoint = Number(arguments[index]);
              if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
              codePoint < 0 || // not a valid Unicode code point
              codePoint > 1114111 || // not a valid Unicode code point
              floor(codePoint) !== codePoint) {
                throw RangeError("Invalid code point: " + codePoint);
              }
              if (codePoint <= 65535) {
                codeUnits.push(codePoint);
              } else {
                codePoint -= 65536;
                highSurrogate = (codePoint >> 10) + 55296;
                lowSurrogate = codePoint % 1024 + 56320;
                codeUnits.push(highSurrogate, lowSurrogate);
              }
              if (index + 1 === length || codeUnits.length > MAX_SIZE) {
                result += stringFromCharCode.apply(null, codeUnits);
                codeUnits.length = 0;
              }
            }
            return result;
          };
          if (Object.defineProperty) {
            Object.defineProperty(String, "fromCodePoint", {
              value: fromCodePoint,
              configurable: true,
              writable: true
            });
          } else {
            String.fromCodePoint = fromCodePoint;
          }
        })();
      }
    })(exports);
  })(sax$1);
  return sax$1;
}
requireSax();
var InvalidFilenameErrorReason = /* @__PURE__ */ ((InvalidFilenameErrorReason2) => {
  InvalidFilenameErrorReason2["ReservedName"] = "reserved name";
  InvalidFilenameErrorReason2["Character"] = "character";
  InvalidFilenameErrorReason2["Extension"] = "extension";
  return InvalidFilenameErrorReason2;
})(InvalidFilenameErrorReason || {});
class InvalidFilenameError extends Error {
  constructor(options) {
    super(`Invalid ${options.reason} '${options.segment}' in filename '${options.filename}'`, { cause: options });
  }
  /**
   * The filename that was validated
   */
  get filename() {
    return this.cause.filename;
  }
  /**
   * Reason why the validation failed
   */
  get reason() {
    return this.cause.reason;
  }
  /**
   * Part of the filename that caused this error
   */
  get segment() {
    return this.cause.segment;
  }
}
function validateFilename(filename) {
  const capabilities = getCapabilities().files;
  const forbiddenCharacters = capabilities.forbidden_filename_characters ?? window._oc_config?.forbidden_filenames_characters ?? ["/", "\\"];
  for (const character of forbiddenCharacters) {
    if (filename.includes(character)) {
      throw new InvalidFilenameError({ segment: character, reason: "character", filename });
    }
  }
  filename = filename.toLocaleLowerCase();
  const forbiddenFilenames = capabilities.forbidden_filenames ?? [".htaccess"];
  if (forbiddenFilenames.includes(filename)) {
    throw new InvalidFilenameError({
      filename,
      segment: filename,
      reason: "reserved name"
      /* ReservedName */
    });
  }
  const endOfBasename = filename.indexOf(".", 1);
  const basename2 = filename.substring(0, endOfBasename === -1 ? void 0 : endOfBasename);
  const forbiddenFilenameBasenames = capabilities.forbidden_filename_basenames ?? [];
  if (forbiddenFilenameBasenames.includes(basename2)) {
    throw new InvalidFilenameError({
      filename,
      segment: basename2,
      reason: "reserved name"
      /* ReservedName */
    });
  }
  const forbiddenFilenameExtensions = capabilities.forbidden_filename_extensions ?? [".part", ".filepart"];
  for (const extension of forbiddenFilenameExtensions) {
    if (filename.length > extension.length && filename.endsWith(extension)) {
      throw new InvalidFilenameError({ segment: extension, reason: "extension", filename });
    }
  }
}
const humanList = ["B", "KB", "MB", "GB", "TB", "PB"];
const humanListBinary = ["B", "KiB", "MiB", "GiB", "TiB", "PiB"];
function formatFileSize(size, skipSmallSizes = false, binaryPrefixes = false, base1000 = false) {
  binaryPrefixes = binaryPrefixes && !base1000;
  if (typeof size === "string") {
    size = Number(size);
  }
  let order = size > 0 ? Math.floor(Math.log(size) / Math.log(base1000 ? 1e3 : 1024)) : 0;
  order = Math.min((binaryPrefixes ? humanListBinary.length : humanList.length) - 1, order);
  const readableFormat = binaryPrefixes ? humanListBinary[order] : humanList[order];
  let relativeSize = (size / Math.pow(base1000 ? 1e3 : 1024, order)).toFixed(1);
  if (skipSmallSizes === true && order === 0) {
    return (relativeSize !== "0.0" ? "< 1 " : "0 ") + (binaryPrefixes ? humanListBinary[1] : humanList[1]);
  }
  if (order < 2) {
    relativeSize = parseFloat(relativeSize).toFixed(0);
  } else {
    relativeSize = parseFloat(relativeSize).toLocaleString(getCanonicalLocale());
  }
  return relativeSize + " " + readableFormat;
}
function stringify(value) {
  if (value instanceof Date) {
    return value.toISOString();
  }
  return String(value);
}
function orderBy(collection, identifiers2, orders) {
  identifiers2 = identifiers2 ?? [(value) => value];
  orders = orders ?? [];
  const sorting = identifiers2.map((_2, index) => (orders[index] ?? "asc") === "asc" ? 1 : -1);
  const collator = Intl.Collator(
    [getLanguage(), getCanonicalLocale()],
    {
      // handle 10 as ten and not as one-zero
      numeric: true,
      usage: "sort"
    }
  );
  return [...collection].sort((a2, b2) => {
    for (const [index, identifier] of identifiers2.entries()) {
      const value = collator.compare(stringify(identifier(a2)), stringify(identifier(b2)));
      if (value !== 0) {
        return value * sorting[index];
      }
    }
    return 0;
  });
}
function sortNodes(nodes, options = {}) {
  const sortingOptions = {
    // Default to sort by name
    sortingMode: "basename",
    // Default to sort ascending
    sortingOrder: "asc",
    ...options
  };
  function basename2(node) {
    const name = node.displayname || node.attributes?.displayname || node.basename || "";
    if (node.type === FileType.Folder) {
      return name;
    }
    return name.lastIndexOf(".") > 0 ? name.slice(0, name.lastIndexOf(".")) : name;
  }
  const identifiers2 = [
    // 1: Sort favorites first if enabled
    ...sortingOptions.sortFavoritesFirst ? [(v) => v.attributes?.favorite !== 1] : [],
    // 2: Sort folders first if sorting by name
    ...sortingOptions.sortFoldersFirst ? [(v) => v.type !== "folder"] : [],
    // 3: Use sorting mode if NOT basename (to be able to use display name too)
    ...sortingOptions.sortingMode !== "basename" ? [(v) => v[sortingOptions.sortingMode] ?? v.attributes[sortingOptions.sortingMode]] : [],
    // 4: Use display name if available, fallback to name
    (v) => basename2(v),
    // 5: Finally, use basename if all previous sorting methods failed
    (v) => v.basename
  ];
  const orders = [
    // (for 1): always sort favorites before normal files
    ...sortingOptions.sortFavoritesFirst ? ["asc"] : [],
    // (for 2): always sort folders before files
    ...sortingOptions.sortFoldersFirst ? ["asc"] : [],
    // (for 3): Reverse if sorting by mtime as mtime higher means edited more recent -> lower
    ...sortingOptions.sortingMode === "mtime" ? [sortingOptions.sortingOrder === "asc" ? "desc" : "asc"] : [],
    // (also for 3 so make sure not to conflict with 2 and 3)
    ...sortingOptions.sortingMode !== "mtime" && sortingOptions.sortingMode !== "basename" ? [sortingOptions.sortingOrder] : [],
    // for 4: use configured sorting direction
    sortingOptions.sortingOrder,
    // for 5: use configured sorting direction
    sortingOptions.sortingOrder
  ];
  return orderBy(nodes, identifiers2, orders);
}
const queue = new PQueue({ concurrency: 5 });
function preloadImage(url) {
  const { resolve: resolve2, promise } = Promise.withResolvers();
  queue.add(() => {
    const image = new Image();
    image.onerror = () => resolve2(false);
    image.onload = () => resolve2(true);
    image.src = url;
    return promise;
  });
  return promise;
}
function getPreviewURL(node, options = {}) {
  options = { size: 32, cropPreview: false, mimeFallback: true, ...options };
  try {
    const previewUrl = node.attributes?.previewUrl || generateUrl("/core/preview?fileId={fileid}", {
      fileid: node.fileid
    });
    let url;
    try {
      url = new URL(previewUrl);
    } catch {
      url = new URL(previewUrl, window.location.origin);
    }
    url.searchParams.set("x", `${options.size}`);
    url.searchParams.set("y", `${options.size}`);
    url.searchParams.set("mimeFallback", `${options.mimeFallback}`);
    url.searchParams.set("a", options.cropPreview === true ? "0" : "1");
    url.searchParams.set("c", `${node.attributes.etag}`);
    return url;
  } catch {
    return null;
  }
}
function usePreviewURL(node, options) {
  const previewURL = ref(null);
  const previewLoaded = ref(false);
  watchEffect(() => {
    previewLoaded.value = false;
    previewURL.value = getPreviewURL(toValue(node), toValue(options || {}));
    if (previewURL.value && toValue(node).type === FileType.File) {
      preloadImage(previewURL.value.href).then((success) => {
        previewLoaded.value = success;
      });
    }
  });
  return {
    previewURL,
    previewLoaded
  };
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
var ShareType;
(function(ShareType2) {
  ShareType2[ShareType2["User"] = 0] = "User";
  ShareType2[ShareType2["Group"] = 1] = "Group";
  ShareType2[ShareType2["Link"] = 3] = "Link";
  ShareType2[ShareType2["Email"] = 4] = "Email";
  ShareType2[ShareType2["Remote"] = 6] = "Remote";
  ShareType2[ShareType2["Team"] = 7] = "Team";
  ShareType2[ShareType2["Guest"] = 8] = "Guest";
  ShareType2[ShareType2["RemoteGroup"] = 9] = "RemoteGroup";
  ShareType2[ShareType2["Room"] = 10] = "Room";
  ShareType2[ShareType2["Deck"] = 12] = "Deck";
  ShareType2[ShareType2["FederatedGroup"] = 14] = "FederatedGroup";
  ShareType2[ShareType2["ScienceMesh"] = 15] = "ScienceMesh";
})(ShareType || (ShareType = {}));
const _sfc_main$e = {
  name: "FileIcon",
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
const _hoisted_1$c = ["aria-hidden", "aria-label"];
const _hoisted_2$b = ["fill", "width", "height"];
const _hoisted_3$a = { d: "M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" };
const _hoisted_4$a = { key: 0 };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon file-icon",
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
      createBaseVNode("path", _hoisted_3$a, [
        $props.title ? (openBlock(), createElementBlock("title", _hoisted_4$a, toDisplayString($props.title), 1)) : createCommentVNode("", true)
      ])
    ], 8, _hoisted_2$b))
  ], 16, _hoisted_1$c);
}
const IconFile = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$7]]);
const _sfc_main$d = {
  name: "MenuDownIcon",
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
const _hoisted_1$b = ["aria-hidden", "aria-label"];
const _hoisted_2$a = ["fill", "width", "height"];
const _hoisted_3$9 = { d: "M7,10L12,15L17,10H7Z" };
const _hoisted_4$9 = { key: 0 };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon menu-down-icon",
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
      createBaseVNode("path", _hoisted_3$9, [
        $props.title ? (openBlock(), createElementBlock("title", _hoisted_4$9, toDisplayString($props.title), 1)) : createCommentVNode("", true)
      ])
    ], 8, _hoisted_2$a))
  ], 16, _hoisted_1$b);
}
const IconSortDescending = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$6]]);
const _sfc_main$c = {
  name: "MenuUpIcon",
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
const _hoisted_1$a = ["aria-hidden", "aria-label"];
const _hoisted_2$9 = ["fill", "width", "height"];
const _hoisted_3$8 = { d: "M7,15L12,10L17,15H7Z" };
const _hoisted_4$8 = { key: 0 };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon menu-up-icon",
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
      createBaseVNode("path", _hoisted_3$8, [
        $props.title ? (openBlock(), createElementBlock("title", _hoisted_4$8, toDisplayString($props.title), 1)) : createCommentVNode("", true)
      ])
    ], 8, _hoisted_2$9))
  ], 16, _hoisted_1$a);
}
const IconSortAscending = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$5]]);
const _sfc_main$b = {
  name: "FolderIcon",
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
const _hoisted_1$9 = ["aria-hidden", "aria-label"];
const _hoisted_2$8 = ["fill", "width", "height"];
const _hoisted_3$7 = { d: "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" };
const _hoisted_4$7 = { key: 0 };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon folder-icon",
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
      createBaseVNode("path", _hoisted_3$7, [
        $props.title ? (openBlock(), createElementBlock("title", _hoisted_4$7, toDisplayString($props.title), 1)) : createCommentVNode("", true)
      ])
    ], 8, _hoisted_2$8))
  ], 16, _hoisted_1$9);
}
const IconFolder = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$4]]);
const fileListIconStyles = {
  "file-picker__file-icon": "_file-picker__file-icon_3v9zx_9",
  "file-picker__file-icon--primary": "_file-picker__file-icon--primary_3v9zx_21",
  "file-picker__file-icon-overlay": "_file-picker__file-icon-overlay_3v9zx_25"
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "FilePreview",
  props: {
    node: {},
    cropImagePreviews: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const fileListIconStyles$1 = ref(fileListIconStyles);
    const {
      previewURL,
      previewLoaded
    } = usePreviewURL(toRef(props, "node"), computed(() => ({ cropPreview: props.cropImagePreviews })));
    const isFile = computed(() => props.node.type === FileType.File);
    const folderDecorationIcon = computed(() => {
      if (props.node.type !== FileType.Folder) {
        return null;
      }
      if (props.node.attributes?.["is-encrypted"] === 1) {
        return mdiKey;
      }
      if (props.node.attributes?.["is-tag"]) {
        return mdiTagOutline;
      }
      const shareTypes = Object.values(props.node.attributes?.["share-types"] || {}).flat();
      if (shareTypes.some((type) => type === ShareType.Link || type === ShareType.Email)) {
        return mdiLink;
      }
      if (shareTypes.length > 0) {
        return mdiAccountPlus;
      }
      switch (props.node.attributes?.["mount-type"]) {
        case "external":
        case "external-session":
          return mdiNetworkOutline;
        case "group":
          return mdiAccountGroupOutline;
        case "shared":
          return mdiAccountPlus;
      }
      return null;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        style: normalizeStyle(unref(previewLoaded) ? { backgroundImage: `url(${unref(previewURL)})` } : void 0),
        class: normalizeClass(fileListIconStyles$1.value["file-picker__file-icon"])
      }, [
        !unref(previewLoaded) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          isFile.value ? (openBlock(), createBlock(IconFile, {
            key: 0,
            size: 32
          })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            folderDecorationIcon.value ? (openBlock(), createBlock(unref(NcIconSvgWrapper), {
              key: 0,
              class: normalizeClass(fileListIconStyles$1.value["file-picker__file-icon-overlay"]),
              inline: "",
              path: folderDecorationIcon.value,
              size: 16
            }, null, 8, ["class", "path"])) : createCommentVNode("", true),
            createVNode(IconFolder, {
              class: normalizeClass(fileListIconStyles$1.value["file-picker__file-icon--primary"]),
              size: 32
            }, null, 8, ["class"])
          ], 64))
        ], 64)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
const _hoisted_1$8 = ["tabindex", "aria-selected", "data-filename"];
const _hoisted_2$7 = { class: "row-name" };
const _hoisted_3$6 = {
  class: "file-picker__name-container",
  "data-testid": "row-name"
};
const _hoisted_4$6 = ["title", "textContent"];
const _hoisted_5$1 = ["textContent"];
const _hoisted_6$1 = { class: "row-size" };
const _hoisted_7$1 = { class: "row-modified" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "FileListRow",
  props: {
    allowPickDirectory: { type: Boolean },
    selected: { type: Boolean },
    showCheckbox: { type: Boolean },
    canPick: { type: Boolean },
    node: {},
    cropImagePreviews: { type: Boolean }
  },
  emits: ["update:selected", "enterDirectory"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit2 = __emit;
    const timestamp = computed(() => props.node.mtime ?? 0);
    const fileExtension = computed(() => extname(props.node.displayname));
    const displayName = computed(() => props.node.displayname.slice(0, fileExtension.value ? -fileExtension.value.length : void 0));
    const isDirectory = computed(() => props.node.type === FileType.Folder);
    const isPickable = computed(() => props.canPick && (props.allowPickDirectory || !isDirectory.value));
    const isNavigatable = computed(() => (props.node.permissions & Permission.READ) === Permission.READ);
    function toggleSelected() {
      if (!isPickable.value) {
        return;
      }
      emit2("update:selected", !props.selected);
    }
    function handleClick() {
      if (isDirectory.value) {
        if (isNavigatable.value) {
          emit2("enterDirectory", props.node);
        }
      } else {
        toggleSelected();
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Enter") {
        handleClick();
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("tr", mergeProps({
        tabindex: __props.showCheckbox && !isDirectory.value ? void 0 : 0,
        "aria-selected": !isPickable.value ? void 0 : __props.selected,
        class: ["file-picker__row", [
          {
            "file-picker__row--selected": __props.selected && !__props.showCheckbox,
            "file-picker__row--not-navigatable": isDirectory.value && !isNavigatable.value,
            "file-picker__row--not-pickable": !isPickable.value
          }
        ]],
        "data-filename": __props.node.basename,
        "data-testid": "file-list-row"
      }, toHandlers({
        click: handleClick,
        /* same as tabindex -> if we hide the checkbox or this is a directory we need keyboard access to enter the directory or select the node */
        ...!__props.showCheckbox || isDirectory.value ? { keydown: handleKeyDown } : {}
      }, true)), [
        __props.showCheckbox ? (openBlock(), createElementBlock("td", {
          key: 0,
          class: "row-checkbox",
          onClick: withModifiers(() => {
          }, ["stop"])
        }, [
          createVNode(unref(NcCheckboxRadioSwitch), {
            "aria-label": unref(t)("Select the row for {nodename}", { nodename: displayName.value }),
            disabled: !isPickable.value,
            "data-testid": "row-checkbox",
            "model-value": __props.selected,
            "onUpdate:modelValue": toggleSelected
          }, null, 8, ["aria-label", "disabled", "model-value"])
        ])) : createCommentVNode("", true),
        createBaseVNode("td", _hoisted_2$7, [
          createBaseVNode("div", _hoisted_3$6, [
            createVNode(_sfc_main$a, {
              node: __props.node,
              "crop-image-previews": __props.cropImagePreviews
            }, null, 8, ["node", "crop-image-previews"]),
            createBaseVNode("div", {
              class: "file-picker__file-name",
              title: displayName.value,
              textContent: toDisplayString(displayName.value)
            }, null, 8, _hoisted_4$6),
            createBaseVNode("div", {
              class: "file-picker__file-extension",
              textContent: toDisplayString(fileExtension.value)
            }, null, 8, _hoisted_5$1)
          ])
        ]),
        createBaseVNode("td", _hoisted_6$1, toDisplayString(unref(formatFileSize)(__props.node.size || 0)), 1),
        createBaseVNode("td", _hoisted_7$1, [
          createVNode(unref(_sfc_main$i), {
            timestamp: timestamp.value,
            "ignore-seconds": ""
          }, null, 8, ["timestamp"])
        ])
      ], 16, _hoisted_1$8);
    };
  }
});
const FileListRow = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-2af740c4"]]);
const _hoisted_1$7 = {
  "aria-hidden": "true",
  class: "file-picker__row loading-row"
};
const _hoisted_2$6 = {
  key: 0,
  class: "row-checkbox"
};
const _hoisted_3$5 = { class: "row-name" };
const _hoisted_4$5 = { class: "row-wrapper" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "LoadingTableRow",
  props: {
    showCheckbox: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("tr", _hoisted_1$7, [
        __props.showCheckbox ? (openBlock(), createElementBlock("td", _hoisted_2$6, [..._cache[0] || (_cache[0] = [
          createBaseVNode("span", null, null, -1)
        ])])) : createCommentVNode("", true),
        createBaseVNode("td", _hoisted_3$5, [
          createBaseVNode("div", _hoisted_4$5, [
            createBaseVNode("span", {
              class: normalizeClass(unref(fileListIconStyles)["file-picker__file-icon"])
            }, null, 2),
            _cache[1] || (_cache[1] = createBaseVNode("span", null, null, -1))
          ])
        ]),
        _cache[2] || (_cache[2] = createBaseVNode("td", { class: "row-size" }, [
          createBaseVNode("span")
        ], -1)),
        _cache[3] || (_cache[3] = createBaseVNode("td", { class: "row-modified" }, [
          createBaseVNode("span")
        ], -1))
      ]);
    };
  }
});
const LoadingTableRow = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-1f96131b"]]);
function useFilesSettings() {
  const filesUserState = loadState("files", "config", null);
  const showHiddenFiles = ref(filesUserState?.show_hidden ?? true);
  const sortFavoritesFirst = ref(filesUserState?.sort_favorites_first ?? true);
  const cropImagePreviews = ref(filesUserState?.crop_image_previews ?? true);
  onMounted(async () => {
    if (!isPublicShare()) {
      try {
        const { data } = await cancelableClient.get(generateUrl("/apps/files/api/v1/configs"));
        showHiddenFiles.value = data?.data?.show_hidden ?? false;
        sortFavoritesFirst.value = data?.data?.sort_favorites_first ?? true;
        cropImagePreviews.value = data?.data?.crop_image_previews ?? true;
      } catch (error) {
        logger$1.error("Could not load files settings", { error });
        showError(t("Could not load files settings"));
      }
    } else {
      logger$1.debug("Skip loading files settings - currently on public share");
    }
  });
  return {
    showHiddenFiles,
    sortFavoritesFirst,
    cropImagePreviews
  };
}
function useFilesViews(currentView) {
  const convertOrder = (order2) => order2 === "asc" ? "ascending" : order2 === "desc" ? "descending" : "none";
  const filesViewsState = loadState("files", "viewConfigs", null);
  const filesViewConfig = ref({
    sortBy: filesViewsState?.files?.sorting_mode ?? "basename",
    order: convertOrder(filesViewsState?.files?.sorting_direction ?? "asc")
  });
  const recentViewConfig = ref({
    sortBy: filesViewsState?.recent?.sorting_mode ?? "basename",
    order: convertOrder(filesViewsState?.recent?.sorting_direction ?? "asc")
  });
  const favoritesViewConfig = ref({
    sortBy: filesViewsState?.favorites?.sorting_mode ?? "basename",
    order: convertOrder(filesViewsState?.favorites?.sorting_direction ?? "asc")
  });
  onMounted(async () => {
    if (!isPublicShare()) {
      try {
        const { data } = await cancelableClient.get(generateUrl("/apps/files/api/v1/views"));
        filesViewConfig.value = {
          sortBy: data?.data?.files?.sorting_mode ?? "basename",
          order: convertOrder(data?.data?.files?.sorting_direction)
        };
        favoritesViewConfig.value = {
          sortBy: data?.data?.favorites?.sorting_mode ?? "basename",
          order: convertOrder(data?.data?.favorites?.sorting_direction)
        };
        recentViewConfig.value = {
          sortBy: data?.data?.recent?.sorting_mode ?? "basename",
          order: convertOrder(data?.data?.recent?.sorting_direction)
        };
      } catch (error) {
        logger$1.error("Could not load files views", { error });
        showError(t("Could not load files views"));
      }
    } else {
      logger$1.debug("Skip loading files views - currently on public share");
    }
  });
  const currentConfig = computed(() => toValue(currentView || "files") === "files" ? filesViewConfig.value : toValue(currentView) === "recent" ? recentViewConfig.value : favoritesViewConfig.value);
  const sortBy = computed(() => currentConfig.value.sortBy);
  const order = computed(() => currentConfig.value.order);
  return {
    filesViewConfig,
    favoritesViewConfig,
    recentViewConfig,
    currentConfig,
    sortBy,
    order
  };
}
const _hoisted_1$6 = {
  key: 0,
  class: "row-checkbox"
};
const _hoisted_2$5 = { class: "hidden-visually" };
const _hoisted_3$4 = ["aria-sort"];
const _hoisted_4$4 = { class: "header-wrapper" };
const _hoisted_5 = {
  key: 2,
  style: { "width": "44px" }
};
const _hoisted_6 = ["aria-sort"];
const _hoisted_7 = {
  key: 2,
  style: { "width": "44px" }
};
const _hoisted_8 = ["aria-sort"];
const _hoisted_9 = {
  key: 2,
  style: { "width": "44px" }
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "FileList",
  props: /* @__PURE__ */ mergeModels({
    currentView: {},
    multiselect: { type: Boolean },
    allowPickDirectory: { type: Boolean },
    loading: { type: Boolean },
    files: {},
    canPick: { type: Function }
  }, {
    "path": { required: true },
    "pathModifiers": {},
    "selectedFiles": { required: true },
    "selectedFilesModifiers": {}
  }),
  emits: ["update:path", "update:selectedFiles"],
  setup(__props) {
    const path = useModel(__props, "path");
    const selectedFiles = useModel(__props, "selectedFiles");
    const props = __props;
    const customSortingConfig = ref();
    const { currentConfig: filesAppSorting } = useFilesViews(props.currentView);
    const sortingConfig = computed(() => customSortingConfig.value ?? filesAppSorting.value);
    const sortByName = computed(() => sortingConfig.value.sortBy === "basename" ? sortingConfig.value.order === "none" ? void 0 : sortingConfig.value.order : void 0);
    const sortBySize = computed(() => sortingConfig.value.sortBy === "size" ? sortingConfig.value.order === "none" ? void 0 : sortingConfig.value.order : void 0);
    const sortByModified = computed(() => sortingConfig.value.sortBy === "mtime" ? sortingConfig.value.order === "none" ? void 0 : sortingConfig.value.order : void 0);
    function toggleSorting(sortBy) {
      if (sortingConfig.value.sortBy === sortBy) {
        if (sortingConfig.value.order === "ascending") {
          customSortingConfig.value = { sortBy: sortingConfig.value.sortBy, order: "descending" };
        } else {
          customSortingConfig.value = { sortBy: sortingConfig.value.sortBy, order: "ascending" };
        }
      } else {
        customSortingConfig.value = { sortBy, order: "ascending" };
      }
    }
    const { sortFavoritesFirst, cropImagePreviews } = useFilesSettings();
    const sortedFiles = computed(() => {
      return sortNodes(props.files, {
        sortFoldersFirst: true,
        sortFavoritesFirst: sortFavoritesFirst.value,
        sortingOrder: sortingConfig.value.order === "descending" ? "desc" : "asc",
        sortingMode: sortingConfig.value.sortBy
      });
    });
    const selectableFiles = computed(() => props.files.filter((file) => props.allowPickDirectory || file.type !== FileType.Folder));
    const allSelected = computed(() => !props.loading && selectedFiles.value.length > 0 && selectedFiles.value.length >= selectableFiles.value.length);
    function onSelectAll() {
      if (selectedFiles.value.length < selectableFiles.value.length) {
        selectedFiles.value = [...selectableFiles.value];
      } else {
        selectedFiles.value = [];
      }
    }
    function onNodeSelected(file) {
      if (selectedFiles.value.includes(file)) {
        selectedFiles.value = selectedFiles.value.filter((f) => f.path !== file.path);
      } else {
        if (props.multiselect) {
          selectedFiles.value = [...selectedFiles.value, file];
        } else {
          selectedFiles.value = [file];
        }
      }
    }
    function onChangeDirectory(dir) {
      path.value = dir.path;
    }
    const skeletonNumber = ref(4);
    const fileContainer = ref();
    {
      const resize = () => nextTick(() => {
        const nodes = fileContainer.value?.parentElement?.children || [];
        let height = fileContainer.value?.parentElement?.clientHeight || 450;
        for (let index = 0; index < nodes.length; index++) {
          if (!fileContainer.value?.isSameNode(nodes[index])) {
            height -= nodes[index].clientHeight;
          }
        }
        skeletonNumber.value = Math.max(1, Math.floor((height - 50) / 50));
      });
      onMounted(() => {
        window.addEventListener("resize", resize);
        resize();
      });
      onUnmounted(() => {
        window.removeEventListener("resize", resize);
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "fileContainer",
        ref: fileContainer,
        class: "file-picker__files"
      }, [
        createBaseVNode("table", null, [
          createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              __props.multiselect ? (openBlock(), createElementBlock("th", _hoisted_1$6, [
                createBaseVNode("span", _hoisted_2$5, toDisplayString(unref(t)("Select entry")), 1),
                __props.multiselect ? (openBlock(), createBlock(unref(NcCheckboxRadioSwitch), {
                  key: 0,
                  "aria-label": unref(t)("Select all entries"),
                  "data-testid": "select-all-checkbox",
                  "model-value": allSelected.value,
                  "onUpdate:modelValue": onSelectAll
                }, null, 8, ["aria-label", "model-value"])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              createBaseVNode("th", {
                "aria-sort": sortByName.value,
                class: "row-name"
              }, [
                createBaseVNode("div", _hoisted_4$4, [
                  _cache[3] || (_cache[3] = createBaseVNode("span", { class: "file-picker__header-preview" }, null, -1)),
                  createVNode(unref(NcButton), {
                    "data-test": "file-picker_sort-name",
                    variant: "tertiary",
                    wide: "",
                    onClick: _cache[0] || (_cache[0] = ($event) => toggleSorting("basename"))
                  }, {
                    icon: withCtx(() => [
                      sortByName.value === "ascending" ? (openBlock(), createBlock(IconSortAscending, {
                        key: 0,
                        size: 20
                      })) : sortByName.value === "descending" ? (openBlock(), createBlock(IconSortDescending, {
                        key: 1,
                        size: 20
                      })) : (openBlock(), createElementBlock("span", _hoisted_5))
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" " + toDisplayString(unref(t)("Name")), 1)
                    ]),
                    _: 1
                  })
                ])
              ], 8, _hoisted_3$4),
              createBaseVNode("th", {
                "aria-sort": sortBySize.value,
                class: "row-size"
              }, [
                createVNode(unref(NcButton), {
                  variant: "tertiary",
                  wide: "",
                  onClick: _cache[1] || (_cache[1] = ($event) => toggleSorting("size"))
                }, {
                  icon: withCtx(() => [
                    sortBySize.value === "ascending" ? (openBlock(), createBlock(IconSortAscending, {
                      key: 0,
                      size: 20
                    })) : sortBySize.value === "descending" ? (openBlock(), createBlock(IconSortDescending, {
                      key: 1,
                      size: 20
                    })) : (openBlock(), createElementBlock("span", _hoisted_7))
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" " + toDisplayString(unref(t)("Size")), 1)
                  ]),
                  _: 1
                })
              ], 8, _hoisted_6),
              createBaseVNode("th", {
                "aria-sort": sortByModified.value,
                class: "row-modified"
              }, [
                createVNode(unref(NcButton), {
                  variant: "tertiary",
                  wide: "",
                  onClick: _cache[2] || (_cache[2] = ($event) => toggleSorting("mtime"))
                }, {
                  icon: withCtx(() => [
                    sortByModified.value === "ascending" ? (openBlock(), createBlock(IconSortAscending, {
                      key: 0,
                      size: 20
                    })) : sortByModified.value === "descending" ? (openBlock(), createBlock(IconSortDescending, {
                      key: 1,
                      size: 20
                    })) : (openBlock(), createElementBlock("span", _hoisted_9))
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" " + toDisplayString(unref(t)("Modified")), 1)
                  ]),
                  _: 1
                })
              ], 8, _hoisted_8)
            ])
          ]),
          createBaseVNode("tbody", null, [
            __props.loading ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(skeletonNumber.value, (index) => {
              return openBlock(), createBlock(LoadingTableRow, {
                key: index,
                "show-checkbox": __props.multiselect
              }, null, 8, ["show-checkbox"]);
            }), 128)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(sortedFiles.value, (file) => {
              return openBlock(), createBlock(FileListRow, {
                key: file.fileid || file.path,
                "allow-pick-directory": __props.allowPickDirectory,
                "show-checkbox": __props.multiselect,
                "can-pick": (__props.multiselect || selectedFiles.value.length === 0 || selectedFiles.value.includes(file)) && (__props.canPick === void 0 || __props.canPick(file)),
                selected: selectedFiles.value.includes(file),
                node: file,
                "crop-image-previews": unref(cropImagePreviews),
                "onUpdate:selected": ($event) => onNodeSelected(file),
                onEnterDirectory: onChangeDirectory
              }, null, 8, ["allow-pick-directory", "show-checkbox", "can-pick", "selected", "node", "crop-image-previews", "onUpdate:selected"]);
            }), 128))
          ])
        ])
      ], 512);
    };
  }
});
const FileList = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-68ec5c33"]]);
const _sfc_main$6 = {
  name: "HomeIcon",
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
const _hoisted_1$5 = ["aria-hidden", "aria-label"];
const _hoisted_2$4 = ["fill", "width", "height"];
const _hoisted_3$3 = { d: "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" };
const _hoisted_4$3 = { key: 0 };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon home-icon",
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
      createBaseVNode("path", _hoisted_3$3, [
        $props.title ? (openBlock(), createElementBlock("title", _hoisted_4$3, toDisplayString($props.title), 1)) : createCommentVNode("", true)
      ])
    ], 8, _hoisted_2$4))
  ], 16, _hoisted_1$5);
}
const IconHome = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$3]]);
const _sfc_main$5 = {
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
const _hoisted_1$4 = ["aria-hidden", "aria-label"];
const _hoisted_2$3 = ["fill", "width", "height"];
const _hoisted_3$2 = { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" };
const _hoisted_4$2 = { key: 0 };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
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
      createBaseVNode("path", _hoisted_3$2, [
        $props.title ? (openBlock(), createElementBlock("title", _hoisted_4$2, toDisplayString($props.title), 1)) : createCommentVNode("", true)
      ])
    ], 8, _hoisted_2$3))
  ], 16, _hoisted_1$4);
}
const IconPlus = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$2]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FilePickerBreadcrumbs",
  props: {
    path: {},
    showMenu: { type: Boolean }
  },
  emits: ["update:path", "create-node"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit2 = __emit;
    const actionsOpen = ref(false);
    const newNodeName = ref("");
    const nameInput = useTemplateRef("nameInput");
    function validateInput() {
      const name = newNodeName.value.trim();
      const input = nameInput.value?.$el?.querySelector("input");
      let validity = "";
      try {
        validateFilename(name);
      } catch (error) {
        if (!(error instanceof InvalidFilenameError)) {
          throw error;
        }
        switch (error.reason) {
          case InvalidFilenameErrorReason.Character:
            validity = t('"{char}" is not allowed inside a folder name.', { char: error.segment });
            break;
          case InvalidFilenameErrorReason.ReservedName:
            validity = t('"{segment}" is a reserved name and not allowed for folder names.', { segment: error.segment });
            break;
          case InvalidFilenameErrorReason.Extension:
            validity = t('Folder names must not end with "{extension}".', { extension: error.segment });
            break;
          default:
            validity = t("Invalid folder name.");
        }
      }
      if (input) {
        input.setCustomValidity(validity);
      }
      return validity === "";
    }
    function onSubmit() {
      const name = newNodeName.value.trim();
      if (validateInput()) {
        actionsOpen.value = false;
        emit2("create-node", name);
        newNodeName.value = "";
      }
    }
    const pathElements = computed(() => props.path.split("/").filter((v) => v !== "").map((v, i, elements) => ({
      name: v,
      path: "/" + elements.slice(0, i + 1).join("/")
    })));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(NcBreadcrumbs), { class: "file-picker__breadcrumbs" }, createSlots({
        default: withCtx(() => [
          createVNode(unref(NcBreadcrumb), {
            name: unref(t)("All files"),
            title: unref(t)("Home"),
            onClick: _cache[0] || (_cache[0] = ($event) => emit2("update:path", "/"))
          }, {
            icon: withCtx(() => [
              createVNode(IconHome, { size: 20 })
            ]),
            _: 1
          }, 8, ["name", "title"]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(pathElements.value, (dir) => {
            return openBlock(), createBlock(unref(NcBreadcrumb), {
              key: dir.path,
              name: dir.name,
              title: dir.path,
              onClick: ($event) => emit2("update:path", dir.path)
            }, null, 8, ["name", "title", "onClick"]);
          }), 128))
        ]),
        _: 2
      }, [
        __props.showMenu ? {
          name: "actions",
          fn: withCtx(() => [
            createVNode(unref(NcActions), {
              open: actionsOpen.value,
              "onUpdate:open": _cache[2] || (_cache[2] = ($event) => actionsOpen.value = $event),
              "aria-label": unref(t)("Create directory"),
              "force-menu": true,
              "force-name": true,
              "menu-name": unref(t)("New"),
              variant: "secondary",
              onClose: _cache[3] || (_cache[3] = ($event) => newNodeName.value = "")
            }, {
              icon: withCtx(() => [
                createVNode(IconPlus, { size: 20 })
              ]),
              default: withCtx(() => [
                createVNode(unref(NcActionInput), {
                  ref_key: "nameInput",
                  ref: nameInput,
                  modelValue: newNodeName.value,
                  "onUpdate:modelValue": [
                    _cache[1] || (_cache[1] = ($event) => newNodeName.value = $event),
                    validateInput
                  ],
                  label: unref(t)("New folder"),
                  placeholder: unref(t)("New folder name"),
                  onSubmit
                }, {
                  icon: withCtx(() => [
                    createVNode(IconFolder, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["modelValue", "label", "placeholder"])
              ]),
              _: 1
            }, 8, ["open", "aria-label", "menu-name"])
          ]),
          key: "0"
        } : void 0
      ]), 1024);
    };
  }
});
const FilePickerBreadcrumbs = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-4ce40fd0"]]);
const _sfc_main$3 = {
  name: "CloseIcon",
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
const _hoisted_1$3 = ["aria-hidden", "aria-label"];
const _hoisted_2$2 = ["fill", "width", "height"];
const _hoisted_3$1 = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" };
const _hoisted_4$1 = { key: 0 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon close-icon",
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
      createBaseVNode("path", _hoisted_3$1, [
        $props.title ? (openBlock(), createElementBlock("title", _hoisted_4$1, toDisplayString($props.title), 1)) : createCommentVNode("", true)
      ])
    ], 8, _hoisted_2$2))
  ], 16, _hoisted_1$3);
}
const IconClose = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1]]);
const _sfc_main$2 = {
  name: "MagnifyIcon",
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
const _hoisted_1$2 = ["aria-hidden", "aria-label"];
const _hoisted_2$1 = ["fill", "width", "height"];
const _hoisted_3 = { d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" };
const _hoisted_4 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, {
    "aria-hidden": $props.title ? null : "true",
    "aria-label": $props.title,
    class: "material-design-icon magnify-icon",
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
        $props.title ? (openBlock(), createElementBlock("title", _hoisted_4, toDisplayString($props.title), 1)) : createCommentVNode("", true)
      ])
    ], 8, _hoisted_2$1))
  ], 16, _hoisted_1$2);
}
const IconMagnify = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
function useViews(isAnonymous) {
  const allViews = [
    {
      id: "files",
      label: t("All files"),
      icon: mdiFolder
    },
    {
      id: "recent",
      label: t("Recent"),
      icon: mdiClock
    },
    {
      id: "favorites",
      label: t("Favorites"),
      icon: mdiStar
    }
  ];
  const availableViews = isAnonymous.value ? allViews.filter(({ id }) => id === "files") : allViews;
  return {
    allViews,
    availableViews
  };
}
const _hoisted_1$1 = {
  key: 0,
  class: "file-picker__side"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FilePickerNavigation",
  props: {
    currentView: {},
    filterString: {},
    isCollapsed: { type: Boolean },
    disabledNavigation: { type: Boolean }
  },
  emits: ["update:currentView", "update:filterString"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit2 = __emit;
    const { availableViews } = useViews(ref(getCurrentUser() === null));
    const currentViewObject = computed(() => availableViews.filter((v) => v.id === props.currentView)[0] ?? availableViews[0]);
    const updateFilterValue = (value) => emit2("update:filterString", value.toString());
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(_sfc_main$h), {
          class: "file-picker__filter-input",
          label: unref(t)("Filter file list"),
          "show-trailing-button": !!__props.filterString,
          "model-value": __props.filterString,
          "onUpdate:modelValue": updateFilterValue,
          onTrailingButtonClick: _cache[0] || (_cache[0] = ($event) => updateFilterValue(""))
        }, {
          "trailing-button-icon": withCtx(() => [
            createVNode(IconClose, { size: 16 })
          ]),
          default: withCtx(() => [
            createVNode(IconMagnify, { size: 16 })
          ]),
          _: 1
        }, 8, ["label", "show-trailing-button", "model-value"]),
        unref(availableViews).length > 1 && !__props.disabledNavigation ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          !__props.isCollapsed ? (openBlock(), createElementBlock("ul", _hoisted_1$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(availableViews), (view) => {
              return openBlock(), createElementBlock("li", {
                key: view.id
              }, [
                createVNode(unref(NcButton), {
                  variant: __props.currentView === view.id ? "primary" : "tertiary",
                  wide: true,
                  onClick: ($event) => _ctx.$emit("update:currentView", view.id)
                }, {
                  icon: withCtx(() => [
                    createVNode(unref(NcIconSvgWrapper), {
                      path: view.icon,
                      size: 20
                    }, null, 8, ["path"])
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" " + toDisplayString(view.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"])
              ]);
            }), 128))
          ])) : (openBlock(), createBlock(unref(NcSelect), {
            key: 1,
            "aria-label": unref(t)("Current view selector"),
            clearable: false,
            searchable: false,
            options: unref(availableViews),
            "model-value": currentViewObject.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => emit2("update:currentView", $event.id))
          }, null, 8, ["aria-label", "options", "model-value"]))
        ], 64)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const FilePickerNavigation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b91fd905"]]);
function getRecentNodes(client) {
  const controller = new AbortController();
  const lastTwoWeek = Math.round(Date.now() / 1e3) - 60 * 60 * 24 * 14;
  return new CancelablePromise(async (resolve2, reject2, onCancel) => {
    onCancel(() => controller.abort());
    try {
      const { data } = await client.search("/", {
        signal: controller.signal,
        details: true,
        data: getRecentSearch(lastTwoWeek)
      });
      const nodes = data.results.map((result) => resultToNode(result));
      resolve2(nodes);
    } catch (error) {
      reject2(error);
    }
  });
}
function getNodes(client, directoryPath) {
  const controller = new AbortController();
  return new CancelablePromise(async (resolve2, reject2, onCancel) => {
    onCancel(() => controller.abort());
    try {
      const results = await client.getDirectoryContents(join(defaultRootPath, directoryPath), {
        signal: controller.signal,
        details: true,
        includeSelf: true,
        data: getDefaultPropfind()
      });
      const nodes = results.data.map((result) => resultToNode(result));
      resolve2({
        contents: nodes.filter(({ path }) => path !== directoryPath),
        folder: nodes.find(({ path }) => path === directoryPath)
      });
    } catch (error) {
      reject2(error);
    }
  });
}
async function getFile(client, path) {
  const { data } = await client.stat(join(defaultRootPath, path), {
    details: true,
    data: getDefaultPropfind()
  });
  return resultToNode(data);
}
function useDAVFiles(currentView, currentPath) {
  const client = getClient();
  const files = shallowRef([]);
  const folder = shallowRef(null);
  const isLoading = ref(true);
  const promise = ref(null);
  async function createDirectory(name) {
    const path = join(currentPath.value, name);
    await client.createDirectory(join(defaultRootPath, path));
    const directory = await getFile(client, path);
    files.value = [...files.value, directory];
    return directory;
  }
  async function loadDAVFiles() {
    if (promise.value) {
      promise.value.cancel();
    }
    isLoading.value = true;
    if (currentView.value === "favorites") {
      promise.value = getFavoriteNodes(client, currentPath.value);
    } else if (currentView.value === "recent") {
      promise.value = getRecentNodes(client);
    } else {
      promise.value = getNodes(client, currentPath.value);
    }
    const content = await promise.value;
    if (!content) {
      return;
    } else if ("folder" in content) {
      folder.value = content.folder;
      files.value = content.contents;
    } else {
      folder.value = null;
      files.value = content;
    }
    promise.value = null;
    isLoading.value = false;
  }
  watch([currentView, currentPath], () => loadDAVFiles());
  onMounted(() => loadDAVFiles());
  return {
    isLoading,
    files,
    folder,
    loadFiles: loadDAVFiles,
    createDirectory
  };
}
function useMimeFilter(allowedMIMETypes) {
  const splittedTypes = computed(() => allowedMIMETypes.value.map((filter) => filter.split("/")));
  const isSupportedMimeType = (mime) => {
    const mimeTypeArray = mime.split("/");
    return splittedTypes.value.some(([type, subtype]) => (
      // check mime type matches or is wildcard
      (mimeTypeArray[0] === type || type === "*") && (mimeTypeArray[1] === subtype || subtype === "*")
    ));
  };
  return {
    isSupportedMimeType
  };
}
const _hoisted_1 = { class: "file-picker__main" };
const _hoisted_2 = {
  key: 1,
  class: "file-picker__view"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FilePicker",
  props: {
    buttons: {},
    name: {},
    allowPickDirectory: { type: Boolean, default: false },
    noMenu: { type: Boolean, default: false },
    disabledNavigation: { type: Boolean, default: false },
    filterFn: { type: Function, default: void 0 },
    canPickFn: { type: Function, default: void 0 },
    mimetypeFilter: { default: () => [] },
    multiselect: { type: Boolean, default: false },
    path: { default: void 0 }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit$1 = __emit;
    const isOpen = ref(true);
    const currentView = ref("files");
    const savedPath = ref(window?.sessionStorage.getItem("NC.FilePicker.LastPath") || "/");
    const navigatedPath = ref("");
    const currentPath = computed({
      get: () => {
        return currentView.value === "files" ? navigatedPath.value || props.path || savedPath.value : "/";
      },
      set: (path) => {
        navigatedPath.value = path;
      }
    });
    const selectedFiles = shallowRef([]);
    const {
      files,
      folder: currentFolder,
      isLoading,
      loadFiles,
      createDirectory
    } = useDAVFiles(currentView, currentPath);
    watch([navigatedPath], () => {
      if (props.path === void 0 && navigatedPath.value) {
        window.sessionStorage.setItem("NC.FilePicker.LastPath", navigatedPath.value);
      }
      selectedFiles.value = [];
    });
    let isHandlingCallback = false;
    const dialogButtons = computed(() => {
      const nodes = selectedFiles.value.length === 0 && props.allowPickDirectory && currentFolder.value ? [currentFolder.value] : selectedFiles.value;
      const buttons = typeof props.buttons === "function" ? props.buttons(nodes, currentPath.value, currentView.value) : props.buttons;
      return buttons.map((button) => ({
        ...button,
        disabled: button.disabled || isLoading.value,
        callback: () => {
          isHandlingCallback = true;
          handleButtonClick(button.callback, nodes);
        }
      }));
    });
    async function handleButtonClick(callback, nodes) {
      await callback(nodes);
      emit$1("close", nodes);
      isHandlingCallback = false;
    }
    const viewHeadline = computed(() => currentView.value === "favorites" ? t("Favorites") : currentView.value === "recent" ? t("Recent") : "");
    const filterString = ref("");
    const { isSupportedMimeType } = useMimeFilter(toRef(props, "mimetypeFilter"));
    onMounted(() => loadFiles());
    const { showHiddenFiles } = useFilesSettings();
    const filteredFiles = computed(() => {
      let filtered = files.value;
      if (!showHiddenFiles.value) {
        filtered = filtered.filter((file) => !file.basename.startsWith("."));
      }
      if (props.mimetypeFilter.length > 0) {
        filtered = filtered.filter((file) => file.type === "folder" || file.mime && isSupportedMimeType(file.mime));
      }
      if (filterString.value) {
        filtered = filtered.filter((file) => file.basename.toLowerCase().includes(filterString.value.toLowerCase()));
      }
      if (props.filterFn) {
        filtered = filtered.filter((f) => props.filterFn(f));
      }
      return filtered;
    });
    const noFilesDescription = computed(() => {
      if (currentView.value === "files") {
        return t("Upload some content or sync with your devices!");
      } else if (currentView.value === "recent") {
        return t("Files and folders you recently modified will show up here.");
      } else {
        return t("Files and folders you mark as favorite will show up here.");
      }
    });
    async function onCreateFolder(name) {
      try {
        const folder = await createDirectory(name);
        navigatedPath.value = folder.path;
        emit("files:node:created", files.value.filter((file) => file.basename === name)[0]);
      } catch (error) {
        logger$1.warn("Could not create new folder", { name, error });
        showError(t("Could not create the new folder"));
      }
    }
    function handleClose(open) {
      if (!open && !isHandlingCallback) {
        emit$1("close");
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(NcDialog), {
        open: isOpen.value,
        "onUpdate:open": [
          _cache[6] || (_cache[6] = ($event) => isOpen.value = $event),
          handleClose
        ],
        buttons: dialogButtons.value,
        name: __props.name,
        size: "large",
        "content-classes": "file-picker__content",
        "dialog-classes": "file-picker",
        "navigation-classes": "file-picker__navigation"
      }, {
        navigation: withCtx(({ isCollapsed }) => [
          createVNode(FilePickerNavigation, {
            "current-view": currentView.value,
            "onUpdate:currentView": _cache[0] || (_cache[0] = ($event) => currentView.value = $event),
            "filter-string": filterString.value,
            "onUpdate:filterString": _cache[1] || (_cache[1] = ($event) => filterString.value = $event),
            "is-collapsed": isCollapsed,
            "disabled-navigation": __props.disabledNavigation
          }, null, 8, ["current-view", "filter-string", "is-collapsed", "disabled-navigation"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            currentView.value === "files" ? (openBlock(), createBlock(FilePickerBreadcrumbs, {
              key: 0,
              path: currentPath.value,
              "onUpdate:path": _cache[2] || (_cache[2] = ($event) => currentPath.value = $event),
              "show-menu": !__props.noMenu,
              onCreateNode: onCreateFolder
            }, null, 8, ["path", "show-menu"])) : (openBlock(), createElementBlock("div", _hoisted_2, [
              createBaseVNode("h3", null, toDisplayString(viewHeadline.value), 1)
            ])),
            unref(isLoading) || filteredFiles.value.length > 0 ? (openBlock(), createBlock(FileList, {
              key: 2,
              path: currentPath.value,
              "onUpdate:path": [
                _cache[3] || (_cache[3] = ($event) => currentPath.value = $event),
                _cache[5] || (_cache[5] = ($event) => currentView.value = "files")
              ],
              "selected-files": selectedFiles.value,
              "onUpdate:selectedFiles": _cache[4] || (_cache[4] = ($event) => selectedFiles.value = $event),
              "allow-pick-directory": __props.allowPickDirectory,
              "current-view": currentView.value,
              files: filteredFiles.value,
              multiselect: __props.multiselect,
              loading: unref(isLoading),
              name: viewHeadline.value,
              "can-pick": __props.canPickFn
            }, null, 8, ["path", "selected-files", "allow-pick-directory", "current-view", "files", "multiselect", "loading", "name", "can-pick"])) : filterString.value ? (openBlock(), createBlock(unref(NcEmptyContent), {
              key: 3,
              name: unref(t)("No matching files"),
              description: unref(t)("No files matching your filter were found.")
            }, {
              icon: withCtx(() => [
                createVNode(IconFile)
              ]),
              _: 1
            }, 8, ["name", "description"])) : (openBlock(), createBlock(unref(NcEmptyContent), {
              key: 4,
              name: unref(t)("No files in here"),
              description: noFilesDescription.value
            }, {
              icon: withCtx(() => [
                createVNode(IconFile)
              ]),
              _: 1
            }, 8, ["name", "description"]))
          ])
        ]),
        _: 1
      }, 8, ["open", "buttons", "name"]);
    };
  }
});
const FilePicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-303416d3"]]);
export {
  FilePicker as default
};
//# sourceMappingURL=FilePicker-W-IYpVkn-CystlY7A.chunk.mjs.map
