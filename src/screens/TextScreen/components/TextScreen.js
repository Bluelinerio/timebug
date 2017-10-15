import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
}                           from 'react-native';
import { styles }           from 'react-native-theme';
import Markdown             from 'react-native-easy-markdown';
import Icon                 from 'react-native-vector-icons/Ionicons';
import Button               from '../../../components/StepButton';
import GradientBackground   from "../../../components/GradientBackground";
import ScrollableHeader     from "../../../components/ScrollableHeader";
import { goBack }           from "../../../HOC/navigation";
import { IStep }            from "../../../interfaces";
import getImageUrl          from "../../../utils/getImageUrl";
import CustomImage          from "../../../components/CustomImage";

type Props = {
  currentStep: IStep
}

type State = {
  colorTop: string,
  colorBottom: string
}

const headerBackground = require('../../../resources/images/sandClockConfetti.png');

export default class TextScreen extends Component<Props, State> {
  render() {
    let { currentStep } = this.props;
    return (
      <ScrollableHeader
        headerImage={headerBackground}
        headerComponent={<GradientBackground/>}
        header={
          <View style={styles.textScreenHeader}>
            <TouchableOpacity
              style={styles.textScreenBackButton}
              onPress={goBack}
            >
              <Icon
                name="md-close"
                size={30}
                color="white"
              />
            </TouchableOpacity>
            <View style={styles.textScreenHeaderTitleContainer}>
              <Text style={styles.textScreenHeaderTitle}>STEP {currentStep.number}</Text>
            </View>

            <View style={styles.textScreenScreen}>
              {currentStep.icon &&
              <CustomImage
                style={styles.textScreenImage}
                imageUri={getImageUrl(currentStep.icon)}
              />}
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
                    fontFamily: "Helvetica",
                    color: 'rgba(236, 0, 140, 0.72)',
                  },
                  block: {
                    textAlign: 'left',
                    fontFamily: "Helvetica",
                    fontSize: 18,
                    marginBottom: 20,
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                  },
                }}>
                {currentStep.description}
              </Markdown>
            </ScrollView>
            <Button
              onPress={() => this.props.goToAssignmentsScreen({ number: currentStep.number })}
              text="ASSIGNMENTS"
            >
            </Button>
          </View>
        }
      />
    );
  }
}