webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./packages/serviceWorker.js":
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
/* harmony import */ var _packages_redux_store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../packages/redux-store/store */ "./packages/redux-store/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_app.js */ "./pages/_app.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var _jsxFileName = "E:\\React and Redux\\Practice\\HomeTuitionManager\\home-tuitions\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  Header,
  Sider,
  Content
} = antd__WEBPACK_IMPORTED_MODULE_4__["Layout"];
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
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _packages_redux_store_store__WEBPACK_IMPORTED_MODULE_1__["loginStore"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx(Sider, {
    trigger: null,
    collapsible: true,
    collapsed: collapsed,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    theme: "dark",
    mode: "inline",
    defaultSelectedKeys: ['1'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 42
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "Home"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "2",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UploadOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 42
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "Work History"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "3",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["VideoCameraOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 42
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "Your Performance Chakra"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "3",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["VideoCameraOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 42
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "About Us"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "3",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["VideoCameraOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 42
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "Contact Us"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
    className: "site-layout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 46,
      columnNumber: 15
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(collapsed ? _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MenuUnfoldOutlined"] : _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MenuFoldOutlined"], {
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
      lineNumber: 52,
      columnNumber: 15
    }
  }))))));
}, "H298tXLF0tPRq3vZEFqOTn8auwQ=")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJTaWRlciIsIkNvbnRlbnQiLCJMYXlvdXQiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJ1c2VTdGF0ZSIsInRvZ2dsZSIsImxvZ2luU3RvcmUiLCJwYWRkaW5nIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiTWVudVVuZm9sZE91dGxpbmVkIiwiTWVudUZvbGRPdXRsaW5lZCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJtYXJnaW4iLCJtaW5IZWlnaHQiLCJzZXJ2aWNlV29ya2VyIiwidW5yZWdpc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLE1BQU07QUFBRUEsUUFBRjtBQUFVQyxPQUFWO0FBQWlCQztBQUFqQixJQUE2QkMsMkNBQW5DO0FBRWUsd0VBQUs7QUFBQTs7QUFDbEIsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTJCQyxzREFBUSxDQUFDLElBQUQsQ0FBekM7O0FBQ0EsUUFBTUMsTUFBTSxHQUFHLE1BQUk7QUFDakJGLGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0QsR0FGRDs7QUFHQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFELENBQU8sVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFVLFNBQUssRUFBR0ksc0VBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUUsSUFBaEI7QUFBc0IsZUFBVyxNQUFqQztBQUFrQyxhQUFTLEVBQUVKLFNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMseUNBQUQ7QUFBTSxTQUFLLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsUUFBeEI7QUFBaUMsdUJBQW1CLEVBQUUsQ0FBQyxHQUFELENBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQW1CLFFBQUksRUFBRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBSUUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsR0FBZjtBQUFtQixRQUFJLEVBQUUsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkYsRUFPRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQW1CLFFBQUksRUFBRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFQRixFQVVFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBbUIsUUFBSSxFQUFFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGLEVBYUUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsR0FBZjtBQUFtQixRQUFJLEVBQUUsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYkYsQ0FGRixDQURGLEVBcUJFLE1BQUMsMkNBQUQ7QUFBUSxhQUFTLEVBQUMsYUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsTUFBRDtBQUFRLGFBQVMsRUFBQyx3QkFBbEI7QUFBMkMsU0FBSyxFQUFFO0FBQUVLLGFBQU8sRUFBRTtBQUFYLEtBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQlAsU0FBUyxHQUFHUSxvRUFBSCxHQUF3QkMsa0VBQXJELEVBQXVFO0FBQ3RFQyxhQUFTLEVBQUUsU0FEMkQ7QUFFdEVDLFdBQU8sRUFBRSxNQUFJUixNQUFNO0FBRm1ELEdBQXZFLENBREgsQ0FERixFQU9FLE1BQUMsT0FBRDtBQUNFLGFBQVMsRUFBQyx3QkFEWjtBQUVFLFNBQUssRUFBRTtBQUNMUyxZQUFNLEVBQUUsV0FESDtBQUVMUCxhQUFPLEVBQUUsRUFGSjtBQUdMUSxlQUFTLEVBQUU7QUFITixLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQXJCRixDQURGLENBREYsQ0FERixDQURGO0FBaURELENBdERELG1DLENBMERBO0FBQ0E7QUFDQTs7QUFDQUMsYUFBYSxDQUFDQyxVQUFkIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5mZTVmOTY5ZTZjNWM5NWMxNWZkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbG9naW5TdG9yZSB9IGZyb20gJy4uL3BhY2thZ2VzL3JlZHV4LXN0b3JlL3N0b3JlJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0ICcuL19hcHAuanMnO1xuaW1wb3J0IHsgTGF5b3V0LCBNZW51IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQge1xuICBNZW51VW5mb2xkT3V0bGluZWQsXG4gIE1lbnVGb2xkT3V0bGluZWQsXG4gIFVzZXJPdXRsaW5lZCxcbiAgVmlkZW9DYW1lcmFPdXRsaW5lZCxcbiAgVXBsb2FkT3V0bGluZWQsXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmNvbnN0IHsgSGVhZGVyLCBTaWRlciwgQ29udGVudCB9ID0gTGF5b3V0O1xuXG5leHBvcnQgZGVmYXVsdCAoKT0+IHtcbiAgY29uc3QgW2NvbGxhcHNlZCxzZXRDb2xsYXBzZWRdID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgdG9nZ2xlID0gKCk9PntcbiAgICBzZXRDb2xsYXBzZWQoIWNvbGxhcHNlZClcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPSB7bG9naW5TdG9yZX0+XG4gICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxTaWRlciB0cmlnZ2VyPXtudWxsfSBjb2xsYXBzaWJsZSBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIC8+XG4gICAgICAgICAgICAgIDxNZW51IHRoZW1lPVwiZGFya1wiIG1vZGU9XCJpbmxpbmVcIiBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbJzEnXX0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxXCIgaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0+XG4gICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIyXCIgaWNvbj17PFVwbG9hZE91dGxpbmVkIC8+fT5cbiAgICAgICAgICAgICAgICAgIFdvcmsgSGlzdG9yeVxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiIGljb249ezxWaWRlb0NhbWVyYU91dGxpbmVkIC8+fT5cbiAgICAgICAgICAgICAgICAgIFlvdXIgUGVyZm9ybWFuY2UgQ2hha3JhXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIzXCIgaWNvbj17PFZpZGVvQ2FtZXJhT3V0bGluZWQgLz59PlxuICAgICAgICAgICAgICAgICAgQWJvdXQgVXNcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjNcIiBpY29uPXs8VmlkZW9DYW1lcmFPdXRsaW5lZCAvPn0+XG4gICAgICAgICAgICAgICAgICBDb250YWN0IFVzXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgIDwvU2lkZXI+XG4gICAgICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0XCI+XG4gICAgICAgICAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXQtYmFja2dyb3VuZFwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XG4gICAgICAgICAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoY29sbGFwc2VkID8gTWVudVVuZm9sZE91dGxpbmVkIDogTWVudUZvbGRPdXRsaW5lZCwge1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndHJpZ2dlcicsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKT0+dG9nZ2xlKCksXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICA8Q29udGVudFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0LWJhY2tncm91bmRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46ICcyNHB4IDE2cHgnLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjQsXG4gICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDI4MCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgIDwvTGF5b3V0PlxuXG5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgIDwvUmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cblxuLy8gSWYgeW91IHdhbnQgeW91ciBhcHAgdG8gd29yayBvZmZsaW5lIGFuZCBsb2FkIGZhc3RlciwgeW91IGNhbiBjaGFuZ2Vcbi8vIHVucmVnaXN0ZXIoKSB0byByZWdpc3RlcigpIGJlbG93LiBOb3RlIHRoaXMgY29tZXMgd2l0aCBzb21lIHBpdGZhbGxzLlxuLy8gTGVhcm4gbW9yZSBhYm91dCBzZXJ2aWNlIHdvcmtlcnM6IGh0dHBzOi8vYml0Lmx5L0NSQS1QV0FcbnNlcnZpY2VXb3JrZXIudW5yZWdpc3RlcigpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==