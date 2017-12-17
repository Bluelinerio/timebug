// @flow

import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Platform,
}                           from 'react-native';
import t                    from 'tcomb-form-native';
import type { Progress } from '../../../services/apollo/models';

const Form = t.form.Form;

type Props = {
	progress: Progress,
	onChange(): any,
  formData: any,
  formRef(): any,
  model: {
    focusField: boolean,
    type: string, 
    options: Object
  }
}

class FormComponent extends Component<Props> {

  componentDidMount = () => {
    const { model } = this.props;
    if (model && model.focusField) {
      this.form.getComponent(model.focusField).refs.input.focus();
    }
  }

  shouldComponentUpdate = (nextProps:Props):boolean => {
    return nextProps.model.type !== this.props.model.type
  }

  getDefaultValue = (): ?any => {
    const {
      formData,
      progress: { step, form },
    } = this.props;
    if (formData && formData[ step ] && formData[ step ][ form ]) {
      return formData[ step ][ form ]
    }
    return undefined;
  }

  handleFormRef = (ref) => {
    this.form = ref;
    this.props.formRef(ref);
  }

  render() {

    let { model } = this.props;

    return (
      <Form
        ref={this.handleFormRef}
        type={model.type}
        value={this.getDefaultValue()}
        options={model.options}
        onChange={this.props.onChange}
      />
    )
  }
}

export default FormComponent
