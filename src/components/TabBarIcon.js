//@flow
import React    from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import routes   from '../navigation/routes'

type TabBarIconProps = {
  routeName: string,
  focused: boolean,
  tintColor: string,
}

const mapRouteToIcon = routeName => {
  switch (routeName) {
  case routes.tab.RootNavigator:
    return `ios-pin`
  case routes.tab.MeditationScreen:
    return `ios-options`
  case routes.tab.ToolFlow:
    return `ios-construct`
  case routes.tab.CheckinScreen:
    return `ios-compass`
  case routes.tab.GoalsNavigator:
    return `ios-checkmark`
  case routes.tab.DashboardScreen:
    return `ios-book`
  default:
    return
  }
}

const TabBarIcon = ({ routeName, focused, tintColor }: TabBarIconProps) => {
  const iconName = mapRouteToIcon(routeName, focused)
  return (
    <Ionicons
      name={iconName}
      size={routeName === routes.tab.GoalScreen ? 32 : 25}
      color={tintColor}
    />
  )
}

export default TabBarIcon
