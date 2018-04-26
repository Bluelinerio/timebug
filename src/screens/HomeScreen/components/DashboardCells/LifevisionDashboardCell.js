// @flow
import * as React             from 'react'
import { 
  Image, 
  View, 
  Text, 
  TouchableOpacity, 
  Dimensions 
}                             from 'react-native'
import styles, {
  scrollViewHorizontalPadding,
  grayColor
}                             from '../../../styles/dashboard.styles'
import OnLayout               from '../../../../components/OnLayout'
import HighlighRow            from '../../../../components/HighlighRow'
import HorizontalScrollView   from '../../../../components/HorizontalScrollView'
import PhaseProgressContainer from '../../../../containers/PhaseProgressContainer'

type HeaderProps = {
  date: string,
  source: string,
  title: string,
  titleColor: string
}

const Header = ({ date, source, title, titleColor }: HeaderProps) => (
  <View style={styles.header}>
    <View>
      {date && <Text style={styles.date}>{date}</Text>}
      <Text style={[styles.title, styles.strong, { color: titleColor }]}>
        {title}
      </Text>
    </View>
    <TouchableOpacity>
      {source && <Image style={styles.avatar} source={source} />}
    </TouchableOpacity>
  </View>
)

const LifevisionDashboardCell = () => (
  <View style={styles.container}>
    <Header title="Life Vision" titleColor="black" />
    <HorizontalScrollView horizontalPadding={scrollViewHorizontalPadding}>
      {
        <HighlighRow
          style={[
            styles.leaderboardContainer,
            {
              width:
                Dimensions.get('window').width - scrollViewHorizontalPadding - 20,
              paddingLeft: 10
            }
          ]}
        >
          <OnLayout
            render={({ width }) =>
              width > 0 ? <PhaseProgressContainer width={width} /> : null
            }
          />
          <Text
            style={[
              styles.suggestionText,
              {
                color: grayColor
              }
            ]}
          >
            {`The legend of your progress through your journey`}
          </Text>
        </HighlighRow>
      }
    </HorizontalScrollView>
  </View>
)

export default LifevisionDashboardCell

// import {
//   MEDITATION,
//   SELF_ASSESSMENT,
//   VISION_CREATION,
//   COMPLETE
// } from '../../../../services/cms'
// export type Props = {
//   phaseColors: {
//     [MEDITATION]: string,
//     [SELF_ASSESSMENT]: string,
//     [VISION_CREATION]: string,
//     [COMPLETE]: string
//   }
// }
