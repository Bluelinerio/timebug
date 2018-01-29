import React from 'react';
import { View, Text, Keyboard } from 'react-native';
import StrucFormPage from './StrucFormPage';

export default ({hidden, stylesheet, changedPage, ...rest}) => {
  let pagesRef = null;
  if (hidden) {
    return null;
  }
  return (
    <StrucFormPage {...{
      styles: stylesheet,
      changedPage,
      ...rest,
    }} />
  )
}