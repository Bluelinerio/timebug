// @flow
import * as React                  from 'react'
import { 
  Image, 
  View, 
  Text, 
  TouchableOpacity, 
  Dimensions,
  Platform
}                                  from 'react-native'
import styles, {
  scrollViewHorizontalPadding,
  grayColor
}                                  from '../../../styles/dashboard.styles'
import OnLayout                    from '../../../../components/OnLayout'
import HighlighRow                 from '../../../../components/HighlighRow'
import HorizontalScrollView        from '../../../../components/HorizontalScrollView'
import TimeSpentOnPillarsComponent from '../TimeSpentOnPillarsComponent'

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
      <Text style={[styles.title, styles.strong, { color: titleColor, fontSize: 24 }]}>
        {title}
      </Text>
    </View>
    <TouchableOpacity>
      {source && <Image style={styles.avatar} source={source} />}
    </TouchableOpacity>
  </View>
)

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