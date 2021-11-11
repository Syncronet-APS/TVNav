import React, { PureComponent } from "react";
import { Icon, getScaledValue, StyleSheet } from "renative";
import {
  initNavigation,
  withFocusable,
} from "@noriginmedia/react-spatial-navigation";
import Theme, {
  themeStyles,
  hasHorizontalMenu,
  hasWebFocusableUI,
} from "../config";
import { Text, View, ViewStyle } from "react-native";

if (hasWebFocusableUI) {
  initNavigation({
    debug: false,
    visualDebug: false,
    nativeMode: false,
  });
}

interface IMenu {
  focusKey: string;
  setFocus: () => void;
}

// class Menu extends PureComponent {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={themeStyles.text}>Menu</Text>
//         {/* <Button
//           title="Home"
//           iconFont="ionicons"
//           className="focusable"
//           iconName="md-home"
//           iconColor={Theme.color3}
//           iconSize={Theme.iconSize}
//           style={styles.button}
//           textStyle={styles.buttonText}
//         /> */}
//       </View>
//     );
//   }
// }

interface IBtn {
  title: string;
  focused: any;
  style: ViewStyle;
}

const Btn: React.FC<IBtn> = (props: IBtn) => {
  return (
    <View
      style={[
        props.style,
        props.focused
          ? { backgroundColor: "red" }
          : { backgroundColor: "transparent" },
        styles.button,
      ]}
    >
      <Text style={[styles.buttonText, props.focused ? { opacity: 0.4 } : {}]}>
        {props.title}
      </Text>
    </View>
  );
};

const Button = withFocusable()(Btn);

const Menu: React.FC<IMenu> = (props: IMenu) => {
  React.useEffect(() => {
    if (hasWebFocusableUI) props.setFocus();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={themeStyles.text}>Menu</Text>
      {/* <Button
        title="Home"
        className="focusable"
        onPress={() => {}}
        onEnterPress={() => {}}
      /> */}
      <Button
        title="Home1"
        onPress={() => {}}
        iconFont="ionicons"
        iconName="md-home"
        iconColor="white"
        iconSize={24}
        style={{}}
        textStyle={{ color: "white", fontSize: 32 }}
        testID="Home1"
        activeOpacity={1}
      />
      <Button
        title="Home2"
        onPress={() => {}}
        iconFont="ionicons"
        iconName="md-home"
        iconColor="white"
        iconSize={24}
        style={{}}
        textStyle={{ color: "white", fontSize: 32 }}
        testID="Home2"
        activeOpacity={1}
      />
      <Button
        title="Home3"
        onPress={() => {}}
        iconFont="ionicons"
        iconName="md-home"
        iconColor="white"
        iconSize={24}
        style={{}}
        textStyle={{ color: "white", fontSize: 32 }}
        testID="Home3"
        activeOpacity={1}
      />
    </View>
  );
};

export default withFocusable()(Menu);

const styles = StyleSheet.create({
  container: {
    paddingTop: getScaledValue(hasHorizontalMenu ? 20 : 40),
    paddingLeft: getScaledValue(hasHorizontalMenu ? 40 : 40),
    width: Theme.menuWidth,
    height: Theme.menuHeight,
    backgroundColor: Theme.color1,
    alignItems: "center",
    borderRightWidth: getScaledValue(hasHorizontalMenu ? 0 : 1),
    borderBottomWidth: getScaledValue(hasHorizontalMenu ? 0 : 0),
    borderColor: Theme.color5,
    flexDirection: hasHorizontalMenu ? "row" : "column",
  },
  button: {
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    marginHorizontal: hasHorizontalMenu ? getScaledValue(20) : 0,
    marginTop: hasHorizontalMenu ? 0 : getScaledValue(20),
    maxWidth: getScaledValue(400),
    minWidth: getScaledValue(50),
    borderWidth: 0,
  },
  buttonText: {
    fontFamily: "TimeBurner",
    color: "#62DBFB",
    fontSize: getScaledValue(20),
  },
});
