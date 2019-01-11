//@flow
import React      from 'react'
import { View }   from 'react-native'
import ToolButton from '../containers/Tools/ToolButtonContainer'
import styles     from '../styles'

type ToolScreenContentProps = {
  steps: Array<any>,
  stepColors: any,
  tools: any,
}

class ToolScreenContent extends React.PureComponent<ToolScreenContentProps> {
  render() {
    const { steps, tools, stepColors } = this.props
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
      </View>
    )
  }
}

export default ToolScreenContent
