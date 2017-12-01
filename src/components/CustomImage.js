// @flow
import React      from 'react';
import { Image, } from "react-native";
import SVGImage   from "./SVGImage";

type Props = {
  styles: any,
  imageUri: string,
}

export default ({ style, imageUri }: Props) => {
  const testID= 'step_picture'
  if (imageUri && imageUri.endsWith('svg'))
    return <SVGImage
      style={[style, {backgroundColor: 'transparent'}]}
      source={{ uri: imageUri }}
      scrollEnabled={false}
      testID={testID}
    />;
      return <Image source={{ uri: imageUri }} style={style} testID={testID} />
}
