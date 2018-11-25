import React from 'react'
import { SafeAreaView } from 'react-navigation'
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import Banner from '../../../../containers/NavigationAwareBanner'
import styles from '../styles'

type Props = {
  steps: Array<any>,
  goToForm: any => any
}

class StepSelectionScreenComponent extends React.Component<Props> {
  _onPress = (step: any) => {
    const { goToForm } = this.props
    goToForm({step})
  }

  render() {
    const { steps } = this.props
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <StatusBar barStyle="dark-content" backgroundColor={'white'} />
        <ScrollView style={[styles.container]}>
          <Banner />
          <View style={[styles.container, styles.listContainer]}>
            {steps &&
              Object.values(steps).map(step => {
                return (
                  <TouchableOpacity
                    key={step.number}
                    onPress={() => this._onPress(step)}
                    style={styles.buttonContainer}
                  >
                    <Text style={styles.buttonTextContainer}>{`Step #${
                      step.number
                    }`}</Text>
                  </TouchableOpacity>
                )
              })}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default StepSelectionScreenComponent
