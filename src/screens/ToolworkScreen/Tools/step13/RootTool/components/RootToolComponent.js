// @flow
import React from 'react'
import { ScrollView } from 'react-native'
import ToolContent from '../containers/ToolContentContainer'
import { ScreenProvider } from '../../context/ScreenContext'
import { CategoryProvider } from '../../context/CategoryContext'
import styles from '../styles'

type Props = any

class RootToolComponent extends React.PureComponent<Props> {
  render() {
    return (
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scroll}>
        <ScreenProvider>
          <CategoryProvider>
            <ToolContent />
          </CategoryProvider>
        </ScreenProvider>
      </ScrollView>
    )
  }
}

export default RootToolComponent
