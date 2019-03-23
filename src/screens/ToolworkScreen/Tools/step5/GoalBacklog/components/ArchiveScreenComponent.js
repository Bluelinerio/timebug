// @flow
import React from 'react'
import { View, ScrollView, BackHandler, Text } from 'react-native'
import SubHeader from './Header'
import styles from '../../common/styles'

type Props = {
  navigation: any,
  tool: { subtitle: string },
  storeAwardData: (any, any) => any,
  data: { value: boolean, _id?: string, date?: string },
  openGoalsScreen: () => any,
  goals: Array<any>,
}

class ArchiveScreenComponent extends React.PureComponent<Props> {

  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollView}
      >
        <View
          style={[
            styles.container,
            styles.prototypeBackground,
            styles.goalScreenViewContainer,
            styles.padded,
          ]}
        >
          <Text>HIIIIIIIIIIIIIIIIIIIIIIII</Text>
        </View>
      </ScrollView>
    )
  }
}

export default ArchiveScreenComponent
