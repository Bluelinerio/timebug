// @flow
import React                      from 'react'
import { ScrollView }             from 'react-native'
import { SafeAreaView }           from 'react-navigation'
import GoalScreenHandlerContainer from '../containers/GoalScreenHandlerContainer'
import Banner                     from '2020_components/MinifiedBanner'
import styles                     from '../styles'

const GoalScreenComponent = () => {
  return (
    <SafeAreaView
      forceInset={{ top: 'always', bottom: 'never' }}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <Banner />
        <GoalScreenHandlerContainer />
      </ScrollView>
    </SafeAreaView>
  )
}

export default GoalScreenComponent
