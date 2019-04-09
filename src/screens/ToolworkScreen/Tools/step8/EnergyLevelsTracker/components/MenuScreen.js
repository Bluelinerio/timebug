// @flow
import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles                           from '../styles'

type Props = {
  goToCheckinSection: () => null,
  goToWeeklySection: () => null,
}

class MenuScreen extends React.PureComponent<Props> {
  render() {
    const { goToCheckinSection, goToWeeklySection } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.toolSectionContainer}>
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={goToCheckinSection}
          >
            <Text style={styles.optionContainerText}>
              Check in with the tool
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.toolSectionContainer}>
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={goToWeeklySection}
          >
            <Text style={styles.optionContainerText}>
              Check your weekly levels
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default MenuScreen
