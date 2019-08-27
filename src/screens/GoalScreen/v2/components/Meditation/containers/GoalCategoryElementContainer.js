// @flow
import { connect } from 'react-redux'
import { compose, mapProps } from 'recompose'
import { goToTool } from '2020_redux/actions/nav.actions'
import type { GoToToolParams } from '2020_redux/actions/nav.actions'
import selectors from '2020_redux/selectors'
import { stepEnum } from '2020_services/cms'
import { FORM_KEYS } from '2020_forms/forms/goals'
import GoalListElement from '../components/GoalListElement'
import mapNavigationDispatch from '2020_HOC/NavigationServiceHOC'
import { getIcon } from '../utils'

type StateProps = {
  formData: {
    [x: string]: {
      _id: string,
      value: Array<any>,
    },
  },
}

const mapStateToProps = (state: any): StateProps => {
  const formData = selectors.formData(state)
  return {
    formData,
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  goToTool: (payload: GoToToolParams) => () => {
    dispatch(goToTool(payload))
  },
})

type MergeProps = {
  goals: Array<any>,
  type: String,
  onSelect: String => any,
}

const mergeProps = (props): MergeProps => {
  const { type, formData, data, tool, goToTool } = props
  const step5Data = formData[`${stepEnum.STEP_5}`] || { value: [] }
  const { value } = step5Data

  const iconName = getIcon(type)

  const goals = value
    .filter(goalData => {
      return goalData[FORM_KEYS.form_5_areas_of_life].value.find(
        g => g === type
      )
    })
    .map(goal => {
      const goalAwardData =
        data && data.value ? data.value.find(v => v.goalId === goal._id) : null
      return {
        ...goal,
        award: goalAwardData,
      }
    })

  const onPress = goToTool({ tool, payload: { type } })

  return {
    goals,
    type,
    onPress,
    iconName,
  }
}

export default compose(
  connect(mapStateToProps),
  mapNavigationDispatch(mapDispatchToProps),
  mapProps(mergeProps)
)(GoalListElement)
