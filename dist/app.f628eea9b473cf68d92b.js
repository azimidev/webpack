/*! For license information please see app.f628eea9b473cf68d92b.js.LICENSE.txt */
(()=>{var __webpack_modules__={"./src/Notifications.js":module=>{eval("function notify(message) {\n  alert(message);\n}\n\nfunction log(message) {\n  console.log(message);\n}\n\nmodule.exports = {\n  notify: notify,\n  log: log\n};\n\n//# sourceURL=webpack://parsclick-webpack/./src/Notifications.js?")},"./src/main.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{eval('var _require = __webpack_require__(/*! ./Notifications */ "./src/Notifications.js"),\n    log = _require.log,\n    notify = _require.notify;\n\nlog("PARSCLICK");\nnotify("PARSCLICK");\n\n//# sourceURL=webpack://parsclick-webpack/./src/main.js?')},"./src/main.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://parsclick-webpack/./src/main.scss?")}},__webpack_module_cache__={};function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__("./src/main.js");var __webpack_exports__=__webpack_require__("./src/main.scss")})();