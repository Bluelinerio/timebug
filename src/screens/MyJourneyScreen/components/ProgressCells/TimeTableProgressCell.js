// @flow
import * as React                  from 'react'
import { 
  View, 
  Dimensions,
  Platform
}                                  from 'react-native'
import styles, {
  scrollViewHorizontalPadding
}                                  from './styles/ProgressCell.style'
import OnLayout                    from '../../../../components/OnLayout'
import HighlighRow                 from '../../../../components/HighlighRow'
import HorizontalScrollView        from '../../../../components/HorizontalScrollView'
import TimeSpentOnPillarsComponent from '../TimeSpentOnPillarsComponent'
import Header                      from './CellHeader'

const TimeTableProgressCell = ({ pillars }) => (
  pillars ?
    (<View style={styles.container}>
      <Header title="Your weekly Timetable" titleColor="black" />
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
                width > 0 ? <TimeSpentOnPillarsComponent pillars={pillars}/> : null
              }
            />
          </HighlighRow>
        }
      </HorizontalScrollView>
  </View>)
  : null
)

export default TimeTableProgressCell