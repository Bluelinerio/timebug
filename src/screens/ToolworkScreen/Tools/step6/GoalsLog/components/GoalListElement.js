// @flow
import React from 'react'
import moment from 'moment'
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles, { completedColor, incompleteColor } from '../styles'
import { DATE_FORMAT } from '../../../../../../constants/constants'

export type Props = {
  completed: boolean,
  deleted: boolean,
  name: string,
  goalName: string,
  estimate: string,
  onPress: () => any
}

const chopString = (string: string, max = 40) => {
  const arr = string.split(' ')
  if (arr.length === 1) return `${arr[0].substring(0, max)} ...`
  /* eslint-disable-next-line no-unused-vars */
  const [_, resultString] = arr.reduce(
    ([length, str], word) => {
      if (length + word.length >= max) return [length + word.length, str]
      return [length + word.length, `${str} ${word}`]
    },
    [0, '']
  )
  const finalString = `${resultString.trim()} ...`
  return finalString
}

class GoalListElement extends React.PureComponent<Props> {
  render() {
    const { completed, onPress, goalName, name, estimate, deleted } = this.props
    return (
      !deleted && (
        <TouchableOpacity
          style={styles.goalListElementContainer}
          onPress={onPress}
        >
          <View style={styles.goalListElementLeftBlock}>
            <Icon
              name={
                completed
                  ? 'ios-checkmark-circle'
                  : 'ios-checkmark-circle-outline'
              }
              size={32}
              color={completed ? completedColor : incompleteColor}
            />
          </View>
          <View style={[styles.goalListElementMainContent]}>
            <View style={styles.goalListRow}>
              <Text style={[styles.goalListText, styles.goalListTitle]}>
                {goalName && goalName.length >= 36
                  ? `${chopString(goalName, 36)}`
                  : `${goalName}`}
              </Text>
            </View>
            <View style={[styles.goalListRow, styles.goalListBottomRow]}>
              <View>
                <Text style={styles.goalListText}>
                  {name && name.length >= 40
                    ? `${chopString(name, 40)}`
                    : `${name ? name : 'No name'}`}
                </Text>
              </View>
              <View style={styles.goalListSubElement}>
                <Text style={styles.goalListText}>
                  {completed
                    ? 'Completed!'
                    : `Estimate: ${
                        estimate && moment(estimate).isValid()
                          ? moment(estimate).format(DATE_FORMAT)
                          : estimate && estimate.length >= 20
                          ? `${chopString(estimate, 20)}`
                          : `${estimate ? estimate : 'None set'}`
                      }`}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )
    )
  }
}

export default GoalListElement
