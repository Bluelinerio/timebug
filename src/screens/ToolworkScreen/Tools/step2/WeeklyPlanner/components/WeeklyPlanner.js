// @flow
import React                                               from 'react'
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native'
import { FormInput }                                       from 'react-native-elements'
import moment                                              from 'moment'
import uuid                                                from 'uuid/v4'
import Icon                                                from 'react-native-vector-icons/Ionicons'
import { DATE_FORMAT, SIMPLIFIED_DATE_FORMAT }             from '2020_constants/constants'
import { isNumber }                                        from '2020_utils/formatHelpers'
import type { WeekDataElement }                            from '2020_types/types'
import styles, { iconStyle }                               from '../styles'

export type WeekDataArray = Array<WeekDataElement>

export type Props = {
  navigation: any,
  tool: any,
  storeAwardData: (value: any, tool: any) => any,
  actionData?: {
    moreTimeActivities: Array<string>,
    lessTimeActivities: Array<string>,
  },
  weekData: WeekDataArray,
  overrideWeekData: any,
  _currentWeek: any,
  allWeeksData: any,
}

class WeeklyPlanner extends React.PureComponent<Props> {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      weekData: this._buildWeekData(props),
      displayValue: props.overrideWeekData
        ? props.overrideWeekData.value
        : props._currentWeek,
      maxValue: this._calculateMaxValue(
        props,
        props.overrideWeekData
          ? props.overrideWeekData.value
          : props._currentWeek
      ),
    }
  }

  _calculateMaxValue = (props: Props, weekData: any) => {
    const { tool: { config } } = props
    const { max } = config
    const newMax = Object.values(weekData).reduce((maxValue, area) => {
      const { value } = area
      return maxValue - value
    }, max)
    return newMax
  }

  componentDidUpdate = prevProps => {
    if (prevProps.overrideWeekData !== this.props.overrideWeekData)
      return this.setState({
        weekData: this._buildWeekData(this.props),
        displayValue: this.props.overrideWeekData
          ? this.props.overrideWeekData.value
          : this.props._currentWeek,
        maxValue: this._calculateMaxValue(
          this.props,
          this.props.overrideWeekData
            ? this.props.overrideWeekData.value
            : this.props._currentWeek
        ),
      })
  }

  _buildWeekData = (props: Props) => {
    const { weekData, overrideWeekData } = props
    if (!overrideWeekData) return weekData
    const newWeekData = weekData.map(data => {
      const { key, current, ideal } = data
      return {
        ...data,
        current: {
          ...current,
          ...overrideWeekData.value[key],
        },
        diff: -(overrideWeekData.value[key].value - ideal.value),
      }
    })
    return newWeekData
  }

  _onStoreData = () => {
    Alert.alert(
      'Set weekly timelog',
      `If you set your weekly timelog, you won't be able to use the daily tool this week anymore`,
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'OK', onPress: this._onConfirm },
      ],
      { cancelable: false }
    )
  }

  _onConfirm = () => {
    const { allWeeksData, storeAwardData, overrideWeekData, tool } = this.props
    const { displayValue } = this.state
    if (overrideWeekData) {
      const newValue = allWeeksData.filter(
        value => value._id !== overrideWeekData._id
      )
      storeAwardData(
        [
          ...newValue,
          {
            ...overrideWeekData,
            value: displayValue,
            update_date: moment()
              .toDate()
              .getTime(),
          },
        ],
        tool
      )
    } else
      storeAwardData(
        [
          ...allWeeksData,
          {
            value: displayValue,
            date: moment()
              .startOf('isoWeek')
              .format(DATE_FORMAT),
            creation_date: moment()
              .toDate()
              .getTime(),
            update_date: null,
            _id: uuid(),
          },
        ],
        tool
      )
    this._toggleEditing()
  }

  _onChange = (v: string, key: string) => {
    const val = v === '' ? 0 : v
    if (!isNumber(val)) return
    let value = parseInt(val)
    const { displayValue, maxValue } = this.state
    const { tool: { config: { elementMax } } } = this.props
    const currentValueForKey = displayValue[key].value
    if (value > maxValue + currentValueForKey)
      value = maxValue + currentValueForKey
    const newDisplayValue = {
      ...displayValue,
      [key]: {
        ...displayValue[key],
        value: value > elementMax ? elementMax : value,
      },
    }
    this.setState({
      displayValue: newDisplayValue,
      maxValue: this._calculateMaxValue(this.props, newDisplayValue),
    })
  }

  _toggleEditing = () => {
    this.setState({ isEditing: !this.state.isEditing })
  }

  render() {
    const { actionData = {} } = this.props
    const { isEditing, weekData = [], displayValue } = this.state
    return (
      <ScrollView
        style={[styles.scrollView, styles.fullWidth]}
        contentContainerStyle={styles.scrollView}
      >
        <View style={[styles.container, styles.padded]}>
          <View style={styles.weekTitleContainer}>
            <Text style={styles.weekTitle}>
              Week of{' '}
              {`${moment()
                .startOf('isoWeek')
                .format(SIMPLIFIED_DATE_FORMAT)}`}{' '}
              - Day {`${moment().format('E')}`}/7
            </Text>
          </View>
          <View style={styles.weeklyToolContentContainer}>
            <View style={styles.weeklytableContainer}>
              <View style={styles.table}>
                <View style={styles.row}>
                  <View style={styles.categoryColumn}>
                    <Text style={[styles.columnTitle, styles.categoryTitle]}>
                      Life category
                    </Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.columnTitle}>This week</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.columnTitle}>Ideal week</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.columnTitle}>Diff</Text>
                  </View>
                </View>
                {weekData &&
                  weekData.map(element => {
                    const { ideal, current, key, diff } = element
                    const { text } = ideal
                    return (
                      <View key={key} style={styles.row}>
                        <View style={styles.categoryColumnText}>
                          <Text style={[styles.text, styles.categoryText]}>
                            {text}
                          </Text>
                        </View>
                        <View style={styles.column}>
                          {isEditing ? (
                            <FormInput
                              containerStyle={styles.sliderValueInputContainer}
                              inputStyle={styles.sliderValueInput}
                              keyboardType="numeric"
                              onChangeText={value => this._onChange(value, key)}
                              value={`${displayValue[key].value}`}
                            />
                          ) : (
                            <Text style={styles.text}>{current.value}h</Text>
                          )}
                        </View>
                        <View style={styles.column}>
                          <Text style={styles.text}>{ideal.value}h</Text>
                        </View>
                        <View style={styles.column}>
                          {diff === 0 ? (
                            <Icon
                              style={styles.icon}
                              name={'ios-checkmark-circle'}
                              {...iconStyle}
                            />
                          ) : (
                            <Text style={styles.text}>
                              {diff > 0 ? `+${diff}` : diff}
                            </Text>
                          )}
                        </View>
                      </View>
                    )
                  })}
              </View>
            </View>
            <View style={styles.buttonArea}>
              <TouchableOpacity
                onPress={this._toggleEditing}
                style={styles.button}
              >
                <Text style={[styles.buttonText]}>
                  {isEditing ? `Cancel` : 'Edit'}
                </Text>
              </TouchableOpacity>
              {isEditing && (
                <TouchableOpacity
                  onPress={this._onStoreData}
                  style={styles.button}
                >
                  <Text style={[styles.buttonText]}>Submit</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.actionsContainer}>
              <View style={styles.actionsToDoContainer}>
                <Text style={styles.actionTitle}>I need to do less of...</Text>
                <View style={styles.actionList}>
                  {actionData &&
                    actionData.lessTimeActivities &&
                    actionData.lessTimeActivities.map((activity, index) => (
                      <Text
                        key={index}
                        style={styles.actionText}
                      >{`- ${activity}`}</Text>
                    ))}
                </View>
              </View>
              <View style={styles.actionsToDoContainer}>
                <Text style={styles.actionTitle}>I need to do more of...</Text>
                <View style={styles.actionList}>
                  {actionData &&
                    actionData.moreTimeActivities &&
                    actionData.moreTimeActivities.map((activity, index) => (
                      <Text
                        key={index}
                        style={styles.actionText}
                      >{`- ${activity}`}</Text>
                    ))}
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default WeeklyPlanner
