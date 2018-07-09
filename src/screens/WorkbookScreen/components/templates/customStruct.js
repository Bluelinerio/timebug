import React from 'react'
import { View, Text, Keyboard } from 'react-native'
import Struct from './Struct'

export default ({ hidden, stylesheet, changedPage, ...rest }) => {
  let pagesRef = null
  if (hidden) {
    return null
  }
  return (
    <Struct
      {...{
        styles: stylesheet,
        changedPage,
        ...rest
      }}
    />
  )
}
