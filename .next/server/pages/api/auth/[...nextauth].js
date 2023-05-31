"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET\n        })\n    ],\n    jwt: {\n        encode: ({ secret , token  })=>jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n                ...token,\n                iss: \"nextauth\",\n                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 60\n            }, secret),\n        decode: async ({ secret , token  })=>jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, secret)\n    },\n    callbacks: {\n        async jwt ({ token , profile  }) {\n            if (profile) {\n                token.username = profile?.login;\n            }\n            return token;\n        },\n        session ({ session , token  }) {\n            if (token.username) {\n                session.username = token?.username;\n            }\n            return session;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRDtBQUNFO0FBQ2hCO0FBR2pDLE1BQU1HLGNBQStCO0lBQzFDQyxXQUFXO1FBQ1RILGlFQUFjQSxDQUFDO1lBQ2JJLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtRQUNoRDtLQUNEO0lBQ0RDLEtBQUs7UUFDSEMsUUFBUSxDQUFDLEVBQUVDLE9BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQ3hCWix3REFBaUIsQ0FDZjtnQkFDRSxHQUFHWSxLQUFLO2dCQUNSRSxLQUFLO2dCQUNMQyxLQUFLQyxLQUFLQyxLQUFLLENBQUNDLEtBQUtDLEdBQUcsS0FBSyxRQUFRLEtBQUssS0FBSztZQUNqRCxHQUNBUjtRQUVKUyxRQUFRLE9BQU8sRUFBRVQsT0FBTSxFQUFFQyxNQUFLLEVBQUUsR0FDOUJaLDBEQUFtQixDQUFDWSxPQUFRRDtJQUNoQztJQUNBVyxXQUFXO1FBQ1QsTUFBTWIsS0FBSSxFQUFFRyxNQUFLLEVBQUVXLFFBQU8sRUFBRSxFQUFFO1lBQzVCLElBQUlBLFNBQVM7Z0JBQ1hYLE1BQU1ZLFFBQVEsR0FBR0QsU0FBU0U7WUFDNUIsQ0FBQztZQUNELE9BQU9iO1FBQ1Q7UUFDQWMsU0FBUSxFQUFFQSxRQUFPLEVBQUVkLE1BQUssRUFBRSxFQUFFO1lBQzFCLElBQUlBLE1BQU1ZLFFBQVEsRUFBRTtnQkFDbEJFLFFBQVFGLFFBQVEsR0FBR1osT0FBT1k7WUFDNUIsQ0FBQztZQUNELE9BQU9FO1FBQ1Q7SUFDRjtBQUNGLEVBQUU7QUFFRixpRUFBZTVCLGdEQUFRQSxDQUFDRyxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdGJhc2UvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz81MGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgR2l0SHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCI7XG5pbXBvcnQganNvbndlYnRva2VuIGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCB7IEpXVCB9IGZyb20gXCJuZXh0LWF1dGgvand0XCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBHaXRIdWJQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9JRCEsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfU0VDUkVUISxcbiAgICB9KSxcbiAgXSxcbiAgand0OiB7XG4gICAgZW5jb2RlOiAoeyBzZWNyZXQsIHRva2VuIH0pID0+XG4gICAgICBqc29ud2VidG9rZW4uc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIC4uLnRva2VuLFxuICAgICAgICAgIGlzczogXCJuZXh0YXV0aFwiLFxuICAgICAgICAgIGV4cDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCkgKyA2MCAqIDYwICogNjAsXG4gICAgICAgIH0sXG4gICAgICAgIHNlY3JldFxuICAgICAgKSxcbiAgICBkZWNvZGU6IGFzeW5jICh7IHNlY3JldCwgdG9rZW4gfSkgPT5cbiAgICAgIGpzb253ZWJ0b2tlbi52ZXJpZnkodG9rZW4hLCBzZWNyZXQpIGFzIEpXVCxcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHByb2ZpbGUgfSkge1xuICAgICAgaWYgKHByb2ZpbGUpIHtcbiAgICAgICAgdG9rZW4udXNlcm5hbWUgPSBwcm9maWxlPy5sb2dpbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAodG9rZW4udXNlcm5hbWUpIHtcbiAgICAgICAgc2Vzc2lvbi51c2VybmFtZSA9IHRva2VuPy51c2VybmFtZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHaXRIdWJQcm92aWRlciIsImpzb253ZWJ0b2tlbiIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9DTElFTlRfU0VDUkVUIiwiand0IiwiZW5jb2RlIiwic2VjcmV0IiwidG9rZW4iLCJzaWduIiwiaXNzIiwiZXhwIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImRlY29kZSIsInZlcmlmeSIsImNhbGxiYWNrcyIsInByb2ZpbGUiLCJ1c2VybmFtZSIsImxvZ2luIiwic2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();