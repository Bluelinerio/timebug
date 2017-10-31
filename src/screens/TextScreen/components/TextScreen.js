import React, { PureComponent } from "react";
import {
  Dimensions,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
  ListView
} from "react-native";
import Markdown from "react-native-easy-markdown";
import Icon from "react-native-vector-icons/Ionicons";
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import DefaultIndicator from "../../../components/DefaultIndicator";
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

const screen = Dimensions.get('window');

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
  <View>
    <Text
      testID="subtitle"
      style={[styles.textScreenText, styles.textScreenSubtitle]}
    >
      {subtitle}
    </Text>
    <View style={styles.contentMarkDownWrapper}>
      <Markdown markdownStyles={markdownStyles}>{description}</Markdown>
    </View>
    <AssignmentButton onPress={onPress} color={color} />
  </View>
);

const Nav = ({ goBack, stepNumber }) => (
  <View style={styles.navbar}>
    <TouchableOpacity style={styles.closeButton} onPress={goBack}>
      <Icon name="md-close" size={30} color="white" />
    </TouchableOpacity>
    <View style={styles.navTitleWrapper}>
      <Text style={styles.navTitleText}>
        STEP {stepNumber}
      </Text>
    </View>
  </View>
);

class TextScreenParallax extends PureComponent {

  responsiveFontSize = (title)=> {
    const size = title.length || 0;
    if (size < 40) {
      return 32
    } else if (size < 50 && size > 40) {
      return 20
    } else {
      return 20
    }
  }

  renderHeaderImg = (imageUri) => {
    return imageUri && <CustomImage  imageUri={imageUri} />;
  }

  renderHeader = () => {
    const { step, goToAssignmentsScreen, color } = this.props;
    const { icon, title, number } = step;
    const imageUri = getImageUrl(icon);
    const titleFontSize = this.responsiveFontSize(title);
    
    return (
      <View style={styles.headerWrapper}>
        <Nav goBack={goBack} stepNumber={number} />
        <View style={styles.headerDirection}>
          <View style={{width: '40%'}}>
            {this.renderHeaderImg(imageUri)}
          </View>
          <Text
            testID="title"
            style={[styles.textScreenTitle, { width: '60%', fontSize: titleFontSize }]}
          >
            {title} 
          </Text>
        </View> 
      </View>
    )
  }

  renderParallaxBackground = () => {
    return (
      <View key="background" style={styles.parallaxBg}>
        <GradientBackground />
        <Image source={headerBackground}
          style={{
            backgroundColor: 'transparent',
            width: screen.width,
          }}/>
      </View>
    )
  }

  render() {
    const { step, goToAssignmentsScreen, color } = this.props;
    const headerHeight = Math.round(screen.height * 0.3);
    const imageUri = getImageUrl(step.icon);

    return (
      <ParallaxScrollView
        contentContainerStyle={{ marginTop: STATUSBAR_HEIGHT }}
        backgroundColor="transparent"
        stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
        parallaxHeaderHeight={ headerHeight }
        backgroundSpeed={100}
        renderBackground={this.renderParallaxBackground}
        renderForeground={this.renderHeader}
    >
      <Content
        subtitle={step.subtitle}
        description={step.description}
        color={color}
        onPress={() => goToAssignmentsScreen({ number: step.number })} />
    </ParallaxScrollView>    
    );
  }
}


const STICKY_HEADER_HEIGHT = 20;

const styles = {
  navbar: {
    height: 50, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  navTitleWrapper: {
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  navTitleText: {
    fontFamily: "Helvetica",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
    alignSelf: 'center',
  },
  headerWrapper: {
    flex: 1
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: screen.width
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    justifyContent: 'flex-end'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  fixedSection: {
    position: 'absolute',
    top: 15,
    left: 10
  },
  closeButton: {
    width: 60,
    height: 60,
    position: 'absolute', 
    left: 8, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5
  },
  textScreenTitle: {
    flex: 1,
    fontFamily: "Helvetica",
    color: '#003681',
    width: '60%', 
    paddingRight: 8
  },
  textScreenText: {
    color: '#000000',
    fontSize: 12,
    textAlign: 'center',
  },
  textScreenSubtitle: {
    fontFamily: "Helvetica",
    fontSize: 24,
    fontWeight: "300",
    color: "#4a4a4a",
    textAlign: 'left',
    paddingHorizontal: 35,
    paddingVertical: 20,
  },
  headerDirection: {
    flexDirection: 'row'
  },
  parallaxBg: {
    opacity: 1 
  },
  contentMarkDownWrapper: {
    padding: 12
  }
};

export default TextScreenParallax;