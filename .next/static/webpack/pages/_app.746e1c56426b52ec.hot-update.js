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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var ref;\n    var carritoLS =  true ? (ref = JSON.parse(localStorage.getItem(\"carrito\"))) !== null && ref !== void 0 ? ref : [] : 0;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(carritoLS), carrito = ref1[0], setCarrito = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n    }, [\n        carrito\n    ]);\n    var agregarCarrito = function(guitarra) {\n        if (carrito.some(function(guitarraState) {\n            return guitarraState.id === guitarra.id;\n        })) {\n            var carritoActualizado = carrito.map(function(guitarraState) {\n                if (guitarraState.id === guitarra.id) {\n                    guitarraState.cantidad = guitarra.cantidad;\n                }\n                return guitarraState;\n            });\n            setCarrito((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(carritoActualizado));\n            localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n        } else {\n            setCarrito((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(carrito).concat([\n                guitarra\n            ]));\n            localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n        }\n    };\n    var eliminarProducto = function(id) {\n        var carritoActualizado = carrito.filter(function(producto) {\n            return producto.id != id;\n        });\n        setCarrito(carritoActualizado);\n        window.localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n    };\n    var actualizarCantidad = function(guitarra) {\n        var carritoActualizado = carrito.map(function(guitarraState) {\n            if (guitarraState.id === guitarra.id) {\n                guitarraState.cantidad = parseInt(guitarra.cantidad);\n            }\n            return guitarraState;\n        });\n        setCarrito(carritoActualizado);\n        window.localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, pageProps), {\n        carrito: carrito,\n        agregarCarrito: agregarCarrito,\n        eliminarProducto: eliminarProducto,\n        actualizarCantidad: actualizarCantidad\n    }), void 0, false, {\n        fileName: \"/Users/jonathan/Desktop/Programacion/REACT/react-guitar/react-guitar/pages/_app.js\",\n        lineNumber: 42,\n        columnNumber: 12\n    }, this);\n}\n_s(MyApp, \"va8VSDBhpBpok9mu8dxAR6RTiDY=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN4QixDQUFDLENBQUM7UUFDRk4sVUFBVSxDQUFDUSxrQkFBa0IsQ0FBQztRQUM5Qk0sTUFBTSxDQUFDakIsWUFBWSxDQUFDSSxPQUFPLENBQUMsU0FBUyxFQUFFUCxJQUFJLENBQUNRLFNBQVMsQ0FBQ0gsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQscUJBQU8sOERBQUNQLFNBQVMsMEtBQUtDLFNBQVM7UUFDM0JNLE9BQU8sRUFBRUEsT0FBTztRQUNoQkksY0FBYyxFQUFFQSxjQUFjO1FBQzlCUSxnQkFBZ0IsRUFBRUEsZ0JBQWdCO1FBQ2xDSSxrQkFBa0IsRUFBRUEsa0JBQWtCOzs7OztZQUN4QztBQUNOLENBQUM7R0E3Q1F4QixLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUErQ2QsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICBjb25zdCBjYXJyaXRvTFMgPSB0eXBlb2Ygd2luZG93ICE9PSd1bmRlZmluZWQnID8gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnJpdG8nKSkgPz8gW10gOiBbXTtcbiAgICBjb25zdCBbY2Fycml0bywgc2V0Q2Fycml0b10gPSB1c2VTdGF0ZShjYXJyaXRvTFMpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJyaXRvJywgSlNPTi5zdHJpbmdpZnkoY2Fycml0bykpO1xuICAgIH0sIFtjYXJyaXRvXSlcbiAgICBjb25zdCBhZ3JlZ2FyQ2Fycml0byA9IGd1aXRhcnJhID0+IHtcbiAgICAgICAgaWYgKGNhcnJpdG8uc29tZShndWl0YXJyYVN0YXRlID0+IGd1aXRhcnJhU3RhdGUuaWQgPT09IGd1aXRhcnJhLmlkKSkge1xuICAgICAgICAgICAgY29uc3QgY2Fycml0b0FjdHVhbGl6YWRvID0gY2Fycml0by5tYXAoZ3VpdGFycmFTdGF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGd1aXRhcnJhU3RhdGUuaWQgPT09IGd1aXRhcnJhLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGd1aXRhcnJhU3RhdGUuY2FudGlkYWQgPSBndWl0YXJyYS5jYW50aWRhZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGd1aXRhcnJhU3RhdGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldENhcnJpdG8oWy4uLmNhcnJpdG9BY3R1YWxpemFkb10pO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnJpdG8nLCBKU09OLnN0cmluZ2lmeShjYXJyaXRvKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRDYXJyaXRvKFsuLi5jYXJyaXRvLCBndWl0YXJyYV0pO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnJpdG8nLCBKU09OLnN0cmluZ2lmeShjYXJyaXRvKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlbGltaW5hclByb2R1Y3RvID0gaWQgPT4ge1xuICAgICAgICBjb25zdCBjYXJyaXRvQWN0dWFsaXphZG8gPSBjYXJyaXRvLmZpbHRlcihwcm9kdWN0byA9PiBwcm9kdWN0by5pZCAhPSBpZClcbiAgICAgICAgc2V0Q2Fycml0byhjYXJyaXRvQWN0dWFsaXphZG8pXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2Fycml0bycsIEpTT04uc3RyaW5naWZ5KGNhcnJpdG8pKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3R1YWxpemFyQ2FudGlkYWQgPSBndWl0YXJyYSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcnJpdG9BY3R1YWxpemFkbyA9IGNhcnJpdG8ubWFwKGd1aXRhcnJhU3RhdGUgPT4ge1xuICAgICAgICAgICAgaWYgKGd1aXRhcnJhU3RhdGUuaWQgPT09IGd1aXRhcnJhLmlkKSB7XG4gICAgICAgICAgICAgICAgZ3VpdGFycmFTdGF0ZS5jYW50aWRhZCA9IHBhcnNlSW50KGd1aXRhcnJhLmNhbnRpZGFkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGd1aXRhcnJhU3RhdGVcbiAgICAgICAgfSlcbiAgICAgICAgc2V0Q2Fycml0byhjYXJyaXRvQWN0dWFsaXphZG8pXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2Fycml0bycsIEpTT04uc3RyaW5naWZ5KGNhcnJpdG8pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfVxuICAgICAgICBjYXJyaXRvPXtjYXJyaXRvfVxuICAgICAgICBhZ3JlZ2FyQ2Fycml0bz17YWdyZWdhckNhcnJpdG99XG4gICAgICAgIGVsaW1pbmFyUHJvZHVjdG89e2VsaW1pbmFyUHJvZHVjdG99XG4gICAgICAgIGFjdHVhbGl6YXJDYW50aWRhZD17YWN0dWFsaXphckNhbnRpZGFkfVxuICAgIC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJKU09OIiwiY2Fycml0b0xTIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2Fycml0byIsInNldENhcnJpdG8iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWdyZWdhckNhcnJpdG8iLCJndWl0YXJyYSIsInNvbWUiLCJndWl0YXJyYVN0YXRlIiwiaWQiLCJjYXJyaXRvQWN0dWFsaXphZG8iLCJtYXAiLCJjYW50aWRhZCIsImVsaW1pbmFyUHJvZHVjdG8iLCJmaWx0ZXIiLCJwcm9kdWN0byIsIndpbmRvdyIsImFjdHVhbGl6YXJDYW50aWRhZCIsInBhcnNlSW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});