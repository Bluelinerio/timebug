// @flow
import React from 'react'
import MeditationCheckin, {
  key as meditationKey,
} from '../containers/MeditationCheckinContainer'

const registeredTools = [meditationKey]

type Tool = {
  key: string,
}

type Props = {
  tools: Array<Tool>,
}

type State = {
  tool: Tool,
}

const pickToolsWrapper = (tools: Array<Tool>) => {
  const validTools = tools.filter(
    tool => registeredTools.indexOf(tool.key) !== -1
  )
  return () => {
    if (validTools.length === 0) return null
    if (validTools.length === 1) return validTools[0]
    const randomNum = Math.floor(Math.random() * validTools.length)

    const tool = validTools[randomNum]

    return tool
  }
}

class RandomCheckinPicker extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props)
    const pickTool = pickToolsWrapper(props.tools)
    const tool = pickTool()
    this.state = {
      tool,
    }
  }

  render() {
    const { tool } = this.state
    if (!tool) return null
    const { key } = tool
    switch (key) {
    case meditationKey:
      return <MeditationCheckin tool={tool} />
    default:
      return null
    }
  }
}

export default RandomCheckinPicker
