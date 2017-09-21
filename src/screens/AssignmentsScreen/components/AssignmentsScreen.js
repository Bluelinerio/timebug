// @flow

import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  ActivityIndicator,
  Image,
  ScrollView
} from 'react-native';
import Swiper from 'react-native-swiper';
import Button from 'react-native-button';
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
        <View style={styles.slide} key={i}>
          {assignment.icon.fields && isLastItem &&
          <Image style={styles.image} source={{uri: getImageUrl(assignment.icon)}}/>}
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
      <ScrollView contentContainerStyle={styles.container}>
        {steps}
        <Button
          containerStyle={styles.wideButton}
          onPress={this.goToNextDay}
        >
          <Text style={styles.wideButtonText}>BEGIN</Text>
        </Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  slide: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30
  },
  text: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold',
  },
  image: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100
  },
  wideButton: {
    backgroundColor: '#6EBDDC',
    height: 50,
    minWidth: 250,
    paddingHorizontal: 50,
    marginBottom: 30,
    borderRadius: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  wideButtonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
});