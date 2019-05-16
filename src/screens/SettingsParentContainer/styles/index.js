import { StyleSheet }                  from 'react-native'
import { paleBlue, darkBlue, gray100 } from '2020_constants/colors'
import {
  widthPercentage,
  heightPercentage,
}                                      from '2020_utils/viewportCalculation'
import { iOSUIKit }                    from 'react-native-typography'

const navBarHeight = heightPercentage(10)
const tabBarHeight = heightPercentage(10)

const iconWidth = widthPercentage(15)

export const iconSize = 25

export const iconColor = darkBlue

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
  },
  background: {
    backgroundColor: gray100,
  },
  navigationBar: {
    backgroundColor: paleBlue,
    height: navBarHeight,
    flexDirection: 'row',
  },
  padded: {
    padding: 12,
  },
  title: {
    ...iOSUIKit.title3EmphasizedObject,
    color: darkBlue,
    marginLeft: 25,
  },
  tabBar: {
    backgroundColor: paleBlue,
    height: tabBarHeight,
    flexDirection: 'row',
  },
  iconContainer: {
    width: iconWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  tabBarElement: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarText: {
    ...iOSUIKit.bodyObject,
    color: darkBlue,
  },
  selected: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: darkBlue,
  },
})
