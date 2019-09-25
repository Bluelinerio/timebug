// @flow
import { connect } from 'react-redux'
import { compose, mapProps } from 'recompose'
import selectors from '2020_redux/selectors'

type Props = {
  tool: {
    require?: {
      steps: Array<string>,
    },
  },
}

type ProvidedProps = {
  toolData: {
    value: any,
  },
}

const mapStateToProps = (state: any) => {
  const awardDataForTool = selectors.awardDataForTool(state)
  return {
    awardDataForTool,
  }
}

const merge = (props: Props): ProvidedProps => {
  const { tool, awardDataForTool, ...rest } = props
  const toolData = awardDataForTool({ tool })
  return {
    tool,
    toolData,
    ...rest,
  }
}

export default compose(connect(mapStateToProps), mapProps(merge))
