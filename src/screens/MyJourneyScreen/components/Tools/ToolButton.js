//@flow
import React                            from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import CustomImage                      from '../../../../components/CustomImage'
import styles                           from '../../styles/ToolStyles'
import { lockedColor, lockedTextColor } from '../../styles'

export type ToolButtonProps = {
  onPress: () => any,
  title: string,
  subtitle: string,
  content: string,
  source: string,
  containerBackgroundColor: string,
  textStyle: any,
  tool: any,
  locked: boolean,
}

class ToolButton extends React.PureComponent<ToolButtonProps> {
  _onPress = () => {
    const { onPress, tool } = this.props
    onPress({ tool })
  }

  _onLockedPress = () => {}

  render() {
    const {
      title,
      subtitle,
      content,
      source,
      containerBackgroundColor,
      textStyle,
      locked,
    } = this.props
    return (
      <TouchableOpacity onPress={locked ? this._onLockedPress : this._onPress}>
        <View
          style={[
            styles.button,
            {
              backgroundColor: locked ? lockedColor : containerBackgroundColor,
            },
          ]}
        >
          <View style={styles.mainComponent}>
            <View style={styles.mainComponentTopRow}>
              <View style={[styles.buttonImageContainer]}>
                <CustomImage style={[styles.buttonImage]} source={source} />
              </View>
              <View style={[styles.buttonTextContainer]}>
                <Text
                  style={[
                    styles.stepText,
                    styles.buttonText,
                    textStyle,
                    locked ? { color: lockedTextColor } : {},
                  ]}
                >
                  {title}
                </Text>
                <Text
                  style={[
                    styles.stepTitleText,
                    styles.buttonText,
                    textStyle,
                    locked ? { color: lockedTextColor } : {},
                  ]}
                >
                  {subtitle}
                </Text>
              </View>
            </View>
            <View style={[styles.container, styles.mainComponentBottomRow]}>
              <Text
                style={[
                  styles.subtitle,
                  styles.buttonText,
                  textStyle,
                  locked ? { color: lockedTextColor } : {},
                ]}
              >
                {content}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default ToolButton
