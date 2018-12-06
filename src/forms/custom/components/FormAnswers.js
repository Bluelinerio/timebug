// @flow
import React from 'react';
import { View } from 'react-native';
import styles from '../styles';
import FormSwitch from './FormAnswerSwitch';

type Props = {
  value: any,
  model: {
    fields: any,
  },
};

class FormAnswers extends React.PureComponent<Props> {
  render() {
    const { value, model } = this.props;
    return (
      <View style={styles.answersContainer}>
        {value &&
          Object.keys(value).map(key => {
            const currentModel = model.fields[key];
            const currentValue = value[key];
            return (
              <FormSwitch
                key={currentValue._id}
                value={currentValue}
                model={currentModel}
              />
            );
          })}
      </View>
    );
  }
}

export default FormAnswers;
