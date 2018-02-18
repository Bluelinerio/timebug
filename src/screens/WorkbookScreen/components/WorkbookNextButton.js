// @flow
import React, { Component } from "react";
import {
  View
} from "react-native";
import Button               from "../../../components/Button";

export type NextButtonProps = { 
  isInvalid: boolean, 
  onPress: () => void,
  disabled: boolean,
  buttonMessage: string, 
  backgroundColor: string
};

export default (props: NextButtonProps) => {
  const { onPress, buttonMessage, backgroundColor} = props;  
  return (
    <Button
      onPress={onPress}
      text={buttonMessage}
      backgroundColor={backgroundColor}
      side='right' 
      withArrow
    />)
}