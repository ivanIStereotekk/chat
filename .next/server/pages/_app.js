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

/***/ "./src/components/apollo-provider-wrapper.tsx":
/*!****************************************************!*\
  !*** ./src/components/apollo-provider-wrapper.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ApolloProviderWrapper\": () => (/* binding */ ApolloProviderWrapper)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _grafbase_apollo_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafbase/apollo-link */ \"@grafbase/apollo-link\");\n/* harmony import */ var _grafbase_apollo_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafbase_apollo_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client/link/context */ \"@apollo/client/link/context\");\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.HttpLink({\n    uri: \"http://localhost:4000/graphql\"\n});\nconst sseLink = new _grafbase_apollo_link__WEBPACK_IMPORTED_MODULE_3__.SSELink({\n    uri: \"http://localhost:4000/graphql\"\n});\nconst ApolloProviderWrapper = ({ children  })=>{\n    const client = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        const authMiddleware = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_5__.setContext)(async (_, { headers  })=>{\n            const { token  } = await fetch(\"/api/auth/token\").then((res)=>res.json());\n            return {\n                headers: {\n                    ...headers,\n                    authorization: `Bearer ${token}`\n                }\n            };\n        });\n        return new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloClient({\n            link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.from)([\n                authMiddleware,\n                (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.split)(({ query , operationName , variables  })=>(0,_grafbase_apollo_link__WEBPACK_IMPORTED_MODULE_3__.isLiveQuery)((0,graphql__WEBPACK_IMPORTED_MODULE_4__.getOperationAST)(query, operationName), variables), sseLink, httpLink)\n            ]),\n            cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache()\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n        client: client,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/ewan/Desktop/dev/frontEXH/chatbase/src/components/apollo-provider-wrapper.tsx\",\n        lineNumber: 52,\n        columnNumber: 10\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hcG9sbG8tcHJvdmlkZXItd3JhcHBlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDZ0M7QUFRUjtBQUNxQztBQUNuQjtBQUNlO0FBRXpELE1BQU1XLFdBQVcsSUFBSVIsb0RBQVFBLENBQUM7SUFDNUJTLEtBQUtDLCtCQUF3QztBQUMvQztBQUVBLE1BQU1HLFVBQVUsSUFBSVQsMERBQU9BLENBQUM7SUFDMUJLLEtBQUtDLCtCQUF3QztBQUMvQztBQUVPLE1BQU1JLHdCQUF3QixDQUFDLEVBQUVDLFNBQVEsRUFBcUIsR0FBSztJQUN4RSxNQUFNQyxTQUFTbkIsOENBQU9BLENBQUMsSUFBTTtRQUMzQixNQUFNb0IsaUJBQWlCVix1RUFBVUEsQ0FBQyxPQUFPVyxHQUFHLEVBQUVDLFFBQU8sRUFBRSxHQUFLO1lBQzFELE1BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQUcsTUFBTUMsTUFBTSxtQkFBbUJDLElBQUksQ0FBQyxDQUFDQyxNQUNyREEsSUFBSUMsSUFBSTtZQUdWLE9BQU87Z0JBQ0xMLFNBQVM7b0JBQ1AsR0FBR0EsT0FBTztvQkFDVk0sZUFBZSxDQUFDLE9BQU8sRUFBRUwsTUFBTSxDQUFDO2dCQUNsQztZQUNGO1FBQ0Y7UUFFQSxPQUFPLElBQUl0Qix3REFBWUEsQ0FBQztZQUN0QjRCLE1BQU12QixvREFBSUEsQ0FBQztnQkFDVGM7Z0JBQ0FmLHFEQUFLQSxDQUNILENBQUMsRUFBRXlCLE1BQUssRUFBRUMsY0FBYSxFQUFFQyxVQUFTLEVBQUUsR0FDbEN4QixrRUFBV0EsQ0FBQ0Msd0RBQWVBLENBQUNxQixPQUFPQyxnQkFBZ0JDLFlBQ3JEaEIsU0FDQUw7YUFFSDtZQUNEc0IsT0FBTyxJQUFJN0IseURBQWFBO1FBQzFCO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNGLDBEQUFjQTtRQUFDaUIsUUFBUUE7a0JBQVNEOzs7Ozs7QUFDMUMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRiYXNlLy4vc3JjL2NvbXBvbmVudHMvYXBvbGxvLXByb3ZpZGVyLXdyYXBwZXIudHN4P2UxOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQXBvbGxvQ2xpZW50LFxuICBBcG9sbG9Qcm92aWRlcixcbiAgSHR0cExpbmssXG4gIEluTWVtb3J5Q2FjaGUsXG4gIHNwbGl0LFxuICBmcm9tLFxufSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IFNTRUxpbmssIGlzTGl2ZVF1ZXJ5IH0gZnJvbSBcIkBncmFmYmFzZS9hcG9sbG8tbGlua1wiO1xuaW1wb3J0IHsgZ2V0T3BlcmF0aW9uQVNUIH0gZnJvbSBcImdyYXBocWxcIjtcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tIFwiQGFwb2xsby9jbGllbnQvbGluay9jb250ZXh0XCI7XG5cbmNvbnN0IGh0dHBMaW5rID0gbmV3IEh0dHBMaW5rKHtcbiAgdXJpOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HUkFGQkFTRV9BUElfVVJMLFxufSk7XG5cbmNvbnN0IHNzZUxpbmsgPSBuZXcgU1NFTGluayh7XG4gIHVyaTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR1JBRkJBU0VfQVBJX1VSTCEsXG59KTtcblxuZXhwb3J0IGNvbnN0IEFwb2xsb1Byb3ZpZGVyV3JhcHBlciA9ICh7IGNoaWxkcmVuIH06IFByb3BzV2l0aENoaWxkcmVuKSA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGF1dGhNaWRkbGV3YXJlID0gc2V0Q29udGV4dChhc3luYyAoXywgeyBoZWFkZXJzIH0pID0+IHtcbiAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IGF3YWl0IGZldGNoKFwiL2FwaS9hdXRoL3Rva2VuXCIpLnRoZW4oKHJlcykgPT5cbiAgICAgICAgcmVzLmpzb24oKVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIC4uLmhlYWRlcnMsXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgbGluazogZnJvbShbXG4gICAgICAgIGF1dGhNaWRkbGV3YXJlLFxuICAgICAgICBzcGxpdChcbiAgICAgICAgICAoeyBxdWVyeSwgb3BlcmF0aW9uTmFtZSwgdmFyaWFibGVzIH0pID0+XG4gICAgICAgICAgICBpc0xpdmVRdWVyeShnZXRPcGVyYXRpb25BU1QocXVlcnksIG9wZXJhdGlvbk5hbWUpLCB2YXJpYWJsZXMpLFxuICAgICAgICAgIHNzZUxpbmssXG4gICAgICAgICAgaHR0cExpbmtcbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT57Y2hpbGRyZW59PC9BcG9sbG9Qcm92aWRlcj47XG59O1xuIl0sIm5hbWVzIjpbInVzZU1lbW8iLCJBcG9sbG9DbGllbnQiLCJBcG9sbG9Qcm92aWRlciIsIkh0dHBMaW5rIiwiSW5NZW1vcnlDYWNoZSIsInNwbGl0IiwiZnJvbSIsIlNTRUxpbmsiLCJpc0xpdmVRdWVyeSIsImdldE9wZXJhdGlvbkFTVCIsInNldENvbnRleHQiLCJodHRwTGluayIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HUkFGQkFTRV9BUElfVVJMIiwic3NlTGluayIsIkFwb2xsb1Byb3ZpZGVyV3JhcHBlciIsImNoaWxkcmVuIiwiY2xpZW50IiwiYXV0aE1pZGRsZXdhcmUiLCJfIiwiaGVhZGVycyIsInRva2VuIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImF1dGhvcml6YXRpb24iLCJsaW5rIiwicXVlcnkiLCJvcGVyYXRpb25OYW1lIiwidmFyaWFibGVzIiwiY2FjaGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/apollo-provider-wrapper.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_apollo_provider_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/apollo-provider-wrapper */ \"./src/components/apollo-provider-wrapper.tsx\");\n\n\n\n\nfunction App({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_apollo_provider_wrapper__WEBPACK_IMPORTED_MODULE_3__.ApolloProviderWrapper, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/ewan/Desktop/dev/frontEXH/chatbase/src/pages/_app.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ewan/Desktop/dev/frontEXH/chatbase/src/pages/_app.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ewan/Desktop/dev/frontEXH/chatbase/src/pages/_app.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStCO0FBR21CO0FBRTRCO0FBRS9ELFNBQVNFLElBQUksRUFDMUJDLFVBQVMsRUFDVEMsV0FBVyxFQUFFQyxRQUFPLEVBQUUsR0FBR0QsV0FBVyxHQUMzQixFQUFFO0lBQ1gscUJBQ0UsOERBQUNKLDREQUFlQTtRQUFDSyxTQUFTQTtrQkFDeEIsNEVBQUNKLHNGQUFxQkE7c0JBQ3BCLDRFQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0YmFzZS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyV3JhcHBlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Fwb2xsby1wcm92aWRlci13cmFwcGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7XG4gIENvbXBvbmVudCxcbiAgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9LFxufTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgPEFwb2xsb1Byb3ZpZGVyV3JhcHBlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BcG9sbG9Qcm92aWRlcldyYXBwZXI+XG4gICAgPC9TZXNzaW9uUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU2Vzc2lvblByb3ZpZGVyIiwiQXBvbGxvUHJvdmlkZXJXcmFwcGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/link/context":
/*!**********************************************!*\
  !*** external "@apollo/client/link/context" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ "@grafbase/apollo-link":
/*!****************************************!*\
  !*** external "@grafbase/apollo-link" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@grafbase/apollo-link");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();