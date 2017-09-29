// @flow
import React      from 'react';
import { Image, } from "react-native";
import SVGImage   from "react-native-svg-image";

type Props = {
  styles: any,
  imageUri: string,
}

export default ({ style, imageUri }: Props) => {

  if (imageUri && imageUri.endsWith('svg'))
    return <SVGImage
      style={style}
      source={{ uri: imageUri }}
    />;
  return <Image source={{ uri: imageUri }} style={style}/>

}
