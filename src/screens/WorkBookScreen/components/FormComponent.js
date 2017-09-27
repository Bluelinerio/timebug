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
  goToCongratulationsScreen(): any
};

type State = {}

class FormComponent extends Component<Props, State> {

  @autobind
  onPress() {
    let value = this.refs.form.getValue();
    if (value) {
      console.log(value);
    }
  }

  render() {

    let {
          getNextForm,
          model,
          progress: { step, formStep },
        } = this.props;

    return (
      <ScrollView style={{ flex: 1, padding: 10 }}>
        <View style={styles.workBookFormContainer}>
          <Text style={styles.workBookFormTitle}>{model.title.toUpperCase()}</Text>
          <Form
            ref="form"
            type={model.type}
            options={model.options}
          />
          <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
        </View>
        <View
          style={[ styles.buttonContainer, styles.workBookNextButtonContainer ]}>
          <Button
            onPress={() => getNextForm(step, formStep)}
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
