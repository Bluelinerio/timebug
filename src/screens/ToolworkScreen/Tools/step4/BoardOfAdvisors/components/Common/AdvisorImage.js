// @flow
import React                 from 'react'
import { Image }             from 'react-native'
import SvgIcon               from '2020_components/SvgIcon'
import styles, { iconStyle } from '../../styles/common'

type Props = {
  svg: string,
  imageSource: {
    uri: string,
  },
  imageStyle: any,
  svgStyle: {
    fill: string,
    height: string,
    width: string,
  },
}

class AdvisorImage extends React.PureComponent<Props> {
  render() {
    const { svg, imageSource, imageStyle, svgStyle } = this.props
    return (
      <React.Fragment>
        {imageSource ? (
          <Image
            style={[styles.advisorIcon, imageStyle ? imageStyle : {}]}
            source={imageSource}
          />
        ) : (
          <SvgIcon name={svg} {...{ ...iconStyle, ...(svgStyle || {}) }} />
        )}
      </React.Fragment>
    )
  }
}

export default AdvisorImage
