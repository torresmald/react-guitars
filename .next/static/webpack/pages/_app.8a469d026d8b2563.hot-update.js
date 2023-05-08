"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var carritoLS =  true ? localStorage.getItem(\"carrito\") : 0;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), carrito = ref[0], setCarrito = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n    }, [\n        carrito\n    ]);\n    var agregarCarrito = function(guitarra) {\n        if (carrito.some(function(guitarraState) {\n            return guitarraState.id === guitarra.id;\n        })) {\n            var carritoActualizado = carrito.map(function(guitarraState) {\n                if (guitarraState.id === guitarra.id) {\n                    guitarraState.cantidad = guitarra.cantidad;\n                }\n                return guitarraState;\n            });\n            setCarrito((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(carritoActualizado));\n            localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n        } else {\n            setCarrito((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(carrito).concat([\n                guitarra\n            ]));\n            localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n        }\n    };\n    var eliminarProducto = function(id) {\n        var carritoActualizado = carrito.filter(function(producto) {\n            return producto.id != id;\n        });\n        setCarrito(carritoActualizado);\n        window.localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n    };\n    var actualizarCantidad = function(guitarra) {\n        var carritoActualizado = carrito.map(function(guitarraState) {\n            if (guitarraState.id === guitarra.id) {\n                guitarraState.cantidad = parseInt(guitarra.cantidad);\n            }\n            return guitarraState;\n        });\n        setCarrito(carritoActualizado);\n        window.localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, pageProps), {\n        carrito: carrito,\n        agregarCarrito: agregarCarrito,\n        eliminarProducto: eliminarProducto,\n        actualizarCantidad: actualizarCantidad\n    }), void 0, false, {\n        fileName: \"/Users/jonathan/Desktop/Programacion/REACT/react-guitar/react-guitar/pages/_app.js\",\n        lineNumber: 42,\n        columnNumber: 12\n    }, this);\n}\n_s(MyApp, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0MsU0FBUyxDQUFDSixPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxxQkFBTyw4REFBQ0wsU0FBUywwS0FBS0MsU0FBUztRQUMzQkksT0FBTyxFQUFFQSxPQUFPO1FBQ2hCSyxjQUFjLEVBQUVBLGNBQWM7UUFDOUJRLGdCQUFnQixFQUFFQSxnQkFBZ0I7UUFDbENJLGtCQUFrQixFQUFFQSxrQkFBa0I7Ozs7O1lBQ3hDO0FBQ04sQ0FBQztHQTdDUXZCLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQStDZCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIGNvbnN0IGNhcnJpdG9MUyA9IHR5cGVvZiB3aW5kb3cgIT09J3VuZGVmaW5lZCcgPyAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnJpdG8nKTogbnVsbDtcbiAgICBjb25zdCBbY2Fycml0bywgc2V0Q2Fycml0b10gPSB1c2VTdGF0ZShbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnJpdG8nLCBKU09OLnN0cmluZ2lmeShjYXJyaXRvKSk7XG4gICAgfSwgW2NhcnJpdG9dKVxuICAgIGNvbnN0IGFncmVnYXJDYXJyaXRvID0gZ3VpdGFycmEgPT4ge1xuICAgICAgICBpZiAoY2Fycml0by5zb21lKGd1aXRhcnJhU3RhdGUgPT4gZ3VpdGFycmFTdGF0ZS5pZCA9PT0gZ3VpdGFycmEuaWQpKSB7XG4gICAgICAgICAgICBjb25zdCBjYXJyaXRvQWN0dWFsaXphZG8gPSBjYXJyaXRvLm1hcChndWl0YXJyYVN0YXRlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZ3VpdGFycmFTdGF0ZS5pZCA9PT0gZ3VpdGFycmEuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3VpdGFycmFTdGF0ZS5jYW50aWRhZCA9IGd1aXRhcnJhLmNhbnRpZGFkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZ3VpdGFycmFTdGF0ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0Q2Fycml0byhbLi4uY2Fycml0b0FjdHVhbGl6YWRvXSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2Fycml0bycsIEpTT04uc3RyaW5naWZ5KGNhcnJpdG8pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldENhcnJpdG8oWy4uLmNhcnJpdG8sIGd1aXRhcnJhXSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2Fycml0bycsIEpTT04uc3RyaW5naWZ5KGNhcnJpdG8pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVsaW1pbmFyUHJvZHVjdG8gPSBpZCA9PiB7XG4gICAgICAgIGNvbnN0IGNhcnJpdG9BY3R1YWxpemFkbyA9IGNhcnJpdG8uZmlsdGVyKHByb2R1Y3RvID0+IHByb2R1Y3RvLmlkICE9IGlkKVxuICAgICAgICBzZXRDYXJyaXRvKGNhcnJpdG9BY3R1YWxpemFkbylcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJyaXRvJywgSlNPTi5zdHJpbmdpZnkoY2Fycml0bykpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdHVhbGl6YXJDYW50aWRhZCA9IGd1aXRhcnJhID0+IHtcbiAgICAgICAgY29uc3QgY2Fycml0b0FjdHVhbGl6YWRvID0gY2Fycml0by5tYXAoZ3VpdGFycmFTdGF0ZSA9PiB7XG4gICAgICAgICAgICBpZiAoZ3VpdGFycmFTdGF0ZS5pZCA9PT0gZ3VpdGFycmEuaWQpIHtcbiAgICAgICAgICAgICAgICBndWl0YXJyYVN0YXRlLmNhbnRpZGFkID0gcGFyc2VJbnQoZ3VpdGFycmEuY2FudGlkYWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ3VpdGFycmFTdGF0ZVxuICAgICAgICB9KVxuICAgICAgICBzZXRDYXJyaXRvKGNhcnJpdG9BY3R1YWxpemFkbylcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJyaXRvJywgSlNPTi5zdHJpbmdpZnkoY2Fycml0bykpO1xuICAgIH1cblxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIGNhcnJpdG89e2NhcnJpdG99XG4gICAgICAgIGFncmVnYXJDYXJyaXRvPXthZ3JlZ2FyQ2Fycml0b31cbiAgICAgICAgZWxpbWluYXJQcm9kdWN0bz17ZWxpbWluYXJQcm9kdWN0b31cbiAgICAgICAgYWN0dWFsaXphckNhbnRpZGFkPXthY3R1YWxpemFyQ2FudGlkYWR9XG4gICAgLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNhcnJpdG9MUyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjYXJyaXRvIiwic2V0Q2Fycml0byIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiYWdyZWdhckNhcnJpdG8iLCJndWl0YXJyYSIsInNvbWUiLCJndWl0YXJyYVN0YXRlIiwiaWQiLCJjYXJyaXRvQWN0dWFsaXphZG8iLCJtYXAiLCJjYW50aWRhZCIsImVsaW1pbmFyUHJvZHVjdG8iLCJmaWx0ZXIiLCJwcm9kdWN0byIsIndpbmRvdyIsImFjdHVhbGl6YXJDYW50aWRhZCIsInBhcnNlSW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});