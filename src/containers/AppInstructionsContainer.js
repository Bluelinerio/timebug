// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { getCms } from '../redux/selectors/rootReducer.selectors'

type Props = {
  render?: ({
    appInstructions: string
  }) => React.Node,
  renderWithNotAvialble?: ({

  }) => React.Node
}

const pages = (state) => getCms(state).pages
const appInstructions = (state: any) => pages(state)['AppInstructions']

const mapStateToProps = state => ({
  appInstructions: appInstructions(state)
})

const AppInstructionsContainer = connect(mapStateToProps)(
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