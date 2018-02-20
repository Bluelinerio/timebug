// @flow
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type Props = {
	message: string
};

export default ({ message, title='Error' }: Props) => {
	return (
		<View style={styles.container} testID="error_view">
      <Text style={{padding: 20, textAlign:'center', fontWeight: 'bold'}} >{title}</Text>
      <Text style={{padding: 20, textAlign:'center', fontWeight: '100'}} >{message}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
