// @flow

import React                              from 'react'
import { compose, mapProps }              from 'recompose'
import moment                             from 'moment'
import { connect }                        from 'react-redux'
import toolStepDataProvider               from '2020_HOC/ToolStepDataProvider'
import toolDataProvider                   from '2020_HOC/ToolDataProvider'
import { timeToCompleteGoal }             from '2020_forms/forms/content'
import { getDueDate }                     from '2020_utils/dateCalculationHelpers'
import { FORM_KEYS as goalFormKeys }      from '2020_forms/forms/goals'
import selectors                          from '2020_redux/selectors'
import { goToV2WorkbookScreen, goToTool } from '2020_redux/actions/nav.actions'
import type { GoToToolParams }            from '2020_redux/actions/nav.actions'
import { translateCMSPhaseToStandard }    from '2020_services/cms'
import { stepEnum }                       from '2020_services/cms'
import type { Step }                      from '2020_services/cms'
import type { Props as ComponentProps }   from '../components/GoalCheckinComponent'
import GoalCheckinComponent                   from '../components/GoalCheckinComponent'
import tron from 'reactotron-react-native'

type Props = {
  tool: any,
  toolData: any,
  stepData: any,
  step: Step,
  goToForm: Step => () => void,
  goToTool: GoToToolParams => () => void,
}

const mapStateToProps = (state: any) => {
  const steps = selectors.steps(state)
  const step = steps[stepEnum.STEP_5]
  return {
    step,
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  goToForm: (step: Step) => () =>
    dispatch(
      goToV2WorkbookScreen({
        step,
        phase: translateCMSPhaseToStandard(step.type),
      })
    ),
  goToTool: (payload: GoToToolParams) => () => {
    dispatch(goToTool(payload))
  },
})

const mergeSubstepFormDataWithToolData = (
  substepFormData,
  goal,
  toolDataForGoal = {}
) => {
  const awardSubstepsForGoal = toolDataForGoal.substeps || []
  const mergedSteps = substepFormData.map(substep => {
    const awardDataForSubstep =
      awardSubstepsForGoal.find(s => s.substepId === substep._id) || null
    return {
      ...substep,
      award: awardDataForSubstep,
    }
  })
  return mergedSteps
}

const merge = (props: Props): ComponentProps => {
  const { tool, step, stepData, toolData, goToForm, goToTool } = props

  const goals = stepData[stepEnum.STEP_5] ? stepData[stepEnum.STEP_5].value : []

  const title = 'Your goals'
  const goToFormFun = goToForm(step)

  const { icon } = step
  const source = icon && icon.uri

  if (goals.length === 0)
    return {
      title,
      text: 'You have no goals to display right now, try adding some!',
      link: 'Press here to create new goals',
      onLinkPress: goToFormFun,
      source,
    }

  const toolValue = toolData && toolData.value ? toolData.value : []

  const goalsWithToolData = toolData
    ? goals.map(goal => {
      const toolValueForGoal =
          toolValue.find(tv => tv.goalId === goal._id) || undefined
      return {
        ...goal,
        toolValue: toolValueForGoal,
      }
    })
    : goals

  const goalsThatAreOpen = goalsWithToolData.filter(goal => {
    const dueDateKey = goal[goalFormKeys.form_5_how_long].value
    const momentMods = timeToCompleteGoal[dueDateKey].moment
    const { hasNotHappened } = getDueDate(goal, momentMods)
    const toolValueForGoal = goal.toolValue ? goal.toolValue : {}
    const { deleted = false, completed = false } = toolValueForGoal
    return hasNotHappened && !deleted && !completed
  })

  const { goal, due } = goalsThatAreOpen.reduce(
    (closest, goal) => {
      const dueDateKey = goal[goalFormKeys.form_5_how_long].value
      const momentMods = timeToCompleteGoal[dueDateKey].moment
      const { due } = getDueDate(goal, momentMods)
      if (!closest.goal) return { goal, due }
      const dueMoment = moment(due)
      const oldClosest = moment(closest.due)
      const isCloser = dueMoment.isBefore(oldClosest)
      if (isCloser) return { goal, due }
      return closest
    },
    { goal: null, due: null }
  )

  if (!goal)
    return {
      title,
      text: 'You have no goals to display right now, try adding some!',
      link: 'Press here to create new goals',
      onLinkPress: goToFormFun,
      source,
    }

  const goalTitle = goal[goalFormKeys.form_5_recent_life_goals].value || ''
  const oldSteps = goal[goalFormKeys.form_5_steps].value || []

  const steps = mergeSubstepFormDataWithToolData(
    oldSteps,
    goal,
    goal.toolData ? goal.toolData : {}
  )

  const completedSteps = steps.reduce((count, step) => {
    if (step.award && step.award.status) return count + 1
    return count
  }, 0)

  const totalSteps = steps.length
  const completion = totalSteps > 0 ? completedSteps / totalSteps * 100 : 0

  const timeLeft = moment(due).fromNow(true)

  const text = `You've got ${timeLeft} to complete "${goalTitle}". Up until now this goal's tasks are ${completion}% complete`
  const link = `Open this goal now`
  const onLinkPress = goToTool({ tool, payload: { goalId: goal._id } })

  const formLink = `Press here to create a new goals!`

  return {
    title,
    text,
    link,
    onLinkPress,
    source,
    formLink,
    onFormLinkPress: goToFormFun,
  }
}

type ContainerProps = {
  onLinkPress: () => void,
  link: string,
  title: string,
  text: string,
  source: string,
  formLink?: string,
  onFormLinkPress: () => void,
}

class GoalsCheckinContainer extends React.PureComponent<ContainerProps> {
  onLinkPress = () => {
    const { onLinkPress } = this.props
    onLinkPress()
  }

  onFormLinkPress = () => {
    const { onFormLinkPress } = this.props
    onFormLinkPress()
  }

  render() {
    const { link, title, text, source, formLink } = this.props
    tron.log(this.props)
    return (
      <GoalCheckinComponent
        link={link}
        title={title}
        text={text}
        onLinkPress={this.onLinkPress}
        source={source}
        formLink={formLink}
        onFormLinkPress={this.onFormLinkPress}
      />
    )
  }
}

export default compose(
  toolStepDataProvider,
  toolDataProvider,
  connect(mapStateToProps, mapDispatchToProps),
  mapProps(merge)
)(GoalsCheckinContainer)
