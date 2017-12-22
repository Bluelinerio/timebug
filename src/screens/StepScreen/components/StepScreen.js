import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Dimensions,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Markdown from '../../../Modules/Markdown';
import Icon from "react-native-vector-icons/Ionicons";
import styles from '../styles';
import Button from "../../../components/Button";
import ScrollableHeader from "../../../components/ScrollableHeader";
import { goBack } from "../../../HOC/navigation";
import type { Step } from "../../../services/cms";
import { getImageUrl } from "../../../services/cms";
import CustomImage from "../../../components/CustomImage";
import { headerBackground } from "../../../resources/images";
import { APPBAR_HEIGHT, STATUSBAR_HEIGHT } from "../../../constants";
import markdownStyles from "../../../styles/Markdown/assignment";
import ThemedGradientBackground from '../containers/ThemedGradientBackground'
import AssignmentButtonContainer from '../containers/AssignmentButtonContainer';

type Props = {
  step: Step
};

type State = {
  colorTop: string,
  colorBottom: string
};

const HEADER_HEIGHT = 282;

const Content = ({ subtitle, description, color }) => (
  <View style={styles.stepScreenContent}>
    <Text
      testID={"step_subtitle"}
      style={[styles.stepScreenText, styles.stepScreenSubtitle]}
    >
      {subtitle}
    </Text>
    <ScrollView style={styles.stepScreenScrollView}>
      <Markdown markdownStyles={markdownStyles}>{description}</Markdown>
    </ScrollView>
    <AssignmentButtonContainer />
  </View>
);

const Header = ({ goBack, imageUri, title, number }) => (
  <View style={[styles.stepScreenHeader]}>
    <ThemedGradientBackground/>
    <View style={{
      flex:1,
      flexDirection: 'row',
    }}>
      {imageUri && (
        <CustomImage style={styles.stepScreenImage}
          testID={'step_picture'}
          imageUri={imageUri}
        />
      )}
      <Text
        style={[styles.stepScreenTitle]}
      >
        {title}
      </Text>
    </View>
  </View>
);

export default ({ step, goToAssignmentLeadInScreen, color }) => (
  <ScrollableHeader
    headerMaxHeight={HEADER_HEIGHT}
    headerMinHeight={0}
    headerImage={headerBackground}
    headerComponent={
      <Header
        goBack={goBack}
        title={step.title}
        number={step.number}
        imageUri={getImageUrl(step.icon)}
      />
    }
    content={
      <Content
        subtitle={step.subtitle}
        description={step.description}
        color={color}
        onPress={() => goToAssignmentLeadInScreen({ number: step.number })}
      />
    }
  />
);
