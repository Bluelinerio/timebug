import React from 'react';
import CustomTextInput from './CustomTextInput';

type Props = Object & {
  stylesheet: any,
};
export default function customTextBox({ stylesheet, ...rest }: Props) {
  if (rest.hidden) {
    return null;
  }
  return (
    <CustomTextInput
      {...{
        ...rest,
        styles: stylesheet,
      }}
    />
  );
}
