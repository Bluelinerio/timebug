// @flow
import React, { PureComponent } from 'react'
import { StatusBar, ScrollView, LayoutAnimation } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import PaginatedCarouselContainer from '../containers/PaginatedCarouselContainer'
import Version from '../../../containers/Version'
import SuggestionCellContainer from '../containers/SuggestionCellContainer'
import styles from '../styles'
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style'
import Banner from './Banner'
import Insight from '../containers/InsightContainer'

export default class HomeScreenComponent extends PureComponent {
  state = {
    showSuggestions: true
  }
  render() {
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <StatusBar barStyle="dark-content" backgroundColor={'white'} />
        <ScrollView style={{ flex: 1 }}>
          <Banner />
          {this.state.showSuggestions && (
            <SuggestionCellContainer
              onClose={() =>
                this.setState(
                  {
                    showSuggestions: false
                  },
                  () =>
                    LayoutAnimation.configureNext({
                      duration: 400,
                      create: {
                        type: LayoutAnimation.Types.spring,
                        property: LayoutAnimation.Properties.scaleXY,
                        springDamping: 0.7
                      },
                      update: {
                        type: LayoutAnimation.Types.spring,
                        springDamping: 0.7
                      }
                    })
                )
              }
            />
          )}
          <Insight />
          <PaginatedCarouselContainer
            itemWidth={itemWidth}
            sliderWidth={sliderWidth}
          />
          <Version />
        </ScrollView>
      </SafeAreaView>
    )
  }
}
