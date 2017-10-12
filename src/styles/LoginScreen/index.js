import { Dimensions, Platform } from 'react-native';
import theme from 'react-native-theme';

theme.add({
  loginScreenScreen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 999
  },
  loginScreenTitle: {
    paddingTop: 39,
    fontFamily: "HelveticaNeue",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000a8b",
    backgroundColor: 'transparent'
  },
  loginScreenBackgroundImage: {
    flex: 1,
    position: 'absolute',
    zIndex: 1,
    resizeMode: Platform.OS === 'ios' ? 'repeat' : 'cover',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  loginScreenWideButton: {
    width: 240,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45.5,
    bottom: 36.5,
    minWidth: 150,
    paddingHorizontal: 45,
    borderRadius: 50,
    backgroundColor: "#fcfcfc",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#003681"
  },
  loginScreenWideButtonText: {
    fontFamily: "Helvetica",
    fontSize: 15.5,
    fontWeight: "bold",
    textAlign: "center",
    color: "#003681"
  },
});
