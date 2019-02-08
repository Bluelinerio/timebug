// @flow
import { connect }                from 'react-redux'
import { compose, mapProps }      from 'recompose'
import selectors                  from '2020_redux/selectors'
import { FORM_KEYS, STEP_NUMBER } from '2020_forms/forms/goals'
import GoalListElement            from '../components/GoalListElement'

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

type MergeProps = {
  goals: Array<any>,
  type: String,
  onSelect: String => any,
}

const mergeProps = (props): MergeProps => {
  const { type, onSelect, formData, data } = props
  const step5Data = formData[STEP_NUMBER] || { value: [] }
  const { value } = step5Data

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
  return {
    goals,
    type,
    onSelect,
  }
}

export default compose(connect(mapStateToProps), mapProps(mergeProps))(
  GoalListElement
)
