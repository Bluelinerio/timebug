import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image, ScrollView
} from 'react-native';
import Markdown from 'react-native-easy-markdown';
import Button from 'react-native-button';
import getImageUrl from "../../../utils/getImageUrl";
import {IStep} from "../../../interfaces";

type Props = {
  currentStep: IStep
}

type State = {

}


export default class TextScreen extends React.Component<Props, State> {
  render() {
    let {currentStep} = this.props;
    return (
      <View style={styles.screen}>
        {currentStep.icon && <Image style={styles.image} source={{uri: getImageUrl(currentStep.icon)}}/>}
        <Text
          testID="subtitle"
          style={[styles.text, styles.subtitle]}>
          {currentStep.subtitle}
        </Text>
        <Text
          testID="title"
          style={[styles.text, styles.title]}>
          {currentStep.title}
        </Text>
        <ScrollView
          style={styles.description}
          testID="introducing_text"
        >
          <Markdown
            markdownStyles={{
              u: {
                fontWeight: 'bold',
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
                  onPress={() => this.props.navigate('AssignmentsScreen')}>
            <Text style={styles.wideButtonText}>BEGIN</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 25
  },
  text: {
    color: '#000000',
    fontSize: 12,
    textAlign: 'center'
  },
  subtitle: {
    color: '#4c82cd',
    paddingHorizontal: 15,
    fontSize: 15,
  },
  title: {
    color: '#4c82cd',
    fontSize: 20,
    paddingBottom: 20,
    fontWeight: 'bold',

  },
  image: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150
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
    position: 'absolute',
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
  }
});