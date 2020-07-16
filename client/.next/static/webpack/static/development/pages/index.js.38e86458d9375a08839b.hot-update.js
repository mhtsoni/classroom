webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react-redux/es/components/Context.js":
false,

/***/ "./node_modules/react-redux/es/components/Provider.js":
false,

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
false,

/***/ "./node_modules/react-redux/es/connect/connect.js":
false,

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
false,

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
false,

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
false,

/***/ "./node_modules/react-redux/es/index.js":
false,

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
false,

/***/ "./node_modules/react-redux/es/utils/batch.js":
false,

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
false,

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
false,

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
false,

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
false,

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
false,

/***/ "./node_modules/react-redux/es/utils/warning.js":
false,

/***/ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/redux/es/redux.js":
false,

/***/ "./node_modules/symbol-observable/es/index.js":
false,

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
false,

/***/ "./packages/components/LoginForm/states/reducer.js":
false,

/***/ "./packages/components/LoginForm/states/types.js":
false,

/***/ "./packages/redux-store/store.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_app.js */ "./pages/_app.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var _jsxFileName = "E:\\React and Redux\\Practice\\HomeTuitionManager\\home-tuitions\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const {
  Header,
  Sider,
  Content
} = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"];
/* harmony default export */ __webpack_exports__["default"] = (_s(() => {
  _s();

  const {
    0: collapsed,
    1: setCollapsed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(Provider, {
    store: loginStore,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx(Sider, {
    trigger: null,
    collapsible: true,
    collapsed: collapsed,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    theme: "dark",
    mode: "inline",
    defaultSelectedKeys: ['1'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 42
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, "Home"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "2",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UploadOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 42
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "Work History"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "3",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["VideoCameraOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 42
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "Your Performance Chakra"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "3",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["VideoCameraOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 42
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, "About Us"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "3",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["VideoCameraOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 42
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, "Contact Us"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    className: "site-layout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(Header, {
    className: "site-layout-background",
    style: {
      padding: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(collapsed ? _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MenuUnfoldOutlined"] : _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MenuFoldOutlined"], {
    className: 'trigger',
    onClick: () => toggle()
  })), __jsx(Content, {
    className: "site-layout-background",
    style: {
      margin: '24px 16px',
      padding: 24,
      minHeight: 280
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }))))));
}, "H298tXLF0tPRq3vZEFqOTn8auwQ="));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJTaWRlciIsIkNvbnRlbnQiLCJMYXlvdXQiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJ1c2VTdGF0ZSIsInRvZ2dsZSIsImxvZ2luU3RvcmUiLCJwYWRkaW5nIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiTWVudVVuZm9sZE91dGxpbmVkIiwiTWVudUZvbGRPdXRsaW5lZCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJtYXJnaW4iLCJtaW5IZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFPQSxNQUFNO0FBQUVBLFFBQUY7QUFBVUMsT0FBVjtBQUFpQkM7QUFBakIsSUFBNkJDLDJDQUFuQztBQUVlLHdFQUFLO0FBQUE7O0FBQ2xCLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEyQkMsc0RBQVEsQ0FBQyxJQUFELENBQXpDOztBQUNBLFFBQU1DLE1BQU0sR0FBRyxNQUFJO0FBQ2pCRixnQkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNELEdBRkQ7O0FBR0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0Q0FBRCxDQUFPLFVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsUUFBRDtBQUFVLFNBQUssRUFBR0ksVUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUFPLFdBQU8sRUFBRSxJQUFoQjtBQUFzQixlQUFXLE1BQWpDO0FBQWtDLGFBQVMsRUFBRUosU0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx5Q0FBRDtBQUFNLFNBQUssRUFBQyxNQUFaO0FBQW1CLFFBQUksRUFBQyxRQUF4QjtBQUFpQyx1QkFBbUIsRUFBRSxDQUFDLEdBQUQsQ0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBbUIsUUFBSSxFQUFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFJRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQW1CLFFBQUksRUFBRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRixFQU9FLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBbUIsUUFBSSxFQUFFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVBGLEVBVUUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsR0FBZjtBQUFtQixRQUFJLEVBQUUsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsRUFhRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQW1CLFFBQUksRUFBRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiRixDQUZGLENBREYsRUFxQkUsTUFBQywyQ0FBRDtBQUFRLGFBQVMsRUFBQyxhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxNQUFEO0FBQVEsYUFBUyxFQUFDLHdCQUFsQjtBQUEyQyxTQUFLLEVBQUU7QUFBRUssYUFBTyxFQUFFO0FBQVgsS0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CUCxTQUFTLEdBQUdRLG9FQUFILEdBQXdCQyxrRUFBckQsRUFBdUU7QUFDdEVDLGFBQVMsRUFBRSxTQUQyRDtBQUV0RUMsV0FBTyxFQUFFLE1BQUlSLE1BQU07QUFGbUQsR0FBdkUsQ0FESCxDQURGLEVBT0UsTUFBQyxPQUFEO0FBQ0UsYUFBUyxFQUFDLHdCQURaO0FBRUUsU0FBSyxFQUFFO0FBQ0xTLFlBQU0sRUFBRSxXQURIO0FBRUxQLGFBQU8sRUFBRSxFQUZKO0FBR0xRLGVBQVMsRUFBRTtBQUhOLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBckJGLENBREYsQ0FERixDQURGLENBREY7QUFpREQsQ0F0REQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjM4ZTg2NDU4ZDkzNzVhMDg4MzliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vX2FwcC5qcyc7XG5pbXBvcnQgeyBMYXlvdXQsIE1lbnUgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7XG4gIE1lbnVVbmZvbGRPdXRsaW5lZCxcbiAgTWVudUZvbGRPdXRsaW5lZCxcbiAgVXNlck91dGxpbmVkLFxuICBWaWRlb0NhbWVyYU91dGxpbmVkLFxuICBVcGxvYWRPdXRsaW5lZCxcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuY29uc3QgeyBIZWFkZXIsIFNpZGVyLCBDb250ZW50IH0gPSBMYXlvdXQ7XG5cbmV4cG9ydCBkZWZhdWx0ICgpPT4ge1xuICBjb25zdCBbY29sbGFwc2VkLHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCB0b2dnbGUgPSAoKT0+e1xuICAgIHNldENvbGxhcHNlZCghY29sbGFwc2VkKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9IHtsb2dpblN0b3JlfT5cbiAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPFNpZGVyIHRyaWdnZXI9e251bGx9IGNvbGxhcHNpYmxlIGNvbGxhcHNlZD17Y29sbGFwc2VkfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgICAgPE1lbnUgdGhlbWU9XCJkYXJrXCIgbW9kZT1cImlubGluZVwiIGRlZmF1bHRTZWxlY3RlZEtleXM9e1snMSddfT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjFcIiBpY29uPXs8VXNlck91dGxpbmVkIC8+fT5cbiAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjJcIiBpY29uPXs8VXBsb2FkT3V0bGluZWQgLz59PlxuICAgICAgICAgICAgICAgICAgV29yayBIaXN0b3J5XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIzXCIgaWNvbj17PFZpZGVvQ2FtZXJhT3V0bGluZWQgLz59PlxuICAgICAgICAgICAgICAgICAgWW91ciBQZXJmb3JtYW5jZSBDaGFrcmFcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjNcIiBpY29uPXs8VmlkZW9DYW1lcmFPdXRsaW5lZCAvPn0+XG4gICAgICAgICAgICAgICAgICBBYm91dCBVc1xuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiIGljb249ezxWaWRlb0NhbWVyYU91dGxpbmVkIC8+fT5cbiAgICAgICAgICAgICAgICAgIENvbnRhY3QgVXNcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgPC9TaWRlcj5cbiAgICAgICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXRcIj5cbiAgICAgICAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9XCJzaXRlLWxheW91dC1iYWNrZ3JvdW5kXCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChjb2xsYXBzZWQgPyBNZW51VW5mb2xkT3V0bGluZWQgOiBNZW51Rm9sZE91dGxpbmVkLCB7XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0cmlnZ2VyJyxcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpPT50b2dnbGUoKSxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICAgIDxDb250ZW50XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXQtYmFja2dyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzI0cHggMTZweCcsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNCxcbiAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogMjgwLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgPC9MYXlvdXQ+XG5cblxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=