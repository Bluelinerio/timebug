/* @flow */

import React from 'react';
import { Image, Platform, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import VerticalGradient from './VerticalGradient';
import styles from '../styles'
import Logo from './Logo';
import md5 from 'md5';
import selectors from '../../../redux/selectors'
import {
  iOSColors,
  human,
  iOSUIKit,
  systemWeights
} from "react-native-typography";
import moment from 'moment';
const mapStateToProps = state => ({ user: selectors.user(state) });

const GravatrImage = ({ email, style}) => (
	<Image 
		source={{uri: `https://www.gravatar.com/avatar/${md5(email)}`}} 
		style={style} 
	/>
);

const Banner = ({ date='Monday, 27 November', user }) => 
  (
		<View style={styles.header}>
			<VerticalGradient />
			<View>
				<Text style={styles.headerDate}>{moment().format("dddd DD MMM")}</Text>
				<Text style={iOSUIKit.largeTitleEmphasized}>{`Welcome`}</Text>
			</View>
			{user &&
				<TouchableOpacity>
					<GravatrImage 
							email={user && user.email ? user.email : 'amosel@gmail.com'} 
							style={styles.headerAvatar}
						/>
				</TouchableOpacity>
				}
		</View>
	)

export default connect(mapStateToProps)(Banner);

// export default ({ title = 'Welcome' } : {title: string }) => (
// 	<SafeAreaView style={styles.header} forceInset={{ vertical: 'never' }}>
// 		<View style={styles.banner}>
// 			<VerticalGradient />
// 			<Logo />
// 			<Text style={styles.bannerTitle}>{title}</Text>
// 		</View>
// 	</SafeAreaView>
// );