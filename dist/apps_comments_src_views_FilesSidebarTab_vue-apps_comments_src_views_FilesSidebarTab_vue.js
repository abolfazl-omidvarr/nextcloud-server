"use strict";
(globalThis["webpackChunknextcloud_ui_legacy"] = globalThis["webpackChunknextcloud_ui_legacy"] || []).push([["apps_comments_src_views_FilesSidebarTab_vue"],{

/***/ "./apps/comments/src/utils/cancelableRequest.js"
/*!******************************************************!*\
  !*** ./apps/comments/src/utils/cancelableRequest.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Creates a cancelable axios 'request object'.
 *
 * @param {Function} request the axios promise request
 * @return {object}
 */
function cancelableRequest(request) {
  const controller = new AbortController();
  const signal = controller.signal;

  /**
   * Execute the request
   *
   * @param {string} url the url to send the request to
   * @param {object} [options] optional config for the request
   */
  const fetch = async function (url, options) {
    const response = await request(url, {
      signal,
      ...options
    });
    return response;
  };
  return {
    request: fetch,
    abort: () => controller.abort()
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cancelableRequest);

/***/ },

/***/ "./apps/comments/src/services/ReadComments.ts"
/*!****************************************************!*\
  !*** ./apps/comments/src/services/ReadComments.ts ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   markCommentsAsRead: () => (/* binding */ markCommentsAsRead)
/* harmony export */ });
/* harmony import */ var _DavClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DavClient.js */ "./apps/comments/src/services/DavClient.js");
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Mark comments older than the date timestamp as read
 *
 * @param resourceType the resource type
 * @param resourceId the resource ID
 * @param date the date object
 */
function markCommentsAsRead(resourceType, resourceId, date) {
  const resourcePath = ['', resourceType, resourceId].join('/');
  const readMarker = date.toUTCString();
  return _DavClient_js__WEBPACK_IMPORTED_MODULE_0__["default"].customRequest(resourcePath, {
    method: 'PROPPATCH',
    data: `<?xml version="1.0"?>
			<d:propertyupdate
				xmlns:d="DAV:"
				xmlns:oc="http://owncloud.org/ns">
			<d:set>
				<d:prop>
					<oc:readMarker>${readMarker}</oc:readMarker>
				</d:prop>
			</d:set>
			</d:propertyupdate>`
  });
}

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-6.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/comments/src/views/FilesSidebarTab.vue?vue&type=script&setup=true&lang=ts"
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-6.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/comments/src/views/FilesSidebarTab.vue?vue&type=script&setup=true&lang=ts ***!
  \******************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _Comments_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comments.vue */ "./apps/comments/src/views/Comments.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'FilesSidebarTab',
  props: {
    node: {
      type: null,
      required: false
    },
    active: {
      type: Boolean,
      required: false
    },
    folder: {
      type: null,
      required: false
    },
    view: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const resourceId = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.node?.fileid);
    return {
      __sfc: true,
      props,
      resourceId,
      Comments: _Comments_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  }
}));

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/comments/src/views/Comments.vue?vue&type=script&lang=js"
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/comments/src/views/Comments.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _vueuse_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueuse/components */ "./node_modules/@vueuse/components/index.mjs");
/* harmony import */ var _nextcloud_vue_components_NcButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/components/NcButton */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.mjs");
/* harmony import */ var _nextcloud_vue_components_NcEmptyContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/components/NcEmptyContent */ "./node_modules/@nextcloud/vue/dist/Components/NcEmptyContent.mjs");
/* harmony import */ var vue_material_design_icons_AlertCircleOutline_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-material-design-icons/AlertCircleOutline.vue */ "./node_modules/vue-material-design-icons/AlertCircleOutline.vue");
/* harmony import */ var vue_material_design_icons_MessageReplyTextOutline_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-material-design-icons/MessageReplyTextOutline.vue */ "./node_modules/vue-material-design-icons/MessageReplyTextOutline.vue");
/* harmony import */ var vue_material_design_icons_Refresh_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-material-design-icons/Refresh.vue */ "./node_modules/vue-material-design-icons/Refresh.vue");
/* harmony import */ var _components_Comment_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Comment.vue */ "./apps/comments/src/components/Comment.vue");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../logger.js */ "./apps/comments/src/logger.js");
/* harmony import */ var _mixins_CommentView_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mixins/CommentView.ts */ "./apps/comments/src/mixins/CommentView.ts");
/* harmony import */ var _services_GetComments_ts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/GetComments.ts */ "./apps/comments/src/services/GetComments.ts");
/* harmony import */ var _services_ReadComments_ts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/ReadComments.ts */ "./apps/comments/src/services/ReadComments.ts");
/* harmony import */ var _utils_cancelableRequest_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/cancelableRequest.js */ "./apps/comments/src/utils/cancelableRequest.js");














