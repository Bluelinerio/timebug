// @flow
import * as React from 'react'
import {
  Image,
  View,
  Text, 
  SafeAreaView
} from 'react-native'
import TouchableBounce 			  from 'react-native/Libraries/Components/Touchable/TouchableBounce'
import glamorous              from 'glamorous-native'
import LinearGradient         from 'react-native-linear-gradient';

const GradientWithTwoColors = ({startColor='#004E69', endColor ='#0D0D0D', children, style }) => (
  <LinearGradient
    style={{		
      flex: 1
    }}
    colors={[startColor, endColor]}
    start={{ x: 0, y: 0 }}
		end={{ x: 0, y: 1 }}
  >
  {children}
  </LinearGradient>
);

const PlayButton = () => <View />
const CountdownLabel = ({text = 'meditation'}) => <Text>{text}</Text>

export default class MeditationScreen extends React.PureComponent<> {
  render() {
    return (
      <GradientWithTwoColors>
        <SafeAreaView>
          <PlayButton />
          <CountdownLabel text='meditate' />
        </SafeAreaView>
      </GradientWithTwoColors>
    )
  }
}
