import { StyleSheet, Dimensions } from 'react-native';

const CicleWidth = 32

export default StyleSheet.create({
  assignmentLeadInScreenSlideContainer: {
    flex: 1,
    justifyContent:'space-between',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  assignmentLeadInScreenSlideText : {
    flex: 1,
    justifyContent:'center',
  },
  assignmentLeadInScreenNumberContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: CicleWidth,
    height: CicleWidth,
    borderRadius: CicleWidth,
    marginRight: 10,
    marginVertical: 10,
  },
  assignmentLeadInScreenNumberText: {
    fontFamily: 'Helvetica',
    fontSize: Math.ceil(CicleWidth * 0.55),
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent'
  }
});
