// @flow

import React from 'react';
import {connect} from 'react-redux';
import {
  ActivityIndicator, ScrollView,
  StyleSheet, Text, View
} from 'react-native';
import autobind from 'autobind-decorator';
import Button from "../../../components/Button";

import formConfig from '../forms'

type Props = {};

type State = {}

class FormComponent extends React.Component<Props, State> {
  componentDidMount() {
  }

  @autobind
  getFormModel() {
    let {progress: {step, formStep}} = this.props;
    if (step && formStep && formConfig[step] && formConfig[step][formStep]) {
      let currentForm = formConfig[step][formStep];
      return (
        <Text>
          {currentForm.title}
        </Text>
      )
    }

    return null;

  }


  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <Button
          onPress={() => this.props.goToCongratulationsScreen({})}
          text="Next"
          side="right"
          withArrow
        />
        {this.getFormModel()}
      </ScrollView>
    )
  }
}

export default FormComponent
