// @flow

import { Animated } from 'react-native';
export type AnimationEffect = 'skew'| 'rise'| 'zoom' | 'flip'| 'slide'
export type AnimateStyleFnProps = { 
	progress:Animated.Value, 
	effect:AnimationEffect, 
	style: any
}

export const animateStyle = ({progress, effect, style} : AnimateStyleFnProps) => {
  switch (effect) {
    case 'skew':
      style.transform = [{
        skewX: progress.interpolate({
          inputRange: [-0.75, 0, 0.75],
          outputRange: ['45deg', '0deg', '-45deg'],
        }),
      }];
      break;

    case 'rise':
      style.transform = [{
        translateY: progress.interpolate({
          inputRange: [-0.5, 0, 0.5],
          outputRange: [50, 0, -50],
        }),
      }];

      style.opacity = progress.interpolate({
        inputRange: [-0.5, 0, 0.5],
        outputRange: [0, 1, 0],
      });
      break;

    case 'zoom':
      style.transform = [{
        scale: progress.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [4, 1, 0],
        }),
      }];

      style.opacity = progress.interpolate({
        inputRange: [-0.25, 0, 1],
        outputRange: [0, 1, 1],
      });
      break;

    case 'flip':
      style.transform = [{
        rotate: progress.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: ['360deg', '0deg', '-360deg'],
        }),
      }];
      break;

    case 'slide':
      style.transform = [{
        translateX: progress.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [-100, 0, 100],
        }),
      }];
      break;
  }
  return style;
}