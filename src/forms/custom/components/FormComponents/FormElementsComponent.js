// @vendor
import React from 'react'
import { View } from 'react-native'
import uuid from 'uuid/v4'
// app
import styles from '../../styles'
import FormElementHeader from './FormElementHeader'
import FormPicker from './FormPicker'
import types from '../../forms/types'

type Props = {
  value: Array<any>,
  onChange: () => any,
  field: {
    content?: any,
    options?: any,
  },
  formStyles: any,
  currentFormValue: Object,
}
type State = {}

class FormElementsComponent extends React.PureComponent<Props, State> {

  constructor(props) {
    super(props)
  }

  _onChange = (key, index) => (changedValue) => {
    const { value = {}, onChange, field: { options } } = this.props
    const { childTypes } = options
    const valueToSave = Object.values(childTypes).reduce((prev, model) => {
      const savedValue = value && value[model.key]

      return {
        ...prev,
        [model.key]: {
          key: model.key,
          _model: model,
          _id: uuid(),
          ...((savedValue && (savedValue.key === model.key)) ? savedValue : {}),
        },
      }
    }, {})

    const valueToChange = {
      ...valueToSave,
      [key]: {
        ...valueToSave[key],
        value: changedValue,
        index,
      },
    }

    onChange({
      ...valueToChange,
      _id: uuid(),
    })
  }

  render() {
    const { field: { content, options }, value, formStyles = {} } = this.props
    const { childTypes /*referencedValue*/ } = options

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <FormElementHeader
            text={content.text}
            textStyle={formStyles.textStyle}
          />
        </View>
        <View style={[styles.container, styles.listFormContainer]}>
          <View style={styles.listElementContainer}>
            {childTypes &&
              Object.keys(childTypes).map(key => {
                const field = childTypes[key]
                const { type } = field
                const inValue = value && value[field.key]
                const formValue = value

                return (
                  <FormPicker
                    key={field.key}
                    field={field}
                    value={inValue ? inValue.value: ''}
                    formStyles={formStyles}
                    formValue={formValue}
                    onChange={this._onChange(field.key, key)}
                    {...(type === types.select
                      ? {
                        __extraProps: {
                          filterFunction: this._selectFilter(key),
                        },
                      }
                      : {})}
                  />
                )
              })}
          </View>
        </View>
      </View>
    )
  }
}

export default FormElementsComponent
