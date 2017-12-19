// @flow
import React      from 'react';
import { Image, } from "react-native";
import SVGImage   from "./SVGImage";

type Props = {
  style: any,
  imageUri: string,
}

export default (props: Props) => {
  const { imageUri, style, ...rest } = props;
  return (imageUri && imageUri.endsWith('svg')) ? <SVGImage
      style={[style, { backgroundColor: 'transparent'}]}
      source={{ uri: imageUri }}
      scrollEnabled={false}
      {...rest}
    /> : <Image source={{ uri: imageUri }} style={style} {...rest} />
}
