import React from "react";
import { View, Text } from "react-native";
import Menu from "./menu.tv";
import Theme, { themeStyles } from "../config";

const App = () => {
  const [key, setKey] = React.useState("a");

  window.addEventListener("keydown", function (e) {
    setKey(e.toString());
  });

  function keypress(e) {
    setKey(e.which.toString());
  }

  return (
    <View style={[{ backgroundColor: "#323232", flex: 1 }]}>
      {/* <div
        id="keyboard"
        tabIndex={0}
        onKeyDown={keypress}
        // onKeyUp={this.stopNote}
      > */}
      <Text style={{ color: "white" }}>{key}</Text>
      <Menu focusKey="menu" />
      {/* </div> */}
    </View>
  );
};

export default App;
