import { StyleSheet, Platform }    from 'react-native'
import {
  azure,
  gray50,
  gray400,
  white2,
  gray900,
}                                  from '../../../constants/colors'
import { systemWeights, iOSUIKit } from 'react-native-typography'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  padded: {
    padding: 16,
  },
  checkinContainer: {
    flex: 1,
    backgroundColor: gray50,
    marginVertical: 10,
    borderRadius: 6,
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
  },
  checkinTopContainer: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: azure,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  titleContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressableTitleWrapper: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  switch: {
    maxHeight: 30,
    alignSelf: 'flex-end',
  },
  title: {
    ...iOSUIKit.subheadEmphasizedObject,
    ...systemWeights.bold,
    color: white2,
    fontFamily: 'Metropolis',
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonContainer: {
    alignItems: 'flex-end',
  },
  dateContainer: {
    flex: 1,
    alignContent: 'flex-end',
  },
  date: {
    ...iOSUIKit.footnoteObject,
    fontFamily: 'Metropolis',
    color: white2,
    textAlign: 'right',
  },
  changedDate: {
    ...iOSUIKit.footnoteObject,
    color: 'green',
  },
  textContainer: {
    flex: 1,
    padding: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: gray900,
  },
  text: {
    ...iOSUIKit.footnoteObject,
    ...systemWeights.regular,
    textAlign: 'justify',
    fontFamily: 'Metropolis',
  },
  lowerRowContainer: {
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
  },
  pickerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPicker: {
    padding: 4,
  },
  modalText: {
    ...iOSUIKit.footnoteObject,
    ...systemWeights.light,
    fontFamily: 'Metropolis',
  },
  picker: {
    width: 100,
    height: 40,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 8,
  },
  buttonText: {
    ...iOSUIKit.footnoteObject,
    ...systemWeights.light,
    textDecorationLine: 'underline',
    fontFamily: 'Metropolis',
  },
  saveText: {
    color: azure,
  },
  saveTextDisabled: {
    color: gray400,
  },
  noCheckinContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  noCheckinText: {
    textAlign: 'center',
  },
  notice: {
    ...iOSUIKit.caption2EmphasizedObject,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Metropolis',
    fontWeight: '700',
  },
  screenLockedContainer: {
    flexDirection: 'column',
    marginTop: 26,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
