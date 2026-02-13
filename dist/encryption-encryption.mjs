const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { a as getCurrentUser } from "./mdi-CCQ2KgUK.chunk.mjs";
import { c as cancelableClient } from "./index-iNeUnB75.chunk.mjs";
import { s as showWarning } from "./index-JpgrUA2Z-CDVhFt4l.chunk.mjs";
import { g as generateUrl } from "./createElementId-DhjFt1I9-D95yphbb.chunk.mjs";
import "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import "./string_decoder-CSsspFHV.chunk.mjs";
import "./index-CEzAKfoK.chunk.mjs";
import "./index-DZkDsHXr.chunk.mjs";
import "./logger-D3RVzcfQ-D08Lqsc3.chunk.mjs";
import "./translation-DoG5ZELJ-BX7lsMna.chunk.mjs";
import "./PencilOutline-CRype3Oz.chunk.mjs";
import "./NcNoteCard-CVhtNL04-xGysk9Jq.chunk.mjs";
/*!
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
window.addEventListener("DOMContentLoaded", async function() {
  if (getCurrentUser() === null) {
    return;
  }
  const { data } = await cancelableClient.get(generateUrl("/apps/encryption/ajax/getStatus"));
  if (data.status === "interactionNeeded") {
    showWarning(data.data.message);
  }
});
//# sourceMappingURL=encryption-encryption.mjs.map
