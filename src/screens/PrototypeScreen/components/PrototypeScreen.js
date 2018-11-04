import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Banner from '../../../containers/NavigationAwareBanner'
import styles from '../styles'

class PrototypeScreen extends React.PureComponent<any> {
  render() {
    const { goToGoalFormScreen, goToPrototypeGoalScreen } = this.props
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <View style={styles.container}>
          <Banner backButton={true} />
          <View style={styles.viewContainer}>
            <View style={styles.buttonContainer}>
              <Text style={[styles.protoText, styles.text]}>
                The following are the prototype views for the proposed changes
                to the app
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={goToGoalFormScreen}
              >
                <Text style={[styles.buttonText, styles.text]}>Goal form</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={goToPrototypeGoalScreen}
              >
                <Text
                  style={[styles.buttonText, styles.text]}
                >{`Goal's screen`}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default PrototypeScreen