/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /* eslint vue/multi-word-component-names: "warn" */
  name: 'Comments',
  components: {
    Comment: _components_Comment_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    NcEmptyContent: _nextcloud_vue_components_NcEmptyContent__WEBPACK_IMPORTED_MODULE_4__["default"],
    NcButton: _nextcloud_vue_components_NcButton__WEBPACK_IMPORTED_MODULE_3__["default"],
    IconRefresh: vue_material_design_icons_Refresh_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    IconMessageReplyTextOutline: vue_material_design_icons_MessageReplyTextOutline_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    IconAlertCircleOutline: vue_material_design_icons_AlertCircleOutline_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  directives: {
    elementVisibility: _vueuse_components__WEBPACK_IMPORTED_MODULE_2__.vElementVisibility
  },
  mixins: [_mixins_CommentView_ts__WEBPACK_IMPORTED_MODULE_10__["default"]],
  data() {
    return {
      error: '',
      loading: false,
      done: false,
      offset: 0,
      comments: [],
      cancelRequest: () => {},
      Comment: _components_Comment_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
      userData: {}
    };
  },
  computed: {
    hasComments() {
      return this.comments.length > 0;
    },
    isFirstLoading() {
      return this.loading && this.offset === 0;
    }
  },
  watch: {
    resourceId() {
      this.currentResourceId = this.resourceId;
    }
  },
  methods: {
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate,
    async onVisibilityChange(isVisible) {
      if (isVisible) {
        try {
          await (0,_services_ReadComments_ts__WEBPACK_IMPORTED_MODULE_12__.markCommentsAsRead)(this.resourceType, this.currentResourceId, new Date());
        } catch (e) {
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showError)(e.message || (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('comments', 'Failed to mark comments as read'));
        }
      }
    },
    /**
     * Update current resourceId and fetch new data
     *
     * @param {number} resourceId the current resourceId (fileId...)
     */
    async update(resourceId) {
      this.currentResourceId = resourceId;
      this.resetState();
      await this.getComments();
    },
    /**
     * Ran when the bottom of the tab is reached
     */
    onScrollBottomReached() {
      /**
       * Do not fetch more if we:
       * - are showing an error
       * - already fetched everything
       * - are currently loading
       */
      if (this.error || this.done || this.loading) {
        return;
      }
      this.getComments();
    },
    /**
     * Get the existing shares infos
     */
    async getComments() {
      // Cancel any ongoing request
      this.cancelRequest('cancel');
      try {
        this.loading = true;
        this.error = '';

        // Init cancellable request
        const {
          request,
          abort
        } = (0,_utils_cancelableRequest_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_services_GetComments_ts__WEBPACK_IMPORTED_MODULE_11__.getComments);
        this.cancelRequest = abort;

        // Fetch comments
        const {
          data: comments
        } = (await request({
          resourceType: this.resourceType,
          resourceId: this.currentResourceId
        }, {
          offset: this.offset
        })) || {
          data: []
        };
        this.logger.debug(`Processed ${comments.length} comments`, {
          comments
        });

        // We received less than the requested amount,
        // we're done fetching comments
        if (comments.length < _services_GetComments_ts__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_LIMIT) {
          this.done = true;
        }

        // Ensure actor id is a string
        for (const comment of comments) {
          comment.props.actorId = comment.props.actorId.toString();
        }

        // Insert results
        this.comments = [...this.comments, ...comments];

        // Increase offset for next fetch
        this.offset += _services_GetComments_ts__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_LIMIT;
      } catch (error) {
        if (error.message === 'cancel') {
          return;
        }
        this.error = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('comments', 'Unable to load the comments list');
        _logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].error('Error loading the comments list', {
          error
        });
      } finally {
        this.loading = false;
      }
    },
    /**
     * Add newly created comment to the list
     *
     * @param {object} comment the new comment
     */
    onNewComment(comment) {
      this.comments.unshift(comment);
    },
    /**
     * Remove deleted comment from the list
     *
     * @param {number} id the deleted comment
     */
    onDelete(id) {
      const index = this.comments.findIndex(comment => comment.props.id === id);
      if (index > -1) {
        this.comments.splice(index, 1);
      } else {
        _logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].error('Could not find the deleted comment in the list', {
          id
        });
      }
    },
    /**
     * Reset the current view to its default state
     */
    resetState() {
      this.error = '';
      this.loading = false;
      this.done = false;
      this.offset = 0;
      this.comments = [];
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/comments/src/views/Comments.vue?vue&type=template&id=b0ddc2e8&scoped=true"
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/comments/src/views/Comments.vue?vue&type=template&id=b0ddc2e8&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    directives: [{
      name: "element-visibility",
      rawName: "v-element-visibility",
      value: _vm.onVisibilityChange,
      expression: "onVisibilityChange"
    }],
    staticClass: "comments",
    class: {
      "icon-loading": _vm.isFirstLoading
    }
  }, [_c("Comment", _vm._b({
    staticClass: "comments__writer",
    attrs: {
      "auto-complete": _vm.autoComplete,
      "resource-type": _vm.resourceType,
      editor: true,
      "user-data": _vm.userData,
      "resource-id": _vm.currentResourceId
    },
    on: {
      new: _vm.onNewComment
    }
  }, "Comment", _vm.editorData, false)), _vm._v(" "), !_vm.isFirstLoading ? [!_vm.hasComments && _vm.done ? _c("NcEmptyContent", {
    staticClass: "comments__empty",
    attrs: {
      name: _vm.t("comments", "No comments yet, start the conversation!")
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("IconMessageReplyTextOutline")];
      },
      proxy: true
    }], null, false, 326612300)
  }) : _c("ul", _vm._l(_vm.comments, function (comment) {
    return _c("Comment", _vm._b({
      key: comment.props.id,
      staticClass: "comments__list",
      attrs: {
        tag: "li",
        "auto-complete": _vm.autoComplete,
        "resource-type": _vm.resourceType,
        message: comment.props.message,
        "resource-id": _vm.currentResourceId,
        "user-data": _vm.genMentionsData(comment.props.mentions)
      },
      on: {
        "update:message": function ($event) {
          return _vm.$set(comment.props, "message", $event);
        },
        delete: _vm.onDelete
      }
    }, "Comment", comment.props, false));
  }), 1), _vm._v(" "), _vm.loading && !_vm.isFirstLoading ? _c("div", {
    staticClass: "comments__info icon-loading"
  }) : _vm.hasComments && _vm.done ? _c("div", {
    staticClass: "comments__info"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("comments", "No more messages")) + "\n\t\t")]) : _vm.error ? [_c("NcEmptyContent", {
    staticClass: "comments__error",
    attrs: {
      name: _vm.error
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("IconAlertCircleOutline")];
      },
      proxy: true
    }], null, false, 3663249556)
  }), _vm._v(" "), _c("NcButton", {
    staticClass: "comments__retry",
    on: {
      click: _vm.getComments
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("IconRefresh")];
      },
      proxy: true
    }], null, false, 2997625269)
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("comments", "Retry")) + "\n\t\t\t")])] : _vm._e()] : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/comments/src/views/FilesSidebarTab.vue?vue&type=template&id=eca8a1f0"
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/comments/src/views/FilesSidebarTab.vue?vue&type=template&id=eca8a1f0 ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _setup.resourceId !== undefined ? _c(_setup.Comments, {
    key: _setup.resourceId,
    attrs: {
      "resource-id": _setup.resourceId,
      "resource-type": "files"
    }
  }) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/comments/src/views/Comments.vue?vue&type=style&index=0&id=b0ddc2e8&lang=scss&scoped=true"
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/comments/src/views/Comments.vue?vue&type=style&index=0&id=b0ddc2e8&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.comments[data-v-b0ddc2e8] {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.comments__empty[data-v-b0ddc2e8], .comments__error[data-v-b0ddc2e8] {
  flex: 1 0;
}
.comments__retry[data-v-b0ddc2e8] {
  margin: 0 auto;
}
.comments__info[data-v-b0ddc2e8] {
  height: 60px;
  color: var(--color-text-maxcontrast);
  text-align: center;
  line-height: 60px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/comments/src/views/Comments.vue?vue&type=style&index=0&id=b0ddc2e8&lang=scss&scoped=true"
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/comments/src/views/Comments.vue?vue&type=style&index=0&id=b0ddc2e8&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_b0ddc2e8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Comments.vue?vue&type=style&index=0&id=b0ddc2e8&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/comments/src/views/Comments.vue?vue&type=style&index=0&id=b0ddc2e8&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_b0ddc2e8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_b0ddc2e8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_b0ddc2e8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_b0ddc2e8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./apps/comments/src/views/Comments.vue"
/*!**********************************************!*\
  !*** ./apps/comments/src/views/Comments.vue ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Comments_vue_vue_type_template_id_b0ddc2e8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comments.vue?vue&type=template&id=b0ddc2e8&scoped=true */ "./apps/comments/src/views/Comments.vue?vue&type=template&id=b0ddc2e8&scoped=true");
/* harmony import */ var _Comments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comments.vue?vue&type=script&lang=js */ "./apps/comments/src/views/Comments.vue?vue&type=script&lang=js");
/* harmony import */ var _Comments_vue_vue_type_style_index_0_id_b0ddc2e8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comments.vue?vue&type=style&index=0&id=b0ddc2e8&lang=scss&scoped=true */ "./apps/comments/src/views/Comments.vue?vue&type=style&index=0&id=b0ddc2e8&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Comments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Comments_vue_vue_type_template_id_b0ddc2e8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Comments_vue_vue_type_template_id_b0ddc2e8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b0ddc2e8",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "apps/comments/src/views/Comments.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./apps/comments/src/views/FilesSidebarTab.vue"
/*!*****************************************************!*\
  !*** ./apps/comments/src/views/FilesSidebarTab.vue ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilesSidebarTab_vue_vue_type_template_id_eca8a1f0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilesSidebarTab.vue?vue&type=template&id=eca8a1f0 */ "./apps/comments/src/views/FilesSidebarTab.vue?vue&type=template&id=eca8a1f0");
