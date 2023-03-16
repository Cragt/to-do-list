/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  background-color: #00bbf0;\n  margin: 0;\n  padding: 0;\n}\n\n#header > h1 {\n  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, \"Segoe UI\",\n    Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  background-color: #005792;\n  margin-top: 0;\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n.cards {\n  /* border: black solid 2px; */\n  margin-left: 150px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  grid-template-rows: repeat(2, 1fr);\n}\n\n.cards > div {\n  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, \"Segoe UI\",\n    Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 1rem;\n  border: solid 2px rgb(0, 0, 0);\n  margin: 10px;\n  border-radius: 10px;\n  background-color: #fefefe;\n  background: #fdb44b;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 3px;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content {\n  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, \"Segoe UI\",\n    Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  background-color: #00bbf0;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n  border: solid 0.2rem black;\n  border-radius: 1em;\n}\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n#modal-btn {\n  margin-top: 1rem;\n}\n\nbutton {\n  background-color: #fff000;\n  border-radius: 12px;\n  color: #000000;\n  cursor: pointer;\n  font-weight: bold;\n  padding: 10px 15px;\n  text-align: center;\n  transition: 200ms;\n  width: 100%;\n  box-sizing: border-box;\n  border: 0;\n  font-size: 16px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n\nbutton:not(:disabled):hover,\nbutton:not(:disabled):focus {\n  outline: 0;\n  background: #f4e603;\n  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.15);\n}\n\nbutton:disabled {\n  filter: saturate(0.2) opacity(0.5);\n  -webkit-filter: saturate(0.2) opacity(0.5);\n  cursor: not-allowed;\n}\n\n#sidebar {\n  height: 100%;\n  width: 150px;\n  position: absolute;\n  float: left;\n  left: 0;\n  top: 0;\n  padding-top: 40px;\n  /* background-color: lightblue; */\n  border: black solid 4px;\n}\n\n#sidebar button {\n  margin-top: 5px;\n}\n\n#tasks {\n  margin-left: 160px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,yBAAyB;EACzB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE;;gFAE8E;EAC9E,yBAAyB;EACzB,aAAa;EACb,kBAAkB;EAClB,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,aAAa;EACb,2DAA2D;EAC3D,kCAAkC;AACpC;;AAEA;EACE;;gFAE8E;EAC9E,eAAe;EACf,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;EACd,oCAAoC;AACtC;;AAEA;EACE;;gFAE8E;EAC9E,yBAAyB;EACzB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;EACX,sBAAsB;EACtB,SAAS;EACT,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;;EAEE,UAAU;EACV,mBAAmB;EACnB,yEAAyE;AAC3E;;AAEA;EACE,kCAAkC;EAClC,0CAA0C;EAC1C,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,OAAO;EACP,MAAM;EACN,iBAAiB;EACjB,iCAAiC;EACjC,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["html,\nbody {\n  background-color: #00bbf0;\n  margin: 0;\n  padding: 0;\n}\n\n#header > h1 {\n  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, \"Segoe UI\",\n    Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  background-color: #005792;\n  margin-top: 0;\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n.cards {\n  /* border: black solid 2px; */\n  margin-left: 150px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  grid-template-rows: repeat(2, 1fr);\n}\n\n.cards > div {\n  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, \"Segoe UI\",\n    Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 1rem;\n  border: solid 2px rgb(0, 0, 0);\n  margin: 10px;\n  border-radius: 10px;\n  background-color: #fefefe;\n  background: #fdb44b;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 3px;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content {\n  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, \"Segoe UI\",\n    Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  background-color: #00bbf0;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n  border: solid 0.2rem black;\n  border-radius: 1em;\n}\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n#modal-btn {\n  margin-top: 1rem;\n}\n\nbutton {\n  background-color: #fff000;\n  border-radius: 12px;\n  color: #000000;\n  cursor: pointer;\n  font-weight: bold;\n  padding: 10px 15px;\n  text-align: center;\n  transition: 200ms;\n  width: 100%;\n  box-sizing: border-box;\n  border: 0;\n  font-size: 16px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n\nbutton:not(:disabled):hover,\nbutton:not(:disabled):focus {\n  outline: 0;\n  background: #f4e603;\n  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.15);\n}\n\nbutton:disabled {\n  filter: saturate(0.2) opacity(0.5);\n  -webkit-filter: saturate(0.2) opacity(0.5);\n  cursor: not-allowed;\n}\n\n#sidebar {\n  height: 100%;\n  width: 150px;\n  position: absolute;\n  float: left;\n  left: 0;\n  top: 0;\n  padding-top: 40px;\n  /* background-color: lightblue; */\n  border: black solid 4px;\n}\n\n#sidebar button {\n  margin-top: 5px;\n}\n\n#tasks {\n  margin-left: 160px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
// Create empty project array
let projects = [];

