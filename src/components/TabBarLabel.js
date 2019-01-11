import React    from 'react'
import { Text } from 'react-native'
import routes   from '../navigation/routes'
import styles   from '../styles/components/TabBar'

type TabBarLabelProps = {
  routeName: string,
  tintColor: string,
}

const mapRouteToName = routeName => {
  switch (routeName) {
  case routes.tab.RootNavigator:
    return 'Home'
  case routes.tab.MeditationScreen:
    return 'Meditation'
  case routes.tab.MyJourneyScreen:
    return 'Journey'
  case routes.tab.CheckinScreen:
    return 'Checkins'
  case routes.tab.GoalsNavigator:
    return 'Goals'
  case routes.tab.ToolFlow:
    return 'Tools'
  default:
    return ''
  }
}

const TabBarLabel = ({ routeName, tintColor }: TabBarLabelProps) => {
  return (
    <Text style={[styles.tabBarLabel, { color: tintColor }]}>
      {mapRouteToName(routeName)}
    </Text>
  )
}

export default TabBarLabel
