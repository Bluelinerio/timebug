// @flow
import * as React                             from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Theme }                              from './Theme'
import type { BaseProps }                     from './Types'

type ButtonProps = BaseProps & {
  label: string,
  primary?: boolean,
  transparent?: boolean,
  disabled?: boolean,
  full?: boolean,
  onPress: () => mixed,
}

export default class Button extends React.Component<ButtonProps> {
  render(): React.Node {
    const { label, primary, disabled, transparent, onPress, style } = this.props
    const computedStyle = [styles.base]
    if (primary && !transparent) {
      computedStyle.push(styles.primary)
    }
    if (!primary || transparent) computedStyle.push(styles.transparent)
    computedStyle.push(style)
    return (
      <TouchableOpacity
        {...{
          onPress,
          style: computedStyle,
          disabled,
        }}
      >
        <Text
          style={[
            primary ? Theme.typography.large : Theme.typography.regular,
            {
              color: disabled
                ? 'transparent'
                : primary
                  ? transparent ? Theme.palette.primary : 'white'
                  : Theme.typography.color,
              fontSize: primary ? 16 : Theme.typography.regular.fontSize,
              fontFamily: Theme.typography.semibold,
            },
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  transparent: {
    opacity: 0.75,
  },
  primary: {
    shadowColor: 'rgba(0, 170, 255, 0.29)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 7,
  },
})
