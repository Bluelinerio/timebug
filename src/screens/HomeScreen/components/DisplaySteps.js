import React from 'react';
import { View, Text } from 'react-native';

type DisplayStepsProps = {
  steps: Array<any>,
};

const DisplaySteps = ({ steps }: DisplayStepsProps) => {
  return (
    <View>
      <Text>Completed Steps total : {steps.length}</Text>
      <Text>
        Steps:
        {steps && `${steps.map(step => ` ${step.stepId} `)}`}
      </Text>
    </View>
  );
};

export default DisplaySteps;
