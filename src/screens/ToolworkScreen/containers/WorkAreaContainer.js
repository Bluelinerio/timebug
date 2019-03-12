import { withNavigation }               from 'react-navigation'
import { connect }                      from 'react-redux'
import selectors                        from '../../../redux/selectors'
import { mapProps, compose }            from 'recompose'
import WorkArea                         from '../components/WorkArea'
import type { Props }                   from '../components/WorkArea'
import { submitAwardAnswers }           from '../../../redux/actions/award.actions'
import type { SubmitAwardValuePayload } from '../../../redux/actions/award.actions'

const mapStateToProps = (state: any) => {
  const getDataForTool = selectors.awardDataForTool(state)
  return {
    getDataForTool,
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  storeAwardValue: (params: SubmitAwardValuePayload) =>
    dispatch(submitAwardAnswers(params)),
})

const merge = (props: any): Props => {
  const { navigation: { state }, storeAwardValue, getDataForTool } = props
  const { params: { tool } } = state
  const toolData = getDataForTool({ tool })
  return {
    tool,
    storeAwardValue,
    toolData,
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNavigation,
  mapProps(merge)
)(WorkArea)
