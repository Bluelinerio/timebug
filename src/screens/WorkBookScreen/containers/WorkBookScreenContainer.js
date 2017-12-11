// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
  ScrollView
} from "react-native";
import theme, { styles } from "react-native-theme";
import { HeaderBackButton } from "react-navigation";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import KeyboardSpacer from "react-native-keyboard-spacer";
import DefaultIndicator from "../../../components/DefaultIndicator";
import Button from "../../../components/Button";
import { getNextForm } from "../../../redux/actions/form.actions";
import { store } from "../../../redux/rootReducer";
import FormComponent from "../components/FormComponent";
import { GET_NEXT_FORM } from "../../../redux/actionTypes";
import selectors from '../../../redux/selectors'
import type { Progress } from '../../../services/apollo/models';

type Props = {
  progress: Progress, 
  model: any, 
  formData: any,
  isPending: boolean,
  color: string,
  getNextForm: () => void, 
};

type State = {
  keyboardSpace: number,
  isInvalid: boolean
};

const mapStateToProps = state => {
  const progress = selectors.user(state).progress;
  const model = state.form.model;
  const formData = state.form.data;
  const isPending = state.network.isPending;
  const color = selectors.currentStepColor(state);
  return {
    progress,
    model,
    formData,
    isPending,
    color
  };
};

@connect(mapStateToProps, {
  getNextForm
})
class WorkBookScreenContainer extends Component<Props, State> {
  constructor() {
    super();

    this.state = {
      keyboardSpace: 0,
      isInvalid: true
    };
  }

  componentDidMount() {
    const { progress, model, getNextForm, isPending } = this.props;
    if (progress && !model && !isPending) {
      getNextForm(progress.step, 0, true);
    }
  }

  componentWillMount() {
    theme.setRoot(this);
  }

  onToggle = (keyboardSpace) => {
    if (Platform.OS === "ios") {
      this.setState({ keyboardSpace });
    }
  }

  onPress = () => {
    const { getNextForm, progress: { step, formStep } } = this.props;
    const value = this.form.refs.form.getValue();
    if (value) {
      getNextForm(step, formStep, false, value);
    }
  }

  onChange = () => {
    let value = this.form.refs.form.getValue();
    this.setState({
      isInvalid: !value
    });
  }

  render() {
    let { color, isPending, model, progress, formData } = this.props;

    if( isPending) {
      return <DefaultIndicator size="large" />;
    }
    if (model && progress) {
      return (
        <View style={{ flex: 1 }}>
          <KeyboardAwareScrollView
            style={{
              padding: 10
            }}
          >
            <View style={styles.workBookFormContainer}>
              <Text style={styles.workBookFormTitle}>
                {model.title.toUpperCase()}
              </Text>
              <FormComponent
                ref={form => (this.form = form)}
                model={model}
                formData={formData}
                progress={progress}
                onChange={this.onChange}
              />
            </View>
            {/*{Platform.OS === 'ios' &&*/}
            {/*<KeyboardSpacer onToggle={(keyboardState, keyboardSpace) => this.onToggle(keyboardSpace)}/>}*/}
          </KeyboardAwareScrollView>
          <View
            style={[
              styles.workBookNextButton,
              this.state.keyboardSpace && { bottom: this.state.keyboardSpace }
            ]}
          >
            <Button
              disabled={this.state.isInvalid}
              onPress={this.onPress}
              text="NEXT"
              side="right"
              withArrow
              styles={{
                wideButtonBackground: {
                  backgroundColor: color
                }
              }}
            />
          </View>
        </View>
      );
    } else {
      
    }
  }
}

WorkBookScreenContainer.navigationOptions = ({ navigation }) => {
    return {
      headerTitleStyle: {
        textAlign: "center",
        alignSelf: "center"
      },
      headerStyle: {
        backgroundColor: StyleSheet.flatten(styles.headerColor).backgroundColor
      },
      headerTintColor: "white",
      headerLeft: (
        <HeaderBackButton
          tintColor="white"
          onPress={() => {
            let state = store.getState();
            let { step, formStep } = selectors.progress(state);
            let { number } = state.steps.currentStep;
            store.dispatch({
              type: GET_NEXT_FORM,
              currentForm: formStep,
              currentStep: step,
              isGoBack: true,
              numberOFDay: number
            });
          }}
        />
      )
    };
  };

export default WorkBookScreenContainer;
