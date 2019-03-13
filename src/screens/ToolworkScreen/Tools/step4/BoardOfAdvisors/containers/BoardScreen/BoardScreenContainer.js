// @flow
import { connect }                       from 'react-redux'
import { mapProps, compose }             from 'recompose'
import selectors                         from '2020_redux/selectors'
import { stepEnum }                      from '2020_services/cms'
import { FORM_KEYS, FORM_CHILDREN_KEYS } from '2020_forms/forms/step4'
import { goToV2WorkbookScreen }          from '2020_redux/actions/nav.actions'
import BoardScreen                       from '../../components/BoardScreen/BoardScreen'
import StepDataProvider                  from '../../../../../HOC/ToolStepDataProvider'

export type Props = {
  step: any,
  tool: any,
  data: any,
  storeAwardData: (value: any, tool: any) => any,
  goToAdvisor: any => any,
  goToSync: any => any,
}

export type StateProps = {
  step: any,
}

export type DispatchProps = {
  goToFormWrapper: ({ step: any, phase: any }) => () => any,
}

const mergeContactData = ({ data, stepData }: { data: any, stepData: any }) => {
  const boardValue = stepData[FORM_KEYS.form_4_board_of_advisors].value
  const contactsValue = data ? (data.value ? data.value : []) : []
  const value = boardValue.reduce((allValues, boardVal) => {
    const id = boardVal._id
    const contact = contactsValue.find(con => con.advisorId === id) || null
    const name =
      boardVal[FORM_CHILDREN_KEYS[FORM_KEYS.form_4_board_of_advisors].advisor]
        .value
    const category =
      boardVal[FORM_CHILDREN_KEYS[FORM_KEYS.form_4_board_of_advisors].category]
        .value
    const advisor = {
      id,
      name,
      category,
      contact,
    }
    return [...allValues, advisor]
  }, [])
  return value
}

const mapStateToProps = (state: any): StateProps => {
  const steps = selectors.steps(state)
  const step = steps[stepEnum.STEP_4]
  return {
    step,
  }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  goToFormWrapper: ({ step, phase }) => () =>
    dispatch(
      goToV2WorkbookScreen({
        step,
        phase,
      })
    ),
})

const merge = (props: Props & StateProps & DispatchProps) => {
  const {
    stepData: allStepsData,
    tool,
    data,
    storeAwardData,
    goToFormWrapper,
    goToAdvisor,
    goToSync,
    step,
  } = props
  const { phase } = tool
  const stepData = allStepsData[stepEnum.STEP_4].value[0]
  const mergedData = mergeContactData({ data, stepData })
  const goToForm = goToFormWrapper({ step, phase })
  return {
    tool,
    data: mergedData,
    storeAwardData,
    goToForm,
    goToAdvisor,
    goToSync,
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  StepDataProvider,
  mapProps(merge)
)(BoardScreen)
