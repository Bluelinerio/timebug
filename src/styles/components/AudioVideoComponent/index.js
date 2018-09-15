import { StyleSheet }                 from 'react-native'
import { gray900, white2, heavyGray } from '../../../constants/colors'

const mainColor = gray900

export const iconSize = 32
const barMaxHeight = 50

export default StyleSheet.create({
  audioVideoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8
  },
  controlBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12,
    paddingHorizontal: 8,
    maxHeight: barMaxHeight,
    backgroundColor: white2,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: mainColor
  },
  playButton: {
    flex: 1,
    borderColor: mainColor,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  icon: {
    color: heavyGray
  },
  seekBarParent: {
    flex: 6,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  seekBarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    flexDirection: 'row'
  },
  sliderContainer: {
    flex: 4,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 8
  },
  textContainer: {
    flex: 1
  },
  text: {
    color: mainColor,
    fontSize: 10
  }
})
