import { connect } from 'react-redux'
import selectors from '../../../redux/selectors'
import GoalReview from '../components/GoalReview'
import { changeUI } from '../../../redux/actions/ui.actions'

const screen = 'GoalPrototypeScreen'
const step = '5'

const mapStateToProps = (state: any) => {
  const screenData = selectors.stateForScreen(state)(screen)
  return {
    data: screenData[step]
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setScreenStatus: (params: any) => dispatch(changeUI({ screen, params }))
  }
}

const onPressSubstep = (data, setScreenStatus) => {
  return (goal, substep) => {
    const { _id } = goal

    const index = data.reduce((index, el, i) => {
      if (el._id === _id) return i
      return index
    }, -1)

    const substepData = data[index]['5']

    const substepValue = substepData.value.map(value => {
      if (value._id !== substep._id) return value
      return substep
    })

    const newData = data.map(d => {
      if (d._id === _id)
        return {
          ...d,
          ['5']: {
            ...substepData,
            value: substepValue
          }
        }
      return d
    })

    setScreenStatus({ [step]: newData })
  }
}

const textEvent = (data, index, setScreenStatus) => {
  const fn = text => {
    const goal = data[index]

    const newData = data.map(d => {
      if (d._id === goal._id)
        return {
          ...d,
          extra: {
            ...d.extra,
            notes: text
          }
        }
      return d
    })

    setScreenStatus({ [step]: newData })
  }
  return fn
}

const switchGoal = (data, index, setScreenStatus) => {
  const fn = () => {
    const goal = data[index]

    const newData = data.map(d => {
      if (d._id === goal._id) {
        const status = d.extra ? !!d.extra.completed : false
        return {
          ...d,
          extra: {
            ...d.extra,
            completed: !status
          }
        }
      }
      return d
    })

    setScreenStatus({ [step]: newData })
  }
  return fn
}

const softDelete = (data, index, setScreenStatus, unsetGoal) => {
  const fn = () => {
    const goal = data[index]

    const newData = data.map(d => {
      if (d._id === goal._id)
        return {
          ...d,
          extra: {
            ...d.extra,
            deleted: true
          }
        }
      return d
    })

    unsetGoal()
    setScreenStatus({ [step]: newData })
  }
  return fn
}

// TODO: Fix this, it's ugly
const merge = (stateProps, dispatchProps, ownProps) => {
  const { data } = stateProps
  const { goal: { _id }, unsetGoal } = ownProps
  const [currentGoal, index] = data.reduce((res, g, index) => {
    if (g._id === _id) return [g, index]
    return res
  }, [])
  const { setScreenStatus } = dispatchProps
  const onPress = onPressSubstep(data, setScreenStatus)
  const onTextChange = textEvent(data, index, setScreenStatus)
  const toggleGoal = switchGoal(data, index, setScreenStatus)
  const deleteGoal = softDelete(data, index, setScreenStatus, unsetGoal)
  return {
    ...ownProps,
    goal: currentGoal,
    goalIndex: index,
    onPress,
    onTextChange,
    toggleGoal,
    deleteGoal
  }
}

export default connect(mapStateToProps, mapDispatchToProps, merge)(GoalReview)
