// @flow
import * as React from 'react';
import { Keyboard } from 'react-native';

class KeyboardComponent extends React.PureComponent<
  {
    enabled: boolean,
    dismissOnMount: boolean,
    keyboardDidShow: () => void,
    keyboardDidHide: () => void,
    shouldRender: ({
      showing: boolean,
      enabled: boolean,
    }) => boolean,
    children: React.Node | [React.Node],
  },
  { showing: boolean }
> {
  state = {
    showing: false,
    dismissOnMount: false,
  };

  componentDidMount() {
    if (this.props.dismissOnMount) {
      Keyboard.dismiss();
    }
    if (this.props.enabled) {
      this.keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        this.keyboardDidShow
      );
      this.keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        this.keyboardDidHide
      );
    }
  }

  componentWillUnmount() {
    if (this.props.enabled) {
      this.keyboardDidShowListener.remove();
      this.keyboardDidHideListener.remove();
    }
  }

  keyboardDidShow = () => {
    this.setState(
      {
        showing: true,
      },
      this.props.keyboardDidShow && this.props.keyboardDidShow()
    );
  };
  keyboardDidHide = () => {
    this.setState(
      {
        showing: false,
      },
      this.props.keyboardDidHide && this.props.keyboardDidHide()
    );
  };
  render() {
    const { shouldRender, children, enabled } = this.props;
    const { showing } = this.state;

    return children &&
      shouldRender &&
      shouldRender({
        showing,
        enabled,
      }) ? (
        <React.Fragment>{children}</React.Fragment>
      ) : null;
  }
}

export default KeyboardComponent;
