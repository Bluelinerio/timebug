import React from 'react'
import GoalScreen from '../containers/GoalScreenContainer'
import ArchiveScreen from '../../GoalBacklog'

const SCREENS = {
  GOALS: 'GOALS',
  ARCHIVE: 'ARCHIVE',
}

class GoalToolsParentComponent extends React.PureComponent {
  state = { selectedScreen: SCREENS.GOALS }

  openGoalsScreen = () => {
    this.setState(() => ({ selectedScreen: SCREENS.GOALS }))
  }

  openArchiveScreen = () => {
    this.setState(() => ({ selectedScreen: SCREENS.ARCHIVE }))
  }

  render() {
    const { selectedScreen } = this.state
    return (
      <React.Fragment>
        {selectedScreen === SCREENS.GOALS ? (
          <GoalScreen
            {...this.props}
            openArchiveScreen={this.openArchiveScreen}
          />
        ) : selectedScreen === SCREENS.ARCHIVE ? (
          <ArchiveScreen
            {...this.props}
            openGoalsScreen={this.openGoalsScreen}
          />
        ) : null}
      </React.Fragment>
    )
  }
}

export default GoalToolsParentComponent
