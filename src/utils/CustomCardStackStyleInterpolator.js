/* @flow */

import { I18nManager } from 'react-native';

import type {
  NavigationSceneRendererProps,
  NavigationScene,
  AnimatedViewStyleProp
} from 'react-navigation/src/TypeDefinition';

/**
 * Utility that builds the style for the card in the cards stack.
 *
 *     +------------+
 *   +-+            |
 * +-+ |            |
 * | | |            |
 * | | |  Focused   |
 * | | |   Card     |
 * | | |            |
 * +-+ |            |
 *   +-+            |
 *     +------------+
 */

/**
 * Render the initial style when the initial layout isn't measured yet.
 */
function forInitial(
  props: NavigationSceneRendererProps
): AnimatedViewStyleProp {
  const { navigation, scene } = props;

  const focused = navigation.state.index === scene.index;
  const opacity = focused ? 1 : 0;
  // If not focused, move the scene far away.
  const translate = focused ? 0 : 1000000;
  return {
    opacity,
    transform: [{ translateX: translate }, { translateY: translate }]
  };
}

/**
 * Standard iOS-style slide in from the right.
 */
function forHorizontal(
  props: NavigationSceneRendererProps
): AnimatedViewStyleProp {
  const { layout, position, scene, scenes } = props;

  if (!layout.isMeasured) {
    return forInitial(props);
  }

  const lastIndex = scenes.length - 1;
  const activeScene =
    scenes.find((item: NavigationScene) => item.isActive) || {};
  const scenesActiveIndex = scenes.findIndex(
    (item: NavigationScene) => item === activeScene
  );
  const scenesCurrentIndex = scenes.findIndex(
    (item: NavigationScene) => item === scene
  );
  const activeIndex = activeScene.index;
  const index = scene.index;
  const isBack = !scenes[lastIndex].isActive;
  const width = layout.initWidth;

  const translateX = {
    inputRange: [index - 1, index, index + 1],
    outputRange: I18nManager.isRTL
      ? ([-width, 0, width * 0.3]: Array<number>)
      : ([width, 0, width * -0.3]: Array<number>)
  };

  let opacity = {
    inputRange: ([
      index - 1,
      index - 0.99,
      index + 0.03,
      index + 0.99,
      index + 1
    ]: Array<number>),
    outputRange: ([0, 1, 1, 0.85, 0]: Array<number>)
  };

  if (isBack) {
    if (scenesCurrentIndex === lastIndex) {
      translateX.inputRange[0] = activeIndex;
      opacity.inputRange[0] = activeIndex;
      opacity.inputRange[1] = activeIndex + 0.01;
    } else if (
      index === activeIndex &&
      scenesCurrentIndex === scenesActiveIndex
    ) {
      translateX.inputRange[2] = lastIndex;
      opacity.inputRange[4] = lastIndex;
      opacity.inputRange[3] = lastIndex - 0.01;
    } else if (scenesCurrentIndex > scenesActiveIndex) {
      return {
        opacity: 0
      };
    }
  }

  return {
    opacity: position.interpolate(opacity),
    transform: [
      {
        translateX: position.interpolate(translateX)
      }
    ]
  };
}

/**
 * Standard iOS-style slide in from the bottom (used for modals).
 */
function forVertical(
  props: NavigationSceneRendererProps
): AnimatedViewStyleProp {
  const { layout, position, scene, scenes } = props;

  if (!layout.isMeasured) {
    return forInitial(props);
  }

  const lastIndex = scenes.length - 1;
  const activeScene =
    scenes.find((item: NavigationScene) => item.isActive) || {};
  const scenesActiveIndex = scenes.findIndex(
    (item: NavigationScene) => item === activeScene
  );
  const scenesCurrentIndex = scenes.findIndex(
    (item: NavigationScene) => item === scene
  );
  const activeIndex = activeScene.index;
  const index = scene.index;
  const isBack = !scenes[lastIndex].isActive;
  const height = layout.initHeight;

  let opacity = {
    inputRange: ([
      index - 1,
      index - 0.99,
      index + 0.03,
      index + 0.99,
      index + 1
    ]: Array<number>),
    outputRange: ([0, 1, 1, 0.85, 0]: Array<number>)
  };

  const translateY = {
    inputRange: ([index - 1, index, index + 1]: Array<number>),
    outputRange: ([height, 0, 0]: Array<number>)
  };

  if (isBack) {
    if (scenesCurrentIndex === lastIndex) {
      translateY.inputRange[0] = activeIndex;
      opacity.inputRange[0] = activeIndex;
      opacity.inputRange[1] = activeIndex + 0.01;
    } else if (
      index === activeIndex &&
      scenesCurrentIndex === scenesActiveIndex
    ) {
      translateY.inputRange[2] = lastIndex;
      opacity.inputRange[4] = lastIndex;
      opacity.inputRange[3] = lastIndex - 0.01;
    } else if (scenesCurrentIndex > scenesActiveIndex) {
      return {
        opacity: 0
      };
    }
  }

  return {
    opacity: position.interpolate(opacity),
    transform: [
      {
        translateY: position.interpolate(translateY)
      }
    ]
  };
}

