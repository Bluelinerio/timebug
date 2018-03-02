import { Platform, StyleSheet, Dimensions } from "react-native";
import { deepBlue } from "../../../constants/colors";
import { STATUSBAR_HEIGHT, APPBAR_HEIGHT } from "../../../constants";
import normalize from "../../../utils/normalizeText";

export default StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: "row"
  },
  stepScreenScreen: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 25,
    marginBottom: 30
  },
  stepScreenHeader: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT + APPBAR_HEIGHT,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  stepScreenHeaderTitleContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  stepScreenHeaderTitle: {
    paddingTop: 10,
    paddingBottom: 30,
    fontFamily: "Helvetica",
    fontSize: normalize(18),
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
    alignSelf: "flex-end"
  },
  stepScreenContent: {
    marginTop: 20,
    marginBottom: 30
  },
  stepScreenText: {
    color: "#000000",
    fontSize: normalize(12),
    textAlign: "center"
  },
  stepScreenSubtitle: {
    fontFamily: "Helvetica",
    fontSize: normalize(20),
    fontWeight: "200",
    color: deepBlue,
    textAlign: "left",
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  stepScreenTitle: {
    fontFamily: "Helvetica",
    fontSize: normalize(28),
    fontWeight: "bold",
    color: deepBlue,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  stepScreenImage: {
    flex: 1
  },
  stepScreenDescription: {
    flex: 1,
    paddingBottom: 300
  },
  stepScreenScrollView: {
    flex: 1,
    paddingHorizontal: 20
  },
  stepScreenBackButton: {
    position: "absolute",
    top: 35,
    left: 15
  }
});
