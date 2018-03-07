// @flow
import * as React             from 'react'
import {
  View,
} from 'react-native'
import LinearGradient         from 'react-native-linear-gradient'
import { whiteGradientColors } from '../constants/colors'

const GradientContainer = ({startColor, endColor, children, style, reverse, opacity }) => (
  <LinearGradient
    style={[style, { opacity: opacity }]}
    colors={ reverse 
      ? [ endColor, startColor ]
      : [ startColor, endColor ] 
    }
    start={{ x: 1, y: 0 }}
		end={{ x: 0, y: 1 }}
  >
  {children}
  </LinearGradient>
)

GradientContainer.defaultProps = {
  ...whiteGradientColors,
  style: {		
    flex: 2,
    borderRadius: 6,
  },
  opacity: 1,
  reverse: false,
}

export default ({ children, ...rest }) => (
  <GradientContainer {...rest}>
    <View>
      {children}
    </View>
  </GradientContainer>
)