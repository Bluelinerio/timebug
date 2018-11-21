// @flow
import * as React                        from 'react'
import {
  View,
  Image,
  StatusBar,
}                                        from 'react-native'
import { SafeAreaView }                  from 'react-navigation'
import Swiper                            from 'react-native-swiper'
import LinearGradient                    from 'react-native-linear-gradient'
import type { Slide }                    from '../../services/cms'
import Text                              from './components/Text'
import Button                            from './components/Button'
import type { ScreenProps }              from './components/Types'
import styles, { theme, gradientColors } from './styles'

type Props = ScreenProps & {
  slides: [Slide],
  dismiss: () => void
}

export default class Walkthrough extends React.Component<Props> {
  onIndexChanged = () => {}

  renderSlide = (slide: Slide, index: number) => (
    <LinearGradient
      key={index}
      colors={[gradientColors.start, gradientColors.end]}
      style={styles.screen}
    >
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={'transparent'}
      />
      <SafeAreaView>
        <View style={styles.container}>
          <Text type="header2" style={styles.title} theme={theme}>
            {slide.title}
          </Text>
          {slide.description && (
            <Text type="header3" style={styles.description} theme={theme}>
              {slide.description}
            </Text>
          )}
        </View>
      </SafeAreaView>
      {slide.image && (
        <Image
          source={slide.image}
          resizeMode="contain"
          style={styles.image}
        />
      )}
    </LinearGradient>
  )

  render(): React.Node {
    const { renderPagination, onIndexChanged } = this
    const { slides } = this.props
    return (
      <Swiper loop={false} {...{ renderPagination, onIndexChanged }}>
        {slides.map(this.renderSlide)}
      </Swiper>
    )
  }

  renderPagination = (
    index: number,
    total: number,
    context: Swiper
  ): React.Node => {
    const isFirst = index === 0
    const isLast = index === total - 1
    const { dismiss } = this.props
    const goBack = () => context.scrollBy(-1)
    const goForward = () => context.scrollBy(1)
    const leftButtoOnPress = isFirst ? dismiss : goBack
    const rightButtonOnPress = isLast ? dismiss : goForward
    return (
      <View style={styles.footer}>
        <Button label={isFirst ? 'Close' : 'Back'} onPress={leftButtoOnPress} />
        <Button
          label={isLast ? 'Start' : 'Next'}
          onPress={rightButtonOnPress}
          primary={true}
          transparent={true}
        />
      </View>
    )
  }
}
