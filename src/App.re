open BsReactNative;
open Utils;
open Styles;
let component = ReasonReact.statelessComponent("App");

let make = (_children) => {
  ...component,
  render: (_self) =>
      <View style=styles##app>
        <View style=styles##header>
        // <MyImage />
        //   <Image
        //     source=(`Required(Packager.require("./assets/logoUri.svg")))
        //     resizeMode=`contain
        //     style=styles##logo
        //   />
          <Text style=styles##title> {"React Native for Web"->s} </Text>
        </View>
        <Text style=styles##text>
          "This is an example of an app built with "->s
          <Link href="https://github.com/facebook/create-react-app"
            value="Create React App" />
          " and "->s
          <Link href="https://github.com/necolas/react-native-web" value=
            "React Native for Web"/>
        </Text>
        <Text style=styles##text>
          "To get started, edit "->s
          <Link href="https://codesandbox.io/s/q4qymyp2l6/"
            value="src/App.js" />
          ". "->s
        </Text>
        <View style=styles##buttonContainer>
          <Button onPress={() => Js.log("Example button pressed")} title="Example button" />
        </View>
      </View>
};

let default =
ReasonReact.wrapReasonForJs(~component, jsProps => make(jsProps##children));