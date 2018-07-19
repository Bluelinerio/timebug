import { Platform, StyleSheet, StatusBar } from 'react-native'
import { colors as topColors } from '../../../constants/colors'
import {
  iOSColors,
  human,
  iOSUIKit,
  systemWeights
} from 'react-native-typography'

if (!iOSColors || !human || !iOSUIKit || !systemWeights) {
  throw 'missing react-native-typography'
}

export const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: 'white',
  subtitleColor: 'rgba(255, 255, 255, 0.8)',
  titleColor: 'rgba(255, 255, 255, 1)',
  rowSubtitleColor: 'rgba(26, 25, 23, 0.8)',
  rowTitleColor: 'rgba(26, 25, 23, 1)',
  white: '#fff',
  borderColor: '#ddd',
  startGradientColor: 'white',
  endGradientColor: '#f8f8f8',
  ...topColors
}

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background1
  },
  innerScreenContainer: {
    backgroundColor: colors.background1,
    height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    opacity: 1
  },
  scrollview: {
    flex: 1
  },
  scrollviewContentContainer: {
    flex: 1
  },
  title: {
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: colors.titleColor,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle: {
    marginTop: 5,
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: colors.subtitleColor,
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  bannerContainer: {
    backgroundColor: colors.background1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: iOSColors.customGray
  },
  headerDate: {
    ...iOSUIKit.footnoteEmphasizedObject,
    color: iOSColors.gray
  },
  bannerHeaderTitle: iOSUIKit.largeTitleEmphasizedObject,
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background1,
    padding: 10
  },
  bannerImage: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    tintColor: colors.black,
    margin: 8
  },
  bannerTitle: {
    paddingHorizontal: 10,
    color: colors.black,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: 'transparent'
  },
  myJourneyContainer: {
    paddingTop: 7.5,
    paddingBottom: 2.5,
    paddingHorizontal: 5
  },
  myJourneyText: {
    color: '#00098A',
    fontSize: 14
  }
})
