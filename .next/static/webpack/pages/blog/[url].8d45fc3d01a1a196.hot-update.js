"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[url]",{

/***/ "./pages/blog/[url].js":
/*!*****************************!*\
  !*** ./pages/blog/[url].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/future/image */ \"./node_modules/next/future/image.js\");\n/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/blog.module.css */ \"./styles/blog.module.css\");\n/* harmony import */ var _styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helpers */ \"./utils/helpers.js\");\n\n\n\n\n\nfunction Post(param) {\n    var posts = param.posts;\n    var _attributes = posts[0].attributes, Nombre = _attributes.Nombre, Contenido = _attributes.Contenido, Imagen = _attributes.Imagen, publishedAt = _attributes.publishedAt;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_future_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: Imagen.data.attributes.formats.medium.url,\n                    width: 600,\n                    height: 400,\n                    alt: \"Imagen Blog\"\n                }, void 0, false, {\n                    fileName: \"/Users/jonathan/Desktop/Programacion/REACT/react-guitar/react-guitar/pages/blog/[url].js\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default().contenido),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: Nombre\n                        }, void 0, false, {\n                            fileName: \"/Users/jonathan/Desktop/Programacion/REACT/react-guitar/react-guitar/pages/blog/[url].js\",\n                            lineNumber: 12,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default().fecha),\n                            children: (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.formatearFecha)(publishedAt)\n                        }, void 0, false, {\n                            fileName: \"/Users/jonathan/Desktop/Programacion/REACT/react-guitar/react-guitar/pages/blog/[url].js\",\n                            lineNumber: 13,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_styles_blog_module_css__WEBPACK_IMPORTED_MODULE_4___default().resumen),\n                            children: Contenido\n                        }, void 0, false, {\n                            fileName: \"/Users/jonathan/Desktop/Programacion/REACT/react-guitar/react-guitar/pages/blog/[url].js\",\n                            lineNumber: 14,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jonathan/Desktop/Programacion/REACT/react-guitar/react-guitar/pages/blog/[url].js\",\n                    lineNumber: 11,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jonathan/Desktop/Programacion/REACT/react-guitar/react-guitar/pages/blog/[url].js\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jonathan/Desktop/Programacion/REACT/react-guitar/react-guitar/pages/blog/[url].js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n_c = Post;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1t1cmxdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQTZDO0FBQ1A7QUFDWTtBQUNHO0FBQ3JELFNBQVNJLElBQUksQ0FBQyxLQUFTLEVBQUU7UUFBWCxLQUFPLEdBQVAsS0FBUyxDQUFQQyxLQUFLO0lBQ2pCLElBQW1EQSxXQUFtQixHQUFuQkEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxVQUFVLEVBQTlEQyxNQUFNLEdBQXFDRixXQUFtQixDQUE5REUsTUFBTSxFQUFFQyxTQUFTLEdBQTBCSCxXQUFtQixDQUF0REcsU0FBUyxFQUFFQyxNQUFNLEdBQWtCSixXQUFtQixDQUEzQ0ksTUFBTSxFQUFFQyxXQUFXLEdBQUtMLFdBQW1CLENBQW5DSyxXQUFXO0lBQzlDLHFCQUNJLDhEQUFDViwwREFBTTtrQkFDSCw0RUFBQ1csU0FBTzs7OEJBQ0osOERBQUNWLDBEQUFLO29CQUFDVyxHQUFHLEVBQUVILE1BQU0sQ0FBQ0ksSUFBSSxDQUFDUCxVQUFVLENBQUNRLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxHQUFHO29CQUFFQyxLQUFLLEVBQUUsR0FBRztvQkFBRUMsTUFBTSxFQUFFLEdBQUc7b0JBQUVDLEdBQUcsRUFBQyxhQUFhOzs7Ozt3QkFBRzs4QkFDcEcsOERBQUNDLEtBQUc7b0JBQUNDLFNBQVMsRUFBRW5CLDBFQUFnQjs7c0NBQzVCLDhEQUFDcUIsSUFBRTtzQ0FBRWhCLE1BQU07Ozs7O2dDQUFNO3NDQUNqQiw4REFBQ2lCLEdBQUM7NEJBQUNILFNBQVMsRUFBRW5CLHNFQUFZO3NDQUFHQyw4REFBYyxDQUFDTyxXQUFXLENBQUM7Ozs7O2dDQUFLO3NDQUM3RCw4REFBQ2MsR0FBQzs0QkFBQ0gsU0FBUyxFQUFFbkIsd0VBQWM7c0NBQUdNLFNBQVM7Ozs7O2dDQUFLOzs7Ozs7d0JBQzNDOzs7Ozs7Z0JBQ0E7Ozs7O1lBQ0wsQ0FDWDtBQUNOLENBQUM7QUFkUUosS0FBQUEsSUFBSTs7QUFnQmIsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9nL1t1cmxdLmpzPzAwODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9mdXR1cmUvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2Jsb2cubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBmb3JtYXRlYXJGZWNoYSB9IGZyb20gXCIuLi8uLi91dGlscy9oZWxwZXJzXCI7XG5mdW5jdGlvbiBQb3N0KHsgcG9zdHMgfSkge1xuICAgIGNvbnN0IHsgTm9tYnJlLCBDb250ZW5pZG8sIEltYWdlbiwgcHVibGlzaGVkQXQgfSA9IHBvc3RzWzBdLmF0dHJpYnV0ZXM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0ltYWdlbi5kYXRhLmF0dHJpYnV0ZXMuZm9ybWF0cy5tZWRpdW0udXJsfSB3aWR0aD17NjAwfSBoZWlnaHQ9ezQwMH0gYWx0PVwiSW1hZ2VuIEJsb2dcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVuaWRvfT5cbiAgICAgICAgICAgICAgICAgICAgPGgzPntOb21icmV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmVjaGF9Pntmb3JtYXRlYXJGZWNoYShwdWJsaXNoZWRBdCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bWVufT57Q29udGVuaWRvfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5OiB7IHVybCB9IH0pIHtcbiAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5BUElfVVJMfS9wb3N0cz9maWx0ZXJzW3VybF09JHt1cmx9JnBvcHVsYXRlPUltYWdlbmApO1xuICAgIGNvbnN0IHsgZGF0YTogcG9zdHMgfSA9IGF3YWl0IHJlc3B1ZXN0YS5qc29uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHBvc3RzXG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbIkxheW91dCIsIkltYWdlIiwic3R5bGVzIiwiZm9ybWF0ZWFyRmVjaGEiLCJQb3N0IiwicG9zdHMiLCJhdHRyaWJ1dGVzIiwiTm9tYnJlIiwiQ29udGVuaWRvIiwiSW1hZ2VuIiwicHVibGlzaGVkQXQiLCJhcnRpY2xlIiwic3JjIiwiZGF0YSIsImZvcm1hdHMiLCJtZWRpdW0iLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRlbmlkbyIsImgzIiwicCIsImZlY2hhIiwicmVzdW1lbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[url].js\n"));

/***/ })

});