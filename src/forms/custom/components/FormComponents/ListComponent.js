import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../../styles';
import FormPicker from './FormPicker';
import uuid from 'uuid/v4';

type Props = {
  value: Array<any>,
  onChange: () => any,
  field: {
    content?: any,
    options?: any,
  },
};

type ValueElement = {
  _id: string,
  _model: any,
  [x: string]: {
    value: any,
    key: string,
  },
};

type State = {
  value: Array<ValueElement>,
  currentValue: ValueElement,
};

const _stripKeys = (val: ValueElement) => {
  const metaKeys = ['_id', '_model'];
  return Object.keys(val).reduce((prev, key) => {
    if (metaKeys.find(k => k === key)) return prev;
    return {
      ...prev,
      [key]: val[key],
    };
  }, {});
};

const TextElement = ({
  element,
  index,
}: {
  index: number,
  element: ValueElement,
}) => {
  const strippedObject = _stripKeys(element);
  return (
    <React.Fragment>
      {Object.values(strippedObject).map(value => {
        return (
          value &&
          value.value && (
            <View key={value._id} style={styles.indented}>
              <Text style={[styles.textElementText]}>{`${index +
                1})${value.value || ``}`}</Text>
            </View>
          )
        );
      })}
    </React.Fragment>
  );
};

class ListComponent extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);
    const currentValue = this._buildValue(props);
    this.state = {
      currentValue,
    };
  }

  _buildValue = props => {
    const { field: { options } } = props;
    const { childTypes } = options;
    const defaultValue = Object.keys(childTypes).reduce((value, key) => {
      const child = childTypes[key];
      return {
        ...value,
        [key]: {
          key,
          value: child.options ? child.options.default : undefined,
        },
      };
    }, {});
    return defaultValue;
  };

  _onChange = (value: any, element: string) => {
    const { currentValue } = this.state;
    this.setState({
      currentValue: { ...currentValue, [element]: { value, key: element } },
    });
  };

  _validate = () => {
    const { currentValue } = this.state;
    const hasError = Object.values(currentValue).some(value => {
      return value.value === undefined || value.value === '';
    });
    if (hasError)
      return {
        error: 'The input text cannot be blank',
        failed: true,
      };
    return {
      failed: false,
    };
  };

  _onAddPress = () => {
    const { currentValue } = this.state;
    const { value = [], onChange, field: { options } } = this.props;
    const { childTypes } = options;
    const { error, failed } = this._validate();
    if (failed) {
      Alert.alert('Input Error', error);
      return;
    }
    const valueToSave = Object.keys(currentValue).reduce((prev, key) => {
      const _model = childTypes[key];
      return {
        [key]: {
          ...currentValue[key],
          _model,
          _id: uuid(),
        },
      };
    }, {});
    onChange([
      ...(value ? value : []),
      {
        ...valueToSave,
        _id: uuid(),
      },
    ]);
    this.setState({ currentValue: this._buildValue(this.props) });
  };

  _onDeletePress = () => {};

  render() {
    const { currentValue } = this.state;
    const { field: { content, options }, value } = this.props;
    const { childTypes } = options;
    return (
      <React.Fragment>
        <Text style={styles.textInputLabelStyle}>{content.text}</Text>
        <View style={styles.listFormContainer}>
          <View style={styles.listElementContainer}>
            {childTypes &&
              Object.keys(childTypes).map(key => {
                const field = childTypes[key];
                const inValue = currentValue[key] || {};
                return (
                  <FormPicker
                    key={field.key}
                    field={field}
                    value={inValue.value}
                    onChange={value => this._onChange(value, key)}
                  />
                );
              })}
          </View>
          <Button
            buttonStyle={[styles.buttonComponentStyle, styles.listButtonStyle]}
            title={'add'}
            textStyle={styles.listButtonTextStyle}
            onPress={() => this._onAddPress()}
          />
        </View>
        <View style={styles.listContentContainer}>
          {value && (
            <Text style={[styles.textElementText]}>
              {`${content.listText}`}:
            </Text>
          )}
          {value &&
            value.map((val, index) => (
              <TextElement key={val._id} element={val} index={index} />
            ))}
        </View>
      </React.Fragment>
    );
  }
}

export default ListComponent;
