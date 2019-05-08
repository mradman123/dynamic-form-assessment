webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/room.jsx":
/*!*****************************!*\
  !*** ./components/room.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "C:\\Users\\Makala\\Desktop\\Programming\\Assessments\\HiltonAssessment\\Solution\\components\\room.jsx";



var room = function room(props) {
  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "room__Container",
    componentId: "zidzi0-0"
  })(["background-color:", ";width:140px;height:100px;margin:3px;float:left;border:4px solid;border-radius:5px;border-color:", ";"], function (props) {
    return props.selected ? "#ffffff" : "#dbdbe3";
  }, function (props) {
    return props.selected ? "#e7e7e7" : "#d9dce5";
  });
  var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "room__Header",
    componentId: "zidzi0-1"
  })(["height:20px;padding:0px 3px;background-color:", ";font-weight:", ";"], function (props) {
    return props.selected ? "#e7e7e7" : "#dbdbe3";
  }, function (props) {
    return props.selected ? "bold" : "normal";
  });
  var Dropdown = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "room__Dropdown",
    componentId: "zidzi0-2"
  })(["width:40px;height:60px;margin:10px;float:left;font-size:14px;"]);
  var number = props.number,
      selected = props.selected,
      adults = props.adults,
      children = props.children;
  var roomName = 'Room ' + number;
  var adultDropdown = [1, 2];
  var childrenDropdown = [0, 1, 2];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    selected: selected,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, number != 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    name: roomName,
    checked: props.selected,
    onChange: function onChange(event) {
      return props.handleRoomSelectionToggle(event.target.checked, props.number);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), roomName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dropdown, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Adults (18+)", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "adults",
    value: adults,
    disabled: !selected,
    onChange: function onChange(event) {
      return props.handleDropdownChange(event.target.name, event.target.value, props.number);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, adultDropdown.map(function (value) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: value,
      value: value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, value);
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dropdown, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Children (0-17)", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "children",
    value: children,
    disabled: !selected,
    onChange: function onChange(event) {
      return props.handleDropdownChange(event.target.name, event.target.value, props.number);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, childrenDropdown.map(function (value) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: value,
      value: value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, value);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (room);

/***/ })

})
//# sourceMappingURL=index.js.a86932019e3220e39cd3.hot-update.js.map