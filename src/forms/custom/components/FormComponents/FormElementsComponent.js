import React             from 'react'
import { View }          from 'react-native'
import uuid              from 'uuid/v4'
import styles            from '../../styles'
import FormElementHeader from './FormElementHeader'
import FormPicker        from './FormPicker'
import { DISABLE }       from './../../forms/constants'
import types             from '../../forms/types'
import { stripKeys }     from '../../utils/stripKeys'

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
  componentDidUpdate = prevProps => {
    const { field, value, onChange } = this.props
    if (!value && field.key !== prevProps.key) {
      const initialValue = this._buildInitialValue(this.props)
      onChange({ ...initialValue, _id: uuid() })
    }
  }

  componentDidMount = () => {
    const { value, onChange } = this.props
    if (!value) {
      const initialValue = this._buildInitialValue(this.props)
      onChange({ ...initialValue, _id: uuid() })
    }
  }

  _buildInitialValue = (props: Props) => {
    const { field: { options } } = props
    const { childTypes } = options
    const initialValue = Object.keys(childTypes).reduce((value, index) => {
      const child = childTypes[index]
      const { key, type } = child
      return type === types.select &&
        options &&
        options.repeats &&
        options.repeats === DISABLE
        ? {
          ...value,
          [key]: this._handleSelectTypeValue(child, index, props),
        }
        : {
          ...value,
          [key]: {
            key,
            index,
            _model: child,
            _id: uuid(),
            value: child.options ? child.options.default : undefined,
          },
        }
    }, {})
    return initialValue
  }

  _handleSelectTypeValue = (child, indexKey, props) => {
    const { key, content: { items = [] } } = child
    const filteredValues = this._selectFilterRoot(props, items)
    return {
      key,
      index: indexKey,
      _model: child,
      _id: uuid(),
      value:
        filteredValues && filteredValues.length > 0
          ? filteredValues[0].value
          : undefined,
    }
  }

  _selectFilterRoot = (props, items) => {
    const { value } = props
    const currentItems = this._getFormItems(value)
    const filtered = items
      ? items.filter(item => {
        const filter = ci => ci.value === item.value
        const isSelected = currentItems && currentItems.find(filter)
        return !isSelected
      })
      : items
    return filtered
  }

  _getFormItems = formValue => {
    const mappedObjects =
      formValue &&
      formValue.map(val => {
        const strippedObject = stripKeys(val)
        const mappedObject = Object.values(strippedObject).map(value => {
          return (
            value &&
            value.value && {
              _id: value._id,
              value: value.value,
            }
          )
        })

        return mappedObject[0]
      })

    return mappedObjects
  }

  _onChange = key => changedValue => {
    const { value = {}, onChange } = this.props

    const valueForKey = value[key]
    const newValue = {
      ...value,
      [key]: {
        ...valueForKey,
        value: changedValue,
      },
    }

    onChange({
      ...newValue,
    })
  }

  render() {
    const { field: { content, options }, value, formStyles = {} } = this.props
    const { childTypes } = options

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
                const inValue = value && value[field.key]
                const formValue = value

                return (
                  <FormPicker
                    key={field.key}
                    field={field}
                    value={inValue ? inValue.value : ''}
                    formStyles={formStyles}
                    formValue={formValue}
                    onChange={this._onChange(field.key, key)}
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