/* harmony import */ var _FilesSidebarTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilesSidebarTab.vue?vue&type=script&setup=true&lang=ts */ "./apps/comments/src/views/FilesSidebarTab.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilesSidebarTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilesSidebarTab_vue_vue_type_template_id_eca8a1f0__WEBPACK_IMPORTED_MODULE_0__.render,
  _FilesSidebarTab_vue_vue_type_template_id_eca8a1f0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "apps/comments/src/views/FilesSidebarTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./node_modules/vue-material-design-icons/MessageReplyTextOutline.vue"
/*!****************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/MessageReplyTextOutline.vue ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MessageReplyTextOutline_vue_vue_type_template_id_cda90e94__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageReplyTextOutline.vue?vue&type=template&id=cda90e94 */ "./node_modules/vue-material-design-icons/MessageReplyTextOutline.vue?vue&type=template&id=cda90e94");
/* harmony import */ var _MessageReplyTextOutline_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageReplyTextOutline.vue?vue&type=script&lang=js */ "./node_modules/vue-material-design-icons/MessageReplyTextOutline.vue?vue&type=script&lang=js");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MessageReplyTextOutline_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MessageReplyTextOutline_vue_vue_type_template_id_cda90e94__WEBPACK_IMPORTED_MODULE_0__.render,
  _MessageReplyTextOutline_vue_vue_type_template_id_cda90e94__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "node_modules/vue-material-design-icons/MessageReplyTextOutline.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/MessageReplyTextOutline.vue?vue&type=script&lang=js"
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/MessageReplyTextOutline.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MessageReplyTextOutlineIcon",
  emits: ['click'],
  props: {
    title: {
      type: String,
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
});


