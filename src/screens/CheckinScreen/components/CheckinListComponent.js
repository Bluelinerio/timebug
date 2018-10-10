//@flow
import React                                   from 'react'
import { Text, View }        from 'react-native'
import CheckinElement, { CheckinElementProps } from './CheckinElement'
import styles                                  from '../styles'

type CheckinListComponentProps = {
  checkins: Array<CheckinElementProps>,
  cancelAllNotifications: null | (() => any)
}

class CheckinListComponent extends React.Component<CheckinListComponentProps> {
  shouldComponentUpdate(nextProps) {
    const { checkins } = this.props
    const { checkins: newMap } = nextProps
    return checkins !== newMap
  }

  render() {
    const { checkins } = this.props
    return (
      <React.Fragment>
        {checkins ? (
          Object.keys(checkins).map(key => {
            const checkin = checkins[key]
            return <CheckinElement key={key} {...checkin} />
          })
        ) : (
          <View style={styles.noCheckinContainer}>
            <Text style={styles.noCheckinText}>
              No checkins have been loaded yet
            </Text>
          </View>
        )}
      </React.Fragment>
    )
  }
}

export default CheckinListComponent
