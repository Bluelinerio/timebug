import React          from 'react'
import { View, Text } from 'react-native'
import styles         from '../../../styles'
import Slider         from '../SliderComponent'
import { SHARED }     from '../../../forms/constants'
import uuid           from 'uuid/v4'

type Props = {
  value: any,
  onChange: () => any,
  formStyles: any,
  parentField: {
    content?: any,
    options?: any,
  },
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

class SliderSet extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props)
    const { value } = props
    const indexesMap = this._mapIndexesToKeys(props.parentField.options)
    this.state = {
      indexesMap,
      globalMaxValue: this._calculateMaxValue(props),
      currentValue: value ? value : {},
    }
  }

  componentDidMount = () => {
    const { value, onChange } = this.props
    if (!value) {
      const initialValue = this._buildInitialValue(this.props)
      this.setState({ currentValue: initialValue }, () =>
        onChange(this.state.currentValue)
      )
    }
  }

  _buildInitialValue = (props: Props) => {
    const { parentField } = props
    const { subtypeOptions, children } = parentField.options
    const initialValue = Object.keys(children).reduce((currentValue, index) => {
      const child = children[index]
      const { key, contentKey } = child
      return {
        ...currentValue,
        [key]: {
          _id: uuid(),
          _model: child,
          value: (child.options && child.options.min) || subtypeOptions.min,
          key,
          index,
          contentKey,
        },
      }
    }, {})
    return initialValue
  }

  _calculateMaxValue = (props: Props) => {
    const value = props.value ? props.value : {}
    const { subtypeOptions } = props.parentField.options
    if (subtypeOptions.data !== SHARED) return null
    const max = Object.values(value).reduce((maxVal, val) => {
      const { value: v } = val
      return maxVal - v
    }, subtypeOptions.max)
    return max
  }

  _mapIndexesToKeys = (options: { children: any }) => {
    const { children } = options
    const map = Object.keys(children).reduce((m, k) => {
      const field = children[k]
      const { key } = field
      return {
        ...m,
        [k]: key,
      }
    }, {})
    return map
  }

  _onChange = (value: any, key: string, contentKey: string, index: number) => {
    const {
      parentField: { options },
      onChange,
      value: currentValue = {},
    } = this.props
    const valueForKey =
      currentValue && currentValue[key] ? currentValue[key] : {}
    const { subtypeOptions } = options
    const { data } = subtypeOptions
    const currentValueForKey = valueForKey.value || 0
    let newState = {
      currentValue: {
        ...currentValue,
        [key]: {
          ...valueForKey,
          _id: valueForKey._id ? valueForKey._id : uuid(),
          value,
          key,
          index,
          contentKey,
        },
      },
    }
    if (data === SHARED) {
      //Is increasing
      if (value - currentValueForKey > 0) {
        newState.globalMaxValue =
          this.state.globalMaxValue - (value - currentValueForKey)
        //is decreasing
      } else if (value - currentValueForKey < 0) {
        newState.globalMaxValue =
          this.state.globalMaxValue + currentValueForKey - value
      }
    }
    this.setState(newState, () => onChange(this.state.currentValue))
  }

  render() {
    const { globalMaxValue } = this.state
    const {
      formStyles,
      parentField: { options },
      value: currentValue = {},
    } = this.props

    const {
      elementContainerStyle: { backgroundColor },
      textStyle: { color },
    } = formStyles

    const { subtypeOptions, children } = options

    return (
      <View style={styles.container}>
        <View style={styles.sliderSetTotalContainer}>
          <View style={styles.sliderSetTotal}>
            <Text style={[styles.totalValue, formStyles.textStyle]}>
              {globalMaxValue}
            </Text>
          </View>
        </View>
        {children &&
          Object.keys(children).map(index => {
            const child = children[index]
            const { key, contentKey, content, options: childOptions } = child
            const options = {
              ...subtypeOptions,
              ...childOptions,
            }

            const field = {
              content,
              options,
            }

            const value =
              currentValue && currentValue[key]
                ? currentValue[key].value
                : undefined
            return (
              <View key={key}>
                <Slider
                  completedTrackColor={color}
                  incompleteTrackColor={backgroundColor}
                  field={field}
                  formStyles={formStyles}
                  onChange={value =>
                    this._onChange(value, key, contentKey, index)
                  }
                  maximumSharedValue={globalMaxValue}
                  value={value}
                />
              </View>
            )
          })}
      </View>
    )
  }
}

export default SliderSet
