"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var button = function button(props) {
    return React.createElement(
        "button",
        { className: "fancy" },
        props.children
    );
};

exports.default = button;