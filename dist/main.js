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
const storedProjects = localStorage.getItem("projects");

// Create empty project array
let projects = [];

// Project constructor
class Project {
  constructor(name, tasks) {
    this.name = name;
    this.tasks = tasks;
  }
}

// Check if projects are stored in localStorage
if (storedProjects) {
  projects = JSON.parse(storedProjects);
} else {
  // Create example project and add to projects array
  const example = new Project("Example Project", [
    {
      taskName: "feed Dog",
      taskDescription: "get food out",
      dueDate: "1-2-3",
      priority: "high",
    },
  ]);
  projects.push(example);

  // Store projects array in localStorage
  localStorage.setItem("projects", JSON.stringify(projects));
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

    // When add project is clicked, runs the renderProjects to remove Delete button state, then renders the form
    addProjectButton.addEventListener("click", () => {
      renderProjects();
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
        removeProjectButton.innerText = "Cancel";

        removeProjectButton.addEventListener("click", () => {
          renderProjects();
        });

        // Add a click event listener to each project button
        button.addEventListener("click", () => {
          // Remove the corresponding project from the projects array
          _projects__WEBPACK_IMPORTED_MODULE_0__.projects.splice(index, 1);
          localStorage.setItem("projects", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.projects));

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
    localStorage.setItem("projects", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.projects));

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
    localStorage.setItem("projects", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.projects));
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
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ "./src/renderer.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



_renderer__WEBPACK_IMPORTED_MODULE_0__.renderPage.renderProjects();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBd0M7QUFDbkI7O0FBRXJCLGdFQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3VibWl0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJiZjA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jaGVhZGVyID4gaDEge1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLFxcbiAgICBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZixcXG4gICAgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU3OTI7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmNhcmRzIHtcXG4gIC8qIGJvcmRlcjogYmxhY2sgc29saWQgMnB4OyAqL1xcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuXFxuLmNhcmRzID4gZGl2IHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsXFxuICAgIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMCwgMCwgMCk7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIGJhY2tncm91bmQ6ICNmZGI0NGI7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsXFxuICAgIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLFxcbiAgICBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmJmMDtcXG4gIG1hcmdpbjogMTUlIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiA4MCU7XFxuICBib3JkZXI6IHNvbGlkIDAuMnJlbSBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbW9kYWwtYnRuIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbn1cXG5cXG5idXR0b246bm90KDpkaXNhYmxlZCk6aG92ZXIsXFxuYnV0dG9uOm5vdCg6ZGlzYWJsZWQpOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxuICBiYWNrZ3JvdW5kOiAjZjRlNjAzO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAzcHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkIHtcXG4gIGZpbHRlcjogc2F0dXJhdGUoMC4yKSBvcGFjaXR5KDAuNSk7XFxuICAtd2Via2l0LWZpbHRlcjogc2F0dXJhdGUoMC4yKSBvcGFjaXR5KDAuNSk7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmbG9hdDogbGVmdDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBwYWRkaW5nLXRvcDogNDBweDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTsgKi9cXG4gIGJvcmRlcjogYmxhY2sgc29saWQgNHB4O1xcbn1cXG5cXG4jc2lkZWJhciBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4jdGFza3Mge1xcbiAgbWFyZ2luLWxlZnQ6IDE2MHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0U7O2dGQUU4RTtFQUM5RSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFOztnRkFFOEU7RUFDOUUsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7RUFDVixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFOztnRkFFOEU7RUFDOUUseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIseUVBQXlFO0FBQzNFOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDBDQUEwQztFQUMxQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU07RUFDTixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJiZjA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jaGVhZGVyID4gaDEge1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLFxcbiAgICBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZixcXG4gICAgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU3OTI7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmNhcmRzIHtcXG4gIC8qIGJvcmRlcjogYmxhY2sgc29saWQgMnB4OyAqL1xcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuXFxuLmNhcmRzID4gZGl2IHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsXFxuICAgIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMCwgMCwgMCk7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIGJhY2tncm91bmQ6ICNmZGI0NGI7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsXFxuICAgIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLFxcbiAgICBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmJmMDtcXG4gIG1hcmdpbjogMTUlIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiA4MCU7XFxuICBib3JkZXI6IHNvbGlkIDAuMnJlbSBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbW9kYWwtYnRuIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbn1cXG5cXG5idXR0b246bm90KDpkaXNhYmxlZCk6aG92ZXIsXFxuYnV0dG9uOm5vdCg6ZGlzYWJsZWQpOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxuICBiYWNrZ3JvdW5kOiAjZjRlNjAzO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAzcHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkIHtcXG4gIGZpbHRlcjogc2F0dXJhdGUoMC4yKSBvcGFjaXR5KDAuNSk7XFxuICAtd2Via2l0LWZpbHRlcjogc2F0dXJhdGUoMC4yKSBvcGFjaXR5KDAuNSk7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmbG9hdDogbGVmdDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBwYWRkaW5nLXRvcDogNDBweDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTsgKi9cXG4gIGJvcmRlcjogYmxhY2sgc29saWQgNHB4O1xcbn1cXG5cXG4jc2lkZWJhciBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4jdGFza3Mge1xcbiAgbWFyZ2luLWxlZnQ6IDE2MHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBzdG9yZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG5cbi8vIENyZWF0ZSBlbXB0eSBwcm9qZWN0IGFycmF5XG5sZXQgcHJvamVjdHMgPSBbXTtcblxuLy8gUHJvamVjdCBjb25zdHJ1Y3RvclxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHRhc2tzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gIH1cbn1cblxuLy8gQ2hlY2sgaWYgcHJvamVjdHMgYXJlIHN0b3JlZCBpbiBsb2NhbFN0b3JhZ2VcbmlmIChzdG9yZWRQcm9qZWN0cykge1xuICBwcm9qZWN0cyA9IEpTT04ucGFyc2Uoc3RvcmVkUHJvamVjdHMpO1xufSBlbHNlIHtcbiAgLy8gQ3JlYXRlIGV4YW1wbGUgcHJvamVjdCBhbmQgYWRkIHRvIHByb2plY3RzIGFycmF5XG4gIGNvbnN0IGV4YW1wbGUgPSBuZXcgUHJvamVjdChcIkV4YW1wbGUgUHJvamVjdFwiLCBbXG4gICAge1xuICAgICAgdGFza05hbWU6IFwiZmVlZCBEb2dcIixcbiAgICAgIHRhc2tEZXNjcmlwdGlvbjogXCJnZXQgZm9vZCBvdXRcIixcbiAgICAgIGR1ZURhdGU6IFwiMS0yLTNcIixcbiAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICB9LFxuICBdKTtcbiAgcHJvamVjdHMucHVzaChleGFtcGxlKTtcblxuICAvLyBTdG9yZSBwcm9qZWN0cyBhcnJheSBpbiBsb2NhbFN0b3JhZ2VcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5leHBvcnQgeyBwcm9qZWN0cywgUHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgc3VibWl0TW9kdWxlIH0gZnJvbSBcIi4vc3VibWl0c1wiO1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzXCIpO1xuLy8gUmVuZGVyIHRoZSBmb3JtIGluIHRoZSBET01cbmNvbnN0IHJlbmRlclBhZ2UgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCByZW5kZXJBZGRQcm9qZWN0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb250ZW50LmlubmVyVGV4dCA9IFwiXCI7XG5cbiAgICAvLyBDcmVhdGUgYSBmb3JtIGVsZW1lbnRcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgICAvLyBDcmVhdGUgaW5wdXQgZWxlbWVudHMgZm9yIHByb2plY3QgbmFtZSwgdGFzayBuYW1lLCB0YXNrIGRlc2NyaXB0aW9uLCBkdWUgZGF0ZSwgYW5kIHByaW9yaXR5XG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcm9qZWN0TmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBwcm9qZWN0TmFtZUlucHV0Lm5hbWUgPSBcInByb2plY3QtbmFtZVwiO1xuICAgIHByb2plY3ROYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIlByb2plY3QgTmFtZVwiO1xuXG4gICAgLy8gQ3JlYXRlIGEgc3VibWl0IGJ1dHRvbiBmb3IgdGhlIGZvcm1cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG5cbiAgICAvLyBBcHBlbmQgaW5wdXQgZWxlbWVudHMgYW5kIHN1Ym1pdCBidXR0b24gdG8gdGhlIGZvcm1cbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAgIC8vIEFwcGVuZCB0aGUgZm9ybSBlbGVtZW50IHRvIHRoZSBcInRhc2tzXCIgZWxlbWVudCBpbiB0aGUgRE9NXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIC8vIFdoZW4gc3VibWl0IGlzIGNsaWNrZWQsIGFkZCBpbnB1dCB2YWx1ZXMgdG8gdGhlIHByb2plY3RzIGFycmF5XG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzdWJtaXRNb2R1bGUuc3VibWl0QWRkUHJvamVjdEZvcm0ocHJvamVjdE5hbWVJbnB1dC52YWx1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQWRkaW5nICdhZGQgcHJvamVjdCcgYnV0dG9uIHRvIHNpZGViYXJcbiAgY29uc3QgcmVuZGVyQWRkUHJvamVjdEJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9IFwiQWRkIGEgUHJvamVjdFwiO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG5cbiAgICAvLyBXaGVuIGFkZCBwcm9qZWN0IGlzIGNsaWNrZWQsIHJ1bnMgdGhlIHJlbmRlclByb2plY3RzIHRvIHJlbW92ZSBEZWxldGUgYnV0dG9uIHN0YXRlLCB0aGVuIHJlbmRlcnMgdGhlIGZvcm1cbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgcmVuZGVyQWRkUHJvamVjdEZvcm0oKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJSZW1vdmVQcm9qZWN0QnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJlbW92ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlbW92ZVByb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gXCJEZWxldGUgYSBQcm9qZWN0XCI7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChyZW1vdmVQcm9qZWN0QnV0dG9uKTtcblxuICAgIHJlbW92ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICBcImJ1dHRvbjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpXCJcbiAgICAgICk7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJTZWxlY3QgYSBwcm9qZWN0IHRvIGRlbGV0ZVwiO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9IFwiQ2FuY2VsXCI7XG5cbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggcHJvamVjdCBidXR0b25cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSBjb3JyZXNwb25kaW5nIHByb2plY3QgZnJvbSB0aGUgcHJvamVjdHMgYXJyYXlcbiAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcblxuICAgICAgICAgIC8vIFJlLXJlbmRlciB0aGUgcHJvamVjdCBidXR0b25zXG4gICAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIH07XG5cbiAgLy8gTG9vcHMgdGhyb3VnaCBwcm9qZWN0cyBhcnJheSBhbmQgYXBwZW5kcyB0aGUgcHJvamVjdCBuYW1lIHRvIHRoZSBzaWRlYmFyIGFzIGEgYnV0dG9uXG4gIGNvbnN0IHJlbmRlclByb2plY3RzID0gZnVuY3Rpb24gKCkge1xuICAgIHNpZGViYXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIHJlbmRlckFkZFByb2plY3RCdXR0b24oKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgcHJvamVjdE5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUVsZW1lbnQpO1xuXG4gICAgICBwcm9qZWN0TmFtZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmVuZGVyVGFza3MocHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZW5kZXJSZW1vdmVQcm9qZWN0QnV0dG9uKCk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVGFza3MgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIC8vIENyZWF0ZXMgYSBoZWFkZXIgZWxlbWVudCBmb3IgZGlzcGxheWluZyBzZWxlY3RlZCBwcm9qZWN0IG5hbWUgYXQgdGhlIHRvcCBvZiB0aGUgdGFza3MgYXJlYVxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgLy8gQ3JlYXRlIGFuICdBZGQgVGFzaycgYnV0dG9uXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIGEgVGFza1wiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG5cbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICByZW5kZXJBZGRUYXNrRm9ybShwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIC8vIExvb3BzIHRocm91Z2ggdGhlIHRhc2tzIGFycmF5IG9mIHRoZSBzZWxlY3RlZCBwcm9qZWN0XG5cbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIC8vIENyZWF0ZXMgZGl2IGZvciBlYWNoIHRhc2tzIGNhcmRcbiAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAvLyBDcmVhdGVzIGVsZW1lbnRzIGZvciBlYWNoIHBhcnQgb2YgdGhlIHRhc2sgY2FyZCAobmFtZSwgZGVzY3JpcHRpb24sIGR1ZSBkYXRlLCBwcmlvcml0eSlcbiAgICAgIGNvbnN0IHRhc2tIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICB0YXNrSGVhZGVyLnRleHRDb250ZW50ID0gdGFzay50YXNrTmFtZTtcbiAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0hlYWRlcik7XG5cbiAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay50YXNrRGVzY3JpcHRpb247XG4gICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG5cbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgIC8vIENyZWF0ZXMgYSBidXR0b24gdG8gcmVtb3ZlIHRhc2tzIGZyb20gdGhlIHByb2plY3RcbiAgICAgIGNvbnN0IHJlbW92ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgcmVtb3ZlVGFza0J1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIFRhc2tcIjtcbiAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQocmVtb3ZlVGFza0J1dHRvbik7XG5cbiAgICAgIHJlbW92ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdC50YXNrcy5pbmRleE9mKHRhc2spO1xuICAgICAgICBwcm9qZWN0LnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgICByZW5kZXJUYXNrcyhwcm9qZWN0KTtcbiAgICAgIH0pO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJBZGRUYXNrRm9ybSA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrTmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICB0YXNrTmFtZUlucHV0Lm5hbWUgPSBcInRhc2stbmFtZVwiO1xuICAgIHRhc2tOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2sgTmFtZVwiO1xuXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQubmFtZSA9IFwidGFzay1kZXNjcmlwdGlvblwiO1xuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIERlc2NyaXB0aW9uXCI7XG5cbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9IFwiZHVlLWRhdGVcIjtcblxuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByaW9yaXR5SW5wdXQubmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICAgIC8vIENyZWF0ZSBvcHRpb24gZWxlbWVudHMgZm9yIHByaW9yaXR5IHNlbGVjdFxuICAgIGNvbnN0IGhpZ2hQcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgaGlnaFByaW9yaXR5T3B0aW9uLnZhbHVlID0gXCJoaWdoXCI7XG4gICAgaGlnaFByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG5cbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbWVkaXVtUHJpb3JpdHlPcHRpb24udmFsdWUgPSBcIm1lZGl1bVwiO1xuICAgIG1lZGl1bVByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcblxuICAgIGNvbnN0IGxvd1ByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBsb3dQcmlvcml0eU9wdGlvbi52YWx1ZSA9IFwibG93XCI7XG4gICAgbG93UHJpb3JpdHlPcHRpb24udGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuXG4gICAgLy8gQXBwZW5kIG9wdGlvbiBlbGVtZW50cyB0byB0aGUgcHJpb3JpdHkgc2VsZWN0XG4gICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChsb3dQcmlvcml0eU9wdGlvbik7XG4gICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eU9wdGlvbik7XG4gICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHlPcHRpb24pO1xuXG4gICAgLy8gQ3JlYXRlIGEgc3VibWl0IGJ1dHRvbiBmb3IgdGhlIGZvcm1cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uSW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzdWJtaXRNb2R1bGUuc3VibWl0QWRkVGFza0Zvcm0oXG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIHRhc2tOYW1lSW5wdXQudmFsdWUsXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUsXG4gICAgICAgIHByaW9yaXR5SW5wdXQudmFsdWVcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgcmVuZGVyQWRkUHJvamVjdEZvcm0sXG4gICAgcmVuZGVyQWRkUHJvamVjdEJ1dHRvbixcbiAgICByZW5kZXJQcm9qZWN0cyxcbiAgICByZW5kZXJUYXNrcyxcbiAgICByZW5kZXJBZGRUYXNrRm9ybSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHJlbmRlclBhZ2UgfTtcbiIsImltcG9ydCB7IHByb2plY3RzLCBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IHJlbmRlclBhZ2UgfSBmcm9tIFwiLi9yZW5kZXJlclwiO1xuXG5jb25zdCBzdWJtaXRNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBzdWJtaXRBZGRQcm9qZWN0Rm9ybSA9IGZ1bmN0aW9uIChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RFeGlzdHMgPSBwcm9qZWN0cy5zb21lKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWVcbiAgICApO1xuXG4gICAgaWYgKHByb2plY3RFeGlzdHMpIHtcbiAgICAgIGFsZXJ0KGBQcm9qZWN0ICcke3Byb2plY3ROYW1lfScgYWxyZWFkeSBleGlzdHMuYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lLCBbXSk7XG5cbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcblxuICAgIHJlbmRlclBhZ2UucmVuZGVyUHJvamVjdHMoKTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRBZGRUYXNrRm9ybSA9IGZ1bmN0aW9uIChcbiAgICBwcm9qZWN0TmFtZSxcbiAgICB0YXNrTmFtZSxcbiAgICB0YXNrRGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eVxuICApIHtcbiAgICBwcm9qZWN0TmFtZS50YXNrcy5wdXNoKHsgdGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIHJlbmRlclBhZ2UucmVuZGVyVGFza3MocHJvamVjdE5hbWUpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc3VibWl0QWRkUHJvamVjdEZvcm0sXG4gICAgc3VibWl0QWRkVGFza0Zvcm0sXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBzdWJtaXRNb2R1bGUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHJlbmRlclBhZ2UgfSBmcm9tIFwiLi9yZW5kZXJlclwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxucmVuZGVyUGFnZS5yZW5kZXJQcm9qZWN0cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9