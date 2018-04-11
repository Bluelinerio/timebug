// @flow
import React from 'react'
import { Image } from 'react-native'
import SVGImage from './SVGImage'

type Props = {
  style: any,
  source: { uri: string }
}

const CustomImage = (props: Props) => {
  const { source, style, ...rest } = props
  return source && source.uri.endsWith('svg') ? (
    <SVGImage
      style={[style, { backgroundColor: 'transparent' }]}
      source={source}
      scrollEnabled={false}
      {...rest}
    />
  ) : (
    <Image source={source} style={style} {...rest} />
  )
}

export default CustomImage