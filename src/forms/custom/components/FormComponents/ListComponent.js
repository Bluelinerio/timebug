import React                                   from 'react'
import { View, Text, Alert, TouchableOpacity } from 'react-native'
import FormElementHeader                       from './FormElementHeader'
import styles, {
  TEMPORARY_COLOR_FOR_BUTTONS,
  iconStyle,
  helperIconColorIfSelected,
}                                              from '../../styles'
import FormPicker                              from './FormPicker'
import uuid                                    from 'uuid/v4'
import SvgIcon                                 from '../../../../components/SvgIcon'
import Icon                                    from 'react-native-vector-icons/Ionicons'

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
  const text = `${index + 1} ) ${Object.values(strippedObject)
    .filter(value => value.value !== null && value.value !== undefined)
    .map(value => value.value, [])
    .join('-')}`
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
            <Text style={[styles.textElementText, formStyles.textStyle]}>
              {text}
            </Text>
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

class ListComponent extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props)
    const currentValue = this._buildValue(props)
    const indexesMap = this._mapIndexesToKeys(props.field.options)
    this.state = {
      isEditing: false,
      currentValue,
      indexesMap,
      editObjectId: null,
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
      const { key } = child
      return {
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

  _validate = (options = {}) => {
    const { currentValue } = this.state
    const { constraints = {} } = options
    const hasError = Object.values(currentValue).some(value => {
      return value.value === undefined || value.value === ''
    })
    if (hasError)
      return {
        error: 'The input text cannot be blank',
        failed: true,
      }
    if (constraints && constraints.max) {
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
        currentValue: this._buildValue(this.props),
        editObjectId: null,
        isEditing: false,
      },
      () => onChange(valueToSave)
    )
  }

  _onAddPress = () => {
    const { currentValue } = this.state
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
    this.setState({ currentValue: this._buildValue(this.props) })
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
                      fontSize: 20,
                      color:
                        formStyles.accentColor || TEMPORARY_COLOR_FOR_BUTTONS,
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
