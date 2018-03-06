// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  Dimensions,
  View,
  TouchableHighlight,
  ScrollView,
  Image
} from 'react-native';
import Markdown from '../../../Modules/Markdown';
import LinearGradient from 'react-native-linear-gradient';
import FBLoginButton from '../containers/FBLoginButton';
import ScrollableHeader from '../../../components/ScrollableHeader';
import DefaultIndicator from '../../../components/DefaultIndicator';
import { backgroundImage } from '../../../resources/images/';
import { deepBlue, hotPink } from '../../../constants/colors';
import { APPBAR_HEIGHT, STATUSBAR_HEIGHT, TITLE_OFFSET } from '../../../constants';
import LoginButtonStyles from '../../../styles/components/Button/login';
import markdownStyles from '../../../styles/Markdown/intro';

const Header = () => <View style={styles.header} />;

const Content = () => (
  <View style={styles.content}>
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: 20
      }}
    >
      <Markdown markdownStyles={markdownStyles}>{'about'}</Markdown>
    </ScrollView>
    <FBLoginButton />

    {/* TODO: Add textId and buttontestId for fb Button 
		<Button onPress={onPress} textTestId={'login_text'} buttonTestId={'login_button'} text={'LOGIN WITH FACEBOOK'} styles={LoginButtonStyles}/> 
		*/}
  </View>
);

export default () => (
  <ScrollableHeader
    headerMaxHeight={STATUSBAR_HEIGHT}
    headerMinHeight={STATUSBAR_HEIGHT}
    header={<Header />}
    content={<Content />}
  />
);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    paddingTop: 0,
    fontFamily: 'HelveticaNeue',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: deepBlue,
    backgroundColor: 'transparent'
  },
  gradient: {
    flex: 1,
    alignSelf: 'stretch'
  },
  content: {
    marginTop: 30,
    marginBottom: 30
  }
});
