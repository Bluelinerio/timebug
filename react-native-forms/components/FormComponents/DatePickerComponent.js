// @flow
import React, { useState, useCallback, useMemo } from 'react'
import { TouchableOpacity, Text, View, Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import Component from './Component'
import FormElementHeader from './FormElementHeader'
import styles from '../../styles'
import type { SelectStyle, ItemType } from './../../types/formTypes'
import moment from 'moment'

type Props = {
  value: string,
  onChange: string => any,
  formStyles: any,
  customProps: {
    filter: (Array<ItemType>) => Array<ItemType>
  },
  field: {
    content: {
      text: string,
      items: Array<{ text: string, value: string }>
    },
    options?: {
      default?: string,
      label?: string,
      repeats?: string,
      style?: SelectStyle
    }
  },
  formValue: any,
  __extraProps: {
    editObjectId: string,
    filterFunction?: (Array<any>) => Array<any>
  }
}

class DatePicker extends Component<Props> {
  _onValueChange = (event, itemValue) => {
    if (!itemValue) return
    this.onBaseChange(moment(itemValue).format())
  }

  render() {
    const {
      field: { content, options },
      formStyles = {},
      __extraProps = {},
      customProps = {},
      showModal,
      toggle,
      renderValue,
      parsedValue
    } = this.props

    const { style: staticStyles = {} } = options

    const textStyle = {
      ...formStyles.textStyle,
      ...(staticStyles.formHeaderText ? staticStyles.formHeaderText : {})
    }

    return (
      <React.Fragment>
        <FormElementHeader text={content.text} textStyle={textStyle} />
        {options.label && options.label.length > 0 && (
          <Text style={[styles.componentSubtitle, formStyles.textStyle]}>
            {options.label}
          </Text>
        )}
        <TouchableOpacity
          style={[
            styles.datePickerContainer,
            staticStyles.pickerContentContainer
              ? staticStyles.pickerContentContainer
              : {}
          ]}
          onPress={toggle}
        >
          <Text style={textStyle}>{renderValue}</Text>
        </TouchableOpacity>
        {Platform.OS === 'ios' ||
          (showModal && (
            <DateTimePicker
              value={parsedValue}
              mode={'date'}
              display="default"
              onChange={this._onValueChange}
              minimumDate={moment()
                .startOf('d')
                .toDate()}
            />
          ))}
      </React.Fragment>
    )
  }
}

const DatePickerContainer = props => {
  const [showModal, setShowModal] = useState(false)

  const toggle = useCallback(() => {
    setShowModal(!showModal)
  }, [showModal, setShowModal])

  const renderValue = useMemo(() => {
    if (props.value) return moment(props.value).format(`MM/DD/YYYY`)
    else return moment().format(`MM/DD/YYYY`)
  }, [props.value])

  const parsedValue = useMemo(() => {
    if (props.value) return new Date(props.value)
    return new Date()
  }, [props.value])

  return (
    <DatePicker
      {...props}
      showModal={showModal}
      toggle={toggle}
      renderValue={renderValue}
      parsedValue={parsedValue}
    />
  )
}

export default DatePickerContainer
