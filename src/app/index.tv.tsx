import React from "react";
import { View, Text } from "react-native";
import Menu from "./menu.tv";
import { themeStyles } from "../config";

const App = () => {
  return (
    <View style={[themeStyles.app, { backgroundColor: "#323232" }]}>
      <Menu focusKey="menu" />
      {/* <SpatialFocusable focusable={false} /> */}
    </View>
  );
};

export default App;
