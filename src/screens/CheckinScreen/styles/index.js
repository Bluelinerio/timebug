import { StyleSheet } from 'react-native'
import { deepBlue, cyan, gray400 } from '../../../constants/colors'
import {
  sanFranciscoWeights,
  robotoWeights,
  iOSUIKit
} from 'react-native-typography'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  scroll: {
    padding: 16
  },
  checkinContainer: {
    flex: 1,
    backgroundColor: cyan,
    marginVertical: 10,
    borderRadius: 6
  },
  checkinTopContainer: {
    flex: 2,
    flexDirection: 'row'
  },
  titleContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    ...iOSUIKit.title3EmphasizedObject,
    fontSize: 18,
    color: deepBlue,
    textDecorationLine: 'underline',
    fontFamily: 'Metropolis',
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  date: {
    ...iOSUIKit.caption2Object,
    fontFamily: 'Metropolis',
  },
  changedDate: {
    ...iOSUIKit.caption2Object,
    color: 'green'
  },
  textContainer: {
    flex: 1,
    marginVertical: 12,
    paddingHorizontal: 12
  },
  text: {
    ...iOSUIKit.footnoteObject,      
    textAlign: 'justify',
    fontFamily: 'Metropolis',
  },
  lowerRowContainer: {
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row'
  },
  pickerContainer: {
    flex: 2
  },
  picker: {
    width: 150,
    height: 30
  },
  button: {
    borderRadius: 10,
    paddingVertical: 8
  },
  save: {
    backgroundColor: deepBlue
  },
  saveDisabled: {
    backgroundColor: gray400
  },
  saveText: {
    ...iOSUIKit.calloutObject,    
    color: deepBlue,
    textDecorationLine: 'underline',
    fontFamily: 'Metropolis',
  },
  saveTextDisabled: {
    ...iOSUIKit.calloutObject,      
    color: gray400,
    textDecorationLine: 'underline',
    fontFamily: 'Metropolis',
  }
})
