// @flow

import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  ActivityIndicator,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import Button from 'react-native-button';
import Markdown from 'react-native-easy-markdown';
import {IAssignment} from "../../../interfaces/IAssignment";
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

  onIndexChanged(index: number) {
    this.setState({
      currentSlide: index
    })
  }

  onNextButtonPressed() {
    const {assignments} = this.props;
    const { dispatch } = this.props;

    if (this.state.currentSlide !== assignments.length - 1) {
      this.refs.swiper.scrollBy(1)
    } else {
      dispatch({type:'Navigation/RESET', actions: [{ type: 'Navigate', routeName: 'TextScreen'}], index: 0 })
    }
  }

  render() {
    const {assignments} = this.props;
    let slides = assignments.map((assignment, i) => {
      return (
        <View style={styles.slide} key={i}>
          {assignment.icon.fields && <Image style={styles.image} source={{uri: getImageUrl(assignment.icon)}}/>}
          <Markdown markdownStyles={{
            u: {fontWeight: 'bold'},
            block: {
              textAlign: 'center',
              alignSelf: 'center',
              fontSize: 14,
              marginBottom: 15,
              paddingVertical: 20
            }
          }}>
            {assignment.content}
          </Markdown>
          <Button
            containerStyle={styles.wideButton}
            onPress={this.onNextButtonPressed.bind(this)}
          >
            <Text style={styles.wideButtonText}>NEXT</Text>
          </Button>
        </View>
      )
    });

    return (
      <Swiper
        ref="swiper"
        index={this.state.index}
        onIndexChanged={this.onIndexChanged.bind(this)}
        style={styles.wrapper}
        activeDotColor="#FF008F"
        loop={false}
      >
        {slides}
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60
  },
  text: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold',
  },
  image: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200
  },
  wideButton: {
    borderWidth: 2,
    borderColor: '#00D2F5',
    height: 50,
    minWidth: 200,
    paddingHorizontal: 50,
    borderRadius: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  wideButtonText: {
    color: '#00D2F5',
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
  },
});