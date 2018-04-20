// @flow
import * as React from 'react'
import { View, Text, Platform } from 'react-native'
import styles from '../../styles/dashbaord.styles'
import SwipablyDiscardableRow from '../../../../components/SwipablyDiscardableRow'
import HighlighRow from '../../../../components/HighlighRow'
import { hotPink } from '../../../../constants/colors'
import Entypo from 'react-native-vector-icons/Entypo'

import { deepBlue, lessSaturatedDeepBlue } from '../../../../constants/colors'

const EmotionCheckinCellComponent = ({
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
  <SwipablyDiscardableRow onClose={onClose}>
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
            <Entypo.Button
              name="emoji-neutral"
              backgroundColor={'transparent'}
              size={48}
              color={Platform.OS === 'ios' ? deepBlue : lessSaturatedDeepBlue}
              style={{
                alignSelf: 'center',
                marginVertical: 10,
                marginHorizontal: 20
              }}
              title={button.title}
              onPress={button.onPress}
            />
          </View>
        </HighlighRow>
      </View>
    </View>
  </SwipablyDiscardableRow>
)

export default EmotionCheckinCellComponent
