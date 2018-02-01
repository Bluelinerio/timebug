// @flow
import * as React from 'react';
import {View, Image, StyleSheet, SafeAreaView, Dimensions, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient'

import type { Slide }       from '../../services/cms';
import Theme                from './components/Theme'
import Text                 from './components/Text'
import Button               from './components/Button'
import type { ScreenProps } from './components/Types';

type Props = ScreenProps & {
  slides:[Slide],
  dismiss:() => void
}

export default class Walkthrough extends React.Component<Props> {
  onIndexChanged = (index: number) => {
      //slides[index].makeVisible();
  }
  renderSlide = (slide: Slide, index: number) => (
    <LinearGradient
      key={index}
      colors={['#008EBC', '#005587']} 
      style={StyleSheet.absoluteFillObject, {
        height, 
      }}
    >
      <StatusBar 
        translucent 
        barStyle="light-content"
        backgroundColor={'white'}
      />
      <SafeAreaView >
        <View style={styles.slide} >
          <Text type='header2' style={styles.title} theme={theme}>
            {slide.title}
          </Text>
          {slide.description && 
            <Text 
              type='header3' 
              style={styles.description}
            >
              {slide.description}
            </Text>
          }
          {slide.image && 
            <Image source={slide.image} />
          }
        </View>
      </SafeAreaView>
    </LinearGradient>
  )

  render(): React.Node {
    const { renderPagination, onIndexChanged} = this;
    const { slides } = this.props
    debugger;
    return (
      <Swiper loop={false} {...{ renderPagination, onIndexChanged }} >
        { slides.map(this.renderSlide) }
      </Swiper>
    );
  }
  renderPagination = (index: number, total: number, context: Swiper): React.Node => {
      const isFirst = index === 0;
      const isLast = index === total - 1;
      const { dismiss } = this.props
      const goBack = () => context.scrollBy(-1);
      const goForward = () => context.scrollBy(1);
      const leftButtoOnPress = isFirst ? dismiss : goBack
      const rightButtonOnPress = isLast ? dismiss : goForward
      return (
        <View style={styles.footer} >
          <Button 
            label={isFirst ? 'Close' : 'Back'} 
            onPress={leftButtoOnPress} 
          />
          <Button 
            label={isLast ? 'Start' : 'Next'} 
            onPress={rightButtonOnPress} 
            primary={true} 
            transparent={true} 
          />
        </View>
      );
  }
}

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const baseSpacing = Math.floor(width * 0.065)
const largeVerticalSpacing  = Math.floor(height * 0.1)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: baseSpacing
  },
  slide: {
    paddingHorizontal: baseSpacing,
    marginTop: largeVerticalSpacing + StatusBar.currentHeight,
    flexGrow: 1
  },
  title: {
    marginTop: largeVerticalSpacing,
    marginBottom: height * 0.2,
    color: 'white'
  },
  description: {
    justifyContent: 'center',
    color: 'white'
  }
})

const theme = {
  ...Theme,
  typography: {
    color: "#666666",
    bold: "Helvetica-Bold",
    semibold: "Helvetica",
    normal: "Helvetica-Medium",
    light: "Helvetica-Light",
    header1: {
      fontSize: 48,
      lineHeight: 58,
      fontFamily: "Helvetica"
    },
    header2: {
      fontSize: Math.ceil(height * 0.035),
      lineHeight: 43,
      fontFamily: "Helvetica-Bold"
    },
    header3: {
      fontSize: Math.ceil(height * 0.03),
      lineHeight: 28,//standard
      fontFamily: "Helvetica-Bold"
    },
    large: {
      fontSize: 14,
      lineHeight: 21,
      fontFamily: "Helvetica"
    },
    regular: {
      fontSize: 14,
      lineHeight: 21,
      fontFamily: "Helvetica"
    },
    small: {
      fontSize: 14,
      lineHeight: 18,
      fontFamily: "Helvetica"
    },
    micro: {
      fontSize: 8,
      lineHeight: 8,
      fontFamily: "Helvetica"
    }
  },
  spacing: {
    tiny: 8,
    small: 16,
    base: 24,
    large: 48,
    xLarge: 64
  }
}