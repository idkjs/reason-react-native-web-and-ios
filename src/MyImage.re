open BsReactNative;
let component = ReasonReact.statelessComponent("MyImage");
open Styles;
let make = _children => {
  ...component,
  render: _self =>
    <Image
      style=styles##logo
      // style=Style.(style([width(Pt(320.)), height(Pt(480.))]))
      source=(`Required(Packager.require("./assets/logoRN.png")))
      resizeMode=`contain
    />,
};
