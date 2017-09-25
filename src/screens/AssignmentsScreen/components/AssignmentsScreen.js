// @flow

import React from 'react';
import {
  Text,
  Dimensions,
  View,
  ActivityIndicator,
  Image,
  ScrollView
} from 'react-native';
import Swiper from 'react-native-swiper';
import { styles } from 'react-native-theme';
import Button from '../../../components/Button'
import Markdown from 'react-native-easy-markdown';
import autobind from 'autobind-decorator';
import {IAssignment} from "../../../interfaces";
import getImageUrl from "../../../utils/getImageUrl";

type Props = {
  assignments: IAssignment[]
}

type State = {
  currentSlide: number
}

export default class AssignmentsScreen extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      currentSlide: 0
    }
  }

  @autobind
  goToNextDay() {
    let {number} = this.props.currentStep;
    let {length} = this.props.allSteps;
    let nextDay = number + 1;
    if (nextDay <= length) {
      this.props.getStepFromCMSByDay(nextDay);
    }
    this.props.navigate('HomeScreen', {number})
  }

  render() {
    const {assignments} = this.props;
    let steps = assignments.map((assignment, i) => {
      let isLastItem = i !== assignments.length - 1;
      return (
        <View style={styles.assignmentsScreenSlide} key={i}>
          {assignment.icon.fields && isLastItem &&
          <Image style={styles.assignmentsScreenImage} source={{uri: getImageUrl(assignment.icon)}}/>}
          <Markdown markdownStyles={{
            u: {fontWeight: 'bold'},
            block: {
              textAlign: 'justify',
              alignSelf: 'center',
              fontSize: 14,
              marginBottom: 15,
              paddingVertical: 20,
              width: Dimensions.get('window').width - (isLastItem ? 130 : 30),
            }
          }}>
            {assignment.content}
          </Markdown>
        </View>
      )
    });

    return (
      <ScrollView contentContainerStyle={styles.assignmentsScreenContainer}>
        {steps}
        <Button
          onPress={this.goToNextDay}
          text="BEGIN"
        >
        </Button>
      </ScrollView>
    );
  }
}
