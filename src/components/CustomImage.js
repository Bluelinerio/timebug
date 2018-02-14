// @flow
import React      from 'react';
import { Image, } from "react-native";
import SVGImage   from "./SVGImage";

type Props = {
  style: any,
  source: { 'uri': string }
}

export default (props: Props) => {
  const { source, style, ...rest } = props;
  if(!source.uri) {
    debugger;
  }
  return (source && source.uri.endsWith('svg')) ? <SVGImage
      style={[style, { backgroundColor: 'transparent'}]}
      source={source}
      scrollEnabled={false}
      {...rest}
    /> : <Image source={source} style={style} {...rest} />
}
