// @flow
import * as React from 'react'
import { StyleSheet, 
    View, 
    Platform,
    Image
} from 'react-native'

import { 
  AnimatedView, 
  simpleInterpolation, 
  directInterpolation
} from './components/Animations'
import { icon, lifevisionCollage } from '../../resources/images/index';

type Props = {
  visible:boolean
}

type LogoState = {
    visible: boolean
}

export default class Logo extends React.Component<Props, LogoState> {
  state = {
    visible: true
  }
  makeVisible() {
    this.setState({ visible: true })
  }

  render(): React.Node {
    const {visible} = this.state

    if (!visible) {
        return <View />
    }
    const frontAnimations = {
        opacity: directInterpolation(),
        transform: [{ rotate: simpleInterpolation('0deg', '-15deg') }]
    }
    const backAnimations = {
        opacity: directInterpolation(),
        transform: [{ rotate: simpleInterpolation('0deg', '15deg') }]
    }
    return (
        <View style={[styles.container]}>
          <Image 
            style={[{
              width: 200,
              height: 200,
              marginHorizontal: 10,
              marginVertical: 10,
              alignSelf:'center',
              resizeMode: 'contain',
            }]} 
            source={icon}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row'
    },
    picture: {
        backgroundColor: '#E0F5FF',
        borderColor: 'white',
        borderRadius: Platform.OS === 'ios' ? 7 : 0
    },
    frontPicture: {
        width: 105,
        height: 130,
        borderTopWidth: 10,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 42,
        zIndex: 200,
        shadowColor: '#0091FF',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.54,
        shadowRadius: 9,
        elevation: 4
    },
    backPicture: {
        width: 91,
        height: 113,
        borderTopWidth: 10,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 49,
        position: 'relative',
        top: 20,
        left: -10
    }
})
