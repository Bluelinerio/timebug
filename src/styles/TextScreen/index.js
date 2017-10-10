import { Dimensions, Platform } from 'react-native';
import theme                    from 'react-native-theme';

theme.add({
  textScreenScreen: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 25,
  },
  textScreenHeader: {
    top: 80,
    height: 252,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 28 : 0,
  },
  textScreenHeaderTitleContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textScreenHeaderTitle: {
    paddingTop: 10,
    paddingBottom: 30,
    fontFamily: "Helvetica",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
    alignSelf: 'flex-end',
  },
  textScreenContent: {
    marginTop: 2,
    marginBottom: 30
  },
  textScreenText: {
    color: '#000000',
    fontSize: 12,
    textAlign: 'center',
  },
  textScreenSubtitle: {
    fontFamily: "Helvetica",
    fontSize: 24,
    fontWeight: "300",
    color: "#4a4a4a",
    textAlign: 'left',
    paddingHorizontal: 35,
    paddingVertical: 20,
  },
  textScreenTitle: {
    fontFamily: "Helvetica",
    fontSize: 32,
    color: "#003681",
    alignSelf: 'flex-end',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    textAlign: 'left',
  },
  textScreenImage: {
    flex: 1,
    width: 175,
    height: 185,
    bottom: 20,
  },
  textScreenDescription: {
    flex: 1,
    paddingBottom: 300,
  },
  textScreenScrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  textScreenBackButton: {
    position: 'absolute',
    top: 35,
    left: 15,
  },
});
