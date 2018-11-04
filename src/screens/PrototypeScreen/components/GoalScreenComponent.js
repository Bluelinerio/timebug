import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from '../styles'
import { SafeAreaView } from 'react-navigation'
import Banner from '../../../containers/NavigationAwareBanner'
import GoalScreenContent from '../containers/GoalScreenContentContainer'

class GoalScreenComponent extends React.PureComponent<> {
  render() {
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollView}
        >
          <Banner backButton={true} />
          <View
            style={[
              styles.container,
              styles.prototypeBackground,
              styles.goalScreenViewContainer
            ]}
          >
            <GoalScreenContent />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default GoalScreenComponent
