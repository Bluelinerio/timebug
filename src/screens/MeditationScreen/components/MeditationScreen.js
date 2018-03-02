import * as React from "react";
import { Image, View, Text, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView, NavigationActions } from "react-navigation";
import Entypo from "react-native-vector-icons/Entypo";
import TouchableBounce from "react-native/Libraries/Components/Touchable/TouchableBounce";
import LinearGradient from "react-native-linear-gradient";
import SoundPlayback from "./SoundPlayback";
import CloseButton from "./CloseButton";
import Ticker from "./Ticker";

// freesuonds:
//https://freesound.org/people/reinsamba/sounds/46062/

const VerticalGradientWithTwoColors = ({
  startColor = "#004E69",
  endColor = "#0D0D0D",
  children,
  style
}) => (
  <LinearGradient
    style={{
      flex: 1
    }}
    colors={[startColor, endColor]}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
  >
    {children}
  </LinearGradient>
);

const PlayButton = () => <View />;
const CountdownLabel = ({ text = "meditation" }) => <Text>{text}</Text>;

// class PlaybackControllerButton extends
export default class MeditationScreen extends React.PureComponent<> {
  state = {
    soundPlaying: false,
    soundReady: false,
    countdown: 0
  };

  pause = () => {};

  render() {
    const { navigation } = this.props;
    const { soundReady, soundPlaying, countdown } = this.state;
    return (
      <VerticalGradientWithTwoColors>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor={"transparent"}
        />
        {StatusBar.currentHeight && (
          <View
            style={{
              backgroundColor: "transparent",
              height: StatusBar.currentHeight
            }}
          />
        )}
        <SafeAreaView>
          <CloseButton dispatch={navigation.dispatch} />
          <SoundPlayback
            url={require("../../../resources/sounds/gong.wav")}
            ref={c => (this.soundPlayback = c)}
            onReady={() =>
              this.setState({ soundReady: true, soundPlaying: false })
            }
            onPlaying={() => this.setState({ soundPlaying: true })}
          />
          {soundReady && (
            <Entypo.Button
              name={soundPlaying ? "controller-paus" : "controller-play"}
              backgroundColor={"transparent"}
              pressColor={"transparent"}
              onPress={
                soundPlaying
                  ? () => this.pause
                  : () => this.soundPlayback.play()
              }
              color={"white"}
              size={88}
              style={styles.playButton}
            />
          )}
          {countdown > 0 && (
            <Ticker
              text={"10:00"}
              style={{
                fontSize: 20
              }}
            />
          )}
        </SafeAreaView>
      </VerticalGradientWithTwoColors>
    );
  }
}

const styles = StyleSheet.create({
  playButton: {
    alignSelf: "center",
    backgroundColor: "transparent",
    paddingHorizontal: 10,
    paddingVertical: 10
  }
});
