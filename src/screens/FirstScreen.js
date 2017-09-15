import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
    headerStyle: {
      backgroundColor: '#00D2F5',
    },
    headerTintColor: 'white',
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('DayIntroducing');}}>
          <Text>Get Day 1</Text>
        </TouchableOpacity>
      </View>

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
});
