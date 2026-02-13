const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[window.OC.filePath('', '', 'dist/FilesVersionsSidebarTab-zBuZGIU6.chunk.mjs'),window.OC.filePath('', '', 'dist/vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs'),window.OC.filePath('', '', 'dist/index-JpgrUA2Z-CDVhFt4l.chunk.mjs'),window.OC.filePath('', '', 'dist/index-CEzAKfoK.chunk.mjs'),window.OC.filePath('', '', 'dist/index-DZkDsHXr.chunk.mjs'),window.OC.filePath('', '', 'dist/createElementId-DhjFt1I9-D95yphbb.chunk.mjs'),window.OC.filePath('', '', 'dist/translation-DoG5ZELJ-BX7lsMna.chunk.mjs'),window.OC.filePath('', '', 'dist/mdi-CCQ2KgUK.chunk.mjs'),window.OC.filePath('', '', 'dist/logger-D3RVzcfQ-D08Lqsc3.chunk.mjs'),window.OC.filePath('', '', 'dist/logger-D3RVzcfQ-DWAMka5N.chunk.css'),window.OC.filePath('', '', 'dist/PencilOutline-CRype3Oz.chunk.mjs'),window.OC.filePath('', '', 'dist/PencilOutline-CWUlo4XY.chunk.css'),window.OC.filePath('', '', 'dist/index-DFa5IGZB.chunk.css'),window.OC.filePath('', '', 'dist/NcNoteCard-CVhtNL04-xGysk9Jq.chunk.mjs'),window.OC.filePath('', '', 'dist/NcNoteCard-CVhtNL04-DZSuYX4-.chunk.css'),window.OC.filePath('', '', 'dist/index-DiROoqva.chunk.mjs'),window.OC.filePath('', '', 'dist/public-SXOFh1vA.chunk.mjs'),window.OC.filePath('', '', 'dist/string_decoder-CSsspFHV.chunk.mjs'),window.OC.filePath('', '', 'dist/NcActionButton-pKOSrlGE-By2YA-_F.chunk.mjs'),window.OC.filePath('', '', 'dist/NcActionButton-pKOSrlGE-Bb0ihLdt.chunk.css'),window.OC.filePath('', '', 'dist/NcDateTime.vue_vue_type_script_setup_true_lang-BhB8yA4U-3Cg9SqZ9.chunk.mjs'),window.OC.filePath('', '', 'dist/NcDateTime-DRcCH7xq.chunk.css'),window.OC.filePath('', '', 'dist/NcAvatar-DmUGApWA-C2lPLiNg.chunk.mjs'),window.OC.filePath('', '', 'dist/index-iNeUnB75.chunk.mjs'),window.OC.filePath('', '', 'dist/colors-Go3zmZRD-CRyYiZ-p.chunk.mjs'),window.OC.filePath('', '', 'dist/NcUserStatusIcon-CGEf7fej-CB09VdBp.chunk.mjs'),window.OC.filePath('', '', 'dist/NcUserStatusIcon-CGEf7fej-B3aHoBAd.chunk.css'),window.OC.filePath('', '', 'dist/NcAvatar-DmUGApWA-EadmWf8S.chunk.css'),window.OC.filePath('', '', 'dist/TrayArrowDown-SN39FuG_.chunk.mjs'),window.OC.filePath('', '', 'dist/TrayArrowDown-G-rFYxWh.chunk.css'),window.OC.filePath('', '', 'dist/TrashCanOutline-BquAR0NR.chunk.mjs'),window.OC.filePath('', '', 'dist/NcInputField-Bwsh2aHY-DY6YZAwi.chunk.mjs'),window.OC.filePath('', '', 'dist/NcInputField-Bwsh2aHY-B9DSDOEd.chunk.css'),window.OC.filePath('', '', 'dist/dav-CCFVdbCj.chunk.mjs'),window.OC.filePath('', '', 'dist/index-CIWHtE7-.chunk.mjs'),window.OC.filePath('', '', 'dist/files_versions-FilesVersionsSidebarTab-Xj1KhLzV.chunk.css')])))=>i.map(i=>d[i]);
const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { _ as __vitePreload } from "./index-CEzAKfoK.chunk.mjs";
import { r as registerSidebarTab } from "./index-DiROoqva.chunk.mjs";
import { t as translate } from "./translation-DoG5ZELJ-BX7lsMna.chunk.mjs";
import { i as isPublicShare, F as FileType } from "./public-SXOFh1vA.chunk.mjs";
import { d as defineCustomElement, a as defineAsyncComponent } from "./vue.runtime.esm-bundler-UjrxUCWV.chunk.mjs";
import "./mdi-CCQ2KgUK.chunk.mjs";
import "./string_decoder-CSsspFHV.chunk.mjs";
const BackupRestore = '<svg xmlns="http://www.w3.org/2000/svg" id="mdi-backup-restore" viewBox="0 0 24 24"><path d="M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z" /></svg>';
const tagName = "files-versions_sidebar-tab";
registerSidebarTab({
  id: "files_versions",
  tagName,
  order: 90,
  displayName: translate("files_versions", "Versions"),
  iconSvgInline: BackupRestore,
  enabled({ node }) {
    if (isPublicShare()) {
      return false;
    }
    if (node.type !== FileType.File) {
      return false;
    }
    return true;
  },
  async onInit() {
    const FilesVersionsSidebarTab = defineAsyncComponent(() => __vitePreload(() => import("./FilesVersionsSidebarTab-zBuZGIU6.chunk.mjs"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]) : void 0, import.meta.url));
    window.customElements.define(tagName, defineCustomElement(FilesVersionsSidebarTab, {
      shadowRoot: false
    }));
  }
});
//# sourceMappingURL=files_versions-sidebar-tab.mjs.map
