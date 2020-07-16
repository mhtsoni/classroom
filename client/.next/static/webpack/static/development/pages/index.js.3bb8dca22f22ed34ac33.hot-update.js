webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_app.js */ "./pages/_app.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var _jsxFileName = "E:\\React and Redux\\Practice\\HomeTuitionManager\\home-tuitions\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  Header,
  Sider,
  Content
} = antd__WEBPACK_IMPORTED_MODULE_3__["Layout"];
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
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx(Sider, {
    trigger: null,
    collapsible: true,
    collapsed: collapsed,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    theme: "dark",
    mode: "inline",
    defaultSelectedKeys: ['1'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["UserOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 42
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "Home"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "2",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["UploadOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 42
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "Work History"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "3",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["VideoCameraOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 42
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "Your Performance Chakra"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "3",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["VideoCameraOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 42
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "About Us"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "3",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["VideoCameraOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 42
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "Contact Us"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    className: "site-layout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
      lineNumber: 45,
      columnNumber: 15
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(collapsed ? _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["MenuUnfoldOutlined"] : _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["MenuFoldOutlined"], {
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
      lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJTaWRlciIsIkNvbnRlbnQiLCJMYXlvdXQiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJ1c2VTdGF0ZSIsInRvZ2dsZSIsInBhZGRpbmciLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJNZW51VW5mb2xkT3V0bGluZWQiLCJNZW51Rm9sZE91dGxpbmVkIiwiY2xhc3NOYW1lIiwib25DbGljayIsIm1hcmdpbiIsIm1pbkhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLE1BQU07QUFBRUEsUUFBRjtBQUFVQyxPQUFWO0FBQWlCQztBQUFqQixJQUE2QkMsMkNBQW5DO0FBRWUsd0VBQUs7QUFBQTs7QUFDbEIsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTJCQyxzREFBUSxDQUFDLElBQUQsQ0FBekM7O0FBQ0EsUUFBTUMsTUFBTSxHQUFHLE1BQUk7QUFDakJGLGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0QsR0FGRDs7QUFHQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFELENBQU8sVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQU8sV0FBTyxFQUFFLElBQWhCO0FBQXNCLGVBQVcsTUFBakM7QUFBa0MsYUFBUyxFQUFFQSxTQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHlDQUFEO0FBQU0sU0FBSyxFQUFDLE1BQVo7QUFBbUIsUUFBSSxFQUFDLFFBQXhCO0FBQWlDLHVCQUFtQixFQUFFLENBQUMsR0FBRCxDQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsR0FBZjtBQUFtQixRQUFJLEVBQUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUlFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBbUIsUUFBSSxFQUFFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLEVBT0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsR0FBZjtBQUFtQixRQUFJLEVBQUUsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBUEYsRUFVRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQW1CLFFBQUksRUFBRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixFQWFFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBbUIsUUFBSSxFQUFFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWJGLENBRkYsQ0FERixFQXFCRSxNQUFDLDJDQUFEO0FBQVEsYUFBUyxFQUFDLGFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE1BQUQ7QUFBUSxhQUFTLEVBQUMsd0JBQWxCO0FBQTJDLFNBQUssRUFBRTtBQUFFSSxhQUFPLEVBQUU7QUFBWCxLQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JOLFNBQVMsR0FBR08sb0VBQUgsR0FBd0JDLGtFQUFyRCxFQUF1RTtBQUN0RUMsYUFBUyxFQUFFLFNBRDJEO0FBRXRFQyxXQUFPLEVBQUUsTUFBSVAsTUFBTTtBQUZtRCxHQUF2RSxDQURILENBREYsRUFPRSxNQUFDLE9BQUQ7QUFDRSxhQUFTLEVBQUMsd0JBRFo7QUFFRSxTQUFLLEVBQUU7QUFDTFEsWUFBTSxFQUFFLFdBREg7QUFFTFAsYUFBTyxFQUFFLEVBRko7QUFHTFEsZUFBUyxFQUFFO0FBSE4sS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FyQkYsQ0FERixDQURGLENBREYsQ0FERjtBQWlERCxDQXRERCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuM2JiOGRjYTIyZjIyZWQzNGFjMzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0ICcuL19hcHAuanMnO1xuaW1wb3J0IHsgTGF5b3V0LCBNZW51IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQge1xuICBNZW51VW5mb2xkT3V0bGluZWQsXG4gIE1lbnVGb2xkT3V0bGluZWQsXG4gIFVzZXJPdXRsaW5lZCxcbiAgVmlkZW9DYW1lcmFPdXRsaW5lZCxcbiAgVXBsb2FkT3V0bGluZWQsXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmNvbnN0IHsgSGVhZGVyLCBTaWRlciwgQ29udGVudCB9ID0gTGF5b3V0O1xuXG5leHBvcnQgZGVmYXVsdCAoKT0+IHtcbiAgY29uc3QgW2NvbGxhcHNlZCxzZXRDb2xsYXBzZWRdID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgdG9nZ2xlID0gKCk9PntcbiAgICBzZXRDb2xsYXBzZWQoIWNvbGxhcHNlZClcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgICAgPFByb3ZpZGVyPlxuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8U2lkZXIgdHJpZ2dlcj17bnVsbH0gY29sbGFwc2libGUgY29sbGFwc2VkPXtjb2xsYXBzZWR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIiAvPlxuICAgICAgICAgICAgICA8TWVudSB0aGVtZT1cImRhcmtcIiBtb2RlPVwiaW5saW5lXCIgZGVmYXVsdFNlbGVjdGVkS2V5cz17WycxJ119PlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiIGljb249ezxVc2VyT3V0bGluZWQgLz59PlxuICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMlwiIGljb249ezxVcGxvYWRPdXRsaW5lZCAvPn0+XG4gICAgICAgICAgICAgICAgICBXb3JrIEhpc3RvcnlcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjNcIiBpY29uPXs8VmlkZW9DYW1lcmFPdXRsaW5lZCAvPn0+XG4gICAgICAgICAgICAgICAgICBZb3VyIFBlcmZvcm1hbmNlIENoYWtyYVxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiIGljb249ezxWaWRlb0NhbWVyYU91dGxpbmVkIC8+fT5cbiAgICAgICAgICAgICAgICAgIEFib3V0IFVzXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIzXCIgaWNvbj17PFZpZGVvQ2FtZXJhT3V0bGluZWQgLz59PlxuICAgICAgICAgICAgICAgICAgQ29udGFjdCBVc1xuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICA8L1NpZGVyPlxuICAgICAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJzaXRlLWxheW91dFwiPlxuICAgICAgICAgICAgICA8SGVhZGVyIGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0LWJhY2tncm91bmRcIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KGNvbGxhcHNlZCA/IE1lbnVVbmZvbGRPdXRsaW5lZCA6IE1lbnVGb2xkT3V0bGluZWQsIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RyaWdnZXInLFxuICAgICAgICAgICAgICAgICAgb25DbGljazogKCk9PnRvZ2dsZSgpLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgPENvbnRlbnRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaXRlLWxheW91dC1iYWNrZ3JvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMjRweCAxNnB4JyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI0LFxuICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAyODAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICA8L0xheW91dD5cblxuXG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICA8L1JlYWN0LlN0cmljdE1vZGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==