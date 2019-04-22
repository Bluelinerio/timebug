// @flow
import React                   from 'react'
import CheckinListElement      from '../containers/CheckinListElementContainer'
import type { CheckinElement } from '../types'

type Props = {
  checkinElements: Array<CheckinElement>,
}

class CheckinList extends React.PureComponent<Props> {
  render() {
    const { checkinElements } = this.props
    return (
      <React.Fragment>
        {checkinElements
          ? checkinElements.map((checkin, index) => (
            <CheckinListElement
              index={index}
              key={checkin.key}
              checkin={checkin}
            />
          ))
          : null}
      </React.Fragment>
    )
  }
}

export default CheckinList
