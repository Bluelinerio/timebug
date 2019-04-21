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
      <React.Fragment>
        <View style={styles.toolSectionContainer}>
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={goToCheckinSection}
          >
            <Text style={styles.optionContainerText}>
              {`How's your energy right now?`}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.toolSectionContainer}>
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={goToWeeklySection}
          >
            <Text style={styles.optionContainerText}>
              Your monthly energy distribution
            </Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    )
  }
}

export default MenuScreen
