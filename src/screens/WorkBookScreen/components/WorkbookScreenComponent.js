// @flow
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";
import t from 'tcomb-form-native';

import DefaultIndicator     from "../../../components/DefaultIndicator";
import FormComponent        from "../components/FormComponent";
import Button               from "../../../components/Button";
import type { FormChange }  from '../../../redux/actions/forms.actions';
import type { Progress }    from '../../../services/apollo/models';
import styles                from '../styles';

const SKIPP_ENABLED = true;

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
  keyboardSpace: number,
  isInvalid: boolean,
  value?: any
};

class WorkBookScreenContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { progress: { step, form } } = props;
    const { value, model:{ type } } = props.getModelForForm(form);
    this.state = {
      keyboardSpace: 0,
      isInvalid: t.validate(value, type).isValid() === false,
      value
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    const { progress: { form: nextForm } } = nextProps;
    const { progress: { step, form } } = this.props;
    if (form !== nextForm) {
      const value = nextProps.getModelForForm(nextForm);
      this.setState({
        value,
      })
    }
  }

  componentDidUpdate(prevProps: Props) {
    // Can be validated in componentWillReceiveProps but does not mark input with errors in the UI
    // TODO: Merge with componentWillReceiveProps and achieve same functionality for best performance
    const { progress: { form: prevForm } } = prevProps;
    const { progress: { form } } = this.props;
    if (form !== prevForm) {
      this.setState(state => ({
        isInvalid: state.value ? !this.form.validate().isValid() : true,
      }))
    }
  }

  onToggle = (keyboardSpace) => {
    if (Platform.OS === "ios") {
      this.setState({ keyboardSpace });
    }
  }

  onPress = () => {
    const { value } = this.state;
    const { progress, next } = this.props;
    if (value || SKIPP_ENABLED) {
      this.props.submitFormValue({
        value,
        progress
      });
      next()
    }
  }

  onChange = (value: any, path: [string]) => {
    const { step, form } = this.props.progress;
    const fieldName = path[path.length - 1];
    const fieldValue = path.reduce((struct: {}, field) => struct[field], value)
    
    this.setState({
      isInvalid: !this.form.validate().isValid(),
      value
    }, () => {
      this.props.persisteFormValue({
        fieldName,
        fieldValue,
        value,
        path,
        step,
        form
      });
    });
  }

  render = () => {
    const { color, isFetching, progress, getModelForForm, buttonMessage } = this.props;
    const { isInvalid, value, keyboardSpace } = this.state;

    if(isFetching) {
      return <DefaultIndicator size='large' />
    }
    const { model } = getModelForForm(progress.form);

    return (
        <View style={{ flex: 1 }}>
          <View style={styles.workBookFormContainer}>
            <FormComponent
              formRef={form => (this.form = form)}
              model={model}
              progress={progress}
              value={value}
              onChange={this.onChange}
            />
          </View>
            {/*{Platform.OS === 'ios' &&*/}
            {/*<KeyboardSpacer onToggle={(keyboardState, keyboardSpace) => this.onToggle(keyboardSpace)}/>}*/}
          <View
            style={[
              styles.workBookNextButton,
              keyboardSpace && { bottom: keyboardSpace }
            ]}
          >
            <Button
              disabled={SKIPP_ENABLED ? false : isInvalid}
              onPress={this.onPress}
              text={isInvalid && SKIPP_ENABLED ? 'SKIP' : buttonMessage}
              backgroundColor={color}
              side='right' 
              withArrow
            />
          </View>
        </View>
      );
  }
}

export default WorkBookScreenContainer;
