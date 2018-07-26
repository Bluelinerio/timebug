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
import TimeSpentOnPillarsContainer from '../../containers/TimeSpentOnPillarsContainer'

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

const TimeTableProgressCell = () => (
  <View style={styles.container}>
    <Header title="Your ideal week" titleColor="black" />
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
              width > 0 ? <TimeSpentOnPillarsContainer width={width}/> : null
            }
          />
        </HighlighRow>
      }
    </HorizontalScrollView>
  </View>
)

export default TimeTableProgressCell