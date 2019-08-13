import React from 'react'
import { screens } from '../../context/ScreenContext'
import { ProvidedProps } from '../../context/ScreenContext'
import CategoryList from '../containers/CategoryListContainer_H'
import GoalRecommendations from '../../GoalRecomendations'
import GoalList from '../../GoalList'
import GoalDetails from '../../GoalDetails'
import Form from '../../Form'
import GoalBacklog from '../../GoalBacklog'

class ToolContent extends React.PureComponent<ProvidedProps> {
  render() {
    const { screen } = this.props
    switch (screen) {
      case screens.CATEGORIES:
        return <CategoryList />
      case screens.GOAL_LIST:
        return <GoalList />
      case screens.GOAL_RECOMMENDATIONS:
        return <GoalRecommendations />
      case screens.FORM:
        return <Form />
      case screens.GOAL_DETAIL:
        return <GoalDetails />
      case screens.BACKLOG:
      case screens.DELETED_BACKLOG:
        return <GoalBacklog />
      default:
        return null
    }
  }
}

export default ToolContent
