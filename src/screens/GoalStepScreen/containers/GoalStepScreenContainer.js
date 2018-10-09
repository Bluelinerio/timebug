import GoalStepScreenComponent from '../components/GoalStepScreenComponent'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import t from '../components/form'
import { compose, mapProps } from 'recompose'
import models from '../goalForms'
import tron from 'reactotron-react-native'

const formatType = type => {
  const compose = (...fns) => x => fns.reduce((v, fn) => fn(v), x)
  const removeOptional = s => (s.charAt(0) === '?' ? s.substr(1) : s)
  const enter = (sum, key) => ({
    ...sum,
    [key]: compose(removeOptional)(t.getTypeName(type.meta.props[key]))
  })

  return Object.keys(type.meta.props)
    .filter(key => key !== 'id')
    .reduce(enter, {})
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onPress: (obj: any) => tron.log(obj)
  }
}

const merge = ({ onPress, navigation: { state: { params } } }) => {
  const { goalId, formId } = params
  const model = models[formId]
  return {
    goalId,
    onPress,
    model
  }
}

export default compose(
  connect(null, mapDispatchToProps),
  withNavigation,
  mapProps(merge)
)(GoalStepScreenComponent)
