// @flow
import * as React from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles/dashbaord.styles'
//import Meditator from '../../../../components/Meditator'
import YesNoButton from '../../../../components/YesNoButton'
import HighlighRow from '../../../../components/HighlighRow'
import { hotPink } from '../../../../constants/colors'

const AppInstructionsCellComponent = ({
  button,
  title,
  onClose
}: {
  button: {
    onPress: () => void,
    title: string
  },
  title: string,
  onClose: () => void
}) => (
  <View style={styles.dashboardCard}>
    <View style={styles.suggestionRow}>
      <HighlighRow>
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <YesNoButton title={button.title} onPress={button.onPress} />
        </View>
      </HighlighRow>
    </View>
  </View>
)

export default AppInstructionsCellComponent