// Project constructor
class Project {
    constructor(name, tasks) {
        this.name = name;
        this.tasks = tasks;
    }
}



/***/ }),

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPage": () => (/* binding */ renderPage)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _submits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submits */ "./src/submits.js");


const sidebar = document.getElementById("sidebar");
const content = document.getElementById("tasks");
// Render the form in the DOM
const renderPage = (function () {
  const renderAddProjectForm = function () {
    content.innerText = "";

    // Create a form element
    const form = document.createElement("form");

    // Create input elements for project name, task name, task description, due date, and priority
    const projectNameInput = document.createElement("input");
    projectNameInput.type = "text";
    projectNameInput.name = "project-name";
    projectNameInput.placeholder = "Project Name";

    // Create a submit button for the form
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Add Project";

    // Append input elements and submit button to the form
    form.appendChild(projectNameInput);
    form.appendChild(submitButton);

    // Append the form element to the "tasks" element in the DOM
    content.appendChild(form);

    // When submit is clicked, add input values to the projects array
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      _submits__WEBPACK_IMPORTED_MODULE_1__.submitModule.submitAddProjectForm(projectNameInput.value);
    });
  };

  // Adding 'add project' button to sidebar
  const renderAddProjectButton = function () {
    const addProjectButton = document.createElement("button");
    addProjectButton.innerText = "Add a Project";
    sidebar.appendChild(addProjectButton);

    // When add project is clicked, runs the renderAddProjectForm function
    addProjectButton.addEventListener("click", () => {
      renderAddProjectForm();
    });
  };

  const renderRemoveProjectButton = function () {
    const removeProjectButton = document.createElement("button");
    removeProjectButton.innerText = "Delete a Project";
    sidebar.appendChild(removeProjectButton);

    removeProjectButton.addEventListener("click", () => {
      const children = sidebar.querySelectorAll(
        "button:not(:first-child):not(:last-child)"
      );
      children.forEach((button, index) => {
        button.style.backgroundColor = "red";

        content.innerHTML = "Select a project to delete";
        // Add a click event listener to each project button
        button.addEventListener("click", () => {
          // Remove the corresponding project from the projects array
          _projects__WEBPACK_IMPORTED_MODULE_0__.projects.splice(index, 1);
          // Re-render the project buttons
          renderProjects();
        });
      });
    });
    content.innerHTML = "";
  };

  // Loops through projects array and appends the project name to the sidebar as a button
  const renderProjects = function () {
    sidebar.innerHTML = "";
    renderAddProjectButton();
    _projects__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
      const projectNameElement = document.createElement("button");
      projectNameElement.textContent = project.name;
      sidebar.appendChild(projectNameElement);

      projectNameElement.addEventListener("click", () => {
        renderTasks(project);
      });
    });
    renderRemoveProjectButton();
  };

  const renderTasks = function (project) {
    content.innerHTML = "";

    // Creates a header element for displaying selected project name at the top of the tasks area
    const header = document.createElement("h2");
    header.textContent = project.name;
    content.appendChild(header);

    // Create an 'Add Task' button
    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "Add a Task";
    content.appendChild(addTaskButton);

    addTaskButton.addEventListener("click", () => {
      renderAddTaskForm(project);
    });

    // Loops through the tasks array of the selected project

    project.tasks.forEach((task) => {
      // Creates div for each tasks card
      const taskDiv = document.createElement("div");

      // Creates elements for each part of the task card (name, description, due date, priority)
      const taskHeader = document.createElement("h3");
      taskHeader.textContent = task.taskName;
      taskDiv.appendChild(taskHeader);

      const taskDescription = document.createElement("p");
      taskDescription.textContent = task.taskDescription;
      taskDiv.appendChild(taskDescription);

      const dueDate = document.createElement("p");
      dueDate.textContent = task.dueDate;
      taskDiv.appendChild(dueDate);

      const priority = document.createElement("p");
      priority.textContent = task.priority;
      taskDiv.appendChild(priority);

      // Creates a button to remove tasks from the project
      const removeTaskButton = document.createElement("button");
      removeTaskButton.textContent = "Delete Task";
      taskDiv.appendChild(removeTaskButton);

      removeTaskButton.addEventListener("click", () => {
        const taskIndex = project.tasks.indexOf(task);
        project.tasks.splice(taskIndex, 1);
        renderTasks(project);
      });
      content.appendChild(taskDiv);
    });
  };

  const renderAddTaskForm = function (project) {
    content.innerHTML = "";

    const form = document.createElement("form");

    const taskNameInput = document.createElement("input");
    taskNameInput.type = "text";
    taskNameInput.name = "task-name";
    taskNameInput.placeholder = "Task Name";

    const taskDescriptionInput = document.createElement("textarea");
    taskDescriptionInput.name = "task-description";
    taskDescriptionInput.placeholder = "Task Description";

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.name = "due-date";

    const priorityInput = document.createElement("select");
    priorityInput.name = "priority";

    // Create option elements for priority select
    const highPriorityOption = document.createElement("option");
    highPriorityOption.value = "high";
    highPriorityOption.textContent = "High";

    const mediumPriorityOption = document.createElement("option");
    mediumPriorityOption.value = "medium";
    mediumPriorityOption.textContent = "Medium";

    const lowPriorityOption = document.createElement("option");
    lowPriorityOption.value = "low";
    lowPriorityOption.textContent = "Low";

    // Append option elements to the priority select
    priorityInput.appendChild(lowPriorityOption);
    priorityInput.appendChild(mediumPriorityOption);
    priorityInput.appendChild(highPriorityOption);

    // Create a submit button for the form
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Add Task";

    form.appendChild(taskNameInput);
    form.appendChild(taskDescriptionInput);
    form.appendChild(dueDateInput);
    form.appendChild(priorityInput);
    form.appendChild(submitButton);
    content.appendChild(form);

    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      _submits__WEBPACK_IMPORTED_MODULE_1__.submitModule.submitAddTaskForm(
        project,
        taskNameInput.value,
        taskDescriptionInput.value,
        dueDateInput.value,
        priorityInput.value
      );
    });
  };
  return {
    renderAddProjectForm,
    renderAddProjectButton,
    renderProjects,
    renderTasks,
    renderAddTaskForm,
  };
})();




