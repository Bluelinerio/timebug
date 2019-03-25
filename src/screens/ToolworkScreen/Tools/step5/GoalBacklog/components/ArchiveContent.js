import React               from 'react'
import CompletedGoalsList  from '../containers/CompletedGoalsListContainer'
import BackloggedGoalsList from '../containers/BackloggedGoalsListContainer'
import { SECTIONS }        from '../constants'

type Props = {
  selectedSection: string,
  goals: any,
}

class ArchiveContent extends React.PureComponent<Props> {
  render() {
    const { selectedSection, goals } = this.props
    return (
      <React.Fragment>
        {selectedSection === SECTIONS.COMPLETED ? (
          <CompletedGoalsList goals={goals} />
        ) : (
          <BackloggedGoalsList goals={goals} />
        )}
      </React.Fragment>
    )
  }
}

export default ArchiveContent
