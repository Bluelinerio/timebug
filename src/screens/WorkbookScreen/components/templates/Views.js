//@flow
import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from '../../styles/templates'
import SwipablyDiscardableRow from '../../../../components/SwipablyDiscardableRow'

type Item = {
  key: string,
  input: React.Node,
  buttons: Array<{
    click: () => void,
    label: string,
    type: string
  }>
}

export const RowWithoutButtons = ({ key, input, buttons }: Item) => {
  return (
    <SwipablyDiscardableRow
      key={key}
      onClose={() => {
        buttons && buttons.length && buttons[0].click && buttons[0].click()
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          marginVertical: 10
        }}
      >
        {input}
      </View>
    </SwipablyDiscardableRow>
  )
}

export const ErrorLabel = ({ style, text }: { style: any, text: string }) => (
  <Text accessibilityLiveRegion="polite" style={style}>
    {text}
  </Text>
)

export const Label = ({ style, text }: { style: any, text: string }) => (
  <Text style={style}>{text}</Text>
)

export const HelpLabel = ({ style, text }: { style: any, text: string }) => (
  <Text style={style}>{text}</Text>
)

export const AddButton = ({
  key,
  text,
  onPress,
  disabled
}: {
  key: string,
  text: string,
  onPress: () => void,
  disabled: boolean
}) => (
  <TouchableOpacity
    disabled={disabled}
    key={key}
    style={styles.listAddButton}
    onPress={onPress}
  >
    <Icon name="add" size={32} color="black" />
    <Text style={{}}>{text}</Text>
  </TouchableOpacity>
)

export const ItemContainer = ({
  children
}: {
  children: React.Node | Array<React.Node>
}) => <View>{children}</View>

export const ListContainer = ({
  children,
  style
}: {
  children: React.Node | Array<React.Node>,
  style: {}
}) => (
  <View
    style={[
      style,
      {
        flex: 1
      }
    ]}
  >
    {children}
  </View>
)
