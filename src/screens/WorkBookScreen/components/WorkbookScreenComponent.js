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
import KeyboardSpacer       from 'react-native-keyboard-spacer'
import t                    from './templates';
import DefaultIndicator     from "../../../components/DefaultIndicator";
import Button               from "../../../components/Button";
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
  keyboardSpace: number,
  isInvalid: boolean,
  value: any,
  model: {
    type: any,
    options: any
  }
};

type NextButtonProps = { 
  isInvalid: boolean, 
  onPress: () => void, 
  buttonMessage:string, 
  backgroundColor:string
};

const SKIPP_ENABLED = false;
const NextButton = (props:NextButtonProps) => {
  const { isInvalid, onPress, buttonMessage, backgroundColor} = props;
  const active = isInvalid === false || SKIPP_ENABLED
  if (active) {
    return (
      <Button
        onPress={() => active ? onPress() : null }
        text={SKIPP_ENABLED ? 'SKIP' : buttonMessage}
        backgroundColor={backgroundColor}
        side='right' 
        withArrow
    />)
  } else {
    return null;
  }
}

class WorkBookScreenContainer extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    const { progress: { step, form } } = props;
    const { value, model } = props.getModelForForm(form);
    this.state = {
      keyboardSpace: 0,
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
    const { progress: { form: prevForm } } = prevProps;
    const { progress: { form } } = this.props;
    if (form !== prevForm) {

      const isInvalid = this.form.validate().isValid() === false
      if (this.state.isInvalid !== isInvalid) {
        this.setState(state => ({
          isInvalid
        }))
      }
    }
  }

  // a note about - shouldComponentUpdate: I think customizing this typicall needs to user an instance flag variable, as it needs to incorporate both changes in state and pros.

  onToggle = (keyboardSpace: number) => {
    if (Platform.OS === 'ios') {
      this.setState({ keyboardSpace });
    }
  }

  onPress = () => {
    const { value } = this.state;
    const { progress, next } = this.props;
    if (value) {
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
          {
            // Platform.OS === 'ios' &&
            // <KeyboardSpacer 
            //   onToggle={(keyboardState, keyboardSpace) => this.onToggle(keyboardSpace)}
            // />
          }
          <View
            style={[
              styles.workBookNextButton,
              keyboardSpace && { bottom: keyboardSpace }
            ]}
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
