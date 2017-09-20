// @flow

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IStep} from "../../../interfaces";

type Props = {
  allSteps: IStep[],
  currentStep: IStep,
  navigate(): any
}

type State = {

}

export default class HomeScreen extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          testID="day_1"
          onPress={() => {this.props.navigate('TextScreen');}}>
          <Text>Get STEP #{this.props.currentStep.number}/{this.props.allSteps.length}</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
