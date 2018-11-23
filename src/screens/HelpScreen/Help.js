// @flow
import * as React                                      from 'react'
import { View, Image }                                 from 'react-native'
import { SafeAreaView }                                from 'react-navigation'
import Swiper                                          from 'react-native-swiper'
import Gradient                                        from '../../components/Gradient'
import type { Slide }                                  from '../../services/cms'
import Text                                            from './components/Text'
import Button                                          from './components/Button'
import type { ScreenProps }                            from './components/Types'
import styles, { theme, gradientColors }               from './styles'
import { heightPercentage }                            from '../../utils/viewportCalculation'
import tron                                            from 'reactotron-react-native'

type Props = ScreenProps & {
  slides: [Slide],
  dismiss: () => void
}
type SlideProps = {
  slide: any
}

class GradientSlide extends React.PureComponent<SlideProps> {
  render() {
    const { slide } = this.props
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.screen}
      >
        <Gradient
          colors={[gradientColors.start, gradientColors.end]}
          style={styles.regularContainer}
        >
          <View style={styles.regularContainer}>
            <Text type="header2" style={styles.title} theme={theme}>
              {slide.title}
            </Text>
            {slide.description && (
              <Text type="header3" style={styles.description} theme={theme}>
                {slide.description}
              </Text>
            )}
            {slide.image && (
              <View style={styles.imageContainer}>
                <Image
                  source={slide.image}
                  resizeMode="contain"
                  style={styles.image}
                />
              </View>
            )}
          </View>
        </Gradient>
      </SafeAreaView>
    )
  }
}

export default class Help extends React.Component<Props> {
  onIndexChanged = () => {}

  render(): React.Node {
    const { renderPagination, onIndexChanged } = this
    const { slides } = this.props
    tron.log(heightPercentage(0.1))
    return (
      <Swiper loop={false} {...{ renderPagination, onIndexChanged }}>
        {slides.map(slide => (
          <GradientSlide key={`${slide.step}-${slide.order}`} slide={slide} />
        ))}
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
