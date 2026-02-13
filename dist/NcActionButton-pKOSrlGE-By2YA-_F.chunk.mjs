const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { N as NcIconSvgWrapper, f as mdiChevronRight, d as mdiCheck } from "./logger-D3RVzcfQ-D08Lqsc3.chunk.mjs";
import { H as warn, l as resolveComponent, c as createElementBlock, o as openBlock, e as createBaseVNode, r as renderSlot, i as createBlock, f as createCommentVNode, J as normalizeStyle, n as normalizeClass, t as toDisplayString, z as mergeProps } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import { b as NC_ACTIONS_CLOSE_MENU, c as NC_ACTIONS_IS_SEMANTIC_MENU } from "./index-DZkDsHXr.chunk.mjs";
import { _ as _export_sfc } from "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
const ActionGlobalMixin = {
  beforeUpdate() {
    this.text = this.getText();
  },
  data() {
    return {
      // $slots are not reactive.
      // We need to update  the content manually
      text: this.getText()
    };
  },
  computed: {
    isLongText() {
      return this.text && this.text.trim().length > 20;
    }
  },
  methods: {
    getText() {
      return this.$slots.default?.()[0].children?.trim?.() || "";
    }
  }
};
const ActionTextMixin = {
  mixins: [ActionGlobalMixin],
  props: {
    /**
     * Icon to show with the action, can be either a CSS class or an URL
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * The main text content of the entry.
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * The title attribute of the element.
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Whether we close the Actions menu after the click
     */
    closeAfterClick: {
      type: Boolean,
      default: false
    },
    /**
     * Aria label for the button. Not needed if the button has text.
     */
    ariaLabel: {
      type: String,
      default: null
    }
  },
  inject: {
    closeMenu: {
      from: NC_ACTIONS_CLOSE_MENU
    }
  },
  emits: [
    "click"
  ],
  created() {
    if ("ariaHidden" in this.$attrs) {
      warn("[NcAction*]: Do not set the ariaHidden attribute as the root element will inherit the incorrect aria-hidden.");
    }
  },
  computed: {
    /**
     * Check if icon prop is an URL
     *
     * @return {boolean} Whether the icon prop is an URL
     */
    isIconUrl() {
      try {
        return !!new URL(this.icon, this.icon.startsWith("/") ? window.location.origin : void 0);
      } catch {
        return false;
      }
    }
  },
  methods: {
    onClick(event) {
      this.$emit("click", event);
      if (this.closeAfterClick) {
        this.closeMenu(false);
      }
    }
  }
};
const _sfc_main = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper
  },
  mixins: [ActionTextMixin],
  inject: {
    isInSemanticMenu: {
      from: NC_ACTIONS_IS_SEMANTIC_MENU,
      default: false
    }
  },
  props: {
    /**
     * disabled state of the action button
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * If this is a menu, a chevron icon will
     * be added at the end of the line
     */
    isMenu: {
      type: Boolean,
      default: false
    },
    /**
     * The button's behavior, by default the button acts like a normal button with optional toggle button behavior if `modelValue` is `true` or `false`.
     * But you can also set to checkbox button behavior with tri-state or radio button like behavior.
     * This extends the native HTML button type attribute.
     */
    type: {
      type: String,
      default: "button",
      validator: (behavior) => ["button", "checkbox", "radio", "reset", "submit"].includes(behavior)
    },
    /**
     * The buttons state if `type` is 'checkbox' or 'radio' (meaning if it is pressed / selected).
     * For checkbox and toggle button behavior - boolean value.
     * For radio button behavior - could be a boolean checked or a string with the value of the button.
     * Note: Unlike native radio buttons, NcActionButton are not grouped by name, so you need to connect them by bind correct modelValue.
     *
     *  **This is not availabe for `type='submit'` or `type='reset'`**
     *
     * If using `type='checkbox'` a `model-value` of `true` means checked, `false` means unchecked and `null` means indeterminate (tri-state)
     * For `type='radio'` `null` is equal to `false`
     */
    modelValue: {
      type: [Boolean, String],
      default: null
    },
    /**
     * The value used for the `modelValue` when this component is used with radio behavior
     * Similar to the `value` attribute of `<input type="radio">`
     */
    value: {
      type: String,
      default: null
    },
    /**
     * Small underlying text content of the entry
     */
    description: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup() {
    return {
      mdiCheck,
      mdiChevronRight
    };
  },
  computed: {
    /**
     * determines if the action is focusable
     *
     * @return {boolean} is the action focusable ?
     */
    isFocusable() {
      return !this.disabled;
    },
    /**
     * The current "checked" or "pressed" state for the model behavior
     */
    isChecked() {
      if (this.type === "radio" && typeof this.modelValue !== "boolean") {
        return this.modelValue === this.value;
      }
      return this.modelValue;
    },
    /**
     * The native HTML type to set on the button
     */
    nativeType() {
      if (this.type === "submit" || this.type === "reset") {
        return this.type;
      }
      return "button";
    },
    /**
     * HTML attributes to bind to the <button>
     */
    buttonAttributes() {
      const attributes = {};
      if (this.isInSemanticMenu) {
        attributes.role = "menuitem";
        if (this.type === "radio") {
          attributes.role = "menuitemradio";
          attributes["aria-checked"] = this.isChecked ? "true" : "false";
        } else if (this.type === "checkbox" || this.nativeType === "button" && this.modelValue !== null) {
          attributes.role = "menuitemcheckbox";
          attributes["aria-checked"] = this.modelValue === null ? "mixed" : this.modelValue ? "true" : "false";
        }
      } else if (this.modelValue !== null && this.nativeType === "button") {
        attributes["aria-pressed"] = this.modelValue ? "true" : "false";
      }
      return attributes;
    }
  },
  methods: {
    /**
     * Forward click event, let mixin handle the close-after-click and emit new modelValue if needed
     *
     * @param {MouseEvent} event - The click event
     */
    handleClick(event) {
      this.onClick(event);
      if (this.modelValue !== null || this.type !== "button") {
        if (this.type === "radio") {
          if (typeof this.modelValue !== "boolean") {
            if (!this.isChecked) {
              this.$emit("update:modelValue", this.value);
            }
          } else {
            this.$emit("update:modelValue", !this.isChecked);
          }
        } else {
          this.$emit("update:modelValue", !this.isChecked);
        }
      }
    }
  }
};
const _hoisted_1 = ["role"];
const _hoisted_2 = ["aria-label", "disabled", "title", "type"];
const _hoisted_3 = { class: "action-button__longtext-wrapper" };
const _hoisted_4 = {
  key: 0,
  class: "action-button__name"
};
const _hoisted_5 = ["textContent"];
const _hoisted_6 = {
  key: 2,
  class: "action-button__text"
};
const _hoisted_7 = ["textContent"];
const _hoisted_8 = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NcIconSvgWrapper = resolveComponent("NcIconSvgWrapper");
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(["action", { "action--disabled": $props.disabled }]),
    role: $options.isInSemanticMenu && "presentation"
  }, [
    createBaseVNode("button", mergeProps({
      "aria-label": _ctx.ariaLabel,
      class: ["action-button button-vue", {
        "action-button--active": $options.isChecked,
        focusable: $options.isFocusable
      }],
      disabled: $props.disabled,
      title: _ctx.title,
      type: $options.nativeType
    }, $options.buttonAttributes, {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
    }), [
      renderSlot(_ctx.$slots, "icon", {}, () => [
        createBaseVNode("span", {
          class: normalizeClass([[_ctx.isIconUrl ? "action-button__icon--url" : _ctx.icon], "action-button__icon"]),
          style: normalizeStyle({ backgroundImage: _ctx.isIconUrl ? `url(${_ctx.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], true),
      createBaseVNode("span", _hoisted_3, [
        _ctx.name ? (openBlock(), createElementBlock("strong", _hoisted_4, toDisplayString(_ctx.name), 1)) : createCommentVNode("", true),
        _ctx.isLongText ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: toDisplayString(_ctx.text)
        }, null, 8, _hoisted_5)) : (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(_ctx.text), 1)),
        $props.description ? (openBlock(), createElementBlock("span", {
          key: 3,
          class: "action-button__description",
          textContent: toDisplayString($props.description)
        }, null, 8, _hoisted_7)) : createCommentVNode("", true)
      ]),
      $props.isMenu ? (openBlock(), createBlock(_component_NcIconSvgWrapper, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: $setup.mdiChevronRight
      }, null, 8, ["path"])) : $options.isChecked ? (openBlock(), createBlock(_component_NcIconSvgWrapper, {
        key: 1,
        path: $setup.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : $options.isChecked === false ? (openBlock(), createElementBlock("span", _hoisted_8)) : createCommentVNode("", true),
      createCommentVNode("", true)
    ], 16, _hoisted_2)
  ], 10, _hoisted_1);
}
const NcActionButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6c2daf4e"]]);
export {
  ActionGlobalMixin as A,
  NcActionButton as N,
  ActionTextMixin as a
};
//# sourceMappingURL=NcActionButton-pKOSrlGE-By2YA-_F.chunk.mjs.map
