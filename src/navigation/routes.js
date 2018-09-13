// Keep this file just the way it is. Moving this inside the index or app file will create recusions/re-entries o import. It should be line a const file.
export default {
  root: {
    HomeScreen: 'HomeScreen',
    AssignmentFlow: 'AssignmentFlow',
    StartScreen: 'StartScreen',
    DashboardScreen: 'DashboardScreen',
    initialRouteName: 'StartScreen',
    MarkdownScreen: 'MarkdownScreen',
    EmojiPickerScreen: 'EmojiPickerScreen'
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
    RootNavigator: 'RootNavigator'
  },
  start: {
    initialRouteName: 'TabNavigator',
    Walkthrough: 'Walkthrough',
    TabNavigator: 'TabNavigator'
  }
}
