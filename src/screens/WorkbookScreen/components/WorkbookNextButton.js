// @flow
import React, { Component } from "react";
import {
  View
} from "react-native";
import Button               from "../../../components/Button";
import {
  Alert // for future user in case we want users to get error as alert.
} from 'react-native'

export type NextButtonProps = { 
  isInvalid: boolean, 
  onPress: () => void, 
  buttonMessage:string, 
  backgroundColor:string
};

const SKIPP_ENABLED = false;
const ALWAYS_PPOGRESS = true;
export default (props: NextButtonProps) => {
  const { isInvalid, onPress, buttonMessage, backgroundColor} = props;
  const active = isInvalid === false || SKIPP_ENABLED
  return (
    <Button
      onPress={() => ALWAYS_PPOGRESS ? onPress() : active ? onPress() : null }
      text={SKIPP_ENABLED ? 'SKIP' : buttonMessage}
      backgroundColor={backgroundColor}
      side='right' 
      withArrow
    />)
}