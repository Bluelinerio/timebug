// @flow
import * as React             from 'react'
import { 
  Image, 
  View, 
  Text, 
  TouchableOpacity, 
  Dimensions,
  Platform
}                             from 'react-native'
import styles, {
  scrollViewHorizontalPadding,
  grayColor
}                             from './styles/ProgressCell.style'
import OnLayout               from '../../../../components/OnLayout'
import HighlighRow            from '../../../../components/HighlighRow'
import HorizontalScrollView   from '../../../../components/HorizontalScrollView'
import PhaseProgressContainer from '../../../../containers/ProgressContainerChart'
import Header                 from './CellHeader'

const ProgressDashboardCell = () => (
  <View style={styles.container}>
    <Header title="Progress Chart" titleColor="black" />
    <HorizontalScrollView horizontalPadding={scrollViewHorizontalPadding}>
      {
        <HighlighRow
          style={[
            styles.pieChartContainer,
            {
              width:
                Dimensions.get('window').width - scrollViewHorizontalPadding - 20
            },
            Platform.OS === 'ios' ? {}
            : {
              marginHorizontal: scrollViewHorizontalPadding
            }
          ]}
        >
          <OnLayout
            render={({ width }) =>
              width > 0 ? <PhaseProgressContainer maxColumns={3} width={width}/> : null
            }
          />
        </HighlighRow>
      }
    </HorizontalScrollView>
  </View>
)

export default ProgressDashboardCell