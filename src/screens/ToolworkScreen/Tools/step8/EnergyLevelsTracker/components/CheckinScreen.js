// @flow
import React             from 'react'
import { View }          from 'react-native'
import CheckinList       from '../containers/CheckinListContainer'
import CheckinFormScreen from '../containers/CheckinFormScreenContainer'
import styles            from '../styles'

type Props = {
  data: any,
  tool: any,
  storeAwardData: (value: any, tool: any) => any,
}

type State = {
  selectedCheckin: string,
}

class CheckinScreen extends React.PureComponent<Props, State> {
  state = {
    selectedCheckin: null,
  }

  render() {
    const { selectedCheckin } = this.state
    return (
      <React.Fragment>
        <CheckinList selectedCheckin={selectedCheckin} />
        <View style={[styles.container, styles.formContainer]}>
          <CheckinFormScreen />
        </View>
      </React.Fragment>
    )
  }
}

export default CheckinScreen
