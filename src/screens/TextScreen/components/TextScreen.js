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
import Button from 'react-native-button';
import ScrollableHeader from "../../../components/ScrollableHeader";
import GradientBackground from "../../../components/GradientBackground";
import getImageUrl from "../../../utils/getImageUrl";
import {IStep} from "../../../interfaces";

type Props = {
  currentStep: IStep
}

type State = {
  colorTop: string,
  colorBottom: string
}

const MAX_HEIGHT = 250;
const backgroundGradient = require('../../../resources/images/backgroundGradient2.png');

export default class TextScreen extends React.Component<Props, State> {
  state = {
    colorTop: '#79bddd',
    colorBottom: '#ffffff',
  };
	componentDidMount() {
		this.setState({
			colorTop: '#79bddd',
			colorBottom: '#ffffff'
		});
	}
  render() {
    let {currentStep} = this.props;
    return(
				<ScrollableHeader
					headerImage={backgroundGradient}
					header={
						<View style={styles.header}>
					
							<View style={styles.headerTitleContainer}>
								<Text style={styles.headerTitle}>STEP # {currentStep.number}</Text>
							</View>
					
							<View style={styles.screen}>
								{currentStep.icon && <Image style={styles.image} source={{ uri: getImageUrl ( currentStep.icon ) }}/>}
								<Text
									testID="title"
									style={[ styles.text, styles.title ]}>
									{currentStep.title}
								</Text>
							</View>
				
						</View>
					}
			
					content={
						<View style={styles.content}>
							<Text
								testID="subtitle"
								style={[ styles.text, styles.subtitle ]}>
								{currentStep.subtitle}
							</Text>
							<ScrollView style={styles.scrollView}>
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
							<View style={styles.buttonWrapper}>
								<Button containerStyle={styles.wideButton}
												testID="begin_button"
												onPress={() => this.props.navigate ( 'AssignmentsScreen', { number: currentStep.number } )}>
									<Text style={styles.wideButtonText}>BEGIN</Text>
								</Button>
							</View>
						</View>
					}
				/>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 25
  },
	header: {
		top: 80,
		height: MAX_HEIGHT + 2,
		width: Dimensions.get('window').width,
		alignItems: 'center',
		// backgroundColor: '#6EBDDC',
		paddingTop: Platform.OS === 'ios' ? 20 : 0,
		// opacity: 0.9
	},
	headerTitleContainer: {
  	flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	headerTitle: {
		color: 'white',
		paddingTop: 10,
		paddingBottom: 30,
		fontSize: 16,
		alignSelf: 'flex-end'
	},
	content: {
    marginTop: MAX_HEIGHT + 2,
		paddingHorizontal: 20
  },
  text: {
    color: '#000000',
    fontSize: 12,
    textAlign: 'center',
  },
  subtitle: {
    color: '#797979',
    textAlign: 'left',
    paddingHorizontal: 35,
    paddingVertical: 20,
    fontSize: 20,
  },
  title: {
    color: '#103682',
    fontSize: 25,
    paddingBottom: 20,
    // fontWeight: 'bold',
		alignSelf: 'flex-end',
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 20,
		textAlign: 'left'
  },
  image: {
    flex: 1,
    alignSelf: 'flex-start',
    // justifyContent: 'center',
    width: 120,
    height: 120,
		bottom: 20
  },
  wideButton: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#00D2F5',
    height: 50,
    minWidth: 200,
    paddingHorizontal: 50,
    borderRadius: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  wideButtonText: {
    color: '#00D2F5',
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonWrapper: {
    flex: 1,
    // position: 'absolute',
    height: 100,
    backgroundColor: 'rgba(255,255,255,0.85)',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    zIndex: 999
  },
  description: {
    flex: 1,
    paddingBottom: 300
  },
	scrollView: {
  	flex: 1
	},
	gradient: {
		height: 200,
	},
	blur: {
  	position: 'absolute',
		top: Dimensions.get('window').height / 2,
		width: Dimensions.get('window').width,
		height: 50,
		backgroundColor: '#abcdef',
		opacity: 0.6
	}
});