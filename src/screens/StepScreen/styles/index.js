import {
  Platform,
  StyleSheet,
  Dimensions,
} from "react-native";
import { darkishBlue }       from '../../../constants/colors'
import { STATUSBAR_HEIGHT, APPBAR_HEIGHT} from '../../../constants'

export default StyleSheet.create({
  stepScreenScreen: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 25,
    marginBottom: 30
  },
  stepScreenHeader: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT + APPBAR_HEIGHT,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  stepScreenHeaderTitleContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stepScreenHeaderTitle: {
    paddingTop: 10,
    paddingBottom: 30,
    fontFamily: "Helvetica",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
    alignSelf: 'flex-end',
  },
  stepScreenContent: {
    marginTop: 2,
    marginBottom: 30
  },
  stepScreenText: {
    color: '#000000',
    fontSize: 12,
    textAlign: 'center',
  },
  stepScreenSubtitle: {
    fontFamily: "Helvetica",
    fontSize: 24,
    fontWeight: "300",
    color: "#4a4a4a",
    textAlign: 'left',
    paddingHorizontal: 35,
    paddingVertical: 20,
  },
  stepScreenTitle: {
    flex:3,
    fontFamily: "Helvetica",
    fontSize: 32,
    color: darkishBlue,
  },
  stepScreenImage: {
    flex: 1,
  },
  stepScreenDescription: {
    flex: 1,
    paddingBottom: 300,
  },
  stepScreenScrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  stepScreenBackButton: {
    position: 'absolute',
    top: 35,
    left: 15,
  },
});