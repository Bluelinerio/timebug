//@flow
import React          from 'react'
import styles         from '../styles/EntryStyles'
import { View, Text } from 'react-native'

type HeaderProps = {
  title: string,
  titleColor: string,
  style?: any,
}

const Header = ({ title, titleColor, style }: HeaderProps) => (
  <View style={styles.header}>
    <Text style={[styles.headerText, { color: titleColor, ...style }]}>
      {title}
    </Text>
  </View>
)

export default Header
