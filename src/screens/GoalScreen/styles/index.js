import { StyleSheet, Platform } from 'react-native';
import {
  gray900,
  gray50,
  gray200,
  gray400,
  azure,
} from '../../../constants/colors';
import { iOSUIKit } from 'react-native-typography';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  handlerContainer: {
    marginTop: 12,
    marginHorizontal: 16,
  },
  hidden: {
    height: 0,
    width: 0,
    padding: 0,
    backgroundColor: 'transparent',
  },
  hiddenView: {
    backgroundColor: gray200,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  goalListContainer: {
    flex: 1,
  },
  goalListHeader: {
    flex: 1,
    backgroundColor: gray200,
    marginHorizontal: -16,
    marginTop: -12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalListTitle: {
    ...iOSUIKit.title3EmphasizedObject,
  },
  goalListTooltip: {
    ...iOSUIKit.footnoteObject,
  },
  justifiedText: {
    ...Platform.select({
      android: {
        textAlign: 'center',
      },
      ios: {
        textAlign: 'justify',
      },
    }),
  },
  leftText: {
    textAlign: 'left',
  },
  goalFullContainer: {
    marginVertical: 16,
  },
  screenLockedContainer: {
    flexDirection: 'column',
    marginTop: 50,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: gray900,
    fontFamily: 'Metropolis',
  },
  lockedTitle: {
    ...iOSUIKit.bodyObject,
  },
  button: {
    backgroundColor: azure,
    borderRadius: 6,
    marginVertical: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flex: 1,
    ...Platform.select({
      android: {
        elevation: 6,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
      },
    }),
  },
  buttonText: {
    ...iOSUIKit.calloutObject,
    color: gray50,
  },
  goalContainer: {
    backgroundColor: gray50,
    borderRadius: 6,
    marginVertical: 0.1,
    paddingHorizontal: 8,
    flexDirection: 'row',
    flex: 1,
    ...Platform.select({
      android: {
        elevation: 6,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
      },
    }),
  },
  goalContainerMainArea: {
    flex: 4,
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  goalContainerSecondaryArea: {
    flex: 1,
    flexDirection: 'row',
    borderColor: gray400,
    paddingHorizontal: 4,
    borderLeftWidth: 0.5,
  },
  goalContainerPercentageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalContainerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rotateIcon: {
    transform: [{ rotate: '90deg' }],
  },
  goalTitle: {
    ...iOSUIKit.subheadObject,
  },
  goalType: {
    ...iOSUIKit.caption2Object,
  },
  percentageText: {
    ...iOSUIKit.caption2Object,
    fontSize: 9,
  },
  stepTitleContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepTitle: {
    ...iOSUIKit.footnoteObject,
  },
  stepSwitchContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalStepContainer: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    flexDirection: 'row',
    backgroundColor: gray50,
    marginBottom: 2,
  },
});
