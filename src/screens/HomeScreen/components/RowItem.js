// @flow
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StatusBar, SafeAreaView } from 'react-native';
import { type NavigationScreenProp, type NavigationProp, withNavigation } from 'react-navigation';
import styles, { colors } from '../styles/index.styles';

type Props = {
	routeName: string,
	name: string,
	description: string,
	path: string,
	params: string,
	screen: ?NavigationScreenProp,
	navigation: ?NavigationProp
};


const Row = (props: Props) => {
  return <TouchableOpacity key={props.routeName} onPress={() => {
				const { routeName, navigation, path, params, screen } = props;
				if (!navigation || !screen || !screen.router) {
					return;
				}
				const { router } = screen;
				const action = path && router.getActionForPathAndParams(path, params);
				navigation.navigate(routeName, {}, action);
			}}>
			<SafeAreaView style={styles.rowItemContainer} forceInset={{ vertical: 'never' }}>
				<View style={styles.rowItem}>
					<Text style={styles.rowTitle}>{props.name}</Text>
					<Text style={styles.rowSubtitle}>{props.description}</Text>
				</View>
			</SafeAreaView>
		</TouchableOpacity>;
}

export default withNavigation(Row);