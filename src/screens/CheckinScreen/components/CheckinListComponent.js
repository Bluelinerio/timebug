//@flow
import React                                   from 'react'
import CheckinElement, { CheckinElementProps } from './CheckinElement'

type CheckinListComponentProps = {
  checkins: Array<CheckinElementProps>
}

class CheckinListComponent extends React.Component<CheckinListComponentProps> {
  shouldComponentUpdate(nextProps) {
    const { checkins } = this.props
    const { checkins: newMap } = nextProps
    console.log(checkins !== newMap)
    return checkins !== newMap
  }

  render() {
    const { checkins } = this.props
    return (
      <React.Fragment>
        {checkins &&
          Object.keys(checkins).map(key => {
            const checkin = checkins[key]
            return <CheckinElement key={key} {...checkin} />
          })}
      </React.Fragment>
    )
  }
}

export default CheckinListComponent
