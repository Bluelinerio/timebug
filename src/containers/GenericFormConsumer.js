import R            from 'ramda';
import { connect }  from 'react-redux'
import { compose }  from 'recompose'
import selectors    from '../redux/selectors';

const mapStateToProps = state => {
  const modelsAndDataForExercise = selectors.modelsAndDataForExercise(state)
  return { modelsAndDataForExercise }
}

const notEmpty = compose(R.not,R.isEmpty)

const merge = (
    stateProps,
    dispatchprops,
    ownProps
) => {
    const { modelsAndDataForExercise } = stateProps;
    const { step, handler } = ownProps;
    const { formData } = modelsAndDataForExercise(step)
    const propsNoHandler = Object.keys(ownProps).reduce((props, key) => {
      if (key === 'handler')
        return props
      return {
        ...props,
        [key]: ownProps[key]
      }
    }, {})
    if(formData && notEmpty(formData)) {
      return {
        ...propsNoHandler,
        ...handler({formData})
      } 
    }
      return {};
}

export default connect(mapStateToProps, null, merge)