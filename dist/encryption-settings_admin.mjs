const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { b as defineComponent, s as useModel, v as watch, p as ref, i as createBlock, o as openBlock, w as withCtx, g as createTextVNode, t as toDisplayString, x as useTemplateRef, h as computed, c as createElementBlock, j as createVNode, f as createCommentVNode, I as withModifiers, n as normalizeClass, F as Fragment, e as createBaseVNode, m as createApp } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import { a as _export_sfc, l as loadState } from "./index-CEzAKfoK.chunk.mjs";
import { t as translate } from "./translation-DoG5ZELJ-BX7lsMna.chunk.mjs";
import "./NcActionButton-pKOSrlGE-By2YA-_F.chunk.mjs";
import { c as NcButton } from "./logger-D3RVzcfQ-D08Lqsc3.chunk.mjs";
import "./index-SdYoB8n_.chunk.mjs";
import { g as generateUrl } from "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
import "./NcBreadcrumbs-DYfGaSjT-BVqo2_j4.chunk.mjs";
import "./NcDateTime.vue_vue_type_script_setup_true_lang-BhB8yA4U-3Cg9SqZ9.chunk.mjs";
import { w as watchDebounced } from "./index-DZkDsHXr.chunk.mjs";
import "./NcAvatar-DmUGApWA-C2lPLiNg.chunk.mjs";
import "./NcRichText-CBMtJzE_-s0VCYNde.chunk.mjs";
import "./PencilOutline-CRype3Oz.chunk.mjs";
import "./mdi-CCQ2KgUK.chunk.mjs";
import { N as NcCheckboxRadioSwitch } from "./NcCheckboxRadioSwitch-BCSKF7Tk-CVZU7Pjt.chunk.mjs";
import "./NcChip-D8tGFzRl-CkdhiclE.chunk.mjs";
import "./NcColorPicker-Kc0JqRtp-BW-FXqa7.chunk.mjs";
import "./TrayArrowDown-SN39FuG_.chunk.mjs";
import "./NcSelect-Czzsi3P_-DrnUjQ4_.chunk.mjs";
import "./NcEmojiPicker-pM4Pg2yq-D_xkM2xT.chunk.mjs";
import "./Plus-DX3lsEjd.chunk.mjs";
/* empty css                                        */
import "./NcInputField-Bwsh2aHY-DY6YZAwi.chunk.mjs";
import { N as NcNoteCard } from "./NcNoteCard-CVhtNL04-xGysk9Jq.chunk.mjs";
import { N as NcPasswordField } from "./NcPasswordField-djttkA5Q-B3cAwMPj.chunk.mjs";
import { c as cancelableClient } from "./index-iNeUnB75.chunk.mjs";
import "./TrashCanOutline-BquAR0NR.chunk.mjs";
import "./index-DsQhqJ3N.chunk.mjs";
import { N as NcSettingsSection } from "./ContentCopy-B6NO0ksw.chunk.mjs";
import "./NcUserBubble-DPAmU2_J-CqdP4dk7.chunk.mjs";
import "./NcUserStatusIcon-CGEf7fej-CB09VdBp.chunk.mjs";
import "./colors-Go3zmZRD-CRyYiZ-p.chunk.mjs";
import { c as showSuccess } from "./index-JpgrUA2Z-CDVhFt4l.chunk.mjs";
import { l as logger, N as NcFormGroup, I as InitStatus } from "./types-DOfPB-hv.chunk.mjs";
import "./string_decoder-CSsspFHV.chunk.mjs";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SettingsAdminHomeStorage",
  props: {
    "modelValue": { type: Boolean, ...{ required: true } },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const encryptHomeStorage = useModel(__props, "modelValue");
    const isSavingHomeStorageEncryption = ref(false);
    watch(encryptHomeStorage, () => {
      isSavingHomeStorageEncryption.value = true;
    });
    watchDebounced(encryptHomeStorage, async (encryptHomeStorage2, oldValue) => {
      if (encryptHomeStorage2 === oldValue) {
        isSavingHomeStorageEncryption.value = false;
        return;
      }
      try {
        await cancelableClient.post(
          generateUrl("/apps/encryption/ajax/setEncryptHomeStorage"),
          { encryptHomeStorage: encryptHomeStorage2 }
        );
      } finally {
        isSavingHomeStorageEncryption.value = false;
      }
    }, { debounce: 800 });
    const __returned__ = { encryptHomeStorage, isSavingHomeStorageEncryption, get t() {
      return translate;
    }, get NcCheckboxRadioSwitch() {
      return NcCheckboxRadioSwitch;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["NcCheckboxRadioSwitch"], {
    modelValue: $setup.encryptHomeStorage,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.encryptHomeStorage = $event),
    loading: $setup.isSavingHomeStorageEncryption,
    description: $setup.t("encryption", "Enabling this option encrypts all files stored on the main storage, otherwise only files on external storage will be encrypted"),
    type: "switch"
  }, {
    default: withCtx(() => [
      createTextVNode(
        toDisplayString($setup.t("encryption", "Encrypt the home storage")),
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue", "loading", "description"]);
}
const SettingsAdminHomeStorage = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/abolfazl/code/nextcloud/build/frontend/apps/encryption/src/components/SettingsAdminHomeStorage.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SettingsAdminRecoveryKey",
  props: {
    "modelValue": { type: Boolean, ...{ required: true } },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const recoveryEnabled = useModel(__props, "modelValue");
    const formElement = useTemplateRef("form");
    const isLoading = ref(false);
    const hasError = ref(false);
    const password = ref("");
    const confirmPassword = ref("");
    const passwordMatch = computed(() => password.value === confirmPassword.value);
    async function onSubmit() {
      if (isLoading.value) {
        return;
      }
      if (!passwordMatch.value) {
        return;
      }
      hasError.value = false;
      isLoading.value = true;
      try {
        const { data } = await cancelableClient.post(
          generateUrl("/apps/encryption/ajax/adminRecovery"),
          {
            adminEnableRecovery: !recoveryEnabled.value,
            recoveryPassword: password.value,
            confirmPassword: confirmPassword.value
          }
        );
        recoveryEnabled.value = !recoveryEnabled.value;
        password.value = confirmPassword.value = "";
        formElement.value?.reset();
        if (data.data.message) {
          showSuccess(data.data.message);
        }
      } catch (error) {
        hasError.value = true;
        logger.error("Failed to update recovery key settings", { error });
      } finally {
        isLoading.value = false;
      }
    }
    const __returned__ = { recoveryEnabled, formElement, isLoading, hasError, password, confirmPassword, passwordMatch, onSubmit, get t() {
      return translate;
    }, get NcButton() {
      return NcButton;
    }, get NcFormGroup() {
      return NcFormGroup;
    }, get NcNoteCard() {
      return NcNoteCard;
    }, get NcPasswordField() {
      return NcPasswordField;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "form",
    {
      ref: "form",
      onSubmit: withModifiers($setup.onSubmit, ["prevent"])
    },
    [
      createVNode($setup["NcFormGroup"], {
        label: $setup.recoveryEnabled ? $setup.t("encryption", "Disable recovery key") : $setup.t("encryption", "Enable recovery key"),
        description: $setup.t("encryption", "The recovery key is an additional encryption key used to encrypt files. It is used to recover files from an account if the password is forgotten.")
      }, {
        default: withCtx(() => [
          createVNode($setup["NcPasswordField"], {
            modelValue: $setup.password,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.password = $event),
            required: "",
            name: "password",
            label: $setup.t("encryption", "Recovery key password")
          }, null, 8, ["modelValue", "label"]),
          createVNode($setup["NcPasswordField"], {
            modelValue: $setup.confirmPassword,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.confirmPassword = $event),
            required: "",
            name: "confirmPassword",
            error: !!$setup.confirmPassword && !$setup.passwordMatch,
            helperText: $setup.passwordMatch || !$setup.confirmPassword ? "" : $setup.t("encryption", "Passwords fields do not match"),
            label: $setup.t("encryption", "Repeat recovery key password")
          }, null, 8, ["modelValue", "error", "helperText", "label"]),
          createVNode($setup["NcButton"], {
            type: "submit",
            variant: $setup.recoveryEnabled ? "error" : "primary"
          }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString($setup.recoveryEnabled ? $setup.t("encryption", "Disable recovery key") : $setup.t("encryption", "Enable recovery key")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["variant"]),
          $setup.hasError ? (openBlock(), createBlock($setup["NcNoteCard"], {
            key: 0,
            type: "error"
          }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString($setup.t("encryption", "An error occurred while updating the recovery key settings. Please try again.")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["label", "description"])
    ],
    544
    /* NEED_HYDRATION, NEED_PATCH */
  );
}
const SettingsAdminRecoveryKey = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/abolfazl/code/nextcloud/build/frontend/apps/encryption/src/components/SettingsAdminRecoveryKey.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SettingsAdminRecoveryKeyChange",
  setup(__props, { expose: __expose }) {
    __expose();
    const formElement = useTemplateRef("form");
    const isLoading = ref(false);
    const hasError = ref(false);
    const oldPassword = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const passwordMatch = computed(() => password.value === confirmPassword.value);
    async function onSubmit() {
      if (isLoading.value) {
        return;
      }
      if (!passwordMatch.value) {
        return;
      }
      hasError.value = false;
      isLoading.value = true;
      try {
        await cancelableClient.post(
          generateUrl("/apps/encryption/ajax/changeRecoveryPassword"),
          {
            oldPassword: oldPassword.value,
            newPassword: password.value,
            confirmPassword: confirmPassword.value
          }
        );
        oldPassword.value = password.value = confirmPassword.value = "";
        formElement.value?.reset();
      } catch (error) {
        hasError.value = true;
        logger.error("Failed to update recovery key settings", { error });
      } finally {
        isLoading.value = false;
      }
    }
    const __returned__ = { formElement, isLoading, hasError, oldPassword, password, confirmPassword, passwordMatch, onSubmit, get t() {
      return translate;
    }, get NcButton() {
      return NcButton;
    }, get NcFormGroup() {
      return NcFormGroup;
    }, get NcNoteCard() {
      return NcNoteCard;
    }, get NcPasswordField() {
      return NcPasswordField;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const settingsAdminRecoveryKeyChange = "_settingsAdminRecoveryKeyChange_12rwr_2";
const style0 = {
  settingsAdminRecoveryKeyChange
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "form",
    {
      ref: "form",
      class: normalizeClass(_ctx.$style.settingsAdminRecoveryKeyChange),
      onSubmit: withModifiers($setup.onSubmit, ["prevent"])
    },
    [
      createVNode($setup["NcFormGroup"], {
        label: $setup.t("encryption", "Change recovery key password")
      }, {
        default: withCtx(() => [
          createVNode($setup["NcPasswordField"], {
            modelValue: $setup.oldPassword,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.oldPassword = $event),
            required: "",
            name: "oldPassword",
            label: $setup.t("encryption", "Old recovery key password")
          }, null, 8, ["modelValue", "label"]),
          createVNode($setup["NcPasswordField"], {
            modelValue: $setup.password,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.password = $event),
            required: "",
            name: "password",
            label: $setup.t("encryption", "New recovery key password")
          }, null, 8, ["modelValue", "label"]),
          createVNode($setup["NcPasswordField"], {
            modelValue: $setup.confirmPassword,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.confirmPassword = $event),
            required: "",
            name: "confirmPassword",
            error: !$setup.passwordMatch && !!$setup.confirmPassword,
            helperText: $setup.passwordMatch || !$setup.confirmPassword ? "" : $setup.t("encryption", "Passwords fields do not match"),
            label: $setup.t("encryption", "Repeat new recovery key password")
          }, null, 8, ["modelValue", "error", "helperText", "label"]),
          createVNode($setup["NcButton"], {
            type: "submit",
            variant: "primary"
          }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString($setup.t("encryption", "Change recovery key password")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          $setup.hasError ? (openBlock(), createBlock($setup["NcNoteCard"], {
            key: 0,
            type: "error"
          }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString($setup.t("encryption", "An error occurred while changing the recovery key password. Please try again.")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["label"])
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const cssModules = {
  "$style": style0
};
const SettingsAdminRecoveryKeyChange = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__cssModules", cssModules], ["__file", "/home/abolfazl/code/nextcloud/build/frontend/apps/encryption/src/components/SettingsAdminRecoveryKeyChange.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SettingsAdmin",
  setup(__props, { expose: __expose }) {
    __expose();
    const adminSettings = loadState("encryption", "adminSettings");
    const encryptHomeStorage = ref(adminSettings.encryptHomeStorage);
    const recoveryEnabled = ref(adminSettings.recoveryEnabled);
    const __returned__ = { adminSettings, encryptHomeStorage, recoveryEnabled, get t() {
      return translate;
    }, get NcNoteCard() {
      return NcNoteCard;
    }, get NcSettingsSection() {
      return NcSettingsSection;
    }, SettingsAdminHomeStorage, SettingsAdminRecoveryKey, SettingsAdminRecoveryKeyChange, get InitStatus() {
      return InitStatus;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["NcSettingsSection"], {
    name: $setup.t("encryption", "Default encryption module")
  }, {
    default: withCtx(() => [
      $setup.adminSettings.initStatus === $setup.InitStatus.NotInitialized && !$setup.adminSettings.masterKeyEnabled ? (openBlock(), createBlock($setup["NcNoteCard"], {
        key: 0,
        type: "warning"
      }, {
        default: withCtx(() => [
          createTextVNode(
            toDisplayString($setup.t("encryption", "Encryption app is enabled but your keys are not initialized, please log-out and log-in again")),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      })) : (openBlock(), createElementBlock(
        Fragment,
        { key: 1 },
        [
          createVNode($setup["SettingsAdminHomeStorage"], {
            modelValue: $setup.encryptHomeStorage,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.encryptHomeStorage = $event)
          }, null, 8, ["modelValue"]),
          _cache[2] || (_cache[2] = createBaseVNode(
            "br",
            null,
            null,
            -1
            /* CACHED */
          )),
          $setup.adminSettings.masterKeyEnabled ? (openBlock(), createBlock($setup["SettingsAdminRecoveryKey"], {
            key: 0,
            modelValue: $setup.recoveryEnabled,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.recoveryEnabled = $event)
          }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true),
          $setup.adminSettings.masterKeyEnabled && $setup.recoveryEnabled ? (openBlock(), createBlock($setup["SettingsAdminRecoveryKeyChange"], { key: 1 })) : createCommentVNode("v-if", true)
        ],
        64
        /* STABLE_FRAGMENT */
      ))
    ]),
    _: 1
    /* STABLE */
  }, 8, ["name"]);
}
const SettingsAdmin = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/abolfazl/code/nextcloud/build/frontend/apps/encryption/src/views/SettingsAdmin.vue"]]);
/*!
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
const app = createApp(SettingsAdmin);
app.mount("#encryption-settings-section");
//# sourceMappingURL=encryption-settings_admin.mjs.map