/**
 * Standard Android-style fade in from the bottom.
 */
function forFadeFromBottomAndroid(
  props: NavigationSceneRendererProps
): AnimatedViewStyleProp {
  const { layout, position, scene, scenes } = props;

  if (!layout.isMeasured) {
    return forInitial(props);
  }

  const lastIndex = scenes.length - 1;
  const activeScene =
    scenes.find((item: NavigationScene) => item.isActive) || {};
  const scenesActiveIndex = scenes.findIndex(
    (item: NavigationScene) => item === activeScene
  );
  const scenesCurrentIndex = scenes.findIndex(
    (item: NavigationScene) => item === scene
  );
  const activeIndex = activeScene.index;
  const index = scene.index;
  const isBack = !scenes[lastIndex].isActive;
  let inputRange = [index - 1, index, index + 0.99, index + 1];

  if (isBack) {
    if (scenesCurrentIndex === lastIndex) {
      inputRange[0] = activeIndex;
    } else if (
      index === activeIndex &&
      scenesCurrentIndex === scenesActiveIndex
    ) {
      inputRange[2] = lastIndex - 0.01;
      inputRange[3] = lastIndex;
    } else if (scenesCurrentIndex > scenesActiveIndex) {
      return {
        opacity: 0
      };
    }
  }

  const opacity = position.interpolate({
    inputRange,
    outputRange: ([0, 1, 1, 0]: Array<number>)
  });

  const translateX = 0;
  const translateY = position.interpolate({
    inputRange,
    outputRange: ([50, 0, 0, 0]: Array<number>)
  });

  return {
    opacity,
    transform: [
      {
        translateX
      },
      {
        translateY
      }
    ]
  };
}

/**
 *  fadeIn adn fadeOut
 */
function forFade(props: NavigationSceneRendererProps): AnimatedViewStyleProp {
  const { layout, position, scene, scenes } = props;

  if (!layout.isMeasured) {
    return forInitial(props);
  }

  const lastIndex = scenes.length - 1;
  const activeScene =
    scenes.find((item: NavigationScene) => item.isActive) || {};
  const scenesActiveIndex = scenes.findIndex(
    (item: NavigationScene) => item === activeScene
  );
  const scenesCurrentIndex = scenes.findIndex(
    (item: NavigationScene) => item === scene
  );
  const activeIndex = activeScene.index;
  const index = scene.index;
  const isBack = !scenes[lastIndex].isActive;
  let inputRange = [index - 1, index, index + 1];

  if (isBack) {
    if (scenesCurrentIndex === lastIndex) {
      inputRange[0] = activeIndex;
    } else if (
      index === activeIndex &&
      scenesCurrentIndex === scenesActiveIndex
    ) {
      inputRange[2] = lastIndex;
    } else if (scenesCurrentIndex > scenesActiveIndex) {
      return {
        opacity: 0
      };
    }
  }

  const opacity = position.interpolate({
    inputRange,
    outputRange: ([0, 1, 1]: Array<number>)
  });

  return {
    opacity
  };
}

function canUseNativeDriver(): boolean {
  // The native driver can be enabled for this interpolator animating
  // opacity, translateX, and translateY is supported by the native animation
  // driver on iOS and Android.
  return true;
}

export default {
  forHorizontal,
  forVertical,
  forFadeFromBottomAndroid,
  forFade,
  canUseNativeDriver
};
