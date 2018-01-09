// @flow

import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Platform,
}                           from 'react-native';
import t                    from './templates';

const Form = t.form.Form;

type Props = {
	onChange(): any,
  formRef(): any,
  value?: any,
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
    return nextProps.model.type !== this.props.model.type || nextProps.value !== this.props.value
  }

  handleFormRef = (ref) => {
    this.form = ref;
    this.props.formRef(ref);
  }

  render() {
    const { model: { type, options }, value, onChange } = this.props;
    return (
      <Form
        ref={this.handleFormRef}
        type={type}
        value={value}
        options={options}
        onChange={onChange}
      />
    )
  }
}

export default FormComponent
