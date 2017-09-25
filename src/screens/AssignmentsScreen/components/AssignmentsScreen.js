// @flow

import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  ScrollView
} from 'react-native';
import Button from '../../../components/Button'
import Markdown from 'react-native-easy-markdown';
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
          onPress={() => this.props.navigate('CongratulationsScreen')}
          text="BEGIN"
        >
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
  }
});