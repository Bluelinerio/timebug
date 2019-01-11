//@flow
import React                            from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import CustomImage                      from '../../../../components/CustomImage'
import styles                           from '../../styles/ToolStyles'

export type ToolButtonProps = {
  onPress: () => any,
  title: string,
  step: any,
  subtitle: string,
  content: string,
  source: string,
  containerBackgroundColor: string,
  textStyle: any,
  tool: any,
}

class ToolButton extends React.PureComponent<ToolButtonProps> {
  _onPress = () => {
    const { onPress, step, tool } = this.props
    onPress({ step, tool })
  }

  render() {
    const {
      title,
      subtitle,
      content,
      source,
      containerBackgroundColor,
      textStyle,
    } = this.props
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View
          style={[styles.button, { backgroundColor: containerBackgroundColor }]}
        >
          <View style={styles.mainComponent}>
            <View style={styles.mainComponentTopRow}>
              <View style={[styles.buttonImageContainer]}>
                <CustomImage style={[styles.buttonImage]} source={source} />
              </View>
              <View style={[styles.buttonTextContainer]}>
                <Text style={[styles.stepText, styles.buttonText, textStyle]}>
                  {title}
                </Text>
                <Text
                  style={[styles.stepTitleText, styles.buttonText, textStyle]}
                >
                  {subtitle}
                </Text>
              </View>
            </View>
            <View style={[styles.container, styles.mainComponentBottomRow]}>
              <Text style={[styles.subtitle, styles.buttonText, textStyle]}>
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
