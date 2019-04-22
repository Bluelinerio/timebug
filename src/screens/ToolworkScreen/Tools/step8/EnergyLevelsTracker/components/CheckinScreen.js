// @flow
import React             from 'react'
import { View }          from 'react-native'
import CheckinFormScreen from '../containers/CheckinFormScreenContainer'
import styles            from '../styles'

type Props = {
  data: any,
  tool: any,
  storeAwardData: (value: any, tool: any) => any,
}

class CheckinScreen extends React.PureComponent<Props> {
  render() {
    return (
      <React.Fragment>
        <View style={[styles.container, styles.formContainer]}>
          <CheckinFormScreen {...this.props} />
        </View>
      </React.Fragment>
    )
  }
}

export default CheckinScreen
