// @flow
import React from "react";
import { 
  TouchableOpacity, 
  ImageBackground 
} from "react-native";
import glamorous from 'glamorous-native'

type Props = {} & {
  style: React.StylePropTypes,
  children: [React.Element]
}

const StyledImageBackground = glamorous(ImageBackground) ({
    flex: 1,
    height: undefined,
    width: undefined,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderRadius: 6
  }
)

export default ({ style, children, ...props }: Props) => (
  <TouchableOpacity style={style}>
    <StyledImageBackground {...props}>
      {children}
    </StyledImageBackground>
  </TouchableOpacity>
);
