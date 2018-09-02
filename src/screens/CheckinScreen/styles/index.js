import { StyleSheet } from 'react-native'
import { white2, deepBlue, cyan, gray400 } from '../../../constants/colors'

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
    padding: 12,
    borderRadius: 6
  },
  checkinTopContainer: {
    flex: 2,
    flexDirection: 'row'
  },
  titleContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: deepBlue
  },
  title: {
    fontSize: 16,
    color: white2
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  date: {
    fontSize: 12
  },
  changedDate: {
    color: 'green'
  },
  textContainer: {
    flex: 1,
    marginVertical: 12
  },
  text: {
    textAlign: 'justify'
  },
  lowerRowContainer: {
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
    color: white2
  }
})
