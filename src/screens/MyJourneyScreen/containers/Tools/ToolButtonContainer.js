//@flow
import { connect }                     from 'react-redux'
import { compose }                     from 'recompose'
import ToolButton, { ToolButtonProps } from '../../components/Tools/ToolButton'
import {
  getColorForStepAtIndex,
  getTextColorForStepAtIndex,
}                                      from '../../utils/colorsForStep'
import { goToTool }                    from '../../../../redux/actions/nav.actions'
import type { GoToToolParams }         from '../../../../redux/actions/nav.actions'
import { phaseForStepAtIndex }         from '../../../../services/cms'
import selectors                       from '../../../../redux/selectors'

type ToolButtonDispatchProps = {
  goToTool: GoToToolParams => any,
}

type ToolButtonStateProps = {
  user: any,
}

type ToolButtonContainerProps = {
  navigation: any,
  user: any,
  stepColors: any,
  tool: any,
}

const mapStateToProps = (state: any): ToolButtonStateProps => {
  const user = selectors.getUser(state)
  return {
    user,
  }
}

const mapDispatchToProps = (dispatch: any): ToolButtonDispatchProps => ({
  goToTool: (params: GoToToolParams) => dispatch(goToTool(params)),
})

const merge = (
  stateProps: ToolButtonStateProps,
  dispatchProps: ToolButtonDispatchProps,
  ownProps: ToolButtonContainerProps
): ToolButtonProps => {
  const { user } = stateProps
  const { stepColors, step, tool } = ownProps
  const { goToTool } = dispatchProps

  const { number, icon } = step
  const { title, subtitle, content } = tool
  const backgroundColorAtIndex = (stepIndex: number) =>
    stepColors[getColorForStepAtIndex(stepIndex, user)]

  const textColorAtIndex = (stepIndex: number) =>
    getTextColorForStepAtIndex(stepIndex, user)

  return {
    step,
    title,
    subtitle,
    content,
    phase: phaseForStepAtIndex(number - 1),
    source: icon && icon.uri,
    onPress: goToTool,
    tool,
    containerBackgroundColor: backgroundColorAtIndex(number - 1),
    textStyle: textColorAtIndex(number - 1),
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps, merge))(
  ToolButton
)
