// @flow
import React, { PureComponent } from 'react'
import { StatusBar, ScrollView, LayoutAnimation } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import PagninatedCarouselContainer from '../containers/PagninatedCarouselContainer'
import Version from '../containers/Version'
import DashboardCellsContainer from '../containers/DashboardCellContainer'
import SuggestionCellContainer from '../containers/SuggestionCellContainer'
import styles from '../styles'
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style'
import Banner from './Banner'
import Space from './Space'

export default class HomeScreenComponent extends PureComponent {
  state = {
    showMore: true
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
          {this.state.showMore && (
            <SuggestionCellContainer
              onClose={() =>
                this.setState(
                  {
                    showMore: false
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
          <PagninatedCarouselContainer
            itemWidth={itemWidth}
            sliderWidth={sliderWidth}
          />
          <DashboardCellsContainer />
          <Space />
          <Version />
        </ScrollView>
      </SafeAreaView>
    )
  }
}
