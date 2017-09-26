// @flow

import React from 'react';
import {connect} from 'react-redux';
import {
  ActivityIndicator,
  StyleSheet, View
} from 'react-native';
import theme, {styles} from 'react-native-theme';

import DefaultIndicator from "../../../components/DefaultIndicator";
import Button from "../../../components/Button";
import FormComponent from "../components/FormComponent";
import {goToCongratulationsScreen} from "../../../actions/navigate";

type Props = {
  navigation: {
    navigate(): any
  },
};

type State = {}

const mapStateToProps = (state) => {
  return {
    progress: state.user.progress
  }
};

@connect(mapStateToProps, {
  goToCongratulationsScreen
})
class WorkBookScreenContainer extends React.Component<Props, State> {
  static navigationOptions = () => ({
    headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
    headerStyle: {
      backgroundColor: StyleSheet.flatten(styles.headerColor).backgroundColor,
    },
    headerTintColor: 'white'
  });

  componentDidMount() {
  }

  componentWillMount() {
    theme.setRoot(this)
  }

  render() {
    let {
      isPending,
      goToCongratulationsScreen,
      progress
    } = this.props;

    if (isPending || !progress) {
      return <DefaultIndicator size="large"/>
    } else {
      return <FormComponent
        goToCongratulationsScreen={goToCongratulationsScreen}
        progress={progress}
      />
    }
  }
}

export default WorkBookScreenContainer
