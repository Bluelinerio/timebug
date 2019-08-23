// @flow
import React from 'react'

type State = {
  screen: string,
  openCategories: () => void,
  openGoalList: () => void,
  openGoalDetail: () => void,
  openGoalRecommendations: () => void,
  openBacklog: () => void,
  openDeletedBacklog: () => void,
  openBacklogGoalDetails: () => void,
  openDeletedBacklogGoalDetails: () => void,
  openForm: () => void,
}

export type ProvidedProps = State

type Props = {
  children: Array<React.Node>,
}

const screens = {
  CATEGORIES: 'CATEGORIES',
  GOAL_LIST: 'GOAL_LIST',
  GOAL_DETAIL: 'GOAL_DETAIL',
  GOAL_RECOMMENDATIONS: 'GOAL_RECOMMENDATIONS',
  FORM: 'FORM',
  BACKLOG: 'BACKLOG',
  DELETED_BACKLOG: 'DELETED_BACKLOG',
  BACKLOG_GOAL_DETAILS: 'BACKLOG_GOAL_DETAILS',
  DELETED_GOAL_BACKLOG_DETAILS: 'DELETED_GOAL_BACKLOG_DETAILS',
}

const initialState = {
  screen: screens.CATEGORIES,
  openCategories: () => null,
  openGoalList: () => null,
  openGoalDetail: () => null,
  openGoalRecommendations: () => null,
  openBacklog: () => null,
  openDeletedBacklog: () => null,
  openBacklogGoalDetails: () => null,
  openDeletedBacklogGoalDetails: () => null,
  openForm: () => null,
}

const ScreenContext = React.createContext(initialState)

class ScreenProvider extends React.PureComponent<Props, State> {
  state = {
    ...initialState,
  }

  openCategories = () => {
    this.setState({ screen: screens.CATEGORIES })
  }

  openGoalList = () => {
    this.setState({ screen: screens.GOAL_LIST })
  }

  openGoalDetails = () => {
    this.setState({ screen: screens.GOAL_DETAIL })
  }

  openForm = () => {
    this.setState({ screen: screens.FORM })
  }

  openGoalRecommendations = () => {
    this.setState({ screen: screens.GOAL_RECOMMENDATIONS })
  }

  openBacklog = () => {
    this.setState({ screen: screens.BACKLOG })
  }

  openDeletedBacklog = () => {
    this.setState({ screen: screens.DELETED_BACKLOG })
  }

  openBacklogGoalDetails = () => {
    this.setState({ screen: screens.BACKLOG_GOAL_DETAILS })
  }

  openDeletedBacklogGoalDetails = () => {
    this.setState({ screen: screens.DELETED_GOAL_BACKLOG_DETAILS })
  }

  render() {
    return (
      <ScreenContext.Provider
        value={{
          ...this.state,
          openCategories: this.openCategories,
          openGoalDetail: this.openGoalDetails,
          openGoalList: this.openGoalList,
          openForm: this.openForm,
          openGoalRecommendations: this.openGoalRecommendations,
          openBacklog: this.openBacklog,
          openDeletedBacklog: this.openDeletedBacklog,
          openBacklogGoalDetails: this.openBacklogGoalDetails,
          openDeletedBacklogGoalDetails: this.openDeletedBacklogGoalDetails,
        }}
      >
        {this.props.children}
      </ScreenContext.Provider>
    )
  }
}

export { ScreenProvider, ScreenContext, screens }
