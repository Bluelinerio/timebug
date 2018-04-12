// @flow
import React from 'react'
import { StyleSheet, Platform, Text, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { APPBAR_HEIGHT, STATUSBAR_HEIGHT } from '../constants'

const HeaderTitle = ({ style, ...rest }: { style: any }) => (
  <Text
    numberOfLines={1}
    style={[styles.title, style]}
    accessibilityTraits="header"
    {...rest}
  />
)

type Props = {
  color: string,
  title: string
}

const ScrollingHeaderPageHeaderComponent = ({ color, title }: Props) => (
  <View
    style={[
      styles.platformContainerStyles,
      StyleSheet.absoluteFillObject,
      {
        height: APPBAR_HEIGHT() + STATUSBAR_HEIGHT,
        backgroundColor: color,
        justifyContent: 'center'
      }
    ]}
  >
    <SafeAreaView forceInset={{ top: 'always', bottom: 'never' }}>
      <HeaderTitle>{title}</HeaderTitle>
    </SafeAreaView>
  </View>
)

export default ScrollingHeaderPageHeaderComponent

//const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56
const styles = StyleSheet.create({
  title: {
    fontSize: Platform.OS === 'ios' ? 17 : 20,
    fontWeight: Platform.OS === 'ios' ? '700' : '500',
    color: Platform.OS === 'ios' ? '#F7F7F7' : '#FFF',
    textAlign: Platform.OS === 'ios' ? 'center' : 'left',
    marginHorizontal: 16
  },
  platformContainerStyles: Platform.select({
    ios: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#A7A7AA'
    },
    android: {
      shadowColor: 'black',
      shadowOpacity: 0.1,
      shadowRadius: StyleSheet.hairlineWidth,
      shadowOffset: {
        height: StyleSheet.hairlineWidth
      },
      elevation: 4
    }
  })
})
