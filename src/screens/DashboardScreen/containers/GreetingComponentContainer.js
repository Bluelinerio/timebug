// @flow

import { connect }                              from 'react-redux'
import moment                                   from 'moment'
import { mapProps, compose }                    from 'recompose'
import selectors                                from '2020_redux/selectors'
import GreetingComponent                        from '../components/GreetingComponent'
import { goToV2WorkbookScreen }                 from '2020_redux/actions/nav.actions'
import { translateCMSPhaseToStandard }          from '2020_services/cms'
import type { Step }                            from '2020_services/cms'
import type { Props as GreetingComponentProps } from '../components/GreetingComponent'

type User = {
  name: string,
}

type Props = {
  user: User | null,
  completedStepIds: Array<string>,
  steps: any,
  onLink: Step => void,
  mostRecent: Step,
}

const mapStateToProps = (state: any) => {
  const user = selectors.user(state)
  const completedStepIds = selectors.completedStepIds(state)
  const steps = selectors.steps(state)
  const mostRecent = selectors.mostRecentlyCompletedStep(state)
  return {
    user,
    completedStepIds,
    steps,
    mostRecent,
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  onLink: (step: Step) =>
    dispatch(
      goToV2WorkbookScreen({
        step,
        phase: translateCMSPhaseToStandard(step.type),
      })
    ),
})

const getGreeting = () => {
  const now = moment()
  if (now.isBetween(moment('04:00', 'HH:mm'), moment('11:59', 'HH:mm')))
    return 'Good morning'
  if (now.isBetween(moment('12:00', 'HH:mm'), moment('16:59', 'HH:mm')))
    return 'Good afternoon'
  return 'Good evening'
}

const firstName = user =>
  user ? (user.name ? user.name.split(' ')[0] : '') : ''

const merge = (props: Props): GreetingComponentProps => {
  const { user, completedStepIds, steps, onLink, mostRecent } = props
  if (!user) return {}
  const missingStep = Object.values(steps).find(
    step => completedStepIds.indexOf(step.number) === -1
  )
  const name = firstName(user)
  const onPress = () => onLink(missingStep)
  const greeting = getGreeting()
  const mostRecentStep = mostRecent.stepId
  const text = mostRecentStep
    ? `You last completed step #${mostRecentStep}. For your next step we
  suggest: `
    : `Welcome to the 2020 lifevision journe. For your first step we
  suggest: `
  return {
    name,
    stepTitle: missingStep.title,
    onPress,
    greeting,
    text,
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  mapProps(merge)
)(GreetingComponent)
