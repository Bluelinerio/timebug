import { StyleSheet, Platform } from 'react-native'
import { minimumItemHeight }    from './CarouselStyles'
import {
  iOSColors,
  iOSUIKit,
  sanFranciscoWeights,
  robotoWeights
}                               from 'react-native-typography'

export default StyleSheet.create({
  entry: {
    borderRadius: 6,
    paddingVertical: 5,
    backgroundColor: '#FAFAFA',
    minHeight: minimumItemHeight,
    ...Platform.select({
      android: {
        elevation: 2,
        margin: 3
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
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 4,
    marginHorizontal: 16,
    borderBottomWidth: 0.5,
    borderColor: iOSColors.customGray
  },
  headerText: {
    textAlign: 'center',
    ...iOSUIKit.bodyEmphasizedObject,
    ...Platform.select({
      android: {
        ...robotoWeights.light
      },
      ios: {
        ...sanFranciscoWeights.light
      }
    })
  }
})
