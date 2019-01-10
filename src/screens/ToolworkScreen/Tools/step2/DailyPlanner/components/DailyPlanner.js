import React           from 'react'
import { View, Text }  from 'react-native'
import moment          from 'moment'
import uuid            from 'uuid/v4'
import Form            from '2020_forms/components/Form'
import { DATE_FORMAT } from '2020_constants/constants'
import styles          from '../styles'

export type Props = {
  navigation: any,
  step: any,
  tool: any,
  data: any,
  storeAwardData: (value: any, tool: any) => any,
  formValue: {
    value: Array<any>,
  },
}

class DailyPlanner extends React.PureComponent<Props> {
  _onFinish = (data: any) => {
    const {
      tool,
      storeAwardData,
      data: toolData,
      navigation,
      formValue,
    } = this.props
    const toolValue = toolData ? toolData.value : []
    if (formValue) {
      const value = {
        ...formValue,
        value: data,
        timestamp: moment()
          .toDate()
          .getTime(),
      }
      const newData = toolValue.reduce((newValue, v) => {
        if (v._id === formValue._id) return [...newValue, value]
        return [...newValue, v]
      }, [])
      storeAwardData(newData, tool)
      navigation.goBack()
    } else {
      const value = {
        value: data,
        timestamp: moment()
          .toDate()
          .getTime(),
        date: moment().format(DATE_FORMAT),
        _id: uuid(),
      }
      const newData = [...(toolData ? toolData.value : []), value]
      storeAwardData(newData, tool)
      navigation.goBack()
    }
  }

  render() {
    const { step, tool, formValue } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>Today is {moment().format(`dddd, ${DATE_FORMAT}`)}</Text>
        </View>
        <Form
          key={tool.key}
          model={tool.form}
          value={formValue ? formValue.value : null}
          onFinish={this._onFinish}
          disableAnswers
          formStyles={tool.formStyles}
          extra={{
            step,
          }}
        />
      </View>
    )
  }
}

export default DailyPlanner
