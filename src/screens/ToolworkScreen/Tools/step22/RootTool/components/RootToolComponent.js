// @flow
import React from 'react'
import { ScrollView } from 'react-native'
import ToolContent from './ToolContent'
import TabBar from '../containers/TabBarContainer'
import styles from '../styles'

const RootToolComponent = () => {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scroll}>
      <TabBar />
      <ToolContent />
    </ScrollView>
  )
}

export default RootToolComponent
