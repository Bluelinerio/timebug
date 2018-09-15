//@flow
import React                                   from 'react'
import { Text, TouchableOpacity }              from 'react-native'
import CheckinElement, { CheckinElementProps } from './CheckinElement'

type CheckinListComponentProps = {
  checkins: Array<CheckinElementProps>,
  cancelAllNotifications: null | () => any 
}

class CheckinListComponent extends React.Component<CheckinListComponentProps> {
  shouldComponentUpdate(nextProps) {
    const { checkins } = this.props
    const { checkins: newMap } = nextProps
    return checkins !== newMap
  }

  render() {
    const { checkins, cancelAllNotifications } = this.props
    return (
      <React.Fragment>
        {
          __DEV__ &&
            <TouchableOpacity style={{ backgroundColor: 'gray', height: 80, width: 200 }} onPress={cancelAllNotifications}>
              <Text>
                Clear All notifications
              </Text>
            </TouchableOpacity>  
        }
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
