// Keep this file just the way it is. Moving this inside the index or app file will create recusions/re-entries o import. It should be line a const file.
export default {
  root: {
    HomeScreen: 'HomeScreen',
    AssignmentFlow: 'AssignmentFlow',
    StartScreen: 'StartScreen',
    DashboardScreen: 'DashboardScreen',
    initialRouteName: 'StartScreen',
    MarkdownScreen: 'MarkdownScreen',
    EmojiPickerScreen: 'EmojiPickerScreen',
    // TODO: Prototype Data to remove
  },
  step: {
    StepScreen: 'StepScreen',
    WorkbookScreen: 'WorkbookScreen',
    WorkbookDoneScreen: 'WorkbookDoneScreen'
  },
  tab: {
    initialRouteName: 'RootNavigator',
    MyJourneyScreen: 'MyJourneyScreen',
    MeditationScreen: 'MeditationScreen',
    RootNavigator: 'RootNavigator',
    CheckinScreen: 'CheckinScreen',
    GoalsNavigator: 'GoalsNavigator'
  },
  version: {
    initialRouteName: 'AppVersion',
    TabNavigator: 'TabNavigator',
    AppVersion: 'AppVersion',
    PrototypeNavigator: 'PrototypeNavigator'
  },
  start: {
    initialRouteName: 'VersionNavigator',
    Walkthrough: 'Walkthrough',
    VersionNavigator: 'VersionNavigator'
  },
  // start: {
  //   initialRouteName: 'TabNavigator',
  //   Walkthrough: 'Walkthrough',
  //   TabNavigator: 'TabNavigator'
  // },
  goals: {
    initialRouteName: 'GoalScreen',
    GoalScreen: 'GoalScreen',
    GoalStepScreen: 'GoalStepScreen'
  }
}

export const protoRoutes = {
  proto: {
    PrototypeScreen: 'PrototypeScreen',
    initialRouteName: 'PrototypeScreen',
    GoalFormScreen: 'GoalFormScreen',
    GoalProtoScreen: 'GoalProtoScreen',
    V2Navigator: 'V2Navigator'
  },
  v2: {
    V2_StepScreen: 'V2_StepScreen',
    V2_WorkbookScreen: 'V2_WorkbookScreen',
    initialRouteName: 'V2_StepScreen'
  }
}
