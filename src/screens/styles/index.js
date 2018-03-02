import { Platform, StyleSheet, Dimensions } from "react-native";
import { deepBlue } from "../../constants/colors";
import { STATUSBAR_HEIGHT, APPBAR_HEIGHT } from "../../constants";
import normalize from "../../utils/normalizeText";

export default StyleSheet.create({
  // look at the 'styles' in react-navigation/src/views/Header/Header.js
  navigationOptionHeaderStyle: {
    position: "absolute",
    backgroundColor: "transparent",
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    borderBottomColor: "transparent",
    shadowOpacity: 0,
    shadowColor: "transparent"
  }
});
