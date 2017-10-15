// @flow

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
  ScrollView,
}                           from 'react-native';
import theme, { styles }    from 'react-native-theme';
import { HeaderBackButton } from "react-navigation";
import autobind             from "autobind-decorator";
import KeyboardSpacer       from "react-native-keyboard-spacer";
import DefaultIndicator     from "../../../components/DefaultIndicator";
import Button               from '../../../components/StepButton';
import { getNextForm }      from "../../../actions/form";
import { store }            from '../../../reducers/rootReducer';
import FormComponent        from "../components/FormComponent";
import { GET_NEXT_FORM }    from "../../../constants/actionTypes";

type Props = {
  navigation: {
    navigate(): any
  },
};

type State = {
  keyboardSpace: number,
  isInvalid: boolean
}

const mapStateToProps = (state) => {
  return {
    progress: state.user.progress,
    model: state.form.model,
    formData: state.form.data,
    isPending: state.network.isPending,
  }
};

@connect(mapStateToProps, {
  getNextForm,
})
class WorkBookScreenContainer extends Component<Props, State> {
  static navigationOptions = ({ navigation }) => {
    return ( {
      headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',
      },
      headerStyle: {
        backgroundColor: StyleSheet.flatten(styles.headerColor).backgroundColor,
      },
      headerTintColor: 'white',
      headerLeft: <HeaderBackButton
        tintColor="white"
        onPress={() => {
          let state              = store.getState();
          let { step, formStep } = state.user.progress;
          let { number }         = state.steps.currentStep;
          store.dispatch({
            type: GET_NEXT_FORM,
            currentForm: formStep,
            currentStep: step,
            isGoBack: true,
            numberOFDay: number,
          })
        }}/>,

    } )
  };

  constructor() {
    super();

    this.state = {
      keyboardSpace: 0,
      isInvalid: true,
    }
  }

  componentDidMount() {
    let { progress, model, getNextForm, isPending } = this.props;
    if (progress && !model && !isPending) {
      getNextForm(progress.step, 0, true)
    }
  }

  componentWillMount() {
    theme.setRoot(this)
  }

  @autobind
  onToggle(keyboardSpace) {
    if (Platform.OS === 'ios') {
      this.setState({ keyboardSpace });
    }
  }

  @autobind
  onPress() {
    let {
          getNextForm,
          progress: { step, formStep },
        }     = this.props;
    let value = this.form.refs.form.getValue();
    if (value) {
      getNextForm(step, formStep, false, value)
    }
  }

  @autobind
  onChange() {
    let value = this.form.refs.form.getValue();
    this.setState({
      isInvalid: !value,
    })
  }

  render() {
    let {
          isPending,
          model,
          progress,
          formData,
        } = this.props;

    if (!isPending && model && progress) {
      return <View style={{ flex: 1 }}>
        <ScrollView style={{
          padding: 10,
        }}>
          <View style={styles.workBookFormContainer}>
            <Text style={styles.workBookFormTitle}>{model.title.toUpperCase()}</Text>
            <FormComponent
              ref={(form) => this.form = form}
              model={model}
              formData={formData}
              progress={progress}
              onChange={this.onChange}
            />
          </View>
          {/*{Platform.OS === 'ios' &&*/}
          {/*<KeyboardSpacer onToggle={(keyboardState, keyboardSpace) => this.onToggle(keyboardSpace)}/>}*/}
        </ScrollView>
        <View style={[ styles.workBookNextButton, this.state.keyboardSpace && { bottom: this.state.keyboardSpace } ]}>
          <Button
            disabled={this.state.isInvalid}
            onPress={this.onPress}
            text="NEXT"
            side="right"
            withArrow
          />
        </View>
      </View>
    } else {
      return <DefaultIndicator size="large"/>
    }
  }
}

export default WorkBookScreenContainer
