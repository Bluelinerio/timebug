//@flow
import React                   from 'react'
import { View, Text, Switch }  from 'react-native'
import moment                  from 'moment'
import uuid                    from 'uuid/v4'
import { DATE_FORMAT }         from '2020_constants/constants'
import MeditationTimer         from '../containers/MeditationTimerContainer'
import styles, { stylesStep1 } from '../styles'

export type MeditationCheckinComponentProps = {
  tool: {
    subtitle: string,
  },
  storeAwardData: (any, any) => any,
  data: { value: boolean, _id?: string, date?: string },
  daysInRowCount?: number,
  allToolValue: Array<{ value: boolean, _id?: string, date?: string }>,
}

class MeditationCheckinComponent extends React.PureComponent<
  MeditationCheckinComponentProps
> {
  _onValueChange = (value: any) => {
    const { tool, storeAwardData, allToolValue } = this.props
    const valueToday = allToolValue.find(
      val => val.date === moment().format(DATE_FORMAT)
    )
    if (valueToday && valueToday._id !== undefined && valueToday._id !== null) {
      const newData = allToolValue.filter(val => val._id !== valueToday._id)
      storeAwardData(
        [
          ...newData,
          {
            ...valueToday,
            timestamp: moment()
              .toDate()
              .getTime(),
            value,
          },
        ],
        tool
      )
    } else
      storeAwardData(
        [
          ...allToolValue,
          {
            value,
            _id: uuid(),
            date: moment().format(DATE_FORMAT),
            timestamp: moment()
              .toDate()
              .getTime(),
          },
        ],
        tool
      )
  }

  render() {
    const { tool, data = {}, daysInRowCount } = this.props
    return (
      <View style={[styles.container]}>
        <View style={styles.toolTitleContainer}>
          <Text style={styles.toolTitle}>
            {tool.subtitle || 'Did you meditate today?'}
          </Text>
        </View>
        <View style={styles.container}>
          {data &&
            data.value === true && (
              <View style={[styles.container, styles.captionContainer]}>
                <Text style={styles.caption}>
                  You already meditated today, check in tomorrow!
                </Text>
              </View>
            )}
          <MeditationTimer
            daysInRowCount={daysInRowCount}
            onTimerFinish={() => this._onValueChange(true)}
          />
        </View>
        <View style={[styles.container, styles.toolContentContainer]}>
          <View style={stylesStep1.switchContainer}>
            <Text style={stylesStep1.yesNoHint}>No</Text>
            <Switch
              disabled={data && data.value === true}
              value={data.value}
              onValueChange={this._onValueChange}
            />
            <Text style={stylesStep1.yesNoHint}>Yes</Text>
          </View>
          {data && data.value === true ? (
            <View>
              <Text style={stylesStep1.congratulations}>
                Good job!{' '}
                {daysInRowCount && daysInRowCount % 5 === 0
                  ? `- Keep going!`
                  : ''}
              </Text>
              <Text style={stylesStep1.streakText}>
                {daysInRowCount && daysInRowCount > 1
                  ? `Current Streak - ${daysInRowCount} days`
                  : ''}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    )
  }
}

export default MeditationCheckinComponent