/***/ },

/***/ "./apps/comments/src/views/FilesSidebarTab.vue?vue&type=script&setup=true&lang=ts"
/*!****************************************************************************************!*\
  !*** ./apps/comments/src/views/FilesSidebarTab.vue?vue&type=script&setup=true&lang=ts ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_6_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesSidebarTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6.use[1]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesSidebarTab.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-6.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/comments/src/views/FilesSidebarTab.vue?vue&type=script&setup=true&lang=ts");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_6_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesSidebarTab_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./apps/comments/src/views/Comments.vue?vue&type=script&lang=js"
/*!**********************************************************************!*\
  !*** ./apps/comments/src/views/Comments.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Comments.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/comments/src/views/Comments.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./apps/comments/src/views/Comments.vue?vue&type=template&id=b0ddc2e8&scoped=true"
/*!****************************************************************************************!*\
  !*** ./apps/comments/src/views/Comments.vue?vue&type=template&id=b0ddc2e8&scoped=true ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_template_id_b0ddc2e8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_template_id_b0ddc2e8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_template_id_b0ddc2e8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Comments.vue?vue&type=template&id=b0ddc2e8&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/comments/src/views/Comments.vue?vue&type=template&id=b0ddc2e8&scoped=true");


/***/ },

/***/ "./apps/comments/src/views/FilesSidebarTab.vue?vue&type=template&id=eca8a1f0"
/*!***********************************************************************************!*\
  !*** ./apps/comments/src/views/FilesSidebarTab.vue?vue&type=template&id=eca8a1f0 ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesSidebarTab_vue_vue_type_template_id_eca8a1f0__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesSidebarTab_vue_vue_type_template_id_eca8a1f0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesSidebarTab_vue_vue_type_template_id_eca8a1f0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesSidebarTab.vue?vue&type=template&id=eca8a1f0 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/comments/src/views/FilesSidebarTab.vue?vue&type=template&id=eca8a1f0");


/***/ },

