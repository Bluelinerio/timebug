import * as React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import { deepBlue } from '../constants/colors'
import Markdown from '../Modules/Markdown'
import normalize from '../utils/normalizeText'

type Props = {
  title?: string,
  subtitle?: string,
  content: string,
  markdownStyles: any,
  androidStatusBarColor: string,
  titleColor: string,
  children: React.Node | [React.Node]
}

const ScrollingHeaderPageContentComponent = ({
  title,
  subtitle,
  content,
  markdownStyles,
  androidStatusBarColor,
  titleColor = deepBlue,
  children
}: Props): React.Node => (
  <View style={styles.content}>
    <StatusBar
      barStyle="light-content"
      backgroundColor={androidStatusBarColor}
    />
    {subtitle && <Text style={[styles.subtitle]}>{subtitle}</Text>}
    {title && (
      <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
    )}
    <Markdown markdownStyles={markdownStyles}>{content}</Markdown>
    {children}
  </View>
)

export default ScrollingHeaderPageContentComponent

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    marginBottom: 30,
    paddingHorizontal: 20
  },
  subtitle: {
    fontFamily: 'Helvetica',
    fontSize: normalize(20),
    fontWeight: '200',
    textAlign: 'left',
    paddingHorizontal: 20,
    paddingVertical: 20,
    color: deepBlue
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: normalize(28),
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 20,
    color: deepBlue
  }
})
