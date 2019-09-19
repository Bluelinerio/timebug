// @flow
import React, { Fragment } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import styles from '../styles'

type Props = {
  onBack: () => void,
  showBackButton?: boolean,
  title: string,
  subtitle?: string,
  color?: string,
}

class Header extends React.PureComponent<Props> {
  render() {
    const {
      title,
      subtitle = null,
      showBackButton = false,
      color = 'black',
    } = this.props
    return (
      <Fragment>
        <View style={styles.header}>
          {showBackButton && (
            <View style={styles.backButtonContainer}>
              <TouchableOpacity style={styles.row} onPress={this.props.onBack}>
                <Icon name={'md-arrow-back'} size={22} color={color} />
                <Text style={[styles.backButtonText, { color }]}>Back</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.headerContent}>
            <View style={styles.titleContainer}>
              <Text
                style={[styles.headerTitle, styles.goalScreenTitle, { color }]}
              >
                {title}
              </Text>
            </View>
            {!!subtitle && (
              <View style={styles.subtitleContainer}>
                <Text style={[styles.headerSubtitle, { color }]}>
                  {subtitle}
                </Text>
              </View>
            )}
          </View>
        </View>
      </Fragment>
    )
  }
}

export default Header
