import React from "react";
import { View, Text } from "react-native";
import Menu from "./menu.tv";
import Theme, { themeStyles } from "../config";

const App = () => {
  const [key, setKey] = React.useState("a");

  document.addEventListener("keydown", function (e) {
    setKey(e.toString());
  });

  return (
    <View style={[themeStyles.app, { backgroundColor: "#323232" }]}>
      <Text style={{ color: "white" }}>{key}</Text>
      <Menu focusKey="menu" />
      <Menu focusKey="menu" />
      <View
        style={{ backgroundColor: Theme.color1, width: "100%", height: 50 }}
      />
    </View>
  );
};

export default App;
