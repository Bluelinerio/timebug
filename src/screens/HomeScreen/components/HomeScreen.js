// @flow

import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  RefreshControl,
  Platform
} from 'react-native';
import {Header} from 'react-navigation';
import autobind from 'autobind-decorator';
import {IStep} from "../../../interfaces";
import getImageUrl from "../../../utils/getImageUrl";
import Button from "react-native-button";
import ScrollableHeader from "../../../components/ScrollableHeader";
import UselessTextInput from "../../../components/Input";


type Props = {
  allSteps: IStep[],
  currentStep: IStep,
  navigate(): any
}

type State = {
  refreshing: boolean
}

const headerBackground = require('../../../resources/images/home_background.jpg');
const buttonIcon = require('../../../resources/images/clock_icon.png');
const MAX_HEIGHT = 250;

export default class HomeScreen extends React.Component<Props, State> {
  render() {
    let {currentStep} = this.props;

    return <ScrollableHeader
      headerImage={headerBackground}
      header={
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Next challenge</Text>
          <View style={styles.challengeInfo}>
            <Image source={{uri: getImageUrl(currentStep.icon)}} style={styles.headerImage}/>
            <View>
              <View style={styles.firstPartTitle}>
                <Text style={[styles.text, styles.boldText]}>{currentStep.type}</Text>
                <Text style={[styles.text, styles.boldText]}>STEP # {currentStep.number}/{this.props.allSteps.length}</Text>
              </View>
              <Text style={[styles.text, styles.littleText]}>{currentStep.title}</Text>
            </View>
          </View>
          <Button
            containerStyle={styles.wideButton}
            onPress={() => {
              this.props.navigate('TextScreen', {number: currentStep.number});
            }}
          >
            <View style={styles.absoluteContainer}>
              <Image source={buttonIcon} style={styles.buttonImage}/>
              <Text style={[styles.durationText]}>{currentStep.duration} min</Text>

            </View>
            <Text style={styles.wideButtonText}>START</Text>
          </Button>
        </View>
      }
    />;
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white'
  },
  header: {
    top: 80,
    height: MAX_HEIGHT + 2,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    backgroundColor: '#6EBDDC',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    opacity: 0.9
  },
  headerImage: {
    width: 40,
    height: 40
  },
  challengeInfo: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  headerTitle: {
    color: 'white',
    paddingTop: 10,
    paddingBottom: 30,
    fontSize: 16
  },
  firstPartTitle: {
    width: Dimensions.get('window').width - 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3
  },
  boldText: {
    fontSize: 16,
    fontWeight: '500'
  },
  littleText: {
    fontSize: 13
  },
  wideButton: {
    marginTop: 75,
    backgroundColor: 'white',
    height: 45,
    minWidth: 240,
    paddingHorizontal: 10,
    borderRadius: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  wideButtonText: {
    color: '#0e3fa8',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'left',
    flex: 2,
    marginLeft: 15
  },
  absoluteContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  buttonImage: {
    width: 30,
    height: 30
  },
  durationText: {
    color: '#0e3fa8',
    fontWeight: '600',
    fontSize: 12
  }
});
