//@flow
import React      from 'react'
import { View }   from 'react-native'
import ToolButton from '../containers/Tools/ToolButtonContainer'
import styles     from '../styles'

type ToolScreenContentProps = {
  steps: any,
  stepColors: any,
  tools: Array<any>,
  lockedTools: Array<any>
}

class ToolScreenContent extends React.PureComponent<ToolScreenContentProps> {
  render() {
    const { steps, tools, stepColors, lockedTools } = this.props
    return (
      <View style={[styles.container, styles.content]}>
        {tools &&
          tools.map(tool => {
            const step = steps[`${tool.number}`]
            return (
              <ToolButton
                key={tool.key}
                tool={tool}
                step={step}
                stepColors={stepColors}
              />
            )
          })}
        {lockedTools &&
          lockedTools.map(tool => {
            const step = steps[`${tool.number}`]
            return (
              <ToolButton
                key={tool.key}
                tool={tool}
                step={step}
                stepColors={stepColors}
                locked={true}
              />
            )
          })}
      </View>
    )
  }
}

export default ToolScreenContent
