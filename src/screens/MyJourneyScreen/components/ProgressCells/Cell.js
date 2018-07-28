// @flow
import * as React                  from 'react'
import { 
  View, 
  Dimensions,
  Platform
}                                  from 'react-native'
import styles, {
  scrollViewHorizontalPadding,
}                                  from '../../../styles/dashboard.styles'
import OnLayout                    from '../../../../components/OnLayout'
import HighlighRow                 from '../../../../components/HighlighRow'

const Cell = ({component: Component, ...rest}) => (
    <View style={styles.container}>
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
                width > 0 ? <Component {...rest}/> : null
              }
            />
          </HighlighRow>
        }
  </View>
)

export default Cell