// @flow
import * as React from 'react'
import { Text, View }  from 'react-native'
import styles          from '../styles'
import dashboardStyles from '../../styles/dashboard.styles'
import Button          from '../../../components/Button'

export type Props = {
  title: string,
  buttonTitle: string,
  backgroundColor: string,
  textColor: string,
  buttonOnPress: () => void
}

const WorkbookDoneScreen = ({
  backgroundColor,
  textColor,
  title,
  buttonTitle,
  buttonOnPress
}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor
        }
      ]}
    >
      <View style={styles.messageContainer}>
        <Text
          style={[
            dashboardStyles.title,
            dashboardStyles.strong,
            { color: 'white' }
          ]}
        >
          {title}
        </Text>
        <Text style={[dashboardStyles.suggestionText, dashboardStyles.strong, { color: 'white' }]}>
          {
            'Regret was rated highest of a list of negative emotions in fulfilling five functions: (1) making sense of the world, (2) avoiding future negative behaviors, (3) gaining insight, (4) achieving social harmony, and (5) improving ability to approach desired opportunities (presumably because we regret past passivity).'
          }
        </Text>
      </View>
      <View style={[styles.absoluteContainer]}>
        <Button
          onPress={buttonOnPress}
          text={buttonTitle}
          backgroundColor={'white'}
          textColor={textColor}
        />
      </View>
    </View>
  )
}

export default WorkbookDoneScreen
