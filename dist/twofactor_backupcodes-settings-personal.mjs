const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { d as defineStore, c as createPinia } from "./pinia-BIkl02pf.chunk.mjs";
import { p as ref, b as defineComponent, h as computed, c as createElementBlock, o as openBlock, i as createBlock, w as withCtx, g as createTextVNode, t as toDisplayString, f as createCommentVNode, F as Fragment, e as createBaseVNode, C as renderList, n as normalizeClass, j as createVNode, m as createApp } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import { g as getCapabilities, l as loadState, a as _export_sfc } from "./index-CEzAKfoK.chunk.mjs";
import { a as showError } from "./index-JpgrUA2Z-CDVhFt4l.chunk.mjs";
import { t as translate } from "./translation-DoG5ZELJ-BX7lsMna.chunk.mjs";
import { c as confirmPassword } from "./index-ly_D7ZWO.chunk.mjs";
import { c as NcButton } from "./logger-D3RVzcfQ-D08Lqsc3.chunk.mjs";
import { N as NcLoadingIcon } from "./PencilOutline-CRype3Oz.chunk.mjs";
import { g as getLoggerBuilder } from "./mdi-CCQ2KgUK.chunk.mjs";
import { c as cancelableClient } from "./index-iNeUnB75.chunk.mjs";
import { g as generateUrl } from "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
import "./string_decoder-CSsspFHV.chunk.mjs";
import "./index-DZkDsHXr.chunk.mjs";
import "./NcNoteCard-CVhtNL04-xGysk9Jq.chunk.mjs";
import "./NcPasswordField-djttkA5Q-B3cAwMPj.chunk.mjs";
import "./NcInputField-Bwsh2aHY-DY6YZAwi.chunk.mjs";
/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
const logger = getLoggerBuilder().detectLogLevel().setApp("twofactor_backupcodes").build();
/*!
 * SPDX-FileCopyrightText: 2016 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
function print(data) {
  const name = getCapabilities().theming.name || "Nextcloud";
  const newTab = window.open("", translate("twofactor_backupcodes", "{name} backup codes", { name }));
  if (!newTab) {
    showError(translate("twofactor_backupcodes", "Unable to open a new tab for printing"));
    throw new Error("Unable to open a new tab for printing");
  }
  const heading = newTab.document.createElement("h1");
  heading.textContent = translate("twofactor_backupcodes", "{name} backup codes", { name });
  const pre = newTab.document.createElement("pre");
  for (const code of data) {
    const codeLine = newTab.document.createTextNode(code);
    pre.appendChild(codeLine);
    pre.appendChild(newTab.document.createElement("br"));
  }
  newTab.document.body.innerHTML = "";
  newTab.document.body.appendChild(heading);
  newTab.document.body.appendChild(pre);
  newTab.print();
  newTab.close();
}
async function generateCodes() {
  const url = generateUrl("/apps/twofactor_backupcodes/settings/create");
  const { data } = await cancelableClient.post(url);
  return data;
}
const initialState = loadState("twofactor_backupcodes", "state");
const useStore = defineStore("twofactor_backupcodes", () => {
  const enabled = ref(initialState.enabled);
  const total = ref(initialState.total);
  const used = ref(initialState.used);
  const codes = ref([]);
  async function generate() {
    enabled.value = false;
    const { codes: newCodes, state } = await generateCodes();
    enabled.value = state.enabled;
    total.value = state.total;
    used.value = state.used;
    codes.value = newCodes;
  }
  return {
    enabled,
    total,
    used,
    codes,
    generate
  };
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PersonalSettings",
  setup(__props, { expose: __expose }) {
    __expose();
    const instanceName = getCapabilities().theming.name ?? "Nextcloud";
    const store = useStore();
    const generatingCodes = ref(false);
    const hasCodes = computed(() => {
      return store.codes && store.codes.length > 0;
    });
    const downloadFilename = instanceName + "-backup-codes.txt";
    const downloadUrl = computed(() => {
      if (!hasCodes.value) {
        return "";
      }
      return "data:text/plain," + encodeURIComponent(store.codes.reduce((prev, code) => {
        return prev + code + "\n";
      }, ""));
    });
    async function generateBackupCodes() {
      await confirmPassword();
      generatingCodes.value = true;
      try {
        await store.generate();
      } catch (error) {
        logger.error("Error generating backup codes", { error });
        showError(translate("twofactor_backupcodes", "An error occurred while generating your backup codes"));
      } finally {
        generatingCodes.value = false;
      }
    }
    function printCodes() {
      print(!store.codes || store.codes.length === 0 ? [] : store.codes);
    }
    const __returned__ = { instanceName, store, generatingCodes, hasCodes, downloadFilename, downloadUrl, generateBackupCodes, printCodes, get t() {
      return translate;
    }, get NcButton() {
      return NcButton;
    }, get NcLoadingIcon() {
      return NcLoadingIcon;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const backupcodesSettings = "_backupcodesSettings_bnkw8_2";
const backupcodesSettings__code = "_backupcodesSettings__code_bnkw8_7";
const backupcodesSettings__actions = "_backupcodesSettings__actions_bnkw8_13";
const style0 = {
  backupcodesSettings,
  backupcodesSettings__code,
  backupcodesSettings__actions
};
const _hoisted_1 = ["aria-label"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(_ctx.$style.backupcodesSettings)
    },
    [
      !$setup.store.enabled ? (openBlock(), createBlock($setup["NcButton"], {
        key: 0,
        disabled: $setup.generatingCodes,
        variant: "primary",
        onClick: $setup.generateBackupCodes
      }, {
        icon: withCtx(() => [
          $setup.generatingCodes ? (openBlock(), createBlock($setup["NcLoadingIcon"], { key: 0 })) : createCommentVNode("v-if", true)
        ]),
        default: withCtx(() => [
          createTextVNode(
            " " + toDisplayString($setup.t("twofactor_backupcodes", "Generate backup codes")),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["disabled"])) : (openBlock(), createElementBlock(
        Fragment,
        { key: 1 },
        [
          createBaseVNode("p", null, [
            !$setup.hasCodes ? (openBlock(), createElementBlock(
              Fragment,
              { key: 0 },
              [
                createTextVNode(
                  toDisplayString($setup.t("twofactor_backupcodes", "Backup codes have been generated. {used} of {total} codes have been used.", { used: $setup.store.used, total: $setup.store.total })),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (openBlock(), createElementBlock(
              Fragment,
              { key: 1 },
              [
                createTextVNode(
                  toDisplayString($setup.t("twofactor_backupcodes", "These are your backup codes. Please save and/or print them as you will not be able to read the codes again later.")) + " ",
                  1
                  /* TEXT */
                ),
                createBaseVNode("ul", {
                  "aria-label": $setup.t("twofactor_backupcodes", "List of backup codes")
                }, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList($setup.store.codes, (code) => {
                      return openBlock(), createElementBlock(
                        "li",
                        {
                          key: code,
                          class: normalizeClass(_ctx.$style.backupcodesSettings__code)
                        },
                        toDisplayString(code),
                        3
                        /* TEXT, CLASS */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ], 8, _hoisted_1)
              ],
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          createBaseVNode(
            "p",
            {
              class: normalizeClass(_ctx.$style.backupcodesSettings__actions)
            },
            [
              createVNode($setup["NcButton"], {
                id: "generate-backup-codes",
                variant: "error",
                onClick: $setup.generateBackupCodes
              }, {
                default: withCtx(() => [
                  createTextVNode(
                    toDisplayString($setup.t("twofactor_backupcodes", "Regenerate backup codes")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              $setup.hasCodes ? (openBlock(), createElementBlock(
                Fragment,
                { key: 0 },
                [
                  createVNode($setup["NcButton"], { onClick: $setup.printCodes }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString($setup.t("twofactor_backupcodes", "Print backup codes")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode($setup["NcButton"], {
                    href: $setup.downloadUrl,
                    download: $setup.downloadFilename,
                    variant: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString($setup.t("twofactor_backupcodes", "Save backup codes")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["href"])
                ],
                64
                /* STABLE_FRAGMENT */
              )) : createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          ),
          createBaseVNode("p", null, [
            createBaseVNode(
              "em",
              null,
              toDisplayString($setup.t("twofactor_backupcodes", "If you regenerate backup codes, you automatically invalidate old codes.")),
              1
              /* TEXT */
            )
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      ))
    ],
    2
    /* CLASS */
  );
}
const cssModules = {
  "$style": style0
};
const PersonalSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__cssModules", cssModules], ["__file", "/home/abolfazl/code/nextcloud/build/frontend/apps/twofactor_backupcodes/src/views/PersonalSettings.vue"]]);
const pinia = createPinia();
const app = createApp(PersonalSettings);
app.use(pinia);
app.mount("#twofactor-backupcodes-settings");
//# sourceMappingURL=twofactor_backupcodes-settings-personal.mjs.map
