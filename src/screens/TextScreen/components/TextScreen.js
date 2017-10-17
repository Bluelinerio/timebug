import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from 'react-native-theme';
import Markdown from 'react-native-easy-markdown';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/Button';
import GradientBackground from '../../../components/GradientBackground';
import ScrollableHeader from '../../../components/ScrollableHeader';
import { goBack } from '../../../HOC/navigation';
import { IStep } from '../../../interfaces';
import getImageUrl from '../../../utils/getImageUrl';
import CustomImage from '../../../components/CustomImage';
import { headerBackground } from '../../../resources/images';
import { APPBAR_HEIGHT, STATUSBAR_HEIGHT} from '../../../constants';

type Props = {
	step: IStep
};

type State = {
	colorTop: string,
	colorBottom: string
};

const AssignmentButton = ({ color, onPress }) => (
	<Button
		onPress={onPress}
		text="ASSIGNMENTS"
		styles={{
			wideButtonBackground: {
				backgroundColor: color
			}
		}}
	/>
);

const Content = ({ subtitle, description, onPress, color }) => (
	<View style={styles.textScreenContent}>
		<Text testID="subtitle" style={[styles.textScreenText, styles.textScreenSubtitle]}>
			{subtitle}
		</Text>
		<ScrollView style={styles.textScreenScrollView}>
			<Markdown
				markdownStyles={{
					u: {
						fontWeight: 'bold',
						fontFamily: 'Helvetica',
						color: 'rgba(236, 0, 140, 0.72)'
					},
					block: {
						textAlign: 'left',
						fontFamily: 'Helvetica',
						fontSize: 18,
						marginBottom: 20,
						flexWrap: 'wrap',
						flexDirection: 'row'
					}
				}}
			>
				{description}
			</Markdown>
		</ScrollView>
		<AssignmentButton onPress={onPress} color={color} />
	</View>
);

const StepHeader = ({ goBack, imageUri, title, number }) => (
  <View style={styles.textScreenHeader}>
		<TouchableOpacity style={styles.textScreenBackButton} onPress={goBack}>
			<Icon name="md-close" size={30} color="white" />
		</TouchableOpacity>
		<View style={styles.textScreenHeaderTitleContainer}>
			<Text style={styles.textScreenHeaderTitle}>STEP {number}</Text>
		</View>
		<View style={styles.textScreenScreen}>
			{imageUri && <CustomImage style={styles.textScreenImage} imageUri={imageUri} />}
			<Text testID="title" style={[styles.textScreenTitle]}>
				{title}
			</Text>
		</View>
	</View>
);

export default ({ step, goToAssignmentsScreen, color }) => (
	<ScrollableHeader
		headerMaxHeight={252}
		headerMinHeight={STATUSBAR_HEIGHT}
		headerImage={headerBackground}
		headerComponent={<GradientBackground />}
		header={
			<StepHeader goBack={goBack} title={step.title} number={step.number} imageUri={getImageUrl(step.icon)} />
		}
		content={
			<Content
				subtitle={step.subtitle}
				description={step.description}
				color={color}
				onPress={() => goToAssignmentsScreen({ number: step.number })}
			/>
		}
	/>
);
