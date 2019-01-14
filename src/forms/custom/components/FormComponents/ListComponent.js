import React from 'react'
import { View, Text, Alert, TouchableOpacity } from 'react-native'
import FormElementHeader from './FormElementHeader'
import styles, {
  TEMPORARY_COLOR_FOR_BUTTONS,
  iconStyle,
  helperIconColorIfSelected,
} from '../../styles'
import FormPicker from './FormPicker'
import uuid from 'uuid/v4'
import types from '../../forms/types'
import SvgIcon from '../../../../components/SvgIcon'
import Icon from 'react-native-vector-icons/Ionicons'
import { DISABLE } from './../../forms/constants'

import tron from 'reactotron-react-native'

type Props = {
  value: Array<any>,
  onChange: () => any,
  field: {
    content?: any,
    options?: any,
  },
  formStyles: any,
}

type ValueElement = {
  _id: string,
  _model: any,
  [x: string]: {
    value: any,
    key: string,
  },
}

type State = {
  value: Array<ValueElement>,
  currentValue: ValueElement,
}

export const _stripKeys = (val: ValueElement) => {
  const metaKeys = ['_id', '_model']
  return Object.keys(val).reduce((prev, key) => {
    if (metaKeys.find(k => k === key)) return prev
    return {
      ...prev,
      [key]: val[key],
    }
  }, {})
}

const TextElement = ({
  element,
  index,
  formStyles = {},
  onEditPress,
  editObjectId,
}: {
  index: number,
  element: ValueElement,
  formStyles: any,
  onEditPress: () => any,
  editObjectId: string,
}) => {
  const strippedObject = _stripKeys(element)
  const text = Object.values(strippedObject)
    .filter(value => value.value !== null && value.value !== undefined)
    .map((value, ind) => {
      if (ind === 0) return `${index + 1} ) ${value.value}`
      return value.value
    }, [])
  return (
    <React.Fragment>
      {text && (
        <View
          style={[
            styles.container,
            styles.indented,
            styles.row,
            styles.listTextAnswersContainer,
          ]}
        >
          <View style={styles.listTextAnswerTextContainer}>
            {text &&
              text.length > 0 &&
              text.map((txt, index) => (
                <Text
                  key={index}
                  style={[
                    index === 0
                      ? styles.textElementText
                      : styles.textElementSubText,
                    formStyles.textStyle,
                  ]}
                >
                  {txt}
                </Text>
              ))}
          </View>
          <TouchableOpacity style={styles.listTextAnswerIconContainer}>
            <TouchableOpacity
              onPress={onEditPress}
              style={[
                styles.listTextEditIcon,
                editObjectId === element._id
                  ? {
                    backgroundColor:
                        formStyles.accentColor || TEMPORARY_COLOR_FOR_BUTTONS,
                    borderColor:
                        formStyles.accentColor || TEMPORARY_COLOR_FOR_BUTTONS,
                  }
                  : {
                    borderColor:
                        formStyles.accentColor || TEMPORARY_COLOR_FOR_BUTTONS,
                  },
              ]}
            >
              <SvgIcon
                name={'Edit'}
                {...iconStyle}
                fill={
                  editObjectId === element._id
                    ? helperIconColorIfSelected
                    : formStyles.accentColor || TEMPORARY_COLOR_FOR_BUTTONS
                }
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      )}
    </React.Fragment>
  )
}

// TODO: Derive currentValue from props instead of using setState asynchronously

