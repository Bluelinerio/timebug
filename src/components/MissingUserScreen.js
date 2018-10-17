import React                      from 'react'
import { View, ScrollView, Text } from 'react-native'
import { SafeAreaView }           from 'react-navigation'
import styles                     from '../styles/components/MissingUserScreen'
import Banner                     from './MinifiedBanner'

const MissingUserScreen = () => {
  return (
    <SafeAreaView
      forceInset={{ top: 'always', bottom: 'never' }}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <Banner />
        <View style={[styles.container, styles.mainContainer]}>
          <Text style={styles.text}>Please Log in to use this feature</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MissingUserScreen
