// @flow
import React from 'react';
import Button from '../../../components/Button';

export type NextButtonProps = {
  isInvalid: boolean,
  onPress: () => void,
  disabled: boolean,
  buttonMessage: string,
  backgroundColor: string,
};

const NextButton = (props: NextButtonProps) => {
  const { onPress, buttonMessage, backgroundColor } = props;
  return (
    <Button
      onPress={onPress}
      text={buttonMessage}
      backgroundColor={backgroundColor}
      side="right"
      withArrow
    />
  );
};

export default NextButton;
