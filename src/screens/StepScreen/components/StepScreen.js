// @flow
import React                               from 'react'
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  ScrollView,
  StatusBar
}                                          from 'react-native'
import Markdown                            from '../../../Modules/Markdown'
import ScrollableHeader                    from '../../../components/ScrollableHeader'
import CustomImage                         from '../../../components/CustomImage'
import { APPBAR_HEIGHT, STATUSBAR_HEIGHT } from '../../../constants'
import markdownStyles                      from '../../../styles/Markdown/stepScreen'
import StepScreenButtonContainer           from '../containers/StepScreenButtonContainer'
import styles                              from '../styles'

const HEADER_HEIGHT = Dimensions.get('window').height * 0.4

type ContentProps = {
  title: string,
  subtitle: string,
  description: string,
  color: string
}

const Content = ({ title, subtitle, description, color }: ContentProps) => (
  <View style={styles.stepScreenContent}>
    <StatusBar barStyle="light-content" backgroundColor={color} />
    <ScrollView style={styles.stepScreenScrollView}>
      {subtitle && (
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
      )}
      {title && <Text style={[styles.stepScreenTitle]}>{title}</Text>}
      <Markdown markdownStyles={markdownStyles}>{description}</Markdown>
    </ScrollView>
    <StepScreenButtonContainer />
  </View>
)

type HeaderProps = {
  icon: { uri: string },
  color: string
}

const Header = ({ icon, color }: HeaderProps) => (
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
)

export type Props = {
  title: string,
  subtitle: string,
  description: string,
  number: number,
  //icon: { uri: string },
  color: string,
  image: { uri: string }
}


const StepScreen = ({
  title,
  subtitle,
  description,
  number,
  //icon,
  color,
  image
}: Props) => (
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
      />
    }
  />
)

export default StepScreen