// @flow
import React from 'react'

type State = {
  screen: string,
  openCategories: () => void,
  openGoalList: () => void,
  openGoalDetail: () => void,
  openGoalRecommendations: () => void,
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
}

const initialState = {
  screen: screens.CATEGORIES,
  openCategories: () => null,
  openGoalList: () => null,
  openGoalDetail: () => null,
  openGoalRecommendations: () => null,
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
        }}
      >
        {this.props.children}
      </ScreenContext.Provider>
    )
  }
}

export { ScreenProvider, ScreenContext, screens }
