// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import theme, { styles } from "react-native-theme";
import { HeaderBackButton } from "react-navigation";
import KeyboardSpacer from "react-native-keyboard-spacer";
import t from 'tcomb-form-native';
import DefaultIndicator from "../../../components/DefaultIndicator";
import Button from "../../../components/Button";
import { populateCurrentFormValue, changeFormValue } from '../../../redux/actions/form.actions';
import type { FormChange } from '../../../redux/actions/form.actions';
import { store } from "../../../redux/rootReducer";
import FormComponent from "../components/FormComponent";
import { GET_NEXT_FORM } from "../../../redux/actionTypes";
import selectors from '../../../redux/selectors'
import type { Progress } from '../../../services/apollo/models';
import { updateProgress } from '../../../redux/actions/user.actions'
import * as NavigationService from '../../../HOC/navigation'

const NextButtonContainer = (props) => <Button {...props} side="right" withArrow />

const SKIPP_ENABLED = true;

type Props = {
  progress: Progress, 
  model: any, 
  formData: any,
  isFetching: boolean,
  color: string, 
  populateCurrentFormValue: (any) => void,
  changeFormValue: (change : FormChange) => void
};

type State = {
  keyboardSpace: number,
  isInvalid: boolean,
  form?: any,
  value?: any
};

const mapStateToProps = state => {
  const progress = selectors.progress(state);
  const model = state.form.model;
  const formData = state.form.data;
  const isFetching = state.network > 0
  const colors = selectors.stepColors(state);
  return {
    progress,
    model,
    formData,
    isFetching,
    colors
  };
}

@connect(mapStateToProps, { populateCurrentFormValue, changeFormValue })
class WorkBookScreenContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { progress: { step, form } } = props;
    const value = this.getDefaultValue(step, form);
    const type = props.model && props.model.type;
    this.state = {
      keyboardSpace: 0,
      isInvalid: type ? !t.validate(value, type).isValid() : true,
      value
    }
  }

  static navigationOptions = ({ navigation: { state: { params: {color, step } } } }) => {
		return {
			title: 'ASSIGNMENT',
			headerTitleStyle: {
				textAlign: 'center',
				alignSelf: 'center',
				fontFamily: 'Helvetica',
				fontSize: 20.5
			},
			headerStyle: {
  			backgroundColor: color || StyleSheet.flatten(styles.headerColor).backgroundColor
			},
      headerTintColor: 'white',
      headerLeft: (
        <HeaderBackButton
          tintColor="white"
          onPress={() => {
            const state = store.getState();
            const { step, form } = selectors.progress(state);
            if (form > 1) {
              store.dispatch(
                updateProgress.withProgress({
                  step: step,
                  form: form - 1
                })
              );
            } else {
              NavigationService.goBack();
            }
          }}
        />
      )
		};
	};

  componentWillMount  = () => {
    theme.setRoot(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    const { progress: { form: nextForm } } = nextProps;
    const { progress: { step, form } } = this.props;
    if (form !== nextForm) {
      const value = this.getDefaultValue(step, nextForm);
      this.setState({
        value
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

  getDefaultValue = (step: number, form: number): ?any => {
    const { formData } = this.props;
    if (!step || !form) {
      step = this.props.progress.step;
      form = this.props.progress.form;
    }
    if (formData && formData[ step ] && formData[ step ][ form ]) {
      return formData[ step ][ form ]
    }
    return undefined;
  }

  onToggle = (keyboardSpace) => {
    if (Platform.OS === "ios") {
      this.setState({ keyboardSpace });
    }
  }

  onPress = () => {
    if (SKIPP_ENABLED) {
      this.props.populateCurrentFormValue(this.state.value);
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
      this.props.changeFormValue({
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
    const { color, isFetching, model, progress, formData } = this.props;
    let nextButtonText = 'SKIP';
    if (!SKIPP_ENABLED || (SKIPP_ENABLED && !this.state.isInvalid)) {
      nextButtonText = 'NEXT'
    }
    if(isFetching) {
      return <DefaultIndicator size='large' />
    }
    return (
        <View style={{ flex: 1 }}>
          <View style={styles.workBookFormContainer}>
            <FormComponent
              formRef={form => (this.form = form)}
              model={model}
              formData={formData}
              progress={progress}
              value={this.state.value}
              onChange={this.onChange}
            />
          </View>
            {/*{Platform.OS === 'ios' &&*/}
            {/*<KeyboardSpacer onToggle={(keyboardState, keyboardSpace) => this.onToggle(keyboardSpace)}/>}*/}
          <View
            style={[
              styles.workBookNextButton,
              this.state.keyboardSpace && { bottom: this.state.keyboardSpace }
            ]}
          >
            <NextButtonContainer
              disabled={SKIPP_ENABLED ? false : this.state.isInvalid}
              onPress={this.onPress}
              text={nextButtonText}
              backgroundColor={color}
            />
          </View>
        </View>
      );
  }
}

export default WorkBookScreenContainer;
