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
import DefaultIndicator from "../../../components/DefaultIndicator";
import Button from "../../../components/Button";
import { populateCurrentFormValue } from '../../../redux/actions/form.actions';
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
};

type State = {
  keyboardSpace: number,
  isInvalid: boolean,
  form?: any
};

type FormChange = {
  fieldName: string,
  fieldValue: any,
  path: [String],
  value: any,
}

const mapStateToProps = state => {
  const progress = selectors.progress(state);
  const model = state.form.model;
  const formData = state.form.data;
  const isFetching = state.network > 0
  const color = selectors.currentStepColor(state);
  return {
    progress,
    model,
    formData,
    isFetching,
    color
  };
};

@connect(mapStateToProps, { populateCurrentFormValue })
class WorkBookScreenContainer extends Component<Props, State> {
  state = {
    keyboardSpace: 0,
    isInvalid: true,
  }

  static navigationOptions = () => {
		return {
			title: 'ASSIGNMENT',
			headerTitleStyle: {
				textAlign: 'center',
				alignSelf: 'center',
				fontFamily: 'Helvetica',
				fontSize: 20.5
			},
			headerStyle: {
				backgroundColor: StyleSheet.flatten(styles.headerColor).backgroundColor
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

  onToggle = (keyboardSpace) => {
    if (Platform.OS === "ios") {
      this.setState({ keyboardSpace });
    }
  }

  onPress = () => {
    const value = this.form.getValue();
    if (value || SKIPP_ENABLED) {
      this.props.populateCurrentFormValue(value);
    }
  }

  onChange = (value: any, path: [string]) => {
    const { step, form } = this.props.progress;
    const fieldName = path[path.length - 1];
    const fieldValue = path.reduce((struct: {}, field) => struct[field], value)
    
    this.setState({
      isInvalid: !this.form.getValue(),
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

    if(value) {
      buttonText = 'NEXT'
    } else {
      buttonText = 'SKIP'
    }

  }

  render = () => {
    const { color, isFetching, model, progress, formData } = this.props;

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
              text= { SKIPP_ENABLED ? 'SKIP' : 'NEXT' }
              backgroundColor={color}
            />
          </View>
        </View>
      );
  }
}

export default WorkBookScreenContainer;
