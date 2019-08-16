// @flow
import React, { useEffect, useContext } from 'react'
import { withNavigation }               from 'react-navigation'
import { CategoryContext }              from '../../context/CategoryContext'
import { useGoals }                     from '../../hooks/GoalHooks'
import { GoalContext }                  from '../../context/GoalContext'
import { ScreenContext }                from '../../context/ScreenContext'

const NavigatorContainer = ({ navigation }) => {
  const { setCategory } = useContext(CategoryContext)
  const { setGoal } = useContext(GoalContext)
  const { openGoalDetail } = useContext(ScreenContext)
  const goals = useGoals()
  const payload = navigation.getParam('payload')
  const goalId = payload.goalId || null
  const category = payload.category || null

  useEffect(
    () => {
      if (category && goalId) {
        const goal = goals.find(g => g.id === goalId)
        if (goal) {
          setCategory(category)
          setGoal(goal)
          openGoalDetail()
        }
        navigation.setParams({ goalId: null })
        navigation.setParams({ category: null })
      }
    },
    [goalId, category]
  )

  return null
}

export default withNavigation(React.memo(NavigatorContainer))
