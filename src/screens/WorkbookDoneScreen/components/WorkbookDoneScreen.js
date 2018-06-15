// @flow
import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import dashboardStyles from '../../styles/dashboard.styles'
import Button from '../../../components/Button'
import WorkbookIndicator from '../../../components/WorkbookIndicator'

const white = '#FEFEFE'
export type Props = {
  title: string,
  buttonTitle: string,
  backgroundColor: string,
  insightText: string,
  nextStepMotivationText: string,
  button: {
    onPress: () => void,
    text: string,
    textColor: string
  }
}

const WorkbookDoneScreen = ({
  backgroundColor,
  title,
  button,
  insightText,
  nextStepMotivationText,
  isSynchingFormData
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
      <View style={[styles.messageContainer]}>
        <Text
          style={[
            dashboardStyles.title,
            dashboardStyles.strong,
            { color: white, textAlign: 'left', marginBottom: 30 }
          ]}
        >
          {title}
        </Text>
        {
          !isSynchingFormData 
            ? <Text style={styles.suggestionText}>
                  {
                    insightText && 
                      <Text>
                        <Text style={dashboardStyles.strong}>{`Did You Know?\n`}</Text>
                        <Text>{`${insightText}'\n\n`}</Text>
                      </Text>
                  }
                  <Text style={dashboardStyles.strong}>{"What's next?\n"}</Text>
                  {nextStepMotivationText}
              </Text>
            : <WorkbookIndicator />
        }
      </View>
      <View>
        {
          !isSynchingFormData
            && <Button backgroundColor={white} {...button} />
        }
      </View>
    </View>
  )
}

export default WorkbookDoneScreen

const styles = StyleSheet.create({
  suggestionText: {
    ...StyleSheet.flatten(dashboardStyles.suggestionText),
    color: white
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  messageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
