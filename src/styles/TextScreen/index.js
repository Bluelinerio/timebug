import {Dimensions, Platform} from 'react-native';
import theme from 'react-native-theme';

theme.add({
  textScreenScreen: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 25
  },
  textScreenHeader: {
    top: 80,
    height: 252,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    // backgroundColor: '#6EBDDC',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    // opacity: 0.9
  },
  textScreenHeaderTitleContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textScreenHeaderTitle: {
    color: 'white',
    paddingTop: 10,
    paddingBottom: 30,
    fontSize: 16,
    alignSelf: 'flex-end'
  },
  textScreenContent: {
    marginTop: 2,
  },
  textScreenText: {
    color: '#000000',
    fontSize: 12,
    textAlign: 'center',
  },
  textScreenSubtitle: {
    color: '#797979',
    textAlign: 'left',
    paddingHorizontal: 35,
    paddingVertical: 20,
    fontSize: 20,
  },
  textScreenTitle: {
    color: '#103682',
    fontSize: 25,
    paddingBottom: 20,
    // fontWeight: 'bold',
    alignSelf: 'flex-end',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    textAlign: 'left'
  },
  textScreenImage: {
    flex: 1,
    alignSelf: 'flex-start',
    // justifyContent: 'center',
    width: 135,
    height: 135,
    bottom: 20
  },
  textScreenDescription: {
    flex: 1,
    paddingBottom: 300
  },
  textScreenScrollView: {
    flex: 1,
    paddingHorizontal: 20
  },
  textScreenBackButton: {
    position: 'absolute',
    top: 30,
    left: 10
  }
});
