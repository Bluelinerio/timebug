import React from 'react'
import { screens } from '../../context/ScreenContext'
import { ProvidedProps } from '../../context/ScreenContext'
import CategoryList from '../containers/CategoryListContainer_H'
import GoalList from '../../GoalList'

class ToolContent extends React.PureComponent<ProvidedProps> {
  render() {
    const { screen } = this.props
    switch (screen) {
      case screens.CATEGORIES:
        return <CategoryList />
      case screens.GOAL_LIST:
        return <GoalList />
      case screens.GOAL_DETAIL:
      case screens.FORM:
      default:
        return null
    }
  }
}

export default ToolContent
