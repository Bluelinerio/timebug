// @flow
import React from 'react'
import { ScrollView, Text } from 'react-native'
import styles from '../styles'

type Props = any

class RootToolComponent extends React.PureComponent<Props> {
  render() {
    return (
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scroll}>
        <Text>This is tool 13 c:</Text>
      </ScrollView>
    )
  }
}

export default RootToolComponent
