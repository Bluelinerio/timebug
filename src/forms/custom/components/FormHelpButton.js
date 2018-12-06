// @flow
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles';

export type Props = {
  step: string,
  goToHelpScreen: () => any,
  helpButtonContainerStyle?: any,
  helpButtonLabelStyle: any,
  hasHelpSlides: boolean,
};

class HelpButton extends React.PureComponent<Props> {
  _onPress = () => {
    const { step, goToHelpScreen } = this.props;
    goToHelpScreen(step);
  };

  render() {
    const {
      helpButtonContainerStyle = {},
      helpButtonLabelStyle = {},
      hasHelpSlides,
    } = this.props;

    return (
      hasHelpSlides && (
        <View style={styles.helpButtonContainer}>
          <TouchableOpacity
            style={[styles.helpButton, helpButtonContainerStyle]}
            onPress={this._onPress}
          >
            <Icon
              size={30}
              style={helpButtonLabelStyle}
              name="ios-help"
              color="#FAFAFA"
            />
          </TouchableOpacity>
        </View>
      )
    );
  }
}

export default HelpButton;
