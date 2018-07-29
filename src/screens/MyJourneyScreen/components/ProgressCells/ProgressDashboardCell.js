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
import PhaseProgressContainer from '../../../../containers/PhaseProgressContainer'
import Header                 from './CellHeader'

const PieProgressDashboardCell = () => (
  <View style={styles.container}>
    <Header title="Progress" titleColor="black" />
    <HorizontalScrollView horizontalPadding={scrollViewHorizontalPadding}>
      {
        <HighlighRow
          style={[
            styles.leaderboardContainer,
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
              width > 0 ? <PhaseProgressContainer width={width}/> : null
            }
          />
          <Text
            style={[
              styles.suggestionText,
              {
                color: grayColor,
                textAlign: 'center'
              }
            ]}
          >
            {`The legend of your progress`}
          </Text>
        </HighlighRow>
      }
    </HorizontalScrollView>
  </View>
)

export default PieProgressDashboardCell