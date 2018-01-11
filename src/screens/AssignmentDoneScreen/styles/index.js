import { StyleSheet } from 'react-native'
import { lightBlue } from '../../../constants/colors';

export default StyleSheet.create({
  assignmentDoneScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  assignmentDoneScreenTimerContainer: {
    flex: 0,
    flexDirection: 'row',
  },
  assignmentDoneScreenMessageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 100,
  },
  assignmentDoneScreenText: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold',
  },
  assignmentDoneScreenAbsoluteContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 30
  },
  assignmentDoneScreenCurrentStep: {
    fontFamily: "Helvetica",
    fontSize: 40,
    fontWeight: "bold",
  },
  assignmentDoneScreenButtonImage: {
    width: 11.5,
    height: 11.5,
    marginRight: 5,
    marginTop: 2,
  },
  assignmentDoneScreenDurationText: {
    fontFamily: "Helvetica",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: 'flex-end',
  },
  assignmentDoneScreenTextColor: {
    color: lightBlue,
  },
  assignmentDoneScreenMessageText: {
    fontFamily: "Helvetica",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
  }
});
