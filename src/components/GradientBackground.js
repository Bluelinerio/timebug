import React, { Component }  from 'react';
import { StyleSheet, View, } from 'react-native';
import { styles }            from 'react-native-theme';
import LinearGradient        from 'react-native-linear-gradient';

type Props = {}

type State = {}


export default class GradientBackground extends Component<Props, State> {
  render() {
    return (
      <View style={styles.gradientContainer}>
        <LinearGradient
          colors={[
            StyleSheet.flatten(styles.gradientTopColor).color,
            StyleSheet.flatten(styles.gradientBottomColor).color,
          ]}
          style={styles.gradient}/>
      </View>
    );
  }
};