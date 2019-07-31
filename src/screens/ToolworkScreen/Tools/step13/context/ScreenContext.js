// @flow
import React from 'react'

type State = {
  screen: string,
  openCategories: () => void,
  openGoalList: () => void,
  openGoalDetail: () => void,
  openForm: () => void,
}

type Props = {
  children: Array<React.Node>,
}

const screens = {
  CATEGORIES: 'CATEGORIES',
  GOAL_LIST: 'GOAL_LIST',
  GOAL_DETAIL: 'GOAL_DETAIL',
  FORM: 'FORM',
}

const initialState = {
  screen: screens.CATEGORIES,
  openCategories: () => null,
  openGoalList: () => null,
  openGoalDetail: () => null,
  openForm: () => null,
}

const { Provider, Consumer: ScreenConsumer } = React.createConsumer(
  initialState
)

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

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          openCategories: this.openCategories,
          openGoalDetail: this.openGoalDetails,
          openGoalList: this.openGoalList,
          openForm: this.openForm,
        }}
      >
        {...this.props.children}
      </Provider>
    )
  }
}

export { ScreenProvider, ScreenConsumer, screens }
