//@flow
import React    from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import routes   from '../navigation/routes'

type TabBarIconProps = {
  routeName: string,
  focused: boolean,
  tintColor: string
}

const mapRouteToIcon = (routeName, focused) => {
  switch (routeName) {
  case routes.tab.RootNavigator:
    return `ios-pin${focused ? '' : '-outline'}`
  case routes.tab.MeditationScreen:
    return `ios-options${focused ? '' : '-outline'}`
  case routes.tab.MyJourneyScreen:
    return `ios-construct${focused ? '' : '-outline'}`
  case routes.tab.CheckinScreen:
    return `ios-compass${focused ? '' : '-outline'}`
  default:
    return
  }
}

const TabBarIcon = ({ routeName, focused, tintColor }: TabBarIconProps) => {
  const iconName = mapRouteToIcon(routeName, focused)
  return <Ionicons name={iconName} size={25} color={tintColor} />
}

export default TabBarIcon
