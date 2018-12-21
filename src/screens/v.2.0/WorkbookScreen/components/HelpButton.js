// @flow
import React                 from 'react'
import { TouchableOpacity }  from 'react-native'
import SvgIcon               from '../../../../components/SvgIcon'
import styles, { svgStyles } from '../styles'

export type Props = {
  step: string,
  goToHelpScreen: () => any,
  helpButtonContainerStyle?: any,
  iconStyle: any,
  hasHelpSlides: boolean,
  icon: string,
  barStyle: any,
}

class HelpButton extends React.PureComponent<Props> {
  _onPress = () => {
    const { step, goToHelpScreen } = this.props
    goToHelpScreen(step)
  }

  render() {
    const {
      helpButtonContainerStyle = {},
      iconStyle = {},
      hasHelpSlides,
      icon,
      barStyle,
    } = this.props

    return (
      <TouchableOpacity
        style={[
          styles.helperButton,
          helpButtonContainerStyle,
          styles.sidebarButton,
          barStyle,
        ]}
        onPress={this._onPress}
        disabled={hasHelpSlides ? false : true}
      >
        <SvgIcon
          name={icon}
          {...(hasHelpSlides ? iconStyle : svgStyles.disabled)}
        />
      </TouchableOpacity>
    )
  }
}

export default HelpButton
