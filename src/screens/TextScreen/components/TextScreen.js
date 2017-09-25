import React from 'react';
import {
  StyleSheet,
  Text,
  View,
	Dimensions,
	Platform,
  ActivityIndicator,
  Image, ScrollView
} from 'react-native';
import Markdown from 'react-native-easy-markdown';
import {styles} from 'react-native-theme';
import ScrollableHeader from "../../../components/ScrollableHeader";
import GradientBackground from "../../../components/GradientBackground";
import getImageUrl from "../../../utils/getImageUrl";
import {IStep} from "../../../interfaces";
import Button from "../../../components/Button";

type Props = {
  currentStep: IStep
}

type State = {
  colorTop: string,
  colorBottom: string
}

const MAX_HEIGHT = 250;

export default class TextScreen extends React.Component<Props, State> {
  render() {
    let {currentStep} = this.props;
    return(
				<ScrollableHeader
					headerComponent={<GradientBackground/>}
					header={
						<View style={styles.textScreenHeader}>
					
							<View style={styles.textScreenHeaderTitleContainer}>
								<Text style={styles.textScreenHeaderTitle}>STEP # {currentStep.number}</Text>
							</View>
					
							<View style={styles.textScreenScreen}>
								{currentStep.icon && <Image style={styles.textScreenImage} source={{ uri: getImageUrl ( currentStep.icon ) }}/>}
								<Text
									testID="title"
									style={[ styles.textScreenText, styles.textScreenTitle ]}>
									{currentStep.title}
								</Text>
							</View>
				
						</View>
					}
			
					content={
						<View style={styles.textScreenContent}>
							<Text
								testID="subtitle"
								style={[ styles.textScreenText, styles.textScreenSubtitle ]}>
								{currentStep.subtitle}
							</Text>
							<ScrollView style={styles.textScreenScrollView}>
								<Markdown
									markdownStyles={{
										u: {
											fontWeight: 'bold',
											color: '#000000'
										},
										block: {
											textAlign: 'center',
											alignSelf: 'center',
											fontSize: 14,
											marginBottom: 15,
											flexWrap: 'wrap',
											flexDirection: 'row'
										}
									}}>
									{currentStep.description}
								</Markdown>
							</ScrollView>
								<Button
									onPress={() => this.props.navigate ( 'AssignmentsScreen', { number: currentStep.number } )}
									text="ASSIGNMENTS"
								>
								</Button>
						</View>
					}
				/>
    );
  }
}