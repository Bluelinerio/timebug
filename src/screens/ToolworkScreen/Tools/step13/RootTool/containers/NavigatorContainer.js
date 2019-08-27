// @flow
import React, { useEffect, useContext } from 'react'
import { withNavigation } from 'react-navigation'
import { CategoryContext } from '../../context/CategoryContext'
import { useGoals } from '../../hooks/GoalHooks'
import { GoalContext } from '../../context/GoalContext'
import { ScreenContext, screens } from '../../context/ScreenContext'

const NavigatorContainer = ({ navigation }) => {
  const { setCategory } = useContext(CategoryContext)
  const { setGoal } = useContext(GoalContext)
  const { openGoalDetail, openGoalList, openBacklog } = useContext(
    ScreenContext
  )
  const goals = useGoals()
  const payload = navigation.getParam('payload', null)
  const goalId = (payload && payload.goalId) || null
  const category = (payload && payload.category) || null
  const screen = (payload && payload.screen) || null

  useEffect(
    () => {
      if (category && goalId) {
        const goal = goals.find(g => g.id === goalId)
        if (goal) {
          setCategory(category)
          setGoal(goal)
          openGoalDetail()
        }
        navigation.setParams({ payload: { ...payload, goalId: null } })
        navigation.setParams({ payload: { ...payload, category: null } })
      } else if (category) {
        openGoalList()
        setCategory(category)
        navigation.setParams({ payload: { ...payload, category: null } })
      } else if (screen) {
        if (screen === screens.BACKLOG) {
          openBacklog()
          navigation.setParams({ payload: { ...payload, screen: null } })
        }
      }
    },
    [goalId, category, screen]
  )

  return null
}

export default withNavigation(React.memo(NavigatorContainer))
