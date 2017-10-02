// @flow

import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableHighlight,
}                           from 'react-native';
import autobind             from 'autobind-decorator';
import t                    from 'tcomb-form-native';
import { styles }           from 'react-native-theme';
import Button               from "../../../components/Button";

const Form = t.form.Form;

type Props = {
  progress: {
    step: string,
    formStep: number
  },
  formData: any,
  getNextForm(): any,
  goToCongratulationsScreen(): any
};

type State = {}

class FormComponent extends Component<Props, State> {

  @autobind
  onPress() {
    let {
          getNextForm,
          progress: { step, formStep },
        }     = this.props;
    let value = this.refs.form.getValue();
    if (value) {
      console.log(value);

      getNextForm(step, formStep, false, value)
    }
  }

  @autobind
  getDefaultValue() {
    let {
          formData,
          progress: { step, formStep },
        } = this.props;
    if (formData && formData[ step ] && formData[ step ][ formStep ]) {
      return formData[ step ][ formStep ]
    }
    return undefined;
  }

  render() {

    let {
          model,
        } = this.props;


    return (
      <ScrollView style={{
        flex: 1,
        padding: 10,
      }}>
        <View style={styles.workBookFormContainer}>
          <Text style={styles.workBookFormTitle}>{model.title.toUpperCase()}</Text>
          <Form
            ref="form"
            type={model.type}
            value={this.getDefaultValue()}
            options={model.options}
          />
        </View>
        <View
          style={[ styles.buttonContainer, styles.workBookNextButtonContainer ]}>
          <Button
            onPress={this.onPress}
            text="Next"
            side="right"
            withArrow
          />
        </View>

      </ScrollView>
    )
  }
}

export default FormComponent
