(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Hero; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CallToAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CallToAction */ "./components/CallToAction.js");

var _jsxFileName = "C:\\Users\\camil\\Desktop\\proyects\\muroCinceladoReact\\components\\Hero.js";



function Hero(props) {
  const {
    title,
    subtitle,
    buttonText,
    children
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "jsx-3079532795" + " " + "hero",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-3079532795" + " " + "hero__container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "jsx-3079532795" + " " + "hero__title",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "jsx-3079532795" + " " + "hero__subtitle",
        children: subtitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "jsx-3079532795" + " " + "hero__text",
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CallToAction__WEBPACK_IMPORTED_MODULE_3__.default, {
        link: "https://wa.me/message/LBT3GA3KFI23E1",
        text: buttonText,
        external: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3079532795",
      children: ".hero.jsx-3079532795{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;min-height:25rem;padding:2rem;color:var(--letter-on-dark);background:url('/images/hero-image.jpg') center/cover no-repeat;}.hero.jsx-3079532795::before{position:absolute;content:\"\";top:0;left:0;right:0;bottom:0;background:#00000080;}.hero__container.jsx-3079532795{position:relative;padding:1rem;margin:auto;width:100%;max-width:50rem;text-align:center;}.hero__title.jsx-3079532795{font-size:2rem;-webkit-transition:all 1.5s;transition:all 1.5s;}.hero__text.jsx-3079532795{font-size:1.1rem;margin:1rem;}@media (max-width:59rem){.hero.jsx-3079532795{min-height:24rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2FtaWxcXERlc2t0b3BcXHByb3llY3RzXFxtdXJvQ2luY2VsYWRvUmVhY3RcXGNvbXBvbmVudHNcXEhlcm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JxQixBQUdrQyxBQVFLLEFBU0EsQUFRSCxBQUlFLEFBS0ksZUFSRCxFQUlSLEFBS1osQ0ExQlcsQUFTRSxXQVJQLEFBcUJOLEVBWlksSUFSTCxPQUNDLENBUUcsT0FQRixJQVFPLEtBUEssSUFhckIsT0FMa0IsSUFyQkEsTUFjbEIsUUFRQSxJQXJCaUIsaUJBQ0osYUFDZSw0QkFDb0MsZ0VBQ2hFIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY2FtaWxcXERlc2t0b3BcXHByb3llY3RzXFxtdXJvQ2luY2VsYWRvUmVhY3RcXGNvbXBvbmVudHNcXEhlcm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYWxsVG9BY3Rpb24gZnJvbSAnLi9DYWxsVG9BY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvIChwcm9wcykge1xyXG4gICAgY29uc3Qge3RpdGxlLCBzdWJ0aXRsZSwgYnV0dG9uVGV4dCwgY2hpbGRyZW59ID0gcHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlcm9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlcm9fX3RpdGxlXCI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImhlcm9fX3N1YnRpdGxlXCI+e3N1YnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVyb19fdGV4dFwiPntjaGlsZHJlbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhbGxUb0FjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiaHR0cHM6Ly93YS5tZS9tZXNzYWdlL0xCVDNHQTNLRkkyM0UxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17YnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZXJuYWw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5oZXJvIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1sZXR0ZXItb24tZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvaW1hZ2VzL2hlcm8taW1hZ2UuanBnJykgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlcm86OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA4MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlcm9fX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGVyb19fdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMS41cztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlcm9fX3RleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5cmVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlcm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\camil\\\\Desktop\\\\proyects\\\\muroCinceladoReact\\\\components\\\\Hero.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }, this);
}

/***/ }),

/***/ "./components/NoticeCard.js":
/*!**********************************!*\
  !*** ./components/NoticeCard.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Notice; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CallToAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CallToAction */ "./components/CallToAction.js");

var _jsxFileName = "C:\\Users\\camil\\Desktop\\proyects\\muroCinceladoReact\\components\\NoticeCard.js";


 // import '../assets/styles/NoticeCard.css'

