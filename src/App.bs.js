// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Link$RnwebCxTest = require("./Link.bs.js");
var Utils$RnwebCxTest = require("./Utils.bs.js");
var Styles$RnwebCxTest = require("./styles/Styles.bs.js");
var Text$BsReactNative = require("bs-react-native/lib/js/src/components/text.js");
var View$BsReactNative = require("bs-react-native/lib/js/src/components/view.js");
var Button$BsReactNative = require("bs-react-native/lib/js/src/components/button.js");

var component = ReasonReact.statelessComponent("App");

function make(_children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (_self) {
              return ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Caml_option.some(Styles$RnwebCxTest.styles.app), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[
                              ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Caml_option.some(Styles$RnwebCxTest.styles.header), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Caml_option.some(Styles$RnwebCxTest.styles.title), undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[Utils$RnwebCxTest.s("React Native for Web")]))])),
                              ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Caml_option.some(Styles$RnwebCxTest.styles.text), undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[
                                        Utils$RnwebCxTest.s("This is an example of an app built with "),
                                        ReasonReact.element(undefined, undefined, Link$RnwebCxTest.make("https://github.com/facebook/create-react-app", undefined, "Create React App", /* array */[])),
                                        Utils$RnwebCxTest.s(" and "),
                                        ReasonReact.element(undefined, undefined, Link$RnwebCxTest.make("https://github.com/necolas/react-native-web", undefined, "React Native for Web", /* array */[]))
                                      ])),
                              ReasonReact.element(undefined, undefined, Text$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Caml_option.some(Styles$RnwebCxTest.styles.text), undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[
                                        Utils$RnwebCxTest.s("To get started, edit "),
                                        ReasonReact.element(undefined, undefined, Link$RnwebCxTest.make("https://codesandbox.io/s/q4qymyp2l6/", undefined, "src/App.js", /* array */[])),
                                        Utils$RnwebCxTest.s(". ")
                                      ])),
                              ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Caml_option.some(Styles$RnwebCxTest.styles.buttonContainer), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[ReasonReact.element(undefined, undefined, Button$BsReactNative.make(undefined, undefined, undefined, (function (param) {
                                                      console.log("Example button pressed");
                                                      return /* () */0;
                                                    }), undefined, "Example button")(/* array */[]))]))
                            ]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.children);
      }));

exports.component = component;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* component Not a pure module */
