/* @flow */

import React from 'react';
import { Image, Platform, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import VerticalGradient from './VerticalGradient';
import styles from '../styles'
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
		<View>
			<VerticalGradient />
			<View style={styles.header}>
				<View>
					<Text style={styles.headerDate}>
						{moment().format("dddd DD MMM").toUpperCase()}
					</Text>
					<Text style={iOSUIKit.largeTitleEmphasized}>{`Welcome`}</Text>
				</View>
				{user && user.email && 
					<TouchableOpacity>
						<GravatrImage 
								email={user.email} 
								style={styles.headerAvatar}
							/>
					</TouchableOpacity>
					}
			</View>
		</View>
	)

export default connect(mapStateToProps)(Banner);