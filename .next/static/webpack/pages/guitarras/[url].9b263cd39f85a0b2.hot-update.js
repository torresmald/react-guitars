"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/guitarras/[url]",{

/***/ "./pages/guitarras/[url].js":
/*!**********************************!*\
  !*** ./pages/guitarras/[url].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/future/image */ \"./node_modules/next/future/image.js\");\n/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_guitarras_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/guitarras.module.css */ \"./styles/guitarras.module.css\");\n/* harmony import */ var _styles_guitarras_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_guitarras_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../404 */ \"./pages/404.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/server/api-utils */ \"./node_modules/next/dist/server/api-utils/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Producto(param) {\n    var guitarra = param.guitarra;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    if (guitarra && guitarra[0] && guitarra[0].attributes) {\n        var _attributes = guitarra[0].attributes, nombre = _attributes.nombre, descripcion = _attributes.descripcion, imagen = _attributes.imagen, precio = _attributes.precio;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            title: \"Guitarra \".concat(nombre),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_guitarras_module_css__WEBPACK_IMPORTED_MODULE_6___default().guitarra),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_future_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: imagen.data[0].attributes.url,\n                        width: 600,\n                        height: 400,\n                        alt: \"Imagen Guitarra\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jonathan/Desktop/Programacion/REACT/react-guitar/react-guitar/pages/guitarras/[url].js\",\n                        lineNumber: 15,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_guitarras_module_css__WEBPACK_IMPORTED_MODULE_6___default().contenido),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: nombre\n                            }, void 0, false, {\n                                fileName: \"/Users/jonathan/Desktop/Programacion/REACT/react-guitar/react-guitar/pages/guitarras/[url].js\",\n                                lineNumber: 17,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_guitarras_module_css__WEBPACK_IMPORTED_MODULE_6___default().descripcion),\n                                children: descripcion\n                            }, void 0, false, {\n                                fileName: \"/Users/jonathan/Desktop/Programacion/REACT/react-guitar/react-guitar/pages/guitarras/[url].js\",\n                                lineNumber: 18,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_guitarras_module_css__WEBPACK_IMPORTED_MODULE_6___default().precio),\n                                children: [\n                                    precio,\n                                    \"€\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jonathan/Desktop/Programacion/REACT/react-guitar/react-guitar/pages/guitarras/[url].js\",\n                                lineNumber: 19,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jonathan/Desktop/Programacion/REACT/react-guitar/react-guitar/pages/guitarras/[url].js\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jonathan/Desktop/Programacion/REACT/react-guitar/react-guitar/pages/guitarras/[url].js\",\n                lineNumber: 14,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jonathan/Desktop/Programacion/REACT/react-guitar/react-guitar/pages/guitarras/[url].js\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, this);\n    } else {\n        router.redirect(\"\");\n    }\n}\n_s(Producto, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Producto;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Producto);\nvar _c;\n$RefreshReg$(_c, \"Producto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ndWl0YXJyYXMvW3VybF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXNDO0FBQ2lCO0FBQ1Y7QUFDZDtBQUNTO0FBRWM7QUFDdEQsU0FBU00sUUFBUSxDQUFDLEtBQVksRUFBRTtRQUFkLFFBQVUsR0FBVixLQUFZLENBQVZDLFFBQVE7O0lBQ3hCLElBQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUMxQixJQUFJRyxRQUFRLElBQUlBLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSUEsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDRSxVQUFVLEVBQUU7UUFDbkQsSUFBZ0RGLFdBQXNCLEdBQXRCQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNFLFVBQVUsRUFBOURDLE1BQU0sR0FBa0NILFdBQXNCLENBQTlERyxNQUFNLEVBQUVDLFdBQVcsR0FBcUJKLFdBQXNCLENBQXRESSxXQUFXLEVBQUVDLE1BQU0sR0FBYUwsV0FBc0IsQ0FBekNLLE1BQU0sRUFBRUMsTUFBTSxHQUFLTixXQUFzQixDQUFqQ00sTUFBTTtRQUMzQyxxQkFDSSw4REFBQ1gsMERBQU07WUFBQ1ksS0FBSyxFQUFFLFdBQVUsQ0FBUyxPQUFQSixNQUFNLENBQUU7c0JBQy9CLDRFQUFDSyxLQUFHO2dCQUFDQyxTQUFTLEVBQUVmLDhFQUFlOztrQ0FDM0IsOERBQUNELDBEQUFLO3dCQUFDaUIsR0FBRyxFQUFFTCxNQUFNLENBQUNNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ1QsVUFBVSxDQUFDVSxHQUFHO3dCQUFFQyxLQUFLLEVBQUUsR0FBRzt3QkFBRUMsTUFBTSxFQUFFLEdBQUc7d0JBQUVDLEdBQUcsRUFBQyxpQkFBaUI7Ozs7OzRCQUFHO2tDQUM1Riw4REFBQ1AsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFZiwrRUFBZ0I7OzBDQUM1Qiw4REFBQ3VCLElBQUU7MENBQUVkLE1BQU07Ozs7O29DQUFNOzBDQUNqQiw4REFBQ2UsR0FBQztnQ0FBQ1QsU0FBUyxFQUFFZixpRkFBa0I7MENBQUdVLFdBQVc7Ozs7O29DQUFLOzBDQUNuRCw4REFBQ2MsR0FBQztnQ0FBQ1QsU0FBUyxFQUFFZiw0RUFBYTs7b0NBQUdZLE1BQU07b0NBQUMsR0FBQzs7Ozs7O29DQUFJOzs7Ozs7NEJBQ3hDOzs7Ozs7b0JBQ0o7Ozs7O2dCQUNELENBQ1g7SUFDTixPQUFPO1FBQ0hMLE1BQU0sQ0FBQ0gsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXhCLENBQUM7QUFDTCxDQUFDO0dBcEJRQyxRQUFROztRQUNFRixrREFBUzs7O0FBRG5CRSxLQUFBQSxRQUFROztBQXNCakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ndWl0YXJyYXMvW3VybF0uanM/YWYxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvZnV0dXJlL2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9ndWl0YXJyYXMubW9kdWxlLmNzcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IFBhZ2luYTQwNCBmcm9tIFwiLi4vNDA0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvYXBpLXV0aWxzXCI7XG5mdW5jdGlvbiBQcm9kdWN0byh7IGd1aXRhcnJhIH0pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBpZiAoZ3VpdGFycmEgJiYgZ3VpdGFycmFbMF0gJiYgZ3VpdGFycmFbMF0uYXR0cmlidXRlcykge1xuICAgICAgICBjb25zdCB7IG5vbWJyZSwgZGVzY3JpcGNpb24sIGltYWdlbiwgcHJlY2lvIH0gPSBndWl0YXJyYVswXS5hdHRyaWJ1dGVzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dCB0aXRsZT17YEd1aXRhcnJhICR7bm9tYnJlfWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3VpdGFycmF9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZW4uZGF0YVswXS5hdHRyaWJ1dGVzLnVybH0gd2lkdGg9ezYwMH0gaGVpZ2h0PXs0MDB9IGFsdD1cIkltYWdlbiBHdWl0YXJyYVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVuaWRvfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57bm9tYnJlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwY2lvbn0+e2Rlc2NyaXBjaW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByZWNpb30+e3ByZWNpb33igqw8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm91dGVyLnJlZGlyZWN0KCcnKTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdG87XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeTogeyB1cmwgfSB9KSB7XG4gICAgY29uc29sZS5sb2codXJsKTtcbiAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5BUElfVVJMfS9ndWl0YXJyYXM/ZmlsdGVyc1t1cmxdPSR7dXJsfSZwb3B1bGF0ZT1pbWFnZW5gKTtcbiAgICBjb25zdCB7IGRhdGE6IGd1aXRhcnJhIH0gPSBhd2FpdCByZXNwdWVzdGEuanNvbigpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBndWl0YXJyYVxuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlcyIsIkxheW91dCIsIlBhZ2luYTQwNCIsInVzZVJvdXRlciIsInJlZGlyZWN0IiwiUHJvZHVjdG8iLCJndWl0YXJyYSIsInJvdXRlciIsImF0dHJpYnV0ZXMiLCJub21icmUiLCJkZXNjcmlwY2lvbiIsImltYWdlbiIsInByZWNpbyIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiZGF0YSIsInVybCIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiY29udGVuaWRvIiwiaDMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/guitarras/[url].js\n"));

/***/ })

});