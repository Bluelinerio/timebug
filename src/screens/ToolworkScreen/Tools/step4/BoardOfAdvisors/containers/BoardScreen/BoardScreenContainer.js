// @flow
import { connect }                       from 'react-redux'
import { mapProps, compose }             from 'recompose'
import selectors                         from '2020_redux/selectors'
import { FORM_KEYS, FORM_CHILDREN_KEYS } from '2020_forms/forms/step4'
import { goToV2WorkbookScreen }          from '2020_redux/actions/nav.actions'
import { phaseForStep }                  from '2020_services/cms'
import BoardScreen                       from '../../components/BoardScreen/BoardScreen'

export type Props = {
  step: any,
  tool: any,
  data: any,
  storeAwardData: (value: any, tool: any) => any,
  goToAdvisor: any => any,
  goToSync: any => any,
}

export type StateProps = {
  formData: {
    [stepId: string]: {
      value: any,
    },
  },
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
  const formData = selectors.formData(state)
  return {
    formData,
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
    step,
    tool,
    data,
    storeAwardData,
    formData,
    goToFormWrapper,
    goToAdvisor,
    goToSync,
  } = props
  const stepData = formData[`${step.number}`].value[0]
  const mergedData = mergeContactData({ data, stepData })
  const phase = phaseForStep(step)
  const goToForm = goToFormWrapper({ step, phase })
  return {
    tool,
    step,
    data: mergedData,
    storeAwardData,
    goToForm,
    goToAdvisor,
    goToSync,
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  mapProps(merge)
)(BoardScreen)
