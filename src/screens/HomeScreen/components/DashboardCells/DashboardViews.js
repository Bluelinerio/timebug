// @flow
import * as React from 'react'
import { View, Text, Platform, LayoutAnimation } from 'react-native'
import glamorous from 'glamorous-native'

import styles from '../../styles/dashbaord.styles'
import SwipablyDiscardableRow from '../../../../components/SwipablyDiscardableRow'
import HighlighRow from '../../../../components/HighlighRow'
import {
  hotPink,
  deepBlue,
  lessSaturatedDeepBlue
} from '../../../../constants/colors'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons//Ionicons'

export const triggerAnimation = () =>
  LayoutAnimation.configureNext({
    duration: 400,
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 0.7
    },
    update: {
      type: LayoutAnimation.Types.spring,
      springDamping: 0.7
    }
  })
export const Title = ({ title, ...rest }: { title: string }) => (
  <Text
    {...rest}
    style={[
      styles.suggestionText,
      styles.strong,
      {
        textAlign: 'center',
        color: hotPink
      }
    ]}
  >
    {title}
  </Text>
)

export const Container = glamorous.view({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
})

export const ContainerHotizontal = glamorous.view({
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

export const CellContainer = ({
  onClose,
  ...rest
}: {
  onClose: () => void
}) => (
  <SwipablyDiscardableRow onClose={onClose}>
    <View style={styles.dashboardCard}>
      <View style={styles.suggestionRow}>
        <HighlighRow style={styles.bigSuggestionWithText} {...rest} />
      </View>
    </View>
  </SwipablyDiscardableRow>
)

export const VectorEntypoButton = props => (
  <Entypo.Button
    backgroundColor={'transparent'}
    size={48}
    color={Platform.OS === 'ios' ? deepBlue : lessSaturatedDeepBlue}
    style={{
      alignSelf: 'center',
      marginVertical: 10,
      marginHorizontal: 20
    }}
    {...props}
  />
)
export const VectorIoniconsButton = props => (
  <Ionicons.Button
    backgroundColor={'transparent'}
    size={props.size | 48}
    color={Platform.OS === 'ios' ? deepBlue : lessSaturatedDeepBlue}
    style={{
      alignSelf: 'center',
      marginVertical: 10,
      marginHorizontal: props.hasOwnProperty('onPress') ? 20 : 2
    }}
    {...props}
  />
)

//export const YesButton = props => <VectorEntypoButton name="check" {...props} />

export const YesDisabled = props => (
  <VectorIoniconsButton name="ios-checkmark-outline" size={30} {...props} />
)

export const YesButton = props => (
  <VectorIoniconsButton name="ios-checkmark-outline" {...props} />
)
export const NoButton = props => (
  <VectorIoniconsButton name="ios-close-outline" {...props} />
)
