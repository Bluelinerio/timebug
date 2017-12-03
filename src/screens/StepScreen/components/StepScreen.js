import React, { Component } from "react";
import {
  Dimensions,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { styles } from "react-native-theme";
import Markdown from '../../../Modules/Markdown';
import Icon from "react-native-vector-icons/Ionicons";

import Button from "../../../components/Button";
import GradientBackground from "../../../components/GradientBackground";
import ScrollableHeader from "../../../components/ScrollableHeader";
import { goBack } from "../../../HOC/navigation";
import { IStep } from "../../../interfaces";
import getImageUrl from "../../../utils/getImageUrl";
import CustomImage from "../../../components/CustomImage";
import { headerBackground } from "../../../resources/images";
import { APPBAR_HEIGHT, STATUSBAR_HEIGHT } from "../../../constants";
import markdownStyles from "../../../styles/Markdown/assignment";

type Props = {
  step: IStep
};

type State = {
  colorTop: string,
  colorBottom: string
};

const HEADER_HEIGHT = 282;

const AssignmentButton = ({ color, onPress }) => (
  <Button
    onPress={onPress}
    text="ASSIGNMENTS"
    buttonTestId={'step_to_assignment_button'}
    styles={{
      wideButtonBackground: {
        backgroundColor: color
      }
    }}
  />
);

const Content = ({ subtitle, description, onPress, color }) => (
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
    <AssignmentButton onPress={onPress} color={color} />
  </View>
);


const Header = ({ goBack, imageUri, title, number }) => (
  <View style={[styles.stepScreenHeader, { height: HEADER_HEIGHT}]}>
    <TouchableOpacity style={{
      position: 'absolute',
      top: 50,
      left: 15,
    }} onPress={goBack}
      testID={'step_screen_close_icon'}>
      <Icon name="md-close" size={30} color="white" />
    </TouchableOpacity>
    <View style={{
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Text style={{
        paddingTop: 28,
        paddingBottom: 30,
        fontFamily: "Helvetica",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "#ffffff",
        alignSelf: 'flex-end',
      }}
        testID={'step_screen_step_number'}
      >
        STEP {number}
      </Text>
    </View>
    <View style={{
      flex: 2,
      flexDirection: 'row',
      paddingHorizontal: 25,
      marginBottom: 30
    }}>
      {imageUri && (
        <CustomImage style={{
          backgroundColor: 'green'
        }}
          imageUri={imageUri}
        />
      )}
      <Text
        style={[styles.stepScreenTitle, { 
          top: STATUSBAR_HEIGHT + APPBAR_HEIGHT, 
        }]}
      >
        {title}
      </Text>
    </View>
  </View>
);

export default ({ step, goToAssignmentLeadInScreen, color }) => (
  <ScrollableHeader
    headerMaxHeight={HEADER_HEIGHT}
    headerMinHeight={STATUSBAR_HEIGHT}
    headerImage={headerBackground}
    headerComponent={<GradientBackground />}
    header={
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
