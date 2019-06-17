// Remove when file is used again
/* eslint-disable no-unused-vars */

// @flow

import * as React from 'react'
import { View, Text, Platform } from 'react-native'
import styles from '../../../styles/dashboard.styles'
import HighlighRow from '../../../../components/HighlighRow'
import {
  hotPink,
  deepBlue,
  lessSaturatedDeepBlue,
} from '../../../../constants/colors'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons//Ionicons'

export const Title = ({ title, ...rest }: { title: string }) => (
  <Text
    {...rest}
    style={[
      styles.suggestionText,
      styles.strong,
      {
        textAlign: 'center',
        color: hotPink,
      },
    ]}
  >
    {title}
  </Text>
)

type ParentComponentProps = {
  children: Array<React.ReactChild>,
}

export const Container = ({ children }: { children: ParentComponentProps }) => (
  <View>{children}</View>
)

export const ContainerHotizontal = ({
  children,
}: {
  children: ParentComponentProps,
}) => <View>{children}</View>

export const CellContainer = ({
  onClose,
  ...rest
}: {
  onClose: () => void,
}) => (
  <View style={styles.dashboardCard}>
    <View style={styles.suggestionRow}>
      <HighlighRow style={styles.bigSuggestionWithText} {...rest} />
    </View>
  </View>
)

export const VectorEntypoButton = props => (
  <Entypo.Button
    backgroundColor={'transparent'}
    size={48}
    color={Platform.OS === 'ios' ? deepBlue : lessSaturatedDeepBlue}
    style={{
      alignSelf: 'center',
      marginVertical: 10,
      marginHorizontal: 20,
    }}
    {...props}
  />
)

type VectorIoniconsButtonProps = {
  size: number,
}

export const VectorIoniconsButton = (props: VectorIoniconsButtonProps) => (
  <Ionicons.Button
    backgroundColor={'transparent'}
    size={props.size | 48}
    color={Platform.OS === 'ios' ? deepBlue : lessSaturatedDeepBlue}
    style={{
      alignSelf: 'center',
      marginVertical: 10,
      marginHorizontal: props.hasOwnProperty('onPress') ? 20 : 2,
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