/***/ }),

/***/ "./src/submits.js":
/*!************************!*\
  !*** ./src/submits.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submitModule": () => (/* binding */ submitModule)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ "./src/renderer.js");



const submitModule = (function () {
  const submitAddProjectForm = function (projectName) {
    const projectExists = _projects__WEBPACK_IMPORTED_MODULE_0__.projects.some(
      (project) => project.name === projectName
    );

    if (projectExists) {
      alert(`Project '${projectName}' already exists.`);
      return;
    }

    const newProject = new _projects__WEBPACK_IMPORTED_MODULE_0__.Project(projectName, []);

    _projects__WEBPACK_IMPORTED_MODULE_0__.projects.push(newProject);

    _renderer__WEBPACK_IMPORTED_MODULE_1__.renderPage.renderProjects();
  };

  const submitAddTaskForm = function (
    projectName,
    taskName,
    taskDescription,
    dueDate,
    priority
  ) {
    projectName.tasks.push({ taskName, taskDescription, dueDate, priority });
    _renderer__WEBPACK_IMPORTED_MODULE_1__.renderPage.renderTasks(projectName);
  };

  return {
    submitAddProjectForm,
    submitAddTaskForm,
  };
})();




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ "./src/renderer.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




// Create example project
const example = new _projects__WEBPACK_IMPORTED_MODULE_0__.Project("Example Project", [
  {
    taskName: "feed Dog",
    taskDescription: "get food out",
    dueDate: "1-2-3",
    priority: "high",
  },
]);
_projects__WEBPACK_IMPORTED_MODULE_0__.projects.push(example);

