// @flow
import React                   from 'react'
import { FlatList, View }      from 'react-native'
import { NativeContact }       from '2020_services/contactService'
import SyncElement             from './SyncElement'
import styles                  from '../../styles/sync'

type Props = {
  contacts: Array<NativeContact>,
  onSelect: any => any,
}

class SyncList extends React.PureComponent<Props> {
  _renderItem = ({ item }) => {
    const { onSelect } = this.props
    return <SyncElement contact={item} onSelect={onSelect} />
  }

  _keyExtractor = item => item.identifier

  render() {
    return (
      <View style={styles.syncList}>
        <FlatList
          data={this.props.contacts}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

export default SyncList
