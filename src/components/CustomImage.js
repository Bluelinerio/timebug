// @flow
import React     from 'react'
import { Image } from 'react-native'
import SVGImage  from './SVGImage'

type Props = {
  style: any,
  source: string,
}


/**
 * @class CustomImage
 * This class is used to render url SVG's, all step icons are built using this class
 */
class CustomImage extends React.PureComponent<Props> {
  render() {
    const { source, style, ...rest } = this.props
    return source && source.endsWith('svg') ? (
      <SVGImage
        style={[style, { backgroundColor: 'transparent' }]}
        source={source}
        scrollEnabled={false}
      />
    ) : (
      <Image source={{ uri: source }} style={style} {...rest} />
    )
  }
}

export default CustomImage
