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
import HeaderImageScrollView, {TriggeringView} from 'react-native-image-header-scroll-view';
import {Header} from 'react-navigation';
import autobind from 'autobind-decorator';
import {IStep} from "../../../interfaces";
import getImageUrl from "../../../utils/getImageUrl";
import Button from "react-native-button";


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
const MIN_HEIGHT = Header.HEIGHT;
const MAX_HEIGHT = 250;

export default class HomeScreen extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      refreshing: false,
    };
  }

  @autobind
  _onRefresh() {
    this.setState({
      refreshing: true,
    });

    setTimeout(() => {
      this.setState({
        refreshing: false,
      });
    }, 2000);
  }

  render() {
    let {currentStep} = this.props;
    return (
      <HeaderImageScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        minOverlayOpacity={0}
        fadeOutForeground={true}
        renderHeader={() => <Image source={headerBackground} style={styles.image}/>}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
            tintColor="black"
          />
        }
        renderTouchableFixedForeground={() =>
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
                this.props.navigate('TextScreen');
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
      >
        <View style={styles.container}>
          <TriggeringView onHide={() => console.log('text hidden')}>

          </TriggeringView>
        </View>
      </HeaderImageScrollView>
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
  text: {
    color: 'white'
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
  },
  header: {
    height: MAX_HEIGHT,
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
    paddingBottom: 30
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
    marginTop: 85,
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
