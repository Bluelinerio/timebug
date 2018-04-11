// @flow
import * as React             from 'react'
import {
  View,
  Text,
}                             from 'react-native'
import styles                 from '../../styles/dashbaord.styles'
import Meditator              from '../../../../components/Meditator'
import YesNoButton            from '../../../../components/YesNoButton'
import HighlighRow            from '../../../../components/HighlighRow'
import { hotPink }            from '../../../../constants/colors'

const AppInstructions = ({onPress} : {onPress: ()=>void }) => (
  <View style={styles.dashboardCard}>
    <View style={styles.suggestionRow}>
      <HighlighRow> 
        <Text style={[styles.suggestionText, styles.strong, { 
          textAlign: 'center', 
          color: hotPink
        }]}>
          {`Not sure where to start?\n`}
        </Text>
        <Meditator />
        <View style={{
          flexDirection:'row',
          justifyContent:'center',
          alignItems: 'center',
        }}>
          <YesNoButton
            title={'Read more'}
            onPress={onPress}
          />
        </View>
      </HighlighRow>
    </View>
  </View>
)

export default AppInstructions