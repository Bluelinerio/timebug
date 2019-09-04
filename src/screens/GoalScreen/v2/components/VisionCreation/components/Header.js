// @flow
import React, { Fragment } from 'react'
import { View, Text } from 'react-native'
import styles from '../styles'

type Props = {
  title: string,
  subtitle?: string,
}

class Header extends React.PureComponent<Props> {
  render() {
    const { title, subtitle = null } = this.props
    return (
      <Fragment>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.titleContainer}>
              <Text style={styles.headerTitle}>{title}</Text>
            </View>
            {!!subtitle && (
              <View style={styles.subtitleContainer}>
                <Text style={styles.headerSubtitle}>{subtitle}</Text>
              </View>
            )}
          </View>
        </View>
      </Fragment>
    )
  }
}

export default Header
