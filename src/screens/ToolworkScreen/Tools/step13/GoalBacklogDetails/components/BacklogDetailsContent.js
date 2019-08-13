// @flow
import React, { Fragment } from 'react'
import { screens } from '../../context/ScreenContext'

type Props = {
  screen?: string,
}

class BacklogDetailsContent extends React.PureComponent<Props> {
  render() {
    const { screen } = this.props
    return (
      <Fragment>
        {screen === screens.BACKLOG_GOAL_DETAILS
          ? null
          : screen === screens.DELETED_BACKLOG ? null : null}
      </Fragment>
    )
  }
}

export default BacklogDetailsContent
