import { StyleSheet, Platform } from 'react-native';
import { lightBlue } from '../../../constants/colors';
import {
  human,
  systemWeights,
  iOSColors,
  iOSUIKit,
  material,
  sanFranciscoWeights,
  robotoWeights
} from 'react-native-typography';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  timerContainer: {
    flex: 0,
    flexDirection: 'row'
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 100
  },
  text: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold'
  },
  absoluteContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 30
  },
  currentStep: {
    fontFamily: 'Helvetica',
    fontSize: 40,
    fontWeight: 'bold'
  },
  buttonImage: {
    width: 11.5,
    height: 11.5,
    marginRight: 5,
    marginTop: 2
  },
  durationText: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'flex-end'
  },
  textColor: {
    color: lightBlue
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject
  },
  suggestionText: {
    ...human.headlineWhiteObject,
    ...systemWeights.light,
    margin: 8
  },
  bold: {
    ...systemWeights.bold
  },
  bigSuggestion: {
    flex: 2,
    aspectRatio: 1
  },
  bigSuggestionWithText: {
    flex: 2,
    borderRadius: 6
  },
  smallSuggestionMarginTop: {
    marginTop: 4
  },
  smallSuggestionMarginLeft: {
    marginLeft: 4
  },
  smallSuggestion: {
    flex: 1,
    aspectRatio: 1
  },
  strong: {
    ...Platform.select({
      android: {
        ...robotoWeights.bold
      },
      ios: {
        ...sanFranciscoWeights.black
      }
    })
  },
  emogi: {
    ...Platform.select({
      android: {
        ...material.display3Object
      },
      ios: {
        ...material.display3Object
        //...human.largeTitleObject,
      }
    }),
    textAlign: 'center'
  },
  title: iOSUIKit.largeTitleEmphasizedObject,
  messageText: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center'
  }
});
