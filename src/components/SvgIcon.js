//@flow
import React from 'react'
import SvgIcon from 'react-native-svg-icon'
import svgs from '../resources/images/svgIcons'

export type IconProps = {
  name: string,
  fill: string,
  height: string | number,
  width: string | number,
  viewBox?: string,
}

class Icon extends React.PureComponent<IconProps> {
  render() {
    return <SvgIcon {...this.props} svgs={svgs} />
  }
}

export default Icon
