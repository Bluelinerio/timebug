import * as React from "react";
import { View } from "react-native";

type Layout = {
  x: number,
  y: number,
  width: number,
  height: number
};

type OnLayoutState = {
  layout?: Layout
};

export type Props = {
  render: OnLayoutState => React.Element
};

export default class OnLayout extends React.Component<
  { render: OnLayoutState => React.Element },
  Layout
> {
  state: OnLayoutState = { layout: null };
  onLayout = ({ nativeEvent: { layout } }) => {
    this.setState({
      layout
    });
  };
  render() {
    const { render, style, ...props } = this.props;
    const { layout } = this.state;
    return (
      <View
        style={{ flex: 1, alignSelf: "stretch" }}
        {...props}
        onLayout={this.onLayout}
      >
        {(render && layout && render(layout)) || null}
      </View>
    );
  }
}
