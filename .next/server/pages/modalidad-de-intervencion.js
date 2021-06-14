(function() {
var exports = {};
exports.id = "pages/modalidad-de-intervencion";
exports.ids = ["pages/modalidad-de-intervencion"];
exports.modules = {

/***/ "./components/CallToAction.js":
/*!************************************!*\
  !*** ./components/CallToAction.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Service; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\camil\\Desktop\\proyects\\muroCinceladoReact\\components\\CallToAction.js";



function Service(props) {
  const {
    link,
    text,
    external
  } = props;

  if (external) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: link,
        target: "_blank",
        rel: "noreferrer noopener",
        className: "jsx-3303511481" + " " + "button-link",
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: "3303511481",
        children: ".button-link.jsx-3303511481{display:block;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:1rem 2rem;margin:2rem auto;background:var(--primary-color);-webkit-text-decoration:none;text-decoration:none;color:var(--letter-on-dark);border-radius:0.8rem;font-size:1.2rem;-webkit-transition:all 1s;transition:all 1s;}.button-link.jsx-3303511481:hover{color:var(--letter-on-dark);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2FtaWxcXERlc2t0b3BcXHByb3llY3RzXFxtdXJvQ2luY2VsYWRvUmVhY3RcXGNvbXBvbmVudHNcXENhbGxUb0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVcUIsQUFHdUMsQUFZYyxjQVhWLGNBWUcscURBWEgsa0JBQ0QsSUFXbkIsYUFWa0MsZ0NBQ1gsa0RBQ08sNEJBQ1AscUJBQ0osaUJBQ0MsNENBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY2FtaWxcXERlc2t0b3BcXHByb3llY3RzXFxtdXJvQ2luY2VsYWRvUmVhY3RcXGNvbXBvbmVudHNcXENhbGxUb0FjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZSAocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgbGluaywgdGV4dCwgZXh0ZXJuYWx9ID0gcHJvcHNcclxuICAgIGlmKGV4dGVybmFsKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rfSBjbGFzc05hbWU9XCJidXR0b24tbGlua1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD0nbm9yZWZlcnJlciBub29wZW5lcic+e3RleHR9PC9hPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5idXR0b24tbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1sZXR0ZXItb24tZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24tbGluazpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1sZXR0ZXItb24tZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZWxzZXsgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbi1saW5rXCI+e3RleHR9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5idXR0b24tbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1sZXR0ZXItb24tZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24tbGluazpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1sZXR0ZXItb24tZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\camil\\\\Desktop\\\\proyects\\\\muroCinceladoReact\\\\components\\\\CallToAction.js */"
      }, void 0, false, void 0, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: link,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "jsx-3303511481" + " " + "button-link",
          children: text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: "3303511481",
        children: ".button-link.jsx-3303511481{display:block;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:1rem 2rem;margin:2rem auto;background:var(--primary-color);-webkit-text-decoration:none;text-decoration:none;color:var(--letter-on-dark);border-radius:0.8rem;font-size:1.2rem;-webkit-transition:all 1s;transition:all 1s;}.button-link.jsx-3303511481:hover{color:var(--letter-on-dark);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2FtaWxcXERlc2t0b3BcXHByb3llY3RzXFxtdXJvQ2luY2VsYWRvUmVhY3RcXGNvbXBvbmVudHNcXENhbGxUb0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ3FCLEFBR3VDLEFBWWMsY0FYVixjQVlHLHFEQVhILGtCQUNELElBV25CLGFBVmtDLGdDQUNYLGtEQUNPLDRCQUNQLHFCQUNKLGlCQUNDLDRDQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXGNhbWlsXFxEZXNrdG9wXFxwcm95ZWN0c1xcbXVyb0NpbmNlbGFkb1JlYWN0XFxjb21wb25lbnRzXFxDYWxsVG9BY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2UgKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IGxpbmssIHRleHQsIGV4dGVybmFsfSA9IHByb3BzXHJcbiAgICBpZihleHRlcm5hbCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17bGlua30gY2xhc3NOYW1lPVwiYnV0dG9uLWxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9J25vcmVmZXJyZXIgbm9vcGVuZXInPnt0ZXh0fTwvYT5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuYnV0dG9uLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbGV0dGVyLW9uLWRhcmspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9uLWxpbms6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbGV0dGVyLW9uLWRhcmspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+ICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGVsc2V7ICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24tbGlua1wiPnt0ZXh0fTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuYnV0dG9uLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbGV0dGVyLW9uLWRhcmspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9uLWxpbms6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbGV0dGVyLW9uLWRhcmspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\camil\\\\Desktop\\\\proyects\\\\muroCinceladoReact\\\\components\\\\CallToAction.js */"
      }, void 0, false, void 0, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this);
  }
}

/***/ }),

/***/ "./components/PayCard.js":
/*!*******************************!*\
  !*** ./components/PayCard.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PayCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CallToAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CallToAction */ "./components/CallToAction.js");

var _jsxFileName = "C:\\Users\\camil\\Desktop\\proyects\\muroCinceladoReact\\components\\PayCard.js";



function PayCard(props) {
  const {
    country,
    price,
    options,
    link,
    buttonText
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-2622230447" + " " + "pay-card",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      className: "jsx-2622230447" + " " + "pay-card__country",
      children: country
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: "jsx-2622230447" + " " + "pay-card__price",
      children: price
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-2622230447" + " " + 'pay-card__button',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CallToAction__WEBPACK_IMPORTED_MODULE_3__.default, {
        link: link,
        text: buttonText,
        external: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "jsx-2622230447" + " " + "pay-card__options",
      children: options
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "2622230447",
      children: ".pay-card.jsx-2622230447{width:13rem;margin:1rem 0;padding:1rem;border:solid 1px;border-radius:0.8rem;}.pay-card__button.jsx-2622230447 a.jsx-2622230447{margin-left:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2FtaWxcXERlc2t0b3BcXHByb3llY3RzXFxtdXJvQ2luY2VsYWRvUmVhY3RcXGNvbXBvbmVudHNcXFBheUNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JpQixBQUc2QixBQU9FLFlBTkEsRUFPZCxZQU5hLGFBQ0ksaUJBQ0kscUJBQ3JCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY2FtaWxcXERlc2t0b3BcXHByb3llY3RzXFxtdXJvQ2luY2VsYWRvUmVhY3RcXGNvbXBvbmVudHNcXFBheUNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYWxsVG9BY3Rpb24gZnJvbSAnLi9DYWxsVG9BY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXlDYXJkIChwcm9wcykge1xyXG4gICAgY29uc3Qge2NvdW50cnksIHByaWNlLCBvcHRpb25zLCBsaW5rLCBidXR0b25UZXh0fSA9IHByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5LWNhcmRcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBheS1jYXJkX19jb3VudHJ5XCI+e2NvdW50cnl9PC9oMj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBheS1jYXJkX19wcmljZVwiPntwcmljZX08L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5LWNhcmRfX2J1dHRvbic+XHJcbiAgICAgICAgICAgICAgICA8Q2FsbFRvQWN0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms9e2xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17YnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBleHRlcm5hbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXktY2FyZF9fb3B0aW9uc1wiPntvcHRpb25zfTwvcD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAucGF5LWNhcmQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzcmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucGF5LWNhcmRfX2J1dHRvbiBhIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\camil\\\\Desktop\\\\proyects\\\\muroCinceladoReact\\\\components\\\\PayCard.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./pages/modalidad-de-intervencion.js":
/*!********************************************!*\
  !*** ./pages/modalidad-de-intervencion.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CallToAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/CallToAction */ "./components/CallToAction.js");
/* harmony import */ var _components_PayCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/PayCard */ "./components/PayCard.js");

var _jsxFileName = "C:\\Users\\camil\\Desktop\\proyects\\muroCinceladoReact\\pages\\modalidad-de-intervencion.js";






const Atention = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Modalidad de intervenci\xF3n"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Aqu\xED encontrar\xE1s una gu\xEDa para concertar tu cita y la modalidad de atenci\xF3n remota, en relaci\xF3n a la pandemia de COVID-19."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "jsx-2497059002" + " " + "main",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
        className: "jsx-2497059002" + " " + "atention",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "jsx-2497059002" + " " + "atention__title",
          children: "Modalidad de intervenci\xF3n"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-2497059002" + " " + "atention__description",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "jsx-2497059002",
            children: "Para garantizar la seguridad de los consultantes en el marco de la pandemia por COVID19 se ha implementado la atenci\xF3n remota a trav\xE9s de videollamada por medio de Whatsapp."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ol", {
            className: "jsx-2497059002" + " " + "atention__list",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "jsx-2497059002",
              children: "Contactate para resolver cualquier duda y agendar una cita."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CallToAction__WEBPACK_IMPORTED_MODULE_4__.default, {
              link: "https://wa.me/message/LBT3GA3KFI23E1",
              text: "Pedir Turno",
              external: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "jsx-2497059002",
              children: ["Paga el valor de acuerdo al pa\xEDs en el que recidas a trav\xE9s de los siguientes enlaces.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "jsx-2497059002" + " " + "atention__way-to-pay",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PayCard__WEBPACK_IMPORTED_MODULE_5__.default, {
                  country: "Argentina",
                  price: "ARS 1.200",
                  buttonText: "Pagar",
                  link: "https://mpago.la/1kkhwiG",
                  options: "Otras opciones: Transferencia por CBU"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PayCard__WEBPACK_IMPORTED_MODULE_5__.default, {
                  country: "Colombia",
                  price: "COP 70.000",
                  buttonText: "Pagar",
                  link: "https://biz.payulatam.com/L0dc8f07BDCD3EB",
                  options: "Otras opciones: Transferencia directa (Bancolombia o Banco Caja Social"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PayCard__WEBPACK_IMPORTED_MODULE_5__.default, {
                  country: "Otros lugares",
                  price: "USD 25",
                  buttonText: "Pagar",
                  link: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PDTM9FGX4TT7Y"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "jsx-2497059002",
              children: " El d\xEDa de la cita contactate al mismo watsapp para realizar la videollamada. Ubicate en un lugar que te sea comodo y cuentes con privacidad."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "jsx-2497059002",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
              className: "jsx-2497059002",
              children: "NOTA: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 28
            }, undefined), "En caso de que no puedas asistir y hayas realizado el pago comunicate para reprogramar tu cita."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: "2497059002",
        children: ".atention.jsx-2497059002{max-width:60rem;margin:auto;padding:3rem 2rem;}.atention__list.jsx-2497059002{padding:1rem 2rem;}.atention__way-to-pay.jsx-2497059002{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2FtaWxcXERlc2t0b3BcXHByb3llY3RzXFxtdXJvQ2luY2VsYWRvUmVhY3RcXHBhZ2VzXFxtb2RhbGlkYWQtZGUtaW50ZXJ2ZW5jaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEcUIsQUFHcUMsQUFLRSxBQUdMLGdCQVBELEVBS1osVUFKa0Isa0JBQ2xCLDRCQU1lLHlEQUNjLDJIQUM3QiIsImZpbGUiOiJDOlxcVXNlcnNcXGNhbWlsXFxEZXNrdG9wXFxwcm95ZWN0c1xcbXVyb0NpbmNlbGFkb1JlYWN0XFxwYWdlc1xcbW9kYWxpZGFkLWRlLWludGVydmVuY2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgQ2FsbFRvQWN0aW9uIGZyb20gJ0Bjb21wb25lbnRzL0NhbGxUb0FjdGlvbidcclxuaW1wb3J0IFBheUNhcmQgZnJvbSAnQGNvbXBvbmVudHMvUGF5Q2FyZCdcclxuXHJcbmNvbnN0IEF0ZW50aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPk1vZGFsaWRhZCBkZSBpbnRlcnZlbmNpw7NuPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBcXXDrSBlbmNvbnRyYXLDoXMgdW5hIGd1w61hIHBhcmEgY29uY2VydGFyIHR1IGNpdGEgeSBsYSBtb2RhbGlkYWQgZGUgYXRlbmNpw7NuIHJlbW90YSwgZW4gcmVsYWNpw7NuIGEgbGEgcGFuZGVtaWEgZGUgQ09WSUQtMTkuXCI+PC9tZXRhPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW5cIj4gXHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJhdGVudGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJhdGVudGlvbl9fdGl0bGVcIj5Nb2RhbGlkYWQgZGUgaW50ZXJ2ZW5jacOzbjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdGVudGlvbl9fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhcmEgZ2FyYW50aXphciBsYSBzZWd1cmlkYWQgZGUgbG9zIGNvbnN1bHRhbnRlcyBlbiBlbCBtYXJjbyBkZSBsYSBwYW5kZW1pYSBwb3IgQ09WSUQxOSBzZSBoYSBpbXBsZW1lbnRhZG8gbGEgYXRlbmNpw7NuIHJlbW90YSBhIHRyYXbDqXMgZGUgdmlkZW9sbGFtYWRhIHBvciBtZWRpbyBkZSBXaGF0c2FwcC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwiYXRlbnRpb25fX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db250YWN0YXRlIHBhcmEgcmVzb2x2ZXIgY3VhbHF1aWVyIGR1ZGEgeSBhZ2VuZGFyIHVuYSBjaXRhLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsbFRvQWN0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCJodHRwczovL3dhLm1lL21lc3NhZ2UvTEJUM0dBM0tGSTIzRTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9J1BlZGlyIFR1cm5vJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVybmFsPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QYWdhIGVsIHZhbG9yIGRlIGFjdWVyZG8gYWwgcGHDrXMgZW4gZWwgcXVlIHJlY2lkYXMgYSB0cmF2w6lzIGRlIGxvcyBzaWd1aWVudGVzIGVubGFjZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdGVudGlvbl9fd2F5LXRvLXBheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGF5Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeT0nQXJnZW50aW5hJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9J0FSUyAxLjIwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ9J1BhZ2FyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz0naHR0cHM6Ly9tcGFnby5sYS8xa2tod2lHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz0gJ090cmFzIG9wY2lvbmVzOiBUcmFuc2ZlcmVuY2lhIHBvciBDQlUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXlDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5PSdDb2xvbWJpYSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPSdDT1AgNzAuMDAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dD0nUGFnYXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rPSdodHRwczovL2Jpei5wYXl1bGF0YW0uY29tL0wwZGM4ZjA3QkRDRDNFQidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9ICdPdHJhcyBvcGNpb25lczogVHJhbnNmZXJlbmNpYSBkaXJlY3RhIChCYW5jb2xvbWJpYSBvIEJhbmNvIENhamEgU29jaWFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGF5Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeT0nT3Ryb3MgbHVnYXJlcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPSAnVVNEIDI1J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dD0nUGFnYXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rPSdodHRwczovL3d3dy5wYXlwYWwuY29tL2NnaS1iaW4vd2Vic2NyP2NtZD1fcy14Y2xpY2smaG9zdGVkX2J1dHRvbl9pZD1QRFRNOUZHWDRUVDdZJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gRWwgZMOtYSBkZSBsYSBjaXRhIGNvbnRhY3RhdGUgYWwgbWlzbW8gd2F0c2FwcCBwYXJhIHJlYWxpemFyIGxhIHZpZGVvbGxhbWFkYS4gVWJpY2F0ZSBlbiB1biBsdWdhciBxdWUgdGUgc2VhIGNvbW9kbyB5IGN1ZW50ZXMgY29uIHByaXZhY2lkYWQuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5OT1RBOiA8L3N0cm9uZz5FbiBjYXNvIGRlIHF1ZSBubyBwdWVkYXMgYXNpc3RpciB5IGhheWFzIHJlYWxpemFkbyBlbCBwYWdvIGNvbXVuaWNhdGUgcGFyYSByZXByb2dyYW1hciB0dSBjaXRhLjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0ZW50aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdGVudGlvbl9fbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYXRlbnRpb25fX3dheS10by1wYXkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXRlbnRpb24iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\camil\\\\Desktop\\\\proyects\\\\muroCinceladoReact\\\\pages\\\\modalidad-de-intervencion.js */"
      }, void 0, false, void 0, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Atention);

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/modalidad-de-intervencion.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdXJvY2luY2VsYWRvdC8uL2NvbXBvbmVudHMvQ2FsbFRvQWN0aW9uLmpzIiwid2VicGFjazovL211cm9jaW5jZWxhZG90Ly4vY29tcG9uZW50cy9QYXlDYXJkLmpzIiwid2VicGFjazovL211cm9jaW5jZWxhZG90Ly4vcGFnZXMvbW9kYWxpZGFkLWRlLWludGVydmVuY2lvbi5qcyIsIndlYnBhY2s6Ly9tdXJvY2luY2VsYWRvdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9tdXJvY2luY2VsYWRvdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9tdXJvY2luY2VsYWRvdC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL211cm9jaW5jZWxhZG90L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tdXJvY2luY2VsYWRvdC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbXVyb2NpbmNlbGFkb3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9tdXJvY2luY2VsYWRvdC9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiIsIndlYnBhY2s6Ly9tdXJvY2luY2VsYWRvdC9pZ25vcmVkfEM6XFxVc2Vyc1xcY2FtaWxcXERlc2t0b3BcXHByb3llY3RzXFxtdXJvQ2luY2VsYWRvUmVhY3RcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJTZXJ2aWNlIiwicHJvcHMiLCJsaW5rIiwidGV4dCIsImV4dGVybmFsIiwiUGF5Q2FyZCIsImNvdW50cnkiLCJwcmljZSIs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QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBdUVQLENBeEVEOztBQTBFQSwrREFBZUEsUUFBZixFOzs7Ozs7Ozs7OztBQy9FQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvbW9kYWxpZGFkLWRlLWludGVydmVuY2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZSAocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgbGluaywgdGV4dCwgZXh0ZXJuYWx9ID0gcHJvcHNcclxuICAgIGlmKGV4dGVybmFsKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rfSBjbGFzc05hbWU9XCJidXR0b24tbGlua1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD0nbm9yZWZlcnJlciBub29wZW5lcic+e3RleHR9PC9hPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5idXR0b24tbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1sZXR0ZXItb24tZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24tbGluazpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1sZXR0ZXItb24tZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZWxzZXsgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbi1saW5rXCI+e3RleHR9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5idXR0b24tbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1sZXR0ZXItb24tZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC5idXR0b24tbGluazpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1sZXR0ZXItb24tZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENhbGxUb0FjdGlvbiBmcm9tICcuL0NhbGxUb0FjdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBheUNhcmQgKHByb3BzKSB7XHJcbiAgICBjb25zdCB7Y291bnRyeSwgcHJpY2UsIG9wdGlvbnMsIGxpbmssIGJ1dHRvblRleHR9ID0gcHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXktY2FyZFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGF5LWNhcmRfX2NvdW50cnlcIj57Y291bnRyeX08L2gyPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGF5LWNhcmRfX3ByaWNlXCI+e3ByaWNlfTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXktY2FyZF9fYnV0dG9uJz5cclxuICAgICAgICAgICAgICAgIDxDYWxsVG9BY3Rpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgbGluaz17bGlua31cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtidXR0b25UZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dGVybmFsPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheS1jYXJkX19vcHRpb25zXCI+e29wdGlvbnN9PC9wPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIC5wYXktY2FyZCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTNyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wYXktY2FyZF9fYnV0dG9uIGEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBDYWxsVG9BY3Rpb24gZnJvbSAnQGNvbXBvbmVudHMvQ2FsbFRvQWN0aW9uJ1xyXG5pbXBvcnQgUGF5Q2FyZCBmcm9tICdAY29tcG9uZW50cy9QYXlDYXJkJ1xyXG5cclxuY29uc3QgQXRlbnRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+TW9kYWxpZGFkIGRlIGludGVydmVuY2nDs248L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkFxdcOtIGVuY29udHJhcsOhcyB1bmEgZ3XDrWEgcGFyYSBjb25jZXJ0YXIgdHUgY2l0YSB5IGxhIG1vZGFsaWRhZCBkZSBhdGVuY2nDs24gcmVtb3RhLCBlbiByZWxhY2nDs24gYSBsYSBwYW5kZW1pYSBkZSBDT1ZJRC0xOS5cIj48L21ldGE+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPiBcclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImF0ZW50aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImF0ZW50aW9uX190aXRsZVwiPk1vZGFsaWRhZCBkZSBpbnRlcnZlbmNpw7NuPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0ZW50aW9uX19kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGFyYSBnYXJhbnRpemFyIGxhIHNlZ3VyaWRhZCBkZSBsb3MgY29uc3VsdGFudGVzIGVuIGVsIG1hcmNvIGRlIGxhIHBhbmRlbWlhIHBvciBDT1ZJRDE5IHNlIGhhIGltcGxlbWVudGFkbyBsYSBhdGVuY2nDs24gcmVtb3RhIGEgdHJhdsOpcyBkZSB2aWRlb2xsYW1hZGEgcG9yIG1lZGlvIGRlIFdoYXRzYXBwLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJhdGVudGlvbl9fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbnRhY3RhdGUgcGFyYSByZXNvbHZlciBjdWFscXVpZXIgZHVkYSB5IGFnZW5kYXIgdW5hIGNpdGEuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxsVG9BY3Rpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz1cImh0dHBzOi8vd2EubWUvbWVzc2FnZS9MQlQzR0EzS0ZJMjNFMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD0nUGVkaXIgVHVybm8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZXJuYWw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlBhZ2EgZWwgdmFsb3IgZGUgYWN1ZXJkbyBhbCBwYcOtcyBlbiBlbCBxdWUgcmVjaWRhcyBhIHRyYXbDqXMgZGUgbG9zIHNpZ3VpZW50ZXMgZW5sYWNlcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0ZW50aW9uX193YXktdG8tcGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXlDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5PSdBcmdlbnRpbmEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT0nQVJTIDEuMjAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dD0nUGFnYXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rPSdodHRwczovL21wYWdvLmxhLzFra2h3aUcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPSAnT3RyYXMgb3BjaW9uZXM6IFRyYW5zZmVyZW5jaWEgcG9yIENCVSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBheUNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cnk9J0NvbG9tYmlhJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9J0NPUCA3MC4wMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25UZXh0PSdQYWdhcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9J2h0dHBzOi8vYml6LnBheXVsYXRhbS5jb20vTDBkYzhmMDdCRENEM0VCJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz0gJ090cmFzIG9wY2lvbmVzOiBUcmFuc2ZlcmVuY2lhIGRpcmVjdGEgKEJhbmNvbG9tYmlhIG8gQmFuY28gQ2FqYSBTb2NpYWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXlDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5PSdPdHJvcyBsdWdhcmVzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9ICdVU0QgMjUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25UZXh0PSdQYWdhcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9J2h0dHBzOi8vd3d3LnBheXBhbC5jb20vY2dpLWJpbi93ZWJzY3I/Y21kPV9zLXhjbGljayZob3N0ZWRfYnV0dG9uX2lkPVBEVE05RkdYNFRUN1knXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiBFbCBkw61hIGRlIGxhIGNpdGEgY29udGFjdGF0ZSBhbCBtaXNtbyB3YXRzYXBwIHBhcmEgcmVhbGl6YXIgbGEgdmlkZW9sbGFtYWRhLiBVYmljYXRlIGVuIHVuIGx1Z2FyIHF1ZSB0ZSBzZWEgY29tb2RvIHkgY3VlbnRlcyBjb24gcHJpdmFjaWRhZC48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPk5PVEE6IDwvc3Ryb25nPkVuIGNhc28gZGUgcXVlIG5vIHB1ZWRhcyBhc2lzdGlyIHkgaGF5YXMgcmVhbGl6YWRvIGVsIHBhZ28gY29tdW5pY2F0ZSBwYXJhIHJlcHJvZ3JhbWFyIHR1IGNpdGEuPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuYXRlbnRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNyZW0gMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmF0ZW50aW9uX19saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdGVudGlvbl9fd2F5LXRvLXBheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdGVudGlvbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=