function Notice(props) {
  const {
    title,
    src,
    alt,
    children,
    link
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "jsx-189351908" + " " + "notice",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-189351908",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "jsx-189351908",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: src,
        alt: alt,
        layout: "fill",
        className: "jsx-189351908" + " " + "notice__image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-189351908",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "jsx-189351908" + " " + "notice__information",
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CallToAction__WEBPACK_IMPORTED_MODULE_3__.default, {
        link: link,
        text: "Gu\xEDa"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "189351908",
      children: ".notice.jsx-189351908{max-width:50rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:3rem auto;padding:1rem;text-align:center;}.notice__image.jsx-189351908,.notice__information.jsx-189351908{width:20rem;margin:1rem 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2FtaWxcXERlc2t0b3BcXHByb3llY3RzXFxtdXJvQ2luY2VsYWRvUmVhY3RcXGNvbXBvbmVudHNcXE5vdGljZUNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJxQixBQUdxQyxBQVdKLFlBQ0UsSUFYRCxVQVliLGdFQVhlLHlEQUNjLDJIQUNWLDZGQUNGLGlCQUNKLGFBQ0ssa0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY2FtaWxcXERlc2t0b3BcXHByb3llY3RzXFxtdXJvQ2luY2VsYWRvUmVhY3RcXGNvbXBvbmVudHNcXE5vdGljZUNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYWxsVG9BY3Rpb24gZnJvbSAnLi9DYWxsVG9BY3Rpb24nXHJcblxyXG4vLyBpbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvTm90aWNlQ2FyZC5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RpY2UgKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IHRpdGxlLCBzcmMsIGFsdCwgY2hpbGRyZW4sIGxpbmsgfSA9IHByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibm90aWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJub3RpY2VfX2ltYWdlXCIgc3JjPXtzcmN9IGFsdD17YWx0fSBsYXlvdXQ9J2ZpbGwnLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5vdGljZV9faW5mb3JtYXRpb25cIj57Y2hpbGRyZW59PC9wPlxyXG4gICAgICAgICAgICAgICAgPENhbGxUb0FjdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICBsaW5rPXtsaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCJHdcOtYVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLm5vdGljZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogM3JlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubm90aWNlX19pbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAubm90aWNlX19pbmZvcm1hdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIClcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\camil\\\\Desktop\\\\proyects\\\\muroCinceladoReact\\\\components\\\\NoticeCard.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }, this);
}

/***/ }),

/***/ "./components/PresentationCard.js":
/*!****************************************!*\
  !*** ./components/PresentationCard.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PresentationCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CallToAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CallToAction */ "./components/CallToAction.js");

var _jsxFileName = "C:\\Users\\camil\\Desktop\\proyects\\muroCinceladoReact\\components\\PresentationCard.js";



