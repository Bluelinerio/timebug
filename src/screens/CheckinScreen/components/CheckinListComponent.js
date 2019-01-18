//@flow
import React                                   from 'react'
import CheckinElement, { CheckinElementProps } from './CheckinElement'
import ScreenLockedComponent                   from './ScreenLockedComponent'

type CheckinListComponentProps = {
  checkins: Array<CheckinElementProps>,
  isLoggedIn: boolean,
  cancelAllNotifications: null | (() => any),
  stepColors: any,
  user: any,
}

class CheckinListComponent extends React.Component<CheckinListComponentProps> {
  shouldComponentUpdate(nextProps) {
    const { checkins } = this.props
    const { checkins: newMap } = nextProps
    return checkins !== newMap
  }

  render() {
    const { checkins, stepColors, user, isLoggedIn } = this.props
    return (
      <React.Fragment>
        {isLoggedIn ? (
          checkins && checkins.length > 0 ? (
            Object.keys(checkins).map(key => {
              const checkin = checkins[key]
              return (
                <CheckinElement
                  key={key}
                  checkin={checkin}
                  stepColors={stepColors}
                  user={user}
                />
              )
            })
          ) : (
            <ScreenLockedComponent text={'No checkins have been loaded yet!'} />
          )
        ) : (
          <ScreenLockedComponent
            text={'You need to log In to see this content!'}
          />
        )}
      </React.Fragment>
    )
  }
}

export default CheckinListComponent
