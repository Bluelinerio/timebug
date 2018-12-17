// @flow
import React, { PureComponent } from 'react';
import { StatusBar, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import styles from '../styles';
import Version from '../../../containers/Version';
import Banner from '../../../components/MinifiedBanner';
import ContentArea from './../containers/ContentAreaContainer';
import PhaseProgress from '../containers/PhaseProgressContainer';

export default class StartScreenComponent extends PureComponent {
  render() {
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <StatusBar barStyle="dark-content" backgroundColor={'white'} />
        <ScrollView
          style={[styles.container]}
          stickyHeaderIndices={[0]}
        >
          <View style={styles.header}>
            <Banner />
            <PhaseProgress />
          </View>
          <View style={styles.container}>
            <ContentArea />
            <Version />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
