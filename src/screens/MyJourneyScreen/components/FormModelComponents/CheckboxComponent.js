//@flow
import React from 'react';
import { Switch } from 'react-native';
import styles from '../../styles';

export type CheckboxComponentStyle = {
  container?: any,
  text?: any,
};

export type CheckboxComponentProps = {
  type: string,
  formIndex: string,
  formKey: string,
  value: boolean | null,
  submitAnswers: any,
  step: string,
  valueType?: string,
};

const CheckboxComponent = ({
  value,
  formKey,
  formIndex,
  submitAnswers,
  step,
  valueType = 'boolean',
}: CheckboxComponentProps) => (
  <Switch
    style={[styles.checkBox, styles.center]}
    onValueChange={value => {
      const payload = {
        stepId: step,
        element: {
          key: formKey,
          value,
          formIndex,
          type: valueType,
        },
      };
      submitAnswers(payload);
    }}
    value={!!value}
  />
);

export default CheckboxComponent;