/***/ "./apps/comments/src/views/Comments.vue?vue&type=style&index=0&id=b0ddc2e8&lang=scss&scoped=true"
/*!*******************************************************************************************************!*\
  !*** ./apps/comments/src/views/Comments.vue?vue&type=style&index=0&id=b0ddc2e8&lang=scss&scoped=true ***!
  \*******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_b0ddc2e8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Comments.vue?vue&type=style&index=0&id=b0ddc2e8&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/comments/src/views/Comments.vue?vue&type=style&index=0&id=b0ddc2e8&lang=scss&scoped=true");


/***/ },

/***/ "./node_modules/vue-material-design-icons/MessageReplyTextOutline.vue?vue&type=script&lang=js"
/*!****************************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/MessageReplyTextOutline.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_MessageReplyTextOutline_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./MessageReplyTextOutline.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/MessageReplyTextOutline.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_MessageReplyTextOutline_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./node_modules/vue-material-design-icons/MessageReplyTextOutline.vue?vue&type=template&id=cda90e94"
/*!**********************************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/MessageReplyTextOutline.vue?vue&type=template&id=cda90e94 ***!
  \**********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_MessageReplyTextOutline_vue_vue_type_template_id_cda90e94__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_MessageReplyTextOutline_vue_vue_type_template_id_cda90e94__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_MessageReplyTextOutline_vue_vue_type_template_id_cda90e94__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./MessageReplyTextOutline.vue?vue&type=template&id=cda90e94 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/MessageReplyTextOutline.vue?vue&type=template&id=cda90e94");


/***/ },

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/MessageReplyTextOutline.vue?vue&type=template&id=cda90e94"
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/MessageReplyTextOutline.vue?vue&type=template&id=cda90e94 ***!
  \**************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "span",
    _vm._b(
      {
        staticClass: "material-design-icon message-reply-text-outline-icon",
        attrs: {
          "aria-hidden": _vm.title ? null : "true",
          "aria-label": _vm.title,
          role: "img",
        },
        on: {
          click: function ($event) {
            return _vm.$emit("click", $event)
          },
        },
      },
      "span",
      _vm.$attrs,
      false
    ),
    [
      _c(
        "svg",
        {
          staticClass: "material-design-icon__svg",
          attrs: {
            fill: _vm.fillColor,
            width: _vm.size,
            height: _vm.size,
            viewBox: "0 0 24 24",
          },
        },
        [
          _c(
            "path",
            {
              attrs: {
                d: "M9 11H18V13H9V11M18 7H6V9H18V7M22 4V22L18 18H4C2.9 18 2 17.11 2 16V4C2 2.9 2.9 2 4 2H20C21.1 2 22 2.89 22 4M20 4H4V16H18.83L20 17.17V4Z",
              },
            },
            [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }

}]);
//# sourceMappingURL=apps_comments_src_views_FilesSidebarTab_vue-apps_comments_src_views_FilesSidebarTab_vue.js.map?v=a567ddb32547b873ca29