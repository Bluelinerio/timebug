import { StyleSheet, Platform }    from 'react-native'
import {
  azure,
  gray50,
  gray400,
  white2,
  gray900
}                                  from '../../../constants/colors'
import { systemWeights, iOSUIKit } from 'react-native-typography'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  scroll: {
    flex: 1    
  },
  padded: {
    padding: 16
  },
  checkinContainer: {
    flex: 1,
    backgroundColor: gray50,
    marginVertical: 10,
    borderRadius: 6,
    ...Platform.select({
      android: {
        elevation: 2
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 2
      }
    })
  },
  checkinTopContainer: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: azure,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  titleContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    ...iOSUIKit.title3EmphasizedObject,
    ...systemWeights.bold,
    fontSize: 18,
    color: white2,
    textDecorationLine: 'underline',
    fontFamily: 'Metropolis'
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  date: {
    ...iOSUIKit.caption2Object,
    fontFamily: 'Metropolis',
    color: white2
  },
  changedDate: {
    ...iOSUIKit.caption2Object,
    color: 'green'
  },
  textContainer: {
    flex: 1,
    padding: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: gray900
  },
  text: {
    ...iOSUIKit.footnoteObject,
    ...systemWeights.regular,
    textAlign: 'justify',
    fontFamily: 'Metropolis'
  },
  lowerRowContainer: {
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row'
  },
  pickerContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  picker: {
    width: 150,
    height: 30
  },
  button: {
    borderRadius: 10,
    paddingVertical: 8
  },
  buttonText: {
    ...iOSUIKit.calloutObject,
    ...systemWeights.light,
    textDecorationLine: 'underline',
    fontFamily: 'Metropolis'
  },
  saveText: {
    color: azure
  },
  saveTextDisabled: {
    color: gray400
  },
  noCheckinContainer: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  noCheckinText: {
    textAlign: 'center'
  }
})