_renderer__WEBPACK_IMPORTED_MODULE_1__.renderPage.renderProjects();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0M7QUFDRztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdUVBQWlDO0FBQ3ZDLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHNEQUFlO0FBQ3pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBZ0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sb0VBQThCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdk55QjtBQUNQOztBQUV4QztBQUNBO0FBQ0EsMEJBQTBCLG9EQUFhO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBOztBQUVBLDJCQUEyQiw4Q0FBTzs7QUFFbEMsSUFBSSxvREFBYTs7QUFFakIsSUFBSSxnRUFBeUI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsOENBQThDO0FBQzNFLElBQUksNkRBQXNCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFdUI7Ozs7Ozs7VUN0Q3hCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0ErQztBQUNQO0FBQ25COztBQUVyQjtBQUNBLG9CQUFvQiw4Q0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esb0RBQWE7O0FBRWIsZ0VBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdWJtaXRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmJmMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNoZWFkZXIgPiBoMSB7XFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsXFxuICAgIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLFxcbiAgICBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTc5MjtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMTVweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4uY2FyZHMge1xcbiAgLyogYm9yZGVyOiBibGFjayBzb2xpZCAycHg7ICovXFxuICBtYXJnaW4tbGVmdDogMTUwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG5cXG4uY2FyZHMgPiBkaXYge1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLFxcbiAgICBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZixcXG4gICAgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYigwLCAwLCAwKTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgYmFja2dyb3VuZDogI2ZkYjQ0YjtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsXFxuICAgIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiYmYwO1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlcjogc29saWQgMC4ycmVtIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNhYWE7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNtb2RhbC1idG4ge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYwMDA7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxufVxcblxcbmJ1dHRvbjpub3QoOmRpc2FibGVkKTpob3ZlcixcXG5idXR0b246bm90KDpkaXNhYmxlZCk6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG4gIGJhY2tncm91bmQ6ICNmNGU2MDM7XFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDNweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQge1xcbiAgZmlsdGVyOiBzYXR1cmF0ZSgwLjIpIG9wYWNpdHkoMC41KTtcXG4gIC13ZWJraXQtZmlsdGVyOiBzYXR1cmF0ZSgwLjIpIG9wYWNpdHkoMC41KTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlOyAqL1xcbiAgYm9yZGVyOiBibGFjayBzb2xpZCA0cHg7XFxufVxcblxcbiNzaWRlYmFyIGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbiN0YXNrcyB7XFxuICBtYXJnaW4tbGVmdDogMTYwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRTs7Z0ZBRThFO0VBQzlFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0Qsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0U7O2dGQUU4RTtFQUM5RSxlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0U7O2dGQUU4RTtFQUM5RSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix5RUFBeUU7QUFDM0U7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMENBQTBDO0VBQzFDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxPQUFPO0VBQ1AsTUFBTTtFQUNOLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmJmMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNoZWFkZXIgPiBoMSB7XFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsXFxuICAgIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLFxcbiAgICBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTc5MjtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMTVweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4uY2FyZHMge1xcbiAgLyogYm9yZGVyOiBibGFjayBzb2xpZCAycHg7ICovXFxuICBtYXJnaW4tbGVmdDogMTUwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG5cXG4uY2FyZHMgPiBkaXYge1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLFxcbiAgICBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZixcXG4gICAgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYigwLCAwLCAwKTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgYmFja2dyb3VuZDogI2ZkYjQ0YjtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsXFxuICAgIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiYmYwO1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlcjogc29saWQgMC4ycmVtIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNhYWE7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNtb2RhbC1idG4ge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYwMDA7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxufVxcblxcbmJ1dHRvbjpub3QoOmRpc2FibGVkKTpob3ZlcixcXG5idXR0b246bm90KDpkaXNhYmxlZCk6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG4gIGJhY2tncm91bmQ6ICNmNGU2MDM7XFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDNweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQge1xcbiAgZmlsdGVyOiBzYXR1cmF0ZSgwLjIpIG9wYWNpdHkoMC41KTtcXG4gIC13ZWJraXQtZmlsdGVyOiBzYXR1cmF0ZSgwLjIpIG9wYWNpdHkoMC41KTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlOyAqL1xcbiAgYm9yZGVyOiBibGFjayBzb2xpZCA0cHg7XFxufVxcblxcbiNzaWRlYmFyIGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbiN0YXNrcyB7XFxuICBtYXJnaW4tbGVmdDogMTYwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIENyZWF0ZSBlbXB0eSBwcm9qZWN0IGFycmF5XG5sZXQgcHJvamVjdHMgPSBbXTtcblxuLy8gUHJvamVjdCBjb25zdHJ1Y3RvclxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdGFza3MpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgcHJvamVjdHMsIFByb2plY3QgfTsiLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBzdWJtaXRNb2R1bGUgfSBmcm9tIFwiLi9zdWJtaXRzXCI7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3NcIik7XG4vLyBSZW5kZXIgdGhlIGZvcm0gaW4gdGhlIERPTVxuY29uc3QgcmVuZGVyUGFnZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJlbmRlckFkZFByb2plY3RGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnRlbnQuaW5uZXJUZXh0ID0gXCJcIjtcblxuICAgIC8vIENyZWF0ZSBhIGZvcm0gZWxlbWVudFxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICAgIC8vIENyZWF0ZSBpbnB1dCBlbGVtZW50cyBmb3IgcHJvamVjdCBuYW1lLCB0YXNrIG5hbWUsIHRhc2sgZGVzY3JpcHRpb24sIGR1ZSBkYXRlLCBhbmQgcHJpb3JpdHlcbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHByb2plY3ROYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHByb2plY3ROYW1lSW5wdXQubmFtZSA9IFwicHJvamVjdC1uYW1lXCI7XG4gICAgcHJvamVjdE5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiUHJvamVjdCBOYW1lXCI7XG5cbiAgICAvLyBDcmVhdGUgYSBzdWJtaXQgYnV0dG9uIGZvciB0aGUgZm9ybVxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcblxuICAgIC8vIEFwcGVuZCBpbnB1dCBlbGVtZW50cyBhbmQgc3VibWl0IGJ1dHRvbiB0byB0aGUgZm9ybVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBmb3JtIGVsZW1lbnQgdG8gdGhlIFwidGFza3NcIiBlbGVtZW50IGluIHRoZSBET01cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgLy8gV2hlbiBzdWJtaXQgaXMgY2xpY2tlZCwgYWRkIGlucHV0IHZhbHVlcyB0byB0aGUgcHJvamVjdHMgYXJyYXlcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHN1Ym1pdE1vZHVsZS5zdWJtaXRBZGRQcm9qZWN0Rm9ybShwcm9qZWN0TmFtZUlucHV0LnZhbHVlKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBBZGRpbmcgJ2FkZCBwcm9qZWN0JyBidXR0b24gdG8gc2lkZWJhclxuICBjb25zdCByZW5kZXJBZGRQcm9qZWN0QnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFByb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gXCJBZGQgYSBQcm9qZWN0XCI7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcblxuICAgIC8vIFdoZW4gYWRkIHByb2plY3QgaXMgY2xpY2tlZCwgcnVucyB0aGUgcmVuZGVyQWRkUHJvamVjdEZvcm0gZnVuY3Rpb25cbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICByZW5kZXJBZGRQcm9qZWN0Rm9ybSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclJlbW92ZVByb2plY3RCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSBcIkRlbGV0ZSBhIFByb2plY3RcIjtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3RCdXR0b24pO1xuXG4gICAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgIFwiYnV0dG9uOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZClcIlxuICAgICAgKTtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG5cbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlNlbGVjdCBhIHByb2plY3QgdG8gZGVsZXRlXCI7XG4gICAgICAgIC8vIEFkZCBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggcHJvamVjdCBidXR0b25cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSBjb3JyZXNwb25kaW5nIHByb2plY3QgZnJvbSB0aGUgcHJvamVjdHMgYXJyYXlcbiAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIC8vIFJlLXJlbmRlciB0aGUgcHJvamVjdCBidXR0b25zXG4gICAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIH07XG5cbiAgLy8gTG9vcHMgdGhyb3VnaCBwcm9qZWN0cyBhcnJheSBhbmQgYXBwZW5kcyB0aGUgcHJvamVjdCBuYW1lIHRvIHRoZSBzaWRlYmFyIGFzIGEgYnV0dG9uXG4gIGNvbnN0IHJlbmRlclByb2plY3RzID0gZnVuY3Rpb24gKCkge1xuICAgIHNpZGViYXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICByZW5kZXJBZGRQcm9qZWN0QnV0dG9uKCk7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdE5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHByb2plY3ROYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50KTtcblxuICAgICAgcHJvamVjdE5hbWVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHJlbmRlclRhc2tzKHByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmVuZGVyUmVtb3ZlUHJvamVjdEJ1dHRvbigpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclRhc2tzID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAvLyBDcmVhdGVzIGEgaGVhZGVyIGVsZW1lbnQgZm9yIGRpc3BsYXlpbmcgc2VsZWN0ZWQgcHJvamVjdCBuYW1lIGF0IHRoZSB0b3Agb2YgdGhlIHRhc2tzIGFyZWFcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIC8vIENyZWF0ZSBhbiAnQWRkIFRhc2snIGJ1dHRvblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBhIFRhc2tcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcmVuZGVyQWRkVGFza0Zvcm0ocHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICAvLyBMb29wcyB0aHJvdWdoIHRoZSB0YXNrcyBhcnJheSBvZiB0aGUgc2VsZWN0ZWQgcHJvamVjdFxuXG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAvLyBDcmVhdGVzIGRpdiBmb3IgZWFjaCB0YXNrcyBjYXJkXG4gICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgLy8gQ3JlYXRlcyBlbGVtZW50cyBmb3IgZWFjaCBwYXJ0IG9mIHRoZSB0YXNrIGNhcmQgKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWUgZGF0ZSwgcHJpb3JpdHkpXG4gICAgICBjb25zdCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgdGFza0hlYWRlci50ZXh0Q29udGVudCA9IHRhc2sudGFza05hbWU7XG4gICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tIZWFkZXIpO1xuXG4gICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2sudGFza0Rlc2NyaXB0aW9uO1xuICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuXG4gICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcbiAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICAvLyBDcmVhdGVzIGEgYnV0dG9uIHRvIHJlbW92ZSB0YXNrcyBmcm9tIHRoZSBwcm9qZWN0XG4gICAgICBjb25zdCByZW1vdmVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHJlbW92ZVRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBUYXNrXCI7XG4gICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHJlbW92ZVRhc2tCdXR0b24pO1xuXG4gICAgICByZW1vdmVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3QudGFza3MuaW5kZXhPZih0YXNrKTtcbiAgICAgICAgcHJvamVjdC50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAgICAgcmVuZGVyVGFza3MocHJvamVjdCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQWRkVGFza0Zvcm0gPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza05hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdGFza05hbWVJbnB1dC5uYW1lID0gXCJ0YXNrLW5hbWVcIjtcbiAgICB0YXNrTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIE5hbWVcIjtcblxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0Lm5hbWUgPSBcInRhc2stZGVzY3JpcHRpb25cIjtcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFzayBEZXNjcmlwdGlvblwiO1xuXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcImR1ZS1kYXRlXCI7XG5cbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBwcmlvcml0eUlucHV0Lm5hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgICAvLyBDcmVhdGUgb3B0aW9uIGVsZW1lbnRzIGZvciBwcmlvcml0eSBzZWxlY3RcbiAgICBjb25zdCBoaWdoUHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGhpZ2hQcmlvcml0eU9wdGlvbi52YWx1ZSA9IFwiaGlnaFwiO1xuICAgIGhpZ2hQcmlvcml0eU9wdGlvbi50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuXG4gICAgY29uc3QgbWVkaXVtUHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG1lZGl1bVByaW9yaXR5T3B0aW9uLnZhbHVlID0gXCJtZWRpdW1cIjtcbiAgICBtZWRpdW1Qcmlvcml0eU9wdGlvbi50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG5cbiAgICBjb25zdCBsb3dQcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbG93UHJpb3JpdHlPcHRpb24udmFsdWUgPSBcImxvd1wiO1xuICAgIGxvd1ByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gXCJMb3dcIjtcblxuICAgIC8vIEFwcGVuZCBvcHRpb24gZWxlbWVudHMgdG8gdGhlIHByaW9yaXR5IHNlbGVjdFxuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHlPcHRpb24pO1xuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHlPcHRpb24pO1xuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5T3B0aW9uKTtcblxuICAgIC8vIENyZWF0ZSBhIHN1Ym1pdCBidXR0b24gZm9yIHRoZSBmb3JtXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbklucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc3VibWl0TW9kdWxlLnN1Ym1pdEFkZFRhc2tGb3JtKFxuICAgICAgICBwcm9qZWN0LFxuICAgICAgICB0YXNrTmFtZUlucHV0LnZhbHVlLFxuICAgICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlLFxuICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4ge1xuICAgIHJlbmRlckFkZFByb2plY3RGb3JtLFxuICAgIHJlbmRlckFkZFByb2plY3RCdXR0b24sXG4gICAgcmVuZGVyUHJvamVjdHMsXG4gICAgcmVuZGVyVGFza3MsXG4gICAgcmVuZGVyQWRkVGFza0Zvcm0sXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyByZW5kZXJQYWdlIH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyByZW5kZXJQYWdlIH0gZnJvbSBcIi4vcmVuZGVyZXJcIjtcblxuY29uc3Qgc3VibWl0TW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3VibWl0QWRkUHJvamVjdEZvcm0gPSBmdW5jdGlvbiAocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0RXhpc3RzID0gcHJvamVjdHMuc29tZShcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lXG4gICAgKTtcblxuICAgIGlmIChwcm9qZWN0RXhpc3RzKSB7XG4gICAgICBhbGVydChgUHJvamVjdCAnJHtwcm9qZWN0TmFtZX0nIGFscmVhZHkgZXhpc3RzLmApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSwgW10pO1xuXG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcblxuICAgIHJlbmRlclBhZ2UucmVuZGVyUHJvamVjdHMoKTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRBZGRUYXNrRm9ybSA9IGZ1bmN0aW9uIChcbiAgICBwcm9qZWN0TmFtZSxcbiAgICB0YXNrTmFtZSxcbiAgICB0YXNrRGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eVxuICApIHtcbiAgICBwcm9qZWN0TmFtZS50YXNrcy5wdXNoKHsgdGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfSk7XG4gICAgcmVuZGVyUGFnZS5yZW5kZXJUYXNrcyhwcm9qZWN0TmFtZSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzdWJtaXRBZGRQcm9qZWN0Rm9ybSxcbiAgICBzdWJtaXRBZGRUYXNrRm9ybSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHN1Ym1pdE1vZHVsZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcHJvamVjdHMsIFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgcmVuZGVyUGFnZSB9IGZyb20gXCIuL3JlbmRlcmVyXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4vLyBDcmVhdGUgZXhhbXBsZSBwcm9qZWN0XG5jb25zdCBleGFtcGxlID0gbmV3IFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgW1xuICB7XG4gICAgdGFza05hbWU6IFwiZmVlZCBEb2dcIixcbiAgICB0YXNrRGVzY3JpcHRpb246IFwiZ2V0IGZvb2Qgb3V0XCIsXG4gICAgZHVlRGF0ZTogXCIxLTItM1wiLFxuICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgfSxcbl0pO1xucHJvamVjdHMucHVzaChleGFtcGxlKTtcblxucmVuZGVyUGFnZS5yZW5kZXJQcm9qZWN0cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9