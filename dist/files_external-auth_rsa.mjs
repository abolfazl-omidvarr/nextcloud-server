const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[window.OC.filePath('', '', 'dist/AuthMechanismRsa-DdFazP2q.chunk.mjs'),window.OC.filePath('', '', 'dist/vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs'),window.OC.filePath('', '', 'dist/index-iNeUnB75.chunk.mjs'),window.OC.filePath('', '', 'dist/mdi-CCQ2KgUK.chunk.mjs'),window.OC.filePath('', '', 'dist/string_decoder-CSsspFHV.chunk.mjs'),window.OC.filePath('', '', 'dist/createElementId-DhjFt1I9-D95yphbb.chunk.mjs'),window.OC.filePath('', '', 'dist/translation-DoG5ZELJ-BX7lsMna.chunk.mjs'),window.OC.filePath('', '', 'dist/index-JpgrUA2Z-CDVhFt4l.chunk.mjs'),window.OC.filePath('', '', 'dist/index-CEzAKfoK.chunk.mjs'),window.OC.filePath('', '', 'dist/index-DZkDsHXr.chunk.mjs'),window.OC.filePath('', '', 'dist/logger-D3RVzcfQ-D08Lqsc3.chunk.mjs'),window.OC.filePath('', '', 'dist/logger-D3RVzcfQ-DWAMka5N.chunk.css'),window.OC.filePath('', '', 'dist/PencilOutline-CRype3Oz.chunk.mjs'),window.OC.filePath('', '', 'dist/PencilOutline-CWUlo4XY.chunk.css'),window.OC.filePath('', '', 'dist/index-DFa5IGZB.chunk.css'),window.OC.filePath('', '', 'dist/NcNoteCard-CVhtNL04-xGysk9Jq.chunk.mjs'),window.OC.filePath('', '', 'dist/NcNoteCard-CVhtNL04-DZSuYX4-.chunk.css'),window.OC.filePath('', '', 'dist/NcSelect-Czzsi3P_-DrnUjQ4_.chunk.mjs'),window.OC.filePath('', '', 'dist/NcSelect-Czzsi3P_-ymbis6uP.chunk.css'),window.OC.filePath('', '', 'dist/NcCheckboxRadioSwitch-BCSKF7Tk-CVZU7Pjt.chunk.mjs'),window.OC.filePath('', '', 'dist/NcCheckboxRadioSwitch-BCSKF7Tk-C_70VMQr.chunk.css'),window.OC.filePath('', '', 'dist/NcPasswordField-djttkA5Q-B3cAwMPj.chunk.mjs'),window.OC.filePath('', '', 'dist/NcInputField-Bwsh2aHY-DY6YZAwi.chunk.mjs'),window.OC.filePath('', '', 'dist/NcInputField-Bwsh2aHY-B9DSDOEd.chunk.css'),window.OC.filePath('', '', 'dist/NcPasswordField-djttkA5Q-BCJ0LHSS.chunk.css'),window.OC.filePath('', '', 'dist/TrashCanOutline-BquAR0NR.chunk.mjs'),window.OC.filePath('', '', 'dist/types-cvVeoaZM.chunk.mjs'),window.OC.filePath('', '', 'dist/logger-CHMHherF.chunk.mjs')])))=>i.map(i=>d[i]);
const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { _ as __vitePreload } from "./index-CEzAKfoK.chunk.mjs";
import { d as defineCustomElement, a as defineAsyncComponent } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
const AuthMechanismRsa = defineAsyncComponent(() => __vitePreload(() => import("./AuthMechanismRsa-DdFazP2q.chunk.mjs").then((n) => n.A), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]) : void 0, import.meta.url));
const AuthMechanismRsaComponent = defineCustomElement(AuthMechanismRsa, { shadowRoot: false });
customElements.define("files_external-auth-mechanism-rsa", AuthMechanismRsaComponent);
window.OCA.FilesExternal.AuthMechanism.registerHandler({
  id: "rsa",
  tagName: "files_external-auth-mechanism-rsa",
  enabled(authMechanism) {
    return authMechanism.scheme === "publickey" && authMechanism.identifier === "publickey::rsa";
  }
});
//# sourceMappingURL=files_external-auth_rsa.mjs.map
