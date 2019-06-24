// @flow
import * as React  from 'react'
import { connect } from 'react-redux'
import { getCms }  from '../redux/selectors/rootReducer.selectors'

type Props = {
  render?: ({
    appInstructions: string,
  }) => React.Node,
  renderWithNotAvaliable?: any => React.Node,
}

const pages = state => getCms(state).pages
const appInstructions = (state: any) => pages(state)['AppInstructions']

const mapStateToProps = state => ({
  appInstructions: appInstructions(state),
})

const AppInstructionsContainer = connect(mapStateToProps)(
  ({ render, renderWithNotAvaliable, appInstructions, ...rest }: Props) =>
    appInstructions && render
      ? render({ appInstructions, ...rest })
      : renderWithNotAvaliable ? renderWithNotAvaliable(rest) : null
)
export default AppInstructionsContainer
