// @flow
import React from 'react'
import { ScrollView } from 'react-native'
import ToolContent from '../containers/ToolContentContainer'
import { ScreenProvider } from '../../context/ScreenContext'
import styles from '../styles'

type Props = any

class RootToolComponent extends React.PureComponent<Props> {
  render() {
    return (
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scroll}>
        <ScreenProvider>
          <ToolContent />
        </ScreenProvider>
      </ScrollView>
    )
  }
}

export default RootToolComponent
