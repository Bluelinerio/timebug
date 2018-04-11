// @flow
import React, { PureComponent } from 'react'
import { StatusBar, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import PagninatedCarouselContainer from '../containers/PagninatedCarouselContainer'
import Version from '../containers/Version'
import DashboardCellsContainer from '../containers/DashboardCellContainer'
import MoreButtonContainer from '../containers/MoreButtonContainer'
import styles from '../styles'
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style'
import Banner from './Banner'
import Space from './Space'

export default class HomeScreenComponent extends PureComponent {
  render() {
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <StatusBar barStyle="dark-content" backgroundColor={'white'} />
        <ScrollView style={{ flex: 1 }}>
          <Banner />
          <PagninatedCarouselContainer
            itemWidth={itemWidth}
            sliderWidth={sliderWidth}
          />
          <DashboardCellsContainer show={true} />
          <MoreButtonContainer />
          <Space />
          <Version />
        </ScrollView>
      </SafeAreaView>
    )
  }
}
