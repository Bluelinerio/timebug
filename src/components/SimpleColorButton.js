import * as React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { deepBlue } from '../constants/colors';

export default class SimpleColorButton extends React.Component<{
  color: string,
  title: string,
  onPress: () => void,
}> {
  static defaultProps = {
    color: deepBlue,
  };
  state = {
    underlay: false,
  };
  _onHideUnderlay = () => this.setState({ underlay: false });
  _onShowUnderlay = () => this.setState({ underlay: true });

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor={'white'}
          onPress={() => null}
          onHideUnderlay={this._onHideUnderlay}
          onShowUnderlay={this._onShowUnderlay}
          style={[
            styles.touchable,
            {
              backgroundColor: this.state.underlay ? 'white' : this.props.color,
            },
          ]}
        >
          <Text
            style={{
              color: this.state.underlay ? this.props.color : 'white',
              fontWeight: 'bold',
            }}
          >
            {this.props.title}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 44,
    marginBottom: 20,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  touchable: {
    borderRadius: 22,
    paddingVertical: 7,
    paddingHorizontal: 14,
  },
  text: {
    fontWeight: 'bold',
  },
});