class ListComponent extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props)
    tron.log('Constructor list')
    const currentValue = this._buildValue(props)
    const indexesMap = this._mapIndexesToKeys(props.field.options)
    this.state = {
      isEditing: false,
      currentValue,
      indexesMap,
      editObjectId: null,
    }
  }

  componentDidUpdate = prevProps => {
    if (this.props.value !== prevProps.value) {
      tron.log('State is not equal for list')
      this.setState({
        currentValue: this._buildValue(this.props),
      })
    }
  }

  _mapIndexesToKeys = (options: { childTypes: any }) => {
    const { childTypes } = options
    const map = Object.keys(childTypes).reduce((m, k) => {
      const field = childTypes[k]
      const { key } = field
      return {
        ...m,
        [k]: key,
      }
    }, {})
    return map
  }

  _buildValue = props => {
    const { field: { options } } = props
    const { childTypes } = options
    const defaultValue = Object.keys(childTypes).reduce((value, k) => {
      const child = childTypes[k]
      const { key, type, options } = child
      return type === types.select &&
        options &&
        options.repeats &&
        options.repeats === DISABLE
        ? {
          ...value,
          [key]: this._handleSelectTypeValue(child, k, props),
        }
        : {
          ...value,
          [key]: {
            key,
            model: child,
            index: k,
            value: child.options ? child.options.default : undefined,
          },
        }
    }, {})
    return defaultValue
  }

  _handleSelectTypeValue = (child, indexKey, props) => {
    const { key, content: { items = [] } } = child
    const filteredValues = this._selectFilterRoot(props, items)
    return {
      key,
      model: child,
      index: indexKey,
      value:
        filteredValues && filteredValues.length > 0
          ? filteredValues[0].value
          : undefined,
    }
  }

  _onChange = (value: any, key: string, index: number) => {
    const { currentValue } = this.state
    const valueForKey = currentValue[key] || {}
    this.setState({
      currentValue: {
        ...currentValue,
        [key]: { ...valueForKey, value, key, index },
      },
    })
  }

  _getFormItems = formValue => {
    const mappedObjects =
      formValue &&
      formValue.map(val => {
        const strippedObject = _stripKeys(val)
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

  _selectFilter = key => items => {
    const { value } = this.props
    const { isEditing, currentValue, indexesMap } = this.state
    const inValue = currentValue[indexesMap[key]] || {}
    const currentItems = this._getFormItems(value)
    const filtered = items
      ? items.filter(item => {
        const filter = !isEditing
          ? ci => ci.value === item.value
          : ci => ci.value === item.value && ci._id !== inValue._id
        const isSelected = currentItems && currentItems.find(filter)
        return !isSelected
      })
      : items
    return filtered
  }

  _validate = (options = {}) => {
    const { currentValue, isEditing } = this.state
    const { constraints = {} } = options
    const hasError = Object.values(currentValue).some(value => {
      return value.value === undefined || value.value === ''
    })
    if (hasError)
      return {
        error: 'The input text cannot be blank',
        failed: true,
      }
    if (!isEditing && constraints && constraints.max) {
      const { max } = constraints
      const { errors = {} } = constraints
      const { max: maxError } = errors
      const { value = [] } = this.props
      if (value && value.length >= max)
        return {
          error: maxError
            ? maxError
            : `The maximum number of elements is ${max}`,
          failed: true,
        }
    }
    return {
      failed: false,
    }
  }

  _onEditPress = (element: any) => {
    const strippedObject = _stripKeys(element)
    this.setState({
      isEditing: true,
      currentValue: strippedObject,
      editObjectId: element._id,
    })
  }

  _onEditDone = () => {
    const { currentValue, editObjectId } = this.state
    const { value = [], onChange, field: { options } } = this.props
    const { error, failed } = this._validate(options)
    if (failed) {
      Alert.alert('Input Error', error)
      return
    }
    const valueToSave = value.reduce((newValue, val) => {
      if (val._id !== editObjectId) return [...newValue, val]
      else
        return [
          ...newValue,
          {
            ...val,
            ...currentValue,
          },
        ]
    }, [])
    this.setState(
      {
        editObjectId: null,
        isEditing: false,
      },
      () => onChange(valueToSave)
    )
  }

  _onAddPress = () => {
    const { currentValue } = this.state
    tron.log(currentValue)
    const { value = [], onChange, field: { options } } = this.props
    const { childTypes } = options
    const { error, failed } = this._validate(options)
    if (failed) {
      Alert.alert('Input Error', error)
      return
    }
    const valueToSave = Object.values(childTypes).reduce((prev, model) => {
      return {
        ...prev,
        [model.key]: {
          ...currentValue[model.key],
          _model: model,
          _id: uuid(),
        },
      }
    }, {})
    onChange([
      ...(value ? value : []),
      {
        ...valueToSave,
        _id: uuid(),
      },
    ])
  }

  _onDeletePress = () => {}

  render() {
    const { currentValue, indexesMap, isEditing, editObjectId } = this.state
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
                const { type } = field
                const inValue = currentValue[indexesMap[key]] || {}
                const formValue = value

                return (
                  <FormPicker
                    key={field.key}
                    field={field}
                    value={inValue.value}
                    formStyles={formStyles}
                    formValue={formValue}
                    onChange={value =>
                      this._onChange(value, indexesMap[key], key)
                    }
                    {...(type === types.select
                      ? isEditing
                        ? {
                          __extraProps: {
                            editObjectId,
                            filterFunction: this._selectFilter(key),
                          },
                        }
                        : {
                          __extraProps: {
                            filterFunction: this._selectFilter(key),
                          },
                        }
                      : {})}
                  />
                )
              })}
          </View>
          <View style={styles.listButtonContainer}>
            <TouchableOpacity
              style={[
                styles.listAddButtonStyle,
                {
                  borderColor:
                    formStyles.accentColor || TEMPORARY_COLOR_FOR_BUTTONS,
                },
              ]}
              onPress={!isEditing ? this._onAddPress : this._onEditDone}
            >
              {!isEditing ? (
                <Text
                  style={[
                    {
                      ...Platform.select({
                        ios: {
                          fontSize: 30,
                          bottom:3,
                          left:1,
                        },
                        android: {
                          fontSize: 20,                          
                        },
                      }),
                      color:formStyles.accentColor || TEMPORARY_COLOR_FOR_BUTTONS,
                    },
                  ]}
                >
                  +
                </Text>
              ) : (
                <Icon
                  size={20}
                  color={formStyles.accentColor || TEMPORARY_COLOR_FOR_BUTTONS}
                  name={'ios-checkmark'}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.container, styles.listContentContainer]}>
          {value && (
            <View style={styles.container}>
              <Text style={[styles.textElementText, formStyles.textStyle]}>
                {`${content.listText}`}:
              </Text>
            </View>
          )}
          {value &&
            value.map((val, index) => (
              <TextElement
                key={val._id}
                element={val}
                index={index}
                formStyles={formStyles}
                onEditPress={() => this._onEditPress(val)}
                editObjectId={editObjectId}
              />
            ))}
        </View>
      </View>
    )
  }
}

export default ListComponent
