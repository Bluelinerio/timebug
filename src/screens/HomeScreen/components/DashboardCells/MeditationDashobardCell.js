// @flow
import * as React from 'react'
import { View, Text } from 'react-native'
import styles         from '../../../styles/dashbaord.styles'
import Meditator      from '../../../../components/Meditator'
import YesNoButton    from '../../../../components/YesNoButton'
import HighlighRow    from '../../../../components/HighlighRow'
import { hotPink }    from '../../../../constants/colors'


const MeditationDashobardCell = ({
  title, onPress
}: {
  title: string,
  onPress: () => void
}) => (
  <View style={styles.dashboardCard}>
    <View style={styles.suggestionRow}>
      <HighlighRow style={styles.bigSuggestionWithText}>
        <Text
          style={[
            styles.suggestionText,
            styles.strong,
            {
              textAlign: 'center',
              color: hotPink
            }
          ]}
        >
          {title}
        </Text>
        <Meditator />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <YesNoButton title={'I want to Meditate'} onPress={onPress} />

        </View>
      </HighlighRow>
    </View>
  </View>
)
export default MeditationDashobardCell
