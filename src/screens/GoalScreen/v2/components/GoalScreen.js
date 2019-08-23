import React from 'react'
import { View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Banner from '2020_components/MinifiedBanner'
import PhaseList from '../containers/PhaseListContainer'
import GoalScreenContent from '../containers/GoalScreenContentContainer'
import { PhaseProvider } from '../context/PhaseContext'
import styles from '../styles'

class GoalScreen extends React.PureComponent {
  render() {
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scroll}
          stickyHeaderIndices={[0]}
        >
          <View style={styles.stickyHeader}>
            <Banner />
          </View>
          <PhaseProvider>
            <PhaseList />
            <GoalScreenContent />
          </PhaseProvider>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default GoalScreen
