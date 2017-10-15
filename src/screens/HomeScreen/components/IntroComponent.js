// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableHighlight,
  ScrollView,
  Image,
}                           from 'react-native';
import Button               from 'react-native-button';
import autobind             from 'autobind-decorator';
import Markdown             from 'react-native-easy-markdown';
import { styles }           from 'react-native-theme';
import { ILogin }           from "../../../interfaces/index";

const backgroundImage = require('../../../resources/images/sandClockConfetti.png');

type Props = {
  about: string,
  loginWithFB(): any,
}

type State = {
  modalVisible: boolean
}

export default class IntroComponent extends Component<Props, State> {

  @autobind
  onPressLogin() {
    this.props.loginWithFB()
  }

  render() {
    let { about } = this.props;
    return (
      <View style={styles.loginScreenScreen}>
        <Image source={backgroundImage} style={styles.loginScreenBackgroundImage}/>
        <View style={styles.loginScreenScreen}>
          <Text style={styles.loginScreenTitle}>Welcome</Text>
          <Markdown
            markdownStyles={{
              block: {
                alignSelf: 'center',
                marginBottom: 15,
                flexWrap: 'wrap',
                flexDirection: 'row',
                fontFamily: "Helvetica",
                fontSize: 24,
                fontWeight: "300",
                fontStyle: "italic",
                textAlign: "center",
                color: "rgba(236, 0, 140, 0.72)",
                marginHorizontal: 15.5,
                backgroundColor: 'transparent'
              },
            }}>
            {about}
          </Markdown>
          <Button
            containerStyle={styles.loginScreenWideButton}
            testID="login_button"
            onPress={this.onPressLogin}
          >
            <Text style={styles.loginScreenWideButtonText}>LOGIN</Text>
          </Button>
        </View>
      </View>
    )
  }
}

