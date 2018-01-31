// @flow
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
  ScrollView,
  Keyboard
} from "react-native";
import t                    from './templates';
import NextButton           from '../components/NextButton'
import type {
  NextButtonProps
}                           from '../components/NextButton'
import DefaultIndicator     from '../../../components/DefaultIndicator';
import type { FormChange }  from '../../../redux/actions/forms.actions';
import type { Progress }    from '../../../services/apollo/models';
import styles               from '../styles';

const Form = t.form.Form;

export type Props = {
  progress: Progress, 
  getModelForForm: (form: number) => { value?: any, model: {type: any } },
  next: () => void,
  buttonMessage:string,
  color: string, 
  submitFormValue: ({ value: any, progress: Progress}) => void,
  persisteFormValue: (change : FormChange) => void,
  isFetching: boolean
};

type State = {
  isInvalid: boolean,
  value: any,
  model: {
    type: any,
    options: any
  }
};

class WorkBookScreenContainer extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    const { progress: { step, form } } = props;
    const { value, model } = props.getModelForForm(form);
    this.state = {
      isInvalid: true,
      model,
      value
    }
  }

  componentWillFocus() {
    Keyboard.dismiss(); // police keyboard is always off, when starting (specially with android.)
    const { model } = this.state;
    if (model && model.focusField) {
      this.form.getComponent(model.focusField).refs.input.focus();
    }
    const isInvalid = this.form.validate().isValid() === false
    if(isInvalid !== this.state.isInvalid) {
      this.setState(state => ({
        isInvalid,
      }))
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    // update state with the new model & value so we can run this.form.valudate() on componentDidUpdate.
    const { progress: { form: nextForm } } = nextProps;
    const { progress: { form } } = this.props;
    if (form !== nextForm) {
      const { value, model } = nextProps.getModelForForm(nextForm);
      this.setState({
        value,
        model,
      })
    }
  }

  componentDidUpdate(prevProps: Props) {
    // Can be validated in componentWillReceiveProps but does not mark input with errors in the UI
    // TODO: Merge with componentWillReceiveProps and achieve same functionality for best performance
    const isInvalid = this.form.validate().isValid() === false
    if (this.state.isInvalid !== isInvalid) {
      this.setState(state => ({
        isInvalid
      }))
    }
  }

  // a note about - shouldComponentUpdate: I think customizing this typicall needs to user an instance flag variable, as it needs to incorporate both changes in state and pros.

  onPress = () => {
    const { value } = this.state;
    const { progress, next } = this.props;
    this.props.submitFormValue({
      value,
      progress
    });
    next()
  }

  onChange = (value: any, path: [string]) => {
    const { step, form } = this.props.progress;
    const { model : { type }} = this.state;
    const fieldName = path[path.length - 1];
    const fieldValue = path.reduce((struct: {}, field) => struct[field], value)
    const isInvalid = this.form.validate().isValid() === false;
    if(this.state.isInvalid !== isInvalid || this.state.value !== value) {
      this.setState({
        isInvalid,
        value
      });
    }
  }

  handleFormRef = (ref) => {
    this.form = ref;
  }

  render = () => {
    const { color, isFetching, progress, buttonMessage } = this.props;
    const { model: { options, type }, isInvalid, value } = this.state;
    if(isFetching) {
      return <DefaultIndicator size='large' />
    }
    return (
        <View style={{ flex: 1 }}>
          <View style={styles.workBookFormContainer}>
            <Form
              type={type}
              progress={progress}
              ref={this.handleFormRef}
              options={{
                ...options,
                topLevel:true
              }}
              value={value}
              onChange={this.onChange}
            />
          </View>
          <View
            style={styles.workBookNextButton}
          >
            <NextButton
              isInvalid={isInvalid}
              onPress={this.onPress}
              buttonMessage={buttonMessage}
              backgroundColor={color}
            />
          </View>
        </View>
      );
  }
}

export default WorkBookScreenContainer;
