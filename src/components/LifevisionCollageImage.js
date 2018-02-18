import * as React from 'react'
import {
  Image,
  StyleSheet
} from 'react-native'
import { lifevisionCollage, backgroundImage } from '../resources/images'

export default (props) => (
  <Image 
    tintColor='ccc'
    style={[StyleSheet.absoluteFill, props.style || null ]} 
    source={lifevisionCollage}
    {...props}
  />
)