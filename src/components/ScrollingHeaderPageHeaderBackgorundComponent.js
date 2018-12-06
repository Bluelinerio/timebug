//@flow
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { APPBAR_HEIGHT, STATUSBAR_HEIGHT } from '../constants';

const ScrollingHeaderPageHeaderBackgorundComponent = ({
  color,
}: {
  color: string,
}) => (
  <View
    style={[
      styles.container,
      {
        backgroundColor: color,
      },
    ]}
  />
);
export default ScrollingHeaderPageHeaderBackgorundComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT + APPBAR_HEIGHT(),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
