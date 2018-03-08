import React, { Component }                from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar
}                                          from 'react-native';
import Icon                                from 'react-native-vector-icons/Ionicons';
import Markdown                            from '../../../Modules/Markdown';
import Button                              from '../../../components/Button';
import GradientWithTwoColors               from '../../../components/GradientWithTwoColors';
import ScrollableHeader                    from '../../../components/ScrollableHeader';
import CustomImage                         from '../../../components/CustomImage';
import type { Step }                       from '../../../services/cms';
import { getImageUrl }                     from '../../../services/cms';
import { APPBAR_HEIGHT, STATUSBAR_HEIGHT } from '../../../constants';
import markdownStyles                      from '../../../styles/Markdown/stepScreen';
import StepScreenButtonContainer           from '../containers/StepScreenButtonContainer';
import styles                              from '../styles';

export type Props = {
  title: string,
  subtitle: string,
  description: string,
  number: number,
  icon: { uri: string },
  color: string,
  onPress: () => void
};

const HEADER_HEIGHT = Dimensions.get('window').height * 0.4;

const Content = ({ title, subtitle, description, color, number }) => (
  <View style={styles.stepScreenContent}>
    <StatusBar
      translucent
      barStyle="light-content"
      backgroundColor={'transparent'}
    />
    <Text
      testID={'step_subtitle'}
      style={[
        styles.stepScreenSubtitle,
        {
          color
        }
      ]}
    >
      {subtitle}
    </Text>
    <Text style={[styles.stepScreenTitle]}>{title}</Text>
    <ScrollView style={styles.stepScreenScrollView}>
      <Markdown markdownStyles={markdownStyles}>{description}</Markdown>
    </ScrollView>
    <StepScreenButtonContainer number={number} />
  </View>
);

const Header = ({ icon, title, number, color }) => (
  <View
    style={[
      styles.stepScreenHeader,
      {
        backgroundColor: color
      }
    ]}
  >
    {icon && (
      <CustomImage
        backgroundColor={color}
        style={styles.stepScreenImage}
        testID={'step_picture'}
        source={icon}
      />
    )}
  </View>
);

export default ({
  title,
  subtitle,
  description,
  number,
  icon,
  color,
  onPress,
  image
}) => (
  <ScrollableHeader
    headerMaxHeight={HEADER_HEIGHT}
    headerMinHeight={APPBAR_HEIGHT + STATUSBAR_HEIGHT}
    headerImage={image}
    headerComponent={
      <Header
        color={color}
        number={number}
        //icon={icon}
      />
    }
    header={
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: color
        }}
      />
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
);
