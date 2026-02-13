const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { l as resolveComponent, i as createBlock, o as openBlock, w as withCtx, f as createCommentVNode, e as createBaseVNode, j as createVNode, g as createTextVNode, t as toDisplayString, m as createApp } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import { c as cancelableClient } from "./index-iNeUnB75.chunk.mjs";
import { l as loadState, a as _export_sfc } from "./index-CEzAKfoK.chunk.mjs";
import { t as translate } from "./translation-DoG5ZELJ-BX7lsMna.chunk.mjs";
import { g as generateUrl } from "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
import { N as NcCheckboxRadioSwitch } from "./NcCheckboxRadioSwitch-BCSKF7Tk-CVZU7Pjt.chunk.mjs";
import { N as NcSettingsSection } from "./ContentCopy-B6NO0ksw.chunk.mjs";
import "./mdi-CCQ2KgUK.chunk.mjs";
import "./string_decoder-CSsspFHV.chunk.mjs";
import "./PencilOutline-CRype3Oz.chunk.mjs";
const userSyncCalendarsDocUrl = loadState("dav", "userSyncCalendarsDocUrl", "#");
const _sfc_main = {
  name: "CalDavSettings",
  components: {
    NcCheckboxRadioSwitch,
    NcSettingsSection
  },
  setup() {
    return { t: translate };
  },
  data() {
    return {
      userSyncCalendarsDocUrl,
      sendInvitations: loadState("dav", "sendInvitations"),
      generateBirthdayCalendar: loadState(
        "dav",
        "generateBirthdayCalendar"
      ),
      sendEventReminders: loadState("dav", "sendEventReminders"),
      sendEventRemindersToSharedUsers: loadState(
        "dav",
        "sendEventRemindersToSharedUsers"
      ),
      sendEventRemindersPush: loadState("dav", "sendEventRemindersPush")
    };
  },
  computed: {
    hint() {
      const translated = translate(
        "dav",
        "Also install the {calendarappstoreopen}Calendar app{linkclose}, or {calendardocopen}connect your desktop & mobile for syncing ↗{linkclose}."
      );
      return translated.replace("{calendarappstoreopen}", '<a target="_blank" href="../apps/office/calendar">').replace("{calendardocopen}", `<a target="_blank" href="${userSyncCalendarsDocUrl}" rel="noreferrer noopener">`).replace(/\{linkclose\}/g, "</a>");
    },
    sendInvitationsHelpText() {
      const translated = translate("dav", "Please make sure to properly set up {emailopen}the email server{linkclose}.");
      return translated.replace("{emailopen}", '<a href="../admin#mail_general_settings">').replace("{linkclose}", "</a>");
    },
    sendEventRemindersHelpText() {
      const translated = translate("dav", "Please make sure to properly set up {emailopen}the email server{linkclose}.");
      return translated.replace("{emailopen}", '<a href="../admin#mail_general_settings">').replace("{linkclose}", "</a>");
    }
  },
  watch: {
    generateBirthdayCalendar(value) {
      const baseUrl = value ? "/apps/dav/enableBirthdayCalendar" : "/apps/dav/disableBirthdayCalendar";
      cancelableClient.post(generateUrl(baseUrl));
    },
    sendInvitations(value) {
      OCP.AppConfig.setValue(
        "dav",
        "sendInvitations",
        value ? "yes" : "no"
      );
    },
    sendEventReminders(value) {
      OCP.AppConfig.setValue("dav", "sendEventReminders", value ? "yes" : "no");
    },
    sendEventRemindersToSharedUsers(value) {
      OCP.AppConfig.setValue(
        "dav",
        "sendEventRemindersToSharedUsers",
        value ? "yes" : "no"
      );
    },
    sendEventRemindersPush(value) {
      OCP.AppConfig.setValue("dav", "sendEventRemindersPush", value ? "yes" : "no");
    }
  }
};
const _hoisted_1 = ["innerHTML"];
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = { class: "indented" };
const _hoisted_5 = { class: "indented" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NcCheckboxRadioSwitch = resolveComponent("NcCheckboxRadioSwitch");
  const _component_NcSettingsSection = resolveComponent("NcSettingsSection");
  return openBlock(), createBlock(_component_NcSettingsSection, {
    name: $setup.t("dav", "Calendar server"),
    docUrl: $data.userSyncCalendarsDocUrl
  }, {
    default: withCtx(() => [
      createCommentVNode(" Can use v-html as:\n			- t passes the translated string through DOMPurify.sanitize,\n			- replacement strings are not user-controlled. "),
      createCommentVNode(" eslint-disable-next-line vue/no-v-html "),
      createBaseVNode("p", {
        class: "settings-hint",
        innerHTML: $options.hint
      }, null, 8, _hoisted_1),
      createBaseVNode("p", null, [
        createVNode(_component_NcCheckboxRadioSwitch, {
          id: "caldavSendInvitations",
          modelValue: $data.sendInvitations,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.sendInvitations = $event),
          type: "switch"
        }, {
          default: withCtx(() => [
            createTextVNode(
              toDisplayString($setup.t("dav", "Send invitations to attendees")),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        createCommentVNode(" Can use v-html as:\n				- t passes the translated string through DOMPurify.sanitize,\n				- replacement strings are not user-controlled. "),
        createCommentVNode(" eslint-disable-next-line vue/no-v-html "),
        createBaseVNode("em", { innerHTML: $options.sendInvitationsHelpText }, null, 8, _hoisted_2)
      ]),
      createBaseVNode("p", null, [
        createVNode(_component_NcCheckboxRadioSwitch, {
          id: "caldavGenerateBirthdayCalendar",
          modelValue: $data.generateBirthdayCalendar,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.generateBirthdayCalendar = $event),
          type: "switch",
          class: "checkbox"
        }, {
          default: withCtx(() => [
            createTextVNode(
              toDisplayString($setup.t("dav", "Automatically generate a birthday calendar")),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        createBaseVNode(
          "em",
          null,
          toDisplayString($setup.t("dav", "Birthday calendars will be generated by a background job.")),
          1
          /* TEXT */
        ),
        _cache[5] || (_cache[5] = createBaseVNode(
          "br",
          null,
          null,
          -1
          /* CACHED */
        )),
        createBaseVNode(
          "em",
          null,
          toDisplayString($setup.t("dav", "Hence they will not be available immediately after enabling but will show up after some time.")),
          1
          /* TEXT */
        )
      ]),
      createBaseVNode("p", null, [
        createVNode(_component_NcCheckboxRadioSwitch, {
          id: "caldavSendEventReminders",
          modelValue: $data.sendEventReminders,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.sendEventReminders = $event),
          type: "switch"
        }, {
          default: withCtx(() => [
            createTextVNode(
              toDisplayString($setup.t("dav", "Send notifications for events")),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        createCommentVNode(" Can use v-html as:\n				- t passes the translated string through DOMPurify.sanitize,\n				- replacement strings are not user-controlled. "),
        createCommentVNode(" eslint-disable-next-line vue/no-v-html "),
        createBaseVNode("em", { innerHTML: $options.sendEventRemindersHelpText }, null, 8, _hoisted_3),
        _cache[6] || (_cache[6] = createBaseVNode(
          "br",
          null,
          null,
          -1
          /* CACHED */
        )),
        createBaseVNode(
          "em",
          null,
          toDisplayString($setup.t("dav", "Notifications are sent via background jobs, so these must occur often enough.")),
          1
          /* TEXT */
        )
      ]),
      createBaseVNode("p", _hoisted_4, [
        createVNode(_component_NcCheckboxRadioSwitch, {
          id: "caldavSendEventRemindersToSharedGroupMembers",
          modelValue: $data.sendEventRemindersToSharedUsers,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.sendEventRemindersToSharedUsers = $event),
          type: "switch",
          disabled: !$data.sendEventReminders
        }, {
          default: withCtx(() => [
            createTextVNode(
              toDisplayString($setup.t("dav", "Send reminder notifications to calendar sharees as well")),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "disabled"]),
        createBaseVNode(
          "em",
          null,
          toDisplayString($setup.t("dav", "Reminders are always sent to organizers and attendees.")),
          1
          /* TEXT */
        )
      ]),
      createBaseVNode("p", _hoisted_5, [
        createVNode(_component_NcCheckboxRadioSwitch, {
          id: "caldavSendEventRemindersPush",
          modelValue: $data.sendEventRemindersPush,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.sendEventRemindersPush = $event),
          type: "switch",
          disabled: !$data.sendEventReminders
        }, {
          default: withCtx(() => [
            createTextVNode(
              toDisplayString($setup.t("dav", "Enable notifications for events via push")),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "disabled"])
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["name", "docUrl"]);
}
const CalDavSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e3d60ec5"], ["__file", "/home/abolfazl/code/nextcloud/build/frontend/apps/dav/src/views/CalDavSettings.vue"]]);
const app = createApp(CalDavSettings);
app.mount("#settings-admin-caldav");
//# sourceMappingURL=dav-settings-admin-caldav.mjs.map
