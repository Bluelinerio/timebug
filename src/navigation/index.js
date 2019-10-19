/* eslint-disable react/display-name */
/* eslint-disable react/display-name */

// @flow
import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation'
import {
  tabBarBackground,
  tabBarButtonColor,
  tabBarUnselected,
} from '../constants/colors'
import TabBarIcon from '../components/TabBarIcon'
import TabBarLabel from '../components/TabBarLabel'
import HomeScreen from '../screens/HomeScreen'
import StepScreen from '../screens/StepScreen'
import WorkbookDoneScreen from '../screens/WorkbookDoneScreen'
import WorkbookScreen from '../screens/WorkbookScreen'
import WalkthroughScreen from '../screens/WalkthroughScreen'
import DashboardScreen from '../screens/DashboardScreen'
import SettingsTabScreen from '../screens/SettingsParentContainer'
import MarkdownScreen from '../screens/MarkdownScreen'
import EmojiPickerScreen from '../screens/EmojiPickerScreen'
import ToolScreen from '../screens/MyJourneyScreen'
import ToolworkScreen from '../screens/ToolworkScreen'
import StartScreen from '../screens/StartScreen'
import GoalScreen from '../screens/GoalScreen'
import GoalStepScreen from '../screens/GoalStepScreen'
import AppVersionScreen from '../screens/AppVersionSelectionScreen'
import V2WorkbookScreen from '../screens/v.2.0/WorkbookScreen'
import HelpScreen from '../screens/HelpScreen'
import LoginScreen from '../screens/LoginScreen'

import routes from './routes'

if (!routes || !routes.root || !routes.root.initialRouteName || !routes.step) {
  throw 'missing routes or nested fields ' + JSON.stringify(routes)
}

// TODO: there's an issue with moving from the current setup where the import of each screen gets you an object that looks like { screen: } rather than a component, so I added
export const assignmentFlowConfiguration = {
  routes: routes.step,
  screens: {
    [routes.step.StepScreen]: {
      screen: StepScreen.screen,
    },
    [routes.step.WorkbookScreen]: {
      screen: WorkbookScreen.screen,
      path: 'workbook/:number',
    },
    [routes.step.WorkbookDoneScreen]: {
      screen: WorkbookDoneScreen.screen,
      path: 'finished/:number',
    },
  },
  options: {
    headerMode: 'screen',
    cardStyle: {
      backgroundColor: 'white',
      opacity: 1,
    },
  },
}

const AssignmentFlowNavigator = createStackNavigator(
  assignmentFlowConfiguration.screens,
  assignmentFlowConfiguration.options
)

export const rootConfiguration = {
  routes: routes.root,
  screens: {
    [routes.root.HomeScreen]: {
      screen: HomeScreen,
    },
    [routes.root.AssignmentFlow]: {
      screen: AssignmentFlowNavigator,
      path: 'step',
    },
    [routes.root.MarkdownScreen]: {
      screen: MarkdownScreen,
    },
    [routes.root.EmojiPickerScreen]: {
      screen: EmojiPickerScreen,
    },
    [routes.root.StartScreen]: {
      screen: StartScreen,
    },
    [routes.root.WorkbookScreen]: {
      screen: V2WorkbookScreen,
    },
  },
  options: {
    initialRouteName: routes.root.initialRouteName,
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'white',
      opacity: 1,
    },
  },
}

export const RootNavigator = createStackNavigator(
  rootConfiguration.screens,
  rootConfiguration.options
)

export const goalsConfiguration = {
  routes: routes.goals,
  screens: {
    [routes.goals.GoalScreen]: {
      screen: GoalScreen,
    },
    [routes.goals.GoalStepScreen]: {
      screen: GoalStepScreen,
      path: 'goal',
    },
  },
  options: {
    initialRouteName: routes.goals.initialRouteName,
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    headerMode: 'screen',
    cardStyle: {
      backgroundColor: 'white',
      opacity: 1,
    },
  },
}

export const goalsNavigator = createStackNavigator(
  goalsConfiguration.screens,
  goalsConfiguration.options
)

const ToolScreenConfiguration: any = {
  routes: routes.proto,
  screens: {
    [routes.toolFlow.ToolScreen]: {
      screen: ToolScreen,
    },
    [routes.toolFlow.ToolworkScreen]: {
      screen: ToolworkScreen,
    },
  },
  options: {
    initialRouteName: routes.toolFlow.initialRouteName,
    headerMode: 'screen',
  },
}

const ToolFlow = createStackNavigator(
  ToolScreenConfiguration.screens,
  ToolScreenConfiguration.options
)

type NavigationOptionsElementProps = {
  focused: boolean,
  tintColor: string,
}

export const tabConfiguration = {
  routes: routes.tab,
  screens: {
    [routes.tab.DashboardScreen]: {
      screen: DashboardScreen,
    },
    [routes.tab.RootNavigator]: {
      screen: RootNavigator,
    },
    [routes.tab.ToolFlow]: {
      screen: ToolFlow,
    },
    [routes.tab.GoalsNavigator]: {
      screen: goalsNavigator,
    },
  },
  options: {
    initialRouteName: routes.tab.initialRouteName,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    optimizationsEnabled: true,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }: NavigationOptionsElementProps) => {
        const { routeName } = navigation.state
        return (
          <TabBarIcon
            routeName={routeName}
            focused={focused}
            tintColor={tintColor}
          />
        )
      },
      tabBarLabel: ({ tintColor }: NavigationOptionsElementProps) => {
        const { routeName } = navigation.state
        return <TabBarLabel routeName={routeName} tintColor={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: tabBarButtonColor,
      inactiveTintColor: tabBarUnselected,
      style: {
        backgroundColor: tabBarBackground,
      },
      showIcon: true,
      renderIndicator: () => null,
    },
  },
}

export const RootTabNavigator = createMaterialTopTabNavigator(
  tabConfiguration.screens,
  tabConfiguration.options
)

export const versionConfiguration = {
  routes: routes.version,
  screens: {
    [routes.version.AppVersion]: {
      screen: AppVersionScreen,
    },
    [routes.version.TabNavigator]: {
      screen: RootTabNavigator,
    },
  },
  options: {
    initialRouteName: routes.version.initialRouteName,
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'white',
      opacity: 1,
    },
  },
}

export const VersionNavigator = createStackNavigator(
  versionConfiguration.screens,
  versionConfiguration.options
)

export const startConfiguration = {
  routes: routes.start,
  screens: {
    [routes.start.TabNavigator]: {
      screen: RootTabNavigator,
    },
    [routes.start.HelpScreen]: {
      screen: HelpScreen,
    },
    [routes.start.Walkthrough]: {
      screen: WalkthroughScreen,
    },
    [routes.start.LoginScreen]: {
      screen: LoginScreen,
    },
    [routes.start.SettingsScreen]: {
      screen: SettingsTabScreen,
    },
  },
  options: {
    initialRouteName: routes.start.initialRouteName,
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'white',
      opacity: 1,
    },
  },
}

export const StartNavigator = createAppContainer(createStackNavigator(
  startConfiguration.screens,
  startConfiguration.options
))