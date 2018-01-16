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
import GradientWithTwoColors from '../../../components/GradientWithTwoColors'
import ScrollableHeader from "../../../components/ScrollableHeader";
import type { Step } from "../../../services/cms";
import { getImageUrl } from "../../../services/cms";
import CustomImage from "../../../components/CustomImage";
import { headerBackground } from "../../../resources/images";
import { APPBAR_HEIGHT, STATUSBAR_HEIGHT } from "../../../constants";
import markdownStyles from "../../../styles/Markdown/stepScreen";
import AssignmentButtonContainer from '../containers/AssignmentButtonContainer';

export type Props = {
  title: string, 
  subtitle: string, 
  description: string, 
  number:number, 
  imageUri:string, 
  color: string, 
  onPress: () => void
};

const HEADER_HEIGHT = Dimensions.get('window').height * 0.4

const Content = ({ title, subtitle, description, color, number }) => (
  <View style={styles.stepScreenContent}>
    <Text
    testID={"step_subtitle"}
    style={[styles.stepScreenSubtitle]}
    >
    {subtitle}
    </Text>
    <Text
      style={[styles.stepScreenTitle]}
    >
      {title}
    </Text>
    <ScrollView style={styles.stepScreenScrollView}>
      <Markdown markdownStyles={markdownStyles}>{description}</Markdown>
    </ScrollView>
    <AssignmentButtonContainer number={number} />
  </View>
);


const Header = ({ imageUri, title, number, color}) => (
  <View style={styles.stepScreenHeader}>
    <GradientWithTwoColors gradientTopColor={color} gradientBottomColor={'white'}/>
    <CustomImage style={styles.stepScreenImage}
      testID={'step_picture'}
      imageUri={imageUri}
    />
  </View>
);

export default ({ title, subtitle, description, number, imageUri, color, onPress }) => (
  <ScrollableHeader
    headerMaxHeight={HEADER_HEIGHT}
    headerMinHeight={APPBAR_HEIGHT + STATUSBAR_HEIGHT}
    headerImage={headerBackground}
    headerComponent={
      <Header
        color={color}
        number={number}
        imageUri={imageUri}
      />
    }
    header={
        <GradientWithTwoColors gradientTopColor={color} gradientBottomColor={'white'}/>
    }
    content={
      <Content
        number={number}
        title={title}
        subtitle={subtitle}
        description={description}
        color={color}
        onPress={onPress}
      />
    }
  />
)