// @flow
import React, { Component } from "react";
import {
  View
} from "react-native";
import Button               from "../../../components/Button";

export type NextButtonProps = { 
  isInvalid: boolean, 
  onPress: () => void, 
  buttonMessage:string, 
  backgroundColor:string
};

const SKIPP_ENABLED = false;
export default (props: NextButtonProps) => {
  const { isInvalid, onPress, buttonMessage, backgroundColor} = props;
  const active = isInvalid === false || SKIPP_ENABLED
  if (active) {
    return (
      <Button
        onPress={() => active ? onPress() : null }
        text={SKIPP_ENABLED ? 'SKIP' : buttonMessage}
        backgroundColor={backgroundColor}
        side='right' 
        withArrow
    />)
  } else {
    return null;
  }
}