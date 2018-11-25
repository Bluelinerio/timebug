import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import tron from 'reactotron-react-native'
import Banner from '../../../../containers/NavigationAwareBanner'
import styles from '../styles'

type Props = {
  navigation: any
}

class WorkbookScreen extends React.PureComponent<Props> {
  render() {
    const { navigation } = this.props
    tron.log(navigation)
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <Banner />
        <View>
          <Text>Hi there</Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default WorkbookScreen
