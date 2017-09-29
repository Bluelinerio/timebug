// @flow

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { StyleSheet }       from 'react-native';
import theme, { styles }    from 'react-native-theme';
import { HeaderBackButton } from "react-navigation";
import { getNextForm }      from "../../../actions/form";
import FormComponent        from "../components/FormComponent";
import DefaultIndicator     from "../../../components/DefaultIndicator";
import { store }            from '../../../reducers/rootReducer';
import { GET_NEXT_FORM }    from "../../../constants/actionTypes";

type Props = {
  navigation: {
    navigate(): any
  },
};

type State = {}

const mapStateToProps = (state) => {
  return {
    progress: state.user.progress,
    model: state.form.model,
    isPending: state.network.isPending,
  }
};

@connect(mapStateToProps, {
  getNextForm,
})
class WorkBookScreenContainer extends Component<Props, State> {
  static navigationOptions = ({ navigation }) => {
    console.log(navigation);
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
        let { number } = state.steps.currentStep;
        store.dispatch({
          type: GET_NEXT_FORM,
          currentForm: formStep,
          currentStep: step,
          isGoBack: true,
          numberOFDay: number
        })
      }}/>,

    } )
  };

  componentDidMount() {
    let { progress, model, getNextForm, isPending } = this.props;
    if (progress && !model && !isPending) {
      getNextForm(progress.step, 0, true)
    }
  }

  componentWillMount() {
    theme.setRoot(this)
  }

  render() {
    let {
          isPending,
          getNextForm,
          model,
          progress,
        } = this.props;

    if (!isPending && model && progress) {
      return <FormComponent
        getNextForm={getNextForm}
        model={model}
        progress={progress}
      />
    } else {
      return <DefaultIndicator size="large"/>
    }
  }
}

export default WorkBookScreenContainer
