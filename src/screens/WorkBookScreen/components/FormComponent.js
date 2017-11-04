// @flow

import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Platform,
}                           from 'react-native';
import autobind             from 'autobind-decorator';
import t                    from 'tcomb-form-native';


const Form = t.form.Form;

type Props = {
  progress: {
    step: string,
    formStep: number
  },
  onChange(): any,
  formData: any,
  getNextForm(): any,
  goToAssignmentDoneScreen(): any
};

type State = {}

class FormComponent extends Component<Props, State> {

  componentDidMount() {
    let { model } = this.props;
    if (model && model.focusField) {
      this.refs.form.getComponent(model.focusField).refs.input.focus();
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.model.type !== this.props.model.type
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

    let { model } = this.props;

    return (
      <Form
        ref="form"
        type={model.type}
        value={this.getDefaultValue()}
        options={model.options}
        onChange={this.props.onChange}
      />
    )
  }
}

export default FormComponent
