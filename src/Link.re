open BsReactNative;
let component = ReasonReact.statelessComponent("Link");

let make = (~href:string,~style=?, ~value:string,_children) => {
  ...component,
  render: (_self) => {
    let linkStyle = switch(style) {
      | None => Styles.styles##link
      | Some(style) => Style.concat([Styles.styles##link, style])
    };
    <Text
      onPress={() => Js.Promise.(
        Linking.openURL(href)
        |> then_(_ => Js.log("opened " ++ href) |> resolve)
        |> ignore
      )}
      style=linkStyle
      value
     />
     }
};