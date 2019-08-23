// @flow
import React, { useEffect, useState } from 'react'
import { withNavigation } from 'react-navigation'
import { compose } from 'recompose'
import { FORM_KEYS } from '2020_forms/forms/goals'
import { stepEnum } from '2020_services/cms'
import StepDataProvider from '2020_HOC/ToolStepDataProvider'
import GoalScreen from '../components/GoalScreenComponent'

type Props = {
  navigationState: any,
  stepData: any,
  openArchiveScreen: () => any,
  navigation: any,
}

const GoalScreenContainer = (props: Props) => {
  const { navigation, stepData, ...rest } = props

  const [type, setType] = useState(null)
  const [goal, setGoal] = useState(null)
  const [goalId, setGoalId] = useState(null)

  const payload = navigation.getParam('payload', {})
  const { goalId: sentGoalId = null, type: sentType = null } = payload
  const formDataStep5 = stepData[stepEnum.STEP_5] || { value: [] }
  const { value } = formDataStep5

  useEffect(
    () => {
      const newGoal = sentGoalId ? value.find(g => sentGoalId === g._id) : null
      const types = newGoal
        ? newGoal[FORM_KEYS.form_5_areas_of_life].value || null
        : null
      const newType = types ? types[0] : sentType ? sentType : null
      if (newType && type !== newType) setType(newType)
      if (newGoal) setGoal(newGoal)
      if (sentGoalId) setGoalId(sentGoalId)
      navigation.setParams({ payload: {} })
    },
    [sentGoalId, sentType]
  )
  return (
    <GoalScreen
      {...rest}
      type={type}
      goal={goal}
      goalId={goalId}
      navigation={navigation}
    />
  )
}

export default compose(withNavigation, StepDataProvider)(
  React.memo(GoalScreenContainer)
)
