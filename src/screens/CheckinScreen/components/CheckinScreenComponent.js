// @flow
import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import CheckinList from '../containers/CheckinList';
import styles from '../styles';
import Banner from '../../../components/MinifiedBanner';

class CheckinScreenComponent extends React.PureComponent<any> {
  render() {
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <View style={styles.container}>
          <ScrollView style={styles.scroll}>
            <Banner />
            <View style={[styles.padded, styles.container]}>
              <CheckinList />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default CheckinScreenComponent;
