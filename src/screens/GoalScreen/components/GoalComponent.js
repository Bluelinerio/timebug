import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import type { Goal } from '../types'
import styles from '../styles'
import { hashCode } from '../../../utils/hash'
import Icon from 'react-native-vector-icons/FontAwesome'

type GoalComponentProps = {
  goal: Goal,
  onPress: () => any
}

class GoalComponent extends React.PureComponent<GoalComponentProps> {
  constructor(props) {
    super(props)
    this.state = {
      showList: false,
      dummy: [
        {
          title: 'Spend less money on stupid things',
          completed: false
        },
        {
          title: 'Some Random step',
          completed: true
        }
      ]
    }
  }

  _listTrigger = () => {
    this.setState({ showList: !this.state.showList })
  }

  _onPress = () => {
    const { onPress } = this.props
    onPress()
  }

  render() {
    const { goal } = this.props
    const { showList } = this.state
    return (
      <View style={styles.goalFullContainer}>
        <View style={styles.goalContainer}>
          <TouchableOpacity
            onPress={this._onPress}
            style={styles.goalContainerMainArea}
          >
            <Text style={[styles.goalTitle, styles.text, styles.leftText]}>
              {goal.goal}
            </Text>
            <Text style={[styles.goalType, styles.text, styles.leftText]}>
              {goal.goalTypes}
            </Text>
          </TouchableOpacity>
          <View style={styles.goalContainerSecondaryArea}>
            <View style={styles.goalContainerPercentageContainer}>
              <Text
                style={[
                  styles.percentageText,
                  styles.text,
                  styles.justifiedText
                ]}
              >
                20%
              </Text>
            </View>
            <TouchableOpacity
              onPress={this._listTrigger}
              style={styles.goalContainerButton}
            >
              <View style={showList ? styles.rotateIcon : {}}>
                <Icon name="caret-right" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.hiddenView, showList ? {} : styles.hidden]}>
          {this.state.dummy.map(step => {
            return (
              <View key={hashCode(JSON.stringify(step))}>
                <Text>{step.title}</Text>
                <Text>{step.completed}</Text>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}

export default GoalComponent
