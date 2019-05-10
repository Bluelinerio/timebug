//@flow
import React    from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SvgIcon  from './SvgIcon'
import routes   from '../navigation/routes'

type TabBarIconProps = {
  routeName: string,
  focused: boolean,
  tintColor: string,
}

const mapRouteToIcon = routeName => {
  switch (routeName) {
  case routes.tab.RootNavigator:
    return `ios-book`
  case routes.tab.MeditationScreen:
    return `ios-options`
  case routes.tab.ToolFlow:
    return `ios-construct`
  case routes.tab.CheckinScreen:
    return `ios-compass`
  case routes.tab.GoalsNavigator:
    return `ios-checkmark`
  case routes.tab.DashboardScreen:
    return `ios-home`
  default:
    return
  }
}

const TabBarIcon = ({ routeName, focused, tintColor }: TabBarIconProps) => {
  const iconName = mapRouteToIcon(routeName, focused)
  if (routeName === routes.tab.RootNavigator) {
    return <SvgIcon name={'Book'} fill={tintColor} width={25} height={25} />
  }
  return (
    <Ionicons
      name={iconName}
      size={routeName === routes.tab.GoalScreen ? 32 : 25}
      color={tintColor}
    />
  )
}

export default TabBarIcon
