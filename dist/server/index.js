/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/graphql/index.js":
/*!*************************************!*\
  !*** ./src/server/graphql/index.js ***!
  \*************************************/
/*! exports provided: schema, root */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schema", function() { return schema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema */ "./src/server/graphql/schema.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolvers */ "./src/server/graphql/resolvers/index.js");
var _require = __webpack_require__(/*! graphql */ "graphql"),
    buildSchema = _require.buildSchema;



var schema = buildSchema(_schema__WEBPACK_IMPORTED_MODULE_0__["schema"]);
var root = {
  articles: Object(_resolvers__WEBPACK_IMPORTED_MODULE_1__["getArticles"])(),
  article: function article(_ref) {
    var id = _ref.id;
    return Object(_resolvers__WEBPACK_IMPORTED_MODULE_1__["getArticleById"])(id);
  }
};


/***/ }),

/***/ "./src/server/graphql/resolvers/index.js":
/*!***********************************************!*\
  !*** ./src/server/graphql/resolvers/index.js ***!
  \***********************************************/
/*! exports provided: getArticles, getArticleById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resolvers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolvers.js */ "./src/server/graphql/resolvers/resolvers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getArticles", function() { return _resolvers_js__WEBPACK_IMPORTED_MODULE_0__["getArticles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getArticleById", function() { return _resolvers_js__WEBPACK_IMPORTED_MODULE_0__["getArticleById"]; });




/***/ }),

/***/ "./src/server/graphql/resolvers/resolvers.js":
/*!***************************************************!*\
  !*** ./src/server/graphql/resolvers/resolvers.js ***!
  \***************************************************/
/*! exports provided: getArticles, getArticleById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticles", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticleById", function() { return getArticleById; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/server/graphql/resolvers/utils.js");



function getArticles() {
  return _getArticles.apply(this, arguments);
}

function _getArticles() {
  _getArticles = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var res, apiArticles;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getApiArticles"])();

          case 2:
            res = _context.sent;
            apiArticles = res.items;
            return _context.abrupt("return", apiArticles.map(function (apiArticle) {
              return getArticle(apiArticle.data);
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getArticles.apply(this, arguments);
}

function getArticleById(_x) {
  return _getArticleById.apply(this, arguments);
}

function _getArticleById() {
  _getArticleById = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
    var apiArticle;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getApiArticlesById"])(id);

          case 2:
            apiArticle = _context2.sent;
            return _context2.abrupt("return", getArticle(apiArticle.data));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getArticleById.apply(this, arguments);
}

function getArticle(apiArticle) {
  return {
    authors: getAuthors(apiArticle.profiles),
    body: apiArticle.body,
    id: apiArticle.uid,
    images: getImages(apiArticle.images),
    tags: getTags(apiArticle.tags),
    slug: apiArticle.slug,
    title: apiArticle.title
  };
}

function getTags(apiTags) {
  return apiTags.map(function (apiTag) {
    return getTag(apiTag);
  });
}

function getTag(apiTag) {
  return {
    id: apiTag.uid,
    title: apiTag.title
  };
}

function getAuthors(apiAuthors) {
  return apiAuthors.map(function (apiAuthor) {
    return getAuthor(apiAuthor);
  });
}

function getAuthor(apiAuthor) {
  return {
    id: apiAuthor.uid,
    name: apiAuthor['full_name'],
    slug: apiAuthor.slug
  };
}

function getImages(apiImages) {
  return {
    "default": apiImages["default"] ? getImage(apiImages["default"]) : null,
    hero: apiImages.hero ? getImage(apiImages.hero) : null
  };
}

function getImage(apiImage) {
  return {
    height: apiImage.height,
    id: apiImage.image_uid,
    orientation: apiImage.orientation,
    title: apiImage.title,
    width: apiImage.width
  };
}

/***/ }),

/***/ "./src/server/graphql/resolvers/utils.js":
/*!***********************************************!*\
  !*** ./src/server/graphql/resolvers/utils.js ***!
  \***********************************************/
/*! exports provided: getApiArticles, getApiArticlesBySlug, getApiArticlesById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiArticles", function() { return getApiArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiArticlesBySlug", function() { return getApiArticlesBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiArticlesById", function() { return getApiArticlesById; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);



__webpack_require__(/*! es6-promise */ "es6-promise").polyfill();

__webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");

function getApiArticles() {
  return _getApiArticles.apply(this, arguments);
}

function _getApiArticles() {
  _getApiArticles = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", fetch('https://tr-prod-content-api.condenet.co.uk/2.0/article').then(function (res) {
              return res.json();
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getApiArticles.apply(this, arguments);
}

function getApiArticlesBySlug(_x) {
  return _getApiArticlesBySlug.apply(this, arguments);
}

function _getApiArticlesBySlug() {
  _getApiArticlesBySlug = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(slug) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", fetch('https://tr-prod-content-api.condenet.co.uk/2.0/article/slug/' + slug).then(function (res) {
              return res.json();
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getApiArticlesBySlug.apply(this, arguments);
}

function getApiArticlesById(_x2) {
  return _getApiArticlesById.apply(this, arguments);
}

function _getApiArticlesById() {
  _getApiArticlesById = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", fetch('https://tr-prod-content-api.condenet.co.uk/2.0/article/uid/' + id).then(function (res) {
              return res.json();
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getApiArticlesById.apply(this, arguments);
}

/***/ }),

/***/ "./src/server/graphql/schema.js":
/*!**************************************!*\
  !*** ./src/server/graphql/schema.js ***!
  \**************************************/
/*! exports provided: schema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schema", function() { return schema; });
var schema = "\n\ttype Images {\n\t\tdefault: Image\n\t\thero: Image\n\t}\n\n\ttype Image {\n\t\theight: Int\n\t\tid: ID\n\t\torientation: String\n\t\ttitle: String\n\t\twidth: Int\n\t}\n\n\ttype Author {\n\t\tid: ID,\n\t\tname: String\n\t\tslug: String\n\t}\n\n\ttype Tag {\n\t\tid: ID,\n\t\tslug: String\n\t\ttitle: String\n\t}\n\n\ttype Article {\n\t\tauthors: [Author]\n\t\tbody: String\n\t\tid: ID\n\t\timages: Images\n\t\tslug: String\n\t\ttags: [Tag]\n\t\ttitle: String\n\t}\n\n  type Query {\n    articles: [Article]\n    article(id: ID, slug: String): Article\n  }\n";

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphql */ "./src/server/graphql/index.js");
var express = __webpack_require__(/*! express */ "express");

var graphqlHTTP = __webpack_require__(/*! express-graphql */ "express-graphql");


var app = express();
app.use("/graphql", graphqlHTTP({
  schema: _graphql__WEBPACK_IMPORTED_MODULE_0__["schema"],
  rootValue: _graphql__WEBPACK_IMPORTED_MODULE_0__["root"],
  graphiql: true
}));
app.listen(4000, function () {
  return console.log("Now browse to localhost:4000/graphql");
});

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./src/server/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/server/index.js */"./src/server/index.js");


/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "es6-promise":
/*!******************************!*\
  !*** external "es6-promise" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map