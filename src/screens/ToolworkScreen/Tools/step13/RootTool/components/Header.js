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
}

class Header extends React.PureComponent<Props> {
  render() {
    const { title, subtitle = null, showBackButton = false } = this.props
    return (
      <Fragment>
        <View style={styles.header}>
          {showBackButton && (
            <View style={styles.backButtonContainer}>
              <TouchableOpacity onPress={this.props.onBack}>
                <Icon name={'ios-arrow-back'} size={30} color={'black'} />
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.headerContent}>
            <View style={styles.titleContainer}>
              <Text>{title}</Text>
            </View>
            <View style={styles.subtitleContainer}>
              {!!subtitle && <Text>{subtitle}</Text>}
            </View>
          </View>
        </View>
      </Fragment>
    )
  }
}

export default Header
