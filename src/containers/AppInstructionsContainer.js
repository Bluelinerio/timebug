// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { appInstructions } from '../redux/selectors/cms.selectors'
import { getCms } from '../redux/selectors/rootReducer.selectors'

type Props = {
  render?: ({
    appInstructions: string
  }) => React.Node,
  renderWithNotAvialble?: ({

  }) => React.Node
}

const AppInstructionsContainer = connect(
  composeSelectors({ appInstructions } )
)(
  ({
    render,
    renderWithNotAvialble,
    appInstructions,
    ...rest
  }) => (appInstructions && render)
    ? render({ appInstructions, ...rest})
    : renderWithNotAvialble
      ? renderWithNotAvialble(rest)
      : null
)

export default AppInstructionsContainer
