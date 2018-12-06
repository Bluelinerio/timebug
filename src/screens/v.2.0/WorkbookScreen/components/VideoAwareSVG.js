import React                from 'react'
import { TouchableOpacity } from 'react-native'
import SvgIcon              from '../../../../components/SvgIcon'
import styles               from '../styles'

export type Props = {
  icons: {
    [x: string]: string,
  },
  iconStyle: any,
  videoStatus: string,
  handle: () => any,
}

class VideoAwareSVG extends React.PureComponent<Props> {
  _onPress = () => {
    const { handle } = this.props
    handle()
  }

  render() {
    const { iconStyle, icons, videoStatus } = this.props
    return (
      <TouchableOpacity style={[styles.helperButton]} onPress={this._onPress}>
        <SvgIcon name={icons[videoStatus]} {...iconStyle} />
      </TouchableOpacity>
    )
  }
}

export default VideoAwareSVG
