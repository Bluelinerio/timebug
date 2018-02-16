// Keep this file just the way it is. Moving this inside the index or app file will create recusions/re-entries o import. It should be line a const file.
export default {
  root: {
    HomeScreen: 'HomeScreen',
    AssignmentFlow: 'AssignmentFlow',
    Walkthrough: 'Walkthrough',
    Dashboard: 'Dashboard',
    initialRouteName:'HomeScreen',
  },
  step: {
    StepScreen: 'StepScreen',
    AssignmentLeadInScreen: 'AssignmentLeadInScreen',
    WorkbookScreen: 'WorkbookScreen',
    WorkbookDoneScreen: 'WorkbookDoneScreen',
  }
};
