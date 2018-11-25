import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Banner from '../../../../containers/PhaseHeaderContainer'
import styles from '../styles'

type Props = {
  navigation: any
}

class WorkbookScreen extends React.PureComponent<Props> {
  render() {
    const { navigation: { state: { params : { step, phase } } } } = this.props
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <Banner step={step} phase={phase}/>
        <View>
          <Text>Hi there</Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default WorkbookScreen
