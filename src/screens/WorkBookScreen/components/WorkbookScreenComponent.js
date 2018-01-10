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
import t                    from './templates';
import DefaultIndicator     from "../../../components/DefaultIndicator";
import Button               from "../../../components/Button";
import type { FormChange }  from '../../../redux/actions/forms.actions';
import type { Progress }    from '../../../services/apollo/models';
import styles               from '../styles';

const Form = t.form.Form;
const SKIPP_ENABLED = false;

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
      keyboardSpace: 0,
      isInvalid: false,
      model,
      value
    }
  }

  componentWillFocus() {
    const { model } = this.state;
    if (model && model.focusField) {
      this.form.getComponent(model.focusField).refs.input.focus();
    }
    this.setState(state => ({
      isInvalid: this.form.validate().isValid() === false,
    }))
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
    const { progress: { form: prevForm } } = prevProps;
    const { progress: { form } } = this.props;
    if (form !== prevForm) {
      this.setState(state => ({
        isInvalid: this.form.validate().isValid() === false,
      }))
    }
  }

  shouldComponentUpdate = (nextProps:Props):boolean => {
    return nextProps.progress.form !== this.props.progress.form
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
    const { model : { type }} = this.state;
    const fieldName = path[path.length - 1];
    const fieldValue = path.reduce((struct: {}, field) => struct[field], value)
    
    this.setState({
      isInvalid: this.form.validate().isValid() === false,
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

  handleFormRef = (ref) => {
    this.form = ref;
  }

  render = () => {
    const { color, isFetching, progress, buttonMessage } = this.props;
    const { model: { options, type }, isInvalid, value, keyboardSpace } = this.state;

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
              options={options}
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
