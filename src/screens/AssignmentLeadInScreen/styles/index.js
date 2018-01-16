import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  assignmentLeadInScreenContainer: {
    flexGrow: 1,
    alignItems: 'center',
    marginBottom: 30
  },
  assignmentLeadInScreenSlide: {
    flex: 1,
    justifyContent:'flex-start',
    marginTop: Dimensions.get('window').height * 0.4,
    paddingHorizontal: 20
  },
  assignmentLeadInScreenNumber: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 52,
    height: 52,
    borderRadius: 100,
    marginRight: 21
  },
  assignmentLeadInScreenNumberText: {
    fontFamily: "Helvetica",
    fontSize: 24,
    textAlign: "center",
    color: "#ffffff"
  }
});
