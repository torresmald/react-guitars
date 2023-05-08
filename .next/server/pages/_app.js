/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const carritoLS =  false ? 0 : [];\n    const { 0: carrito , 1: setCarrito  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(carritoLS);\n    const { 0: ready , 1: setReady  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setReady(true);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n    }, [\n        carrito\n    ]);\n    const agregarCarrito = (guitarra)=>{\n        if (carrito.some((guitarraState)=>guitarraState.id === guitarra.id)) {\n            const carritoActualizado = carrito.map((guitarraState)=>{\n                if (guitarraState.id === guitarra.id) {\n                    guitarraState.cantidad = guitarra.cantidad;\n                }\n                return guitarraState;\n            });\n            setCarrito([\n                ...carritoActualizado\n            ]);\n            localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n        } else {\n            setCarrito([\n                ...carrito,\n                guitarra\n            ]);\n            localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n        }\n    };\n    const eliminarProducto = (id)=>{\n        const carritoActualizado = carrito.filter((producto)=>producto.id != id);\n        setCarrito(carritoActualizado);\n        window.localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n    };\n    const actualizarCantidad = (guitarra)=>{\n        const carritoActualizado = carrito.map((guitarraState)=>{\n            if (guitarraState.id === guitarra.id) {\n                guitarraState.cantidad = parseInt(guitarra.cantidad);\n            }\n            return guitarraState;\n        });\n        setCarrito(carritoActualizado);\n        window.localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n    };\n    return ready ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps,\n        carrito: carrito,\n        agregarCarrito: agregarCarrito,\n        eliminarProducto: eliminarProducto,\n        actualizarCantidad: actualizarCantidad\n    }, void 0, false, {\n        fileName: \"/Users/jonathan/Desktop/Programacion/REACT/react-guitar/react-guitar/pages/_app.js\",\n        lineNumber: 46,\n        columnNumber: 20\n    }, this) : null;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLENBQUNMLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELE9BQU9FLEtBQUssaUJBQUcsOERBQUNULFNBQVM7UUFBRSxHQUFHQyxTQUFTO1FBQ25DTSxPQUFPLEVBQUVBLE9BQU87UUFDaEJNLGNBQWMsRUFBRUEsY0FBYztRQUM5QlEsZ0JBQWdCLEVBQUVBLGdCQUFnQjtRQUNsQ0ksa0JBQWtCLEVBQUVBLGtCQUFrQjs7Ozs7WUFDeEMsR0FBRyxJQUFJO0FBQ2IsQ0FBQztBQUVELGlFQUFlMUIsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWd1aXRhci8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgY29uc3QgY2Fycml0b0xTID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJyaXRvJykpID8/IFtdIDogW107XG4gICAgY29uc3QgW2NhcnJpdG8sIHNldENhcnJpdG9dID0gdXNlU3RhdGUoY2Fycml0b0xTKTtcbiAgICBjb25zdCBbcmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRSZWFkeSh0cnVlKTtcbiAgICB9LCBbXSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2Fycml0bycsIEpTT04uc3RyaW5naWZ5KGNhcnJpdG8pKTtcbiAgICB9LCBbY2Fycml0b10pXG4gICAgY29uc3QgYWdyZWdhckNhcnJpdG8gPSBndWl0YXJyYSA9PiB7XG4gICAgICAgIGlmIChjYXJyaXRvLnNvbWUoZ3VpdGFycmFTdGF0ZSA9PiBndWl0YXJyYVN0YXRlLmlkID09PSBndWl0YXJyYS5pZCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhcnJpdG9BY3R1YWxpemFkbyA9IGNhcnJpdG8ubWFwKGd1aXRhcnJhU3RhdGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChndWl0YXJyYVN0YXRlLmlkID09PSBndWl0YXJyYS5pZCkge1xuICAgICAgICAgICAgICAgICAgICBndWl0YXJyYVN0YXRlLmNhbnRpZGFkID0gZ3VpdGFycmEuY2FudGlkYWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBndWl0YXJyYVN0YXRlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRDYXJyaXRvKFsuLi5jYXJyaXRvQWN0dWFsaXphZG9dKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJyaXRvJywgSlNPTi5zdHJpbmdpZnkoY2Fycml0bykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0Q2Fycml0byhbLi4uY2Fycml0bywgZ3VpdGFycmFdKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJyaXRvJywgSlNPTi5zdHJpbmdpZnkoY2Fycml0bykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZWxpbWluYXJQcm9kdWN0byA9IGlkID0+IHtcbiAgICAgICAgY29uc3QgY2Fycml0b0FjdHVhbGl6YWRvID0gY2Fycml0by5maWx0ZXIocHJvZHVjdG8gPT4gcHJvZHVjdG8uaWQgIT0gaWQpXG4gICAgICAgIHNldENhcnJpdG8oY2Fycml0b0FjdHVhbGl6YWRvKVxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnJpdG8nLCBKU09OLnN0cmluZ2lmeShjYXJyaXRvKSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0dWFsaXphckNhbnRpZGFkID0gZ3VpdGFycmEgPT4ge1xuICAgICAgICBjb25zdCBjYXJyaXRvQWN0dWFsaXphZG8gPSBjYXJyaXRvLm1hcChndWl0YXJyYVN0YXRlID0+IHtcbiAgICAgICAgICAgIGlmIChndWl0YXJyYVN0YXRlLmlkID09PSBndWl0YXJyYS5pZCkge1xuICAgICAgICAgICAgICAgIGd1aXRhcnJhU3RhdGUuY2FudGlkYWQgPSBwYXJzZUludChndWl0YXJyYS5jYW50aWRhZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBndWl0YXJyYVN0YXRlXG4gICAgICAgIH0pXG4gICAgICAgIHNldENhcnJpdG8oY2Fycml0b0FjdHVhbGl6YWRvKVxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnJpdG8nLCBKU09OLnN0cmluZ2lmeShjYXJyaXRvKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlYWR5ID8gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfVxuICAgICAgICBjYXJyaXRvPXtjYXJyaXRvfVxuICAgICAgICBhZ3JlZ2FyQ2Fycml0bz17YWdyZWdhckNhcnJpdG99XG4gICAgICAgIGVsaW1pbmFyUHJvZHVjdG89e2VsaW1pbmFyUHJvZHVjdG99XG4gICAgICAgIGFjdHVhbGl6YXJDYW50aWRhZD17YWN0dWFsaXphckNhbnRpZGFkfVxuICAgIC8+IDogbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2Fycml0b0xTIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNhcnJpdG8iLCJzZXRDYXJyaXRvIiwicmVhZHkiLCJzZXRSZWFkeSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhZ3JlZ2FyQ2Fycml0byIsImd1aXRhcnJhIiwic29tZSIsImd1aXRhcnJhU3RhdGUiLCJpZCIsImNhcnJpdG9BY3R1YWxpemFkbyIsIm1hcCIsImNhbnRpZGFkIiwiZWxpbWluYXJQcm9kdWN0byIsImZpbHRlciIsInByb2R1Y3RvIiwid2luZG93IiwiYWN0dWFsaXphckNhbnRpZGFkIiwicGFyc2VJbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();