function PresentationCard(props) {
  const {
    name,
    src,
    studies,
    invitation,
    link
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "jsx-3529909511" + " " + "presentation",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      className: "jsx-3529909511" + " " + "presentation-title",
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("figure", {
      className: "jsx-3529909511" + " " + "presentation__image-container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: src,
        alt: name,
        className: "jsx-3529909511" + " " + "presentation__image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("figcaption", {
        className: "jsx-3529909511" + " " + "presentation__caption",
        children: studies
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "jsx-3529909511" + " " + "presentation__invitation",
      children: invitation
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CallToAction__WEBPACK_IMPORTED_MODULE_3__.default, {
      link: link,
      text: "Presentaci\xF3n"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3529909511",
      children: ".presentation.jsx-3529909511{padding:2.5rem;background:var(--secondary-color);text-align:center;color:var(--letter-on-dark);}.presentation__image-container.jsx-3529909511{width:100%;max-width:18rem;margin:2rem auto;}.presentation__image.jsx-3529909511{width:100%;border-radius:50%;}.presentation__caption.jsx-3529909511{margin:1rem 0;}.presentation__invitation.jsx-3529909511{margin:1.5 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2FtaWxcXERlc2t0b3BcXHByb3llY3RzXFxtdXJvQ2luY2VsYWRvUmVhY3RcXGNvbXBvbmVudHNcXFByZXNlbnRhdGlvbkNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JxQixBQUdvQyxBQU1KLEFBS0EsQUFJRyxBQUdELFdBWEcsQUFLRSxFQU9sQixDQUhBLENBZmtDLFlBT2pCLEVBS2pCLGVBSkEsS0FQa0Isa0JBQ1UsNEJBQzVCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY2FtaWxcXERlc2t0b3BcXHByb3llY3RzXFxtdXJvQ2luY2VsYWRvUmVhY3RcXGNvbXBvbmVudHNcXFByZXNlbnRhdGlvbkNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYWxsVG9BY3Rpb24gZnJvbSAnLi9DYWxsVG9BY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmVzZW50YXRpb25DYXJkIChwcm9wcykge1xyXG4gICAgY29uc3QgeyBuYW1lLCBzcmMsIHN0dWRpZXMsIGludml0YXRpb24sIGxpbmsgfSA9IHByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJlc2VudGF0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcmVzZW50YXRpb25fX2ltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJlc2VudGF0aW9uX19pbWFnZVwiIHNyYz17c3JjfSBhbHQ9e25hbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJwcmVzZW50YXRpb25fX2NhcHRpb25cIj57c3R1ZGllc308L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByZXNlbnRhdGlvbl9faW52aXRhdGlvblwiPntpbnZpdGF0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDxDYWxsVG9BY3Rpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgbGluaz17bGlua31cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiUHJlc2VudGFjacOzblwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcmVzZW50YXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbGV0dGVyLW9uLWRhcmspO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJlc2VudGF0aW9uX19pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMThyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcmVzZW50YXRpb25fX2ltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcmVzZW50YXRpb25fX2NhcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJlc2VudGF0aW9uX19pbnZpdGF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuNSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICApXHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\camil\\\\Desktop\\\\proyects\\\\muroCinceladoReact\\\\components\\\\PresentationCard.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }, this);
}

/***/ }),

/***/ "./components/ServiceCard.js":
/*!***********************************!*\
  !*** ./components/ServiceCard.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ServiceCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\camil\\Desktop\\proyects\\muroCinceladoReact\\components\\ServiceCard.js";


function ServiceCard(props) {
  const {
    src,
    title,
    children
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
    className: "jsx-3173642107" + " " + "service",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: src,
      className: "jsx-3173642107" + " " + "service__image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      className: "jsx-3173642107" + " " + "service__title",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "jsx-3173642107" + " " + "service__text",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3173642107",
      children: ".service.jsx-3173642107{text-align:center;margin:1rem 0;padding:1rem;max-width:20rem;}.service__image.jsx-3173642107{width:100%;margin:1rem 0;}.service__title.jsx-3173642107{margin-bottom:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2FtaWxcXERlc2t0b3BcXHByb3llY3RzXFxtdXJvQ2luY2VsYWRvUmVhY3RcXGNvbXBvbmVudHNcXFNlcnZpY2VDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVhLEFBRytCLEFBTVAsQUFJUSxXQUhMLE9BTkEsQ0FVZCxNQUhBLE9BTmEsYUFDRyxnQkFDaEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxjYW1pbFxcRGVza3RvcFxccHJveWVjdHNcXG11cm9DaW5jZWxhZG9SZWFjdFxcY29tcG9uZW50c1xcU2VydmljZUNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlQ2FyZCAocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgc3JjLCB0aXRsZSwgY2hpbGRyZW4gfSA9IHByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwic2VydmljZVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtzcmN9IGNsYXNzTmFtZT1cInNlcnZpY2VfX2ltYWdlXCI+PC9pbWc+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNlcnZpY2VfX3RpdGxlXCI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VydmljZV9fdGV4dFwiPntjaGlsZHJlbn08L3A+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgLnNlcnZpY2Uge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZXJ2aWNlX19pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VydmljZV9fdGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgIDwvYXJ0aWNsZT5cclxuICAgIClcclxufSAiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\camil\\\\Desktop\\\\proyects\\\\muroCinceladoReact\\\\components\\\\ServiceCard.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Services.js":
/*!********************************!*\
  !*** ./components/Services.js ***!
  \********************************/
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
/* harmony import */ var _ServiceCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ServiceCard */ "./components/ServiceCard.js");

var _jsxFileName = "C:\\Users\\camil\\Desktop\\proyects\\muroCinceladoReact\\components\\Services.js";



function Service() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "jsx-3949954793" + " " + "card-service-container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ServiceCard__WEBPACK_IMPORTED_MODULE_3__.default, {
      src: '/images/person.svg',
      title: "Terapia Individual",
      children: "Orientada a tratar cualquir tipo de malestar psicol\xF3gico, con el fin de mejorar la calidad de vida y las relaciones interpersonales del consultante."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ServiceCard__WEBPACK_IMPORTED_MODULE_3__.default, {
      src: '/images/group.svg',
      title: "Terapia Relacional",
      children: "Orientada a abordar dificultades a nivel vincular con una perspectiva respetuosa a la diversidad relacional, sexual y de g\xE9nero."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3949954793",
      children: ".card-service-container.jsx-3949954793{margin:2rem 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2FtaWxcXERlc2t0b3BcXHByb3llY3RzXFxtdXJvQ2luY2VsYWRvUmVhY3RcXGNvbXBvbmVudHNcXFNlcnZpY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNxQixBQUd1QyxjQUNELDBFQUNFLHlEQUNjLDJIQUNqQyIsImZpbGUiOiJDOlxcVXNlcnNcXGNhbWlsXFxEZXNrdG9wXFxwcm95ZWN0c1xcbXVyb0NpbmNlbGFkb1JlYWN0XFxjb21wb25lbnRzXFxTZXJ2aWNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNlcnZpY2VDYXJkIGZyb20gJy4vU2VydmljZUNhcmQnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZC1zZXJ2aWNlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPFNlcnZpY2VDYXJkIHNyYz17Jy9pbWFnZXMvcGVyc29uLnN2Zyd9IHRpdGxlPVwiVGVyYXBpYSBJbmRpdmlkdWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgT3JpZW50YWRhIGEgdHJhdGFyIGN1YWxxdWlyIHRpcG8gZGUgbWFsZXN0YXIgcHNpY29sw7NnaWNvLCBjb24gZWwgZmluIGRlIG1lam9yYXIgbGEgY2FsaWRhZCBkZSB2aWRhIHkgbGFzIHJlbGFjaW9uZXMgaW50ZXJwZXJzb25hbGVzIGRlbCBjb25zdWx0YW50ZS5cclxuICAgICAgICAgICAgICAgIDwvU2VydmljZUNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8U2VydmljZUNhcmQgc3JjPXsnL2ltYWdlcy9ncm91cC5zdmcnfSB0aXRsZT1cIlRlcmFwaWEgUmVsYWNpb25hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE9yaWVudGFkYSBhIGFib3JkYXIgZGlmaWN1bHRhZGVzIGEgbml2ZWwgdmluY3VsYXIgY29uIHVuYSBwZXJzcGVjdGl2YSByZXNwZXR1b3NhIGEgbGEgZGl2ZXJzaWRhZCByZWxhY2lvbmFsLCBzZXh1YWwgeSBkZSBnw6luZXJvLlxyXG4gICAgICAgICAgICAgICAgPC9TZXJ2aWNlQ2FyZD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1zZXJ2aWNlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICApXHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\camil\\\\Desktop\\\\proyects\\\\muroCinceladoReact\\\\components\\\\Services.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }, this);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Services */ "./components/Services.js");
/* harmony import */ var _components_PresentationCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/PresentationCard */ "./components/PresentationCard.js");
/* harmony import */ var _components_NoticeCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/NoticeCard */ "./components/NoticeCard.js");

var _jsxFileName = "C:\\Users\\camil\\Desktop\\proyects\\muroCinceladoReact\\pages\\index.js";






class Home extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "jsx-4255757521" + " " + "main",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero__WEBPACK_IMPORTED_MODULE_3__.default, {
        title: "Psicoterapia",
        subtitle: "\xBFNecesitas apoyo?",
        buttonText: "Pedir turno",
        children: "Esta es una herramienta efectiva para el tratamiento de dificultades a nivel emocional o psicol\xF3gico, que afectan la relacion con nosotros mismos y nuestro entorno."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Services__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PresentationCard__WEBPACK_IMPORTED_MODULE_5__.default, {
        name: "Ps. Camilo Gonzalez",
        src: '/images/profile-picture.jpg',
        studies: "Psicologo de la Universidad Santo Tomas. Bogot\xE1 D.C. Colombia",
        invitation: "Te invito a leer un poco sobre mi",
        link: "/psicologo-camilo-gonzalez"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NoticeCard__WEBPACK_IMPORTED_MODULE_6__.default, {
        title: "Situaci\xF3n COVID",
        src: '/images/covid.svg',
        alt: "joven_con_mascarilla",
        link: "/modalidad-de-intervencion",
        children: "Para garantizar la seguridad de los consultantes en el marco de la pandemia por COVID-19 se ha implementado la atenci\xF3n remota a trav\xE9s de videollamada por medio de Whatsapp. Si deseas mayor informaci\xF3n te invito a leer los pasos para agendar tu cita."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: "4255757521",
        children: ".card-service-container.jsx-4255757521{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2FtaWxcXERlc2t0b3BcXHByb3llY3RzXFxtdXJvQ2luY2VsYWRvUmVhY3RcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ3FCLEFBRzBDLDBFQUNFLHlEQUNjLDJIQUM3QiIsImZpbGUiOiJDOlxcVXNlcnNcXGNhbWlsXFxEZXNrdG9wXFxwcm95ZWN0c1xcbXVyb0NpbmNlbGFkb1JlYWN0XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgSGVybyBmcm9tICdAY29tcG9uZW50cy9IZXJvJ1xyXG5pbXBvcnQgU2VydmljZXMgZnJvbSAnQGNvbXBvbmVudHMvU2VydmljZXMnXHJcbmltcG9ydCBQcmVzZW50YXRpb25DYXJkIGZyb20gJ0Bjb21wb25lbnRzL1ByZXNlbnRhdGlvbkNhcmQnXHJcbmltcG9ydCBOb3RpY2VDYXJkIGZyb20gJ0Bjb21wb25lbnRzL05vdGljZUNhcmQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW5cIj4gXHJcbiAgICAgICAgICAgICAgICA8SGVybyBcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBzaWNvdGVyYXBpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU9XCLCv05lY2VzaXRhcyBhcG95bz9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ9XCJQZWRpciB0dXJub1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRXN0YSBlcyB1bmEgaGVycmFtaWVudGEgZWZlY3RpdmEgcGFyYSBlbCB0cmF0YW1pZW50byBkZSBkaWZpY3VsdGFkZXMgYSBuaXZlbCBlbW9jaW9uYWwgbyBwc2ljb2zDs2dpY28sIHF1ZSBhZmVjdGFuIGxhIHJlbGFjaW9uIGNvbiBub3NvdHJvcyBtaXNtb3MgeSBudWVzdHJvIGVudG9ybm8uIFxyXG4gICAgICAgICAgICAgICAgPC9IZXJvPlxyXG4gICAgICAgICAgICAgICAgPFNlcnZpY2VzIC8+XHJcbiAgICAgICAgICAgICAgICA8UHJlc2VudGF0aW9uQ2FyZCBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiUHMuIENhbWlsbyBHb256YWxlelwiICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Jy9pbWFnZXMvcHJvZmlsZS1waWN0dXJlLmpwZyd9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3R1ZGllcz1cIlBzaWNvbG9nbyBkZSBsYSBVbml2ZXJzaWRhZCBTYW50byBUb21hcy4gQm9nb3TDoSBELkMuIENvbG9tYmlhXCJcclxuICAgICAgICAgICAgICAgICAgICBpbnZpdGF0aW9uPVwiVGUgaW52aXRvIGEgbGVlciB1biBwb2NvIHNvYnJlIG1pXCJcclxuICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL3BzaWNvbG9nby1jYW1pbG8tZ29uemFsZXpcIiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxOb3RpY2VDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTaXR1YWNpw7NuIENPVklEXCIgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXsnL2ltYWdlcy9jb3ZpZC5zdmcnfSAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImpvdmVuX2Nvbl9tYXNjYXJpbGxhXCJcclxuICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL21vZGFsaWRhZC1kZS1pbnRlcnZlbmNpb25cIiAgIFxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFBhcmEgZ2FyYW50aXphciBsYSBzZWd1cmlkYWQgZGUgbG9zIGNvbnN1bHRhbnRlcyBlbiBlbCBtYXJjbyBkZSBsYSBwYW5kZW1pYSBwb3IgQ09WSUQtMTkgc2UgaGEgaW1wbGVtZW50YWRvIGxhIGF0ZW5jacOzbiByZW1vdGEgYSB0cmF2w6lzIGRlIHZpZGVvbGxhbWFkYSBwb3IgbWVkaW8gZGUgV2hhdHNhcHAuIFNpIGRlc2VhcyBtYXlvciBpbmZvcm1hY2nDs24gdGUgaW52aXRvIGEgbGVlciBsb3MgcGFzb3MgcGFyYSBhZ2VuZGFyIHR1IGNpdGEuXHJcbiAgICAgICAgICAgICAgICA8L05vdGljZUNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkLXNlcnZpY2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\camil\\\\Desktop\\\\proyects\\\\muroCinceladoReact\\\\pages\\\\index.js */"
      }, void 0, false, void 0, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this);
  }

}

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_CallToAction_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdXJvY2luY2VsYWRvdC8uL2NvbXBvbmVudHMvSGVyby5qcyIsIndlYnBhY2s6Ly9tdXJvY2luY2VsYWRvdC8uL2NvbXBvbmVudHMvTm90aWNlQ2FyZC5qcyIsIndlYnBhY2s6Ly9tdXJvY2luY2VsYWRvdC8uL2NvbXBvbmVudHMvUHJlc2VudGF0aW9uQ2FyZC5qcyIsIndlYnBhY2s6Ly9tdXJvY2luY2VsYWRvdC8uL2NvbXBvbmVudHMvU2VydmljZUNhcmQuanMiLCJ3ZWJwYWNrOi8vbXVyb2NpbmNlbGFkb3QvLi9jb21wb25lbnRzL1NlcnZpY2VzLmpzIiwid2VicGFjazovL211cm9jaW5jZWxhZG90Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXVyb2NpbmNlbGFkb3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbXVyb2NpbmNlbGFkb3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbXVyb2NpbmNlbGFkb3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL211cm9jaW5jZWxhZG90L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9tdXJvY2luY2VsYWRvdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL211cm9jaW5jZWxhZG90L2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkhlcm8iLCJwcm9wcyIsInRpdGxlIiwic3VidGl0bGUiLCJidXR0b25UZXh0IiwiY2hpbGRyZW4iLCJOb3RpY2UiLCJzcmMiLCJhbHQiLCJsaW5rIiwiUHJlc2VudGF0aW9uQ2FyZCIsIm5hbWUiLCJzdHVkaWVzIiwiaW52aXRhdGlvbiIsIlNlcnZpY2VDYXJk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QURKO0FBcUJQLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLE1BQU1DLElBQU4sU0FBbUJDLHdEQUFuQixDQUFtQztBQUM5Q0MsUUFBTSxHQUFFO0FBQ0osd0JBQ0k7QUFBQSwwQ0FBZ0IsTUFBaEI7QUFBQSw4QkFDSSw4REFBQyxxREFBRDtBQUNJLGFBQUssRUFBQyxjQURWO0FBRUksZ0JBQVEsRUFBQyxzQkFGYjtBQUdJLGtCQUFVLEVBQUMsYUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBUUksOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKLGVBU0ksOERBQUMsaUVBQUQ7QUFDSSxZQUFJLEVBQUMscUJBRFQ7QUFFSSxXQUFHLEVBQUUsNkJBRlQ7QUFHSSxlQUFPLEVBQUMsa0VBSFo7QUFJSSxrQkFBVSxFQUFDLG1DQUpmO0FBS0ksWUFBSSxFQUFDO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRKLGVBZ0JJLDhEQUFDLDJEQUFEO0FBQ0ksYUFBSyxFQUFDLG9CQURWO0FBRUksV0FBRyxFQUFFLG1CQUZUO0FBR0ksV0FBRyxFQUFDLHNCQUhSO0FBSUksWUFBSSxFQUFDLDRCQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBb0NIOztBQXRDNkMsQzs7Ozs7Ozs7Ozs7QUNQbEQseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYWxsVG9BY3Rpb24gZnJvbSAnLi9DYWxsVG9BY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvIChwcm9wcykge1xyXG4gICAgY29uc3Qge3RpdGxlLCBzdWJ0aXRsZSwgYnV0dG9uVGV4dCwgY2hpbGRyZW59ID0gcHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlcm9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlcm9fX3RpdGxlXCI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImhlcm9fX3N1YnRpdGxlXCI+e3N1YnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVyb19fdGV4dFwiPntjaGlsZHJlbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhbGxUb0FjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiaHR0cHM6Ly93YS5tZS9tZXNzYWdlL0xCVDNHQTNLRkkyM0UxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17YnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZXJuYWw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5oZXJvIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1sZXR0ZXItb24tZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvaW1hZ2VzL2hlcm8taW1hZ2UuanBnJykgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlcm86OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA4MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlcm9fX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGVyb19fdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMS41cztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlcm9fX3RleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5cmVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlcm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYWxsVG9BY3Rpb24gZnJvbSAnLi9DYWxsVG9BY3Rpb24nXHJcblxyXG4vLyBpbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvTm90aWNlQ2FyZC5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RpY2UgKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IHRpdGxlLCBzcmMsIGFsdCwgY2hpbGRyZW4sIGxpbmsgfSA9IHByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibm90aWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJub3RpY2VfX2ltYWdlXCIgc3JjPXtzcmN9IGFsdD17YWx0fSBsYXlvdXQ9J2ZpbGwnLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5vdGljZV9faW5mb3JtYXRpb25cIj57Y2hpbGRyZW59PC9wPlxyXG4gICAgICAgICAgICAgICAgPENhbGxUb0FjdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICBsaW5rPXtsaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCJHdcOtYVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLm5vdGljZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogM3JlbSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubm90aWNlX19pbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAubm90aWNlX19pbmZvcm1hdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENhbGxUb0FjdGlvbiBmcm9tICcuL0NhbGxUb0FjdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZXNlbnRhdGlvbkNhcmQgKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHNyYywgc3R1ZGllcywgaW52aXRhdGlvbiwgbGluayB9ID0gcHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcmVzZW50YXRpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInByZXNlbnRhdGlvbl9faW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcmVzZW50YXRpb25fX2ltYWdlXCIgc3JjPXtzcmN9IGFsdD17bmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cInByZXNlbnRhdGlvbl9fY2FwdGlvblwiPntzdHVkaWVzfTwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJlc2VudGF0aW9uX19pbnZpdGF0aW9uXCI+e2ludml0YXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPENhbGxUb0FjdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICBsaW5rPXtsaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCJQcmVzZW50YWNpw7NuXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLnByZXNlbnRhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1sZXR0ZXItb24tZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcmVzZW50YXRpb25fX2ltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByZXNlbnRhdGlvbl9faW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByZXNlbnRhdGlvbl9fY2FwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcmVzZW50YXRpb25fX2ludml0YXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMS41IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlQ2FyZCAocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgc3JjLCB0aXRsZSwgY2hpbGRyZW4gfSA9IHByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwic2VydmljZVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtzcmN9IGNsYXNzTmFtZT1cInNlcnZpY2VfX2ltYWdlXCI+PC9pbWc+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNlcnZpY2VfX3RpdGxlXCI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VydmljZV9fdGV4dFwiPntjaGlsZHJlbn08L3A+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgLnNlcnZpY2Uge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZXJ2aWNlX19pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VydmljZV9fdGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgIDwvYXJ0aWNsZT5cclxuICAgIClcclxufSAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTZXJ2aWNlQ2FyZCBmcm9tICcuL1NlcnZpY2VDYXJkJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2UgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQtc2VydmljZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTZXJ2aWNlQ2FyZCBzcmM9eycvaW1hZ2VzL3BlcnNvbi5zdmcnfSB0aXRsZT1cIlRlcmFwaWEgSW5kaXZpZHVhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE9yaWVudGFkYSBhIHRyYXRhciBjdWFscXVpciB0aXBvIGRlIG1hbGVzdGFyIHBzaWNvbMOzZ2ljbywgY29uIGVsIGZpbiBkZSBtZWpvcmFyIGxhIGNhbGlkYWQgZGUgdmlkYSB5IGxhcyByZWxhY2lvbmVzIGludGVycGVyc29uYWxlcyBkZWwgY29uc3VsdGFudGUuXHJcbiAgICAgICAgICAgICAgICA8L1NlcnZpY2VDYXJkPlxyXG4gICAgICAgICAgICAgICAgPFNlcnZpY2VDYXJkIHNyYz17Jy9pbWFnZXMvZ3JvdXAuc3ZnJ30gdGl0bGU9XCJUZXJhcGlhIFJlbGFjaW9uYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBPcmllbnRhZGEgYSBhYm9yZGFyIGRpZmljdWx0YWRlcyBhIG5pdmVsIHZpbmN1bGFyIGNvbiB1bmEgcGVyc3BlY3RpdmEgcmVzcGV0dW9zYSBhIGxhIGRpdmVyc2lkYWQgcmVsYWNpb25hbCwgc2V4dWFsIHkgZGUgZ8OpbmVyby5cclxuICAgICAgICAgICAgICAgIDwvU2VydmljZUNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtc2VydmljZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBIZXJvIGZyb20gJ0Bjb21wb25lbnRzL0hlcm8nXHJcbmltcG9ydCBTZXJ2aWNlcyBmcm9tICdAY29tcG9uZW50cy9TZXJ2aWNlcydcclxuaW1wb3J0IFByZXNlbnRhdGlvbkNhcmQgZnJvbSAnQGNvbXBvbmVudHMvUHJlc2VudGF0aW9uQ2FyZCdcclxuaW1wb3J0IE5vdGljZUNhcmQgZnJvbSAnQGNvbXBvbmVudHMvTm90aWNlQ2FyZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPiBcclxuICAgICAgICAgICAgICAgIDxIZXJvIFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUHNpY290ZXJhcGlhXCJcclxuICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZT1cIsK/TmVjZXNpdGFzIGFwb3lvP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIlBlZGlyIHR1cm5vXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBFc3RhIGVzIHVuYSBoZXJyYW1pZW50YSBlZmVjdGl2YSBwYXJhIGVsIHRyYXRhbWllbnRvIGRlIGRpZmljdWx0YWRlcyBhIG5pdmVsIGVtb2Npb25hbCBvIHBzaWNvbMOzZ2ljbywgcXVlIGFmZWN0YW4gbGEgcmVsYWNpb24gY29uIG5vc290cm9zIG1pc21vcyB5IG51ZXN0cm8gZW50b3Juby4gXHJcbiAgICAgICAgICAgICAgICA8L0hlcm8+XHJcbiAgICAgICAgICAgICAgICA8U2VydmljZXMgLz5cclxuICAgICAgICAgICAgICAgIDxQcmVzZW50YXRpb25DYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJQcy4gQ2FtaWxvIEdvbnphbGV6XCIgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXsnL2ltYWdlcy9wcm9maWxlLXBpY3R1cmUuanBnJ30gICBcclxuICAgICAgICAgICAgICAgICAgICBzdHVkaWVzPVwiUHNpY29sb2dvIGRlIGxhIFVuaXZlcnNpZGFkIFNhbnRvIFRvbWFzLiBCb2dvdMOhIEQuQy4gQ29sb21iaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGludml0YXRpb249XCJUZSBpbnZpdG8gYSBsZWVyIHVuIHBvY28gc29icmUgbWlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms9XCIvcHNpY29sb2dvLWNhbWlsby1nb256YWxlelwiICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE5vdGljZUNhcmRcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNpdHVhY2nDs24gQ09WSURcIiAgICBcclxuICAgICAgICAgICAgICAgICAgICBzcmM9eycvaW1hZ2VzL2NvdmlkLnN2Zyd9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiam92ZW5fY29uX21hc2NhcmlsbGFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms9XCIvbW9kYWxpZGFkLWRlLWludGVydmVuY2lvblwiICAgXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUGFyYSBnYXJhbnRpemFyIGxhIHNlZ3VyaWRhZCBkZSBsb3MgY29uc3VsdGFudGVzIGVuIGVsIG1hcmNvIGRlIGxhIHBhbmRlbWlhIHBvciBDT1ZJRC0xOSBzZSBoYSBpbXBsZW1lbnRhZG8gbGEgYXRlbmNpw7NuIHJlbW90YSBhIHRyYXbDqXMgZGUgdmlkZW9sbGFtYWRhIHBvciBtZWRpbyBkZSBXaGF0c2FwcC4gU2kgZGVzZWFzIG1heW9yIGluZm9ybWFjacOzbiB0ZSBpbnZpdG8gYSBsZWVyIGxvcyBwYXNvcyBwYXJhIGFnZW5kYXIgdHUgY2l0YS5cclxuICAgICAgICAgICAgICAgIDwvTm90aWNlQ2FyZD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQtc2VydmljZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=