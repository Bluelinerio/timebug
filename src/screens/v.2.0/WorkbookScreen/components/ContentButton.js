// @flow
import React                 from 'react'
import { TouchableOpacity }  from 'react-native'
import SvgIcon               from '../../../../components/SvgIcon'
import type { Sections }     from '../context/SectionContext'
import styles, { svgStyles } from '../styles'

export type Props = {
  iconStyle: any,
  icon: string,
  containerStyle?: any,
  changeSection: string => any,
  sections: Sections,
  selectedSection: string,
  ownSection: string,
  barStyle: any,
}

class ContentButton extends React.PureComponent<Props> {
  _onPress = () => {
    const { changeSection, ownSection } = this.props
    changeSection(ownSection)
  }

  render() {
    const {
      containerStyle = {},
      iconStyle = {},
      icon,
      ownSection,
      barStyle,
      selectedSection,
    } = this.props

    return (
      <TouchableOpacity
        style={[
          styles.sidebarButton,
          styles.helperButton,
          containerStyle,
          barStyle,
        ]}
        onPress={this._onPress}
        disabled={ownSection === selectedSection}
      >
        <SvgIcon
          name={icon}
          {...(selectedSection === ownSection ? svgStyles.selected : iconStyle)}
        />
      </TouchableOpacity>
    )
  }
}

export default ContentButton
