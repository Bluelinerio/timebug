import { StyleSheet, Platform }   from 'react-native'
import { gray900, gray50, azure } from '../../../constants/colors'
import { iOSUIKit }               from 'react-native-typography'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  screenLockedContainer: {
    flexDirection: 'column',
    marginTop: 50,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    color: gray900,
    fontFamily: 'Metropolis'
  },
  lockedTitle: {
    ...iOSUIKit.bodyObject
  },
  button: {
    backgroundColor: azure,
    borderRadius: 6,
    marginVertical: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flex: 1,
    ...Platform.select({
      android: {
        elevation: 6
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 10
        },
        shadowOpacity: 0.2,
        shadowRadius: 10
      }
    })
  },
  buttonText: {
    ...iOSUIKit.calloutObject,
    color: gray50
  }
})
