//@flow
import { connect }                     from 'react-redux'
import { compose }                     from 'recompose'
import ToolButton, { ToolButtonProps } from '../../components/Tools/ToolButton'
import {
  mapPhaseAndCompletionToKey,
  getTextColorForPhase,
}                                      from '../../utils/colorsForStep'
import { goToTool }                    from '../../../../redux/actions/nav.actions'
import type { GoToToolParams }         from '../../../../redux/actions/nav.actions'

type ToolButtonDispatchProps = {
  goToTool: GoToToolParams => any,
}

type ToolButtonContainerProps = {
  navigation: any,
  user: any,
  stepColors: any,
  tool: any,
}
const mapDispatchToProps = (dispatch: any): ToolButtonDispatchProps => ({
  goToTool: (params: GoToToolParams) => dispatch(goToTool(params)),
})

//TODO: Get icon from different source, not the steps directly
const merge = (
  stateProps: any,
  dispatchProps: ToolButtonDispatchProps,
  ownProps: ToolButtonContainerProps
): ToolButtonProps => {
  const { stepColors, step, tool } = ownProps
  const { goToTool } = dispatchProps

  const { icon } = step
  const { title, subtitle, content, phase } = tool

  return {
    title,
    subtitle,
    content,
    phase,
    source: icon && icon.uri,
    onPress: goToTool,
    tool,
    containerBackgroundColor: stepColors[mapPhaseAndCompletionToKey(phase)],
    textStyle: getTextColorForPhase(phase),
  }
}

export default compose(connect(null, mapDispatchToProps, merge))(
  ToolButton
)
