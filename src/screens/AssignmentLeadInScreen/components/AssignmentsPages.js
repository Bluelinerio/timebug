// @flow
import React, { Component, PureComponent } from 'react';
import { View} from 'react-native';
import { Pages } from 'react-native-pages';
import type { Assignment, Step } from '../../../services/cms';
import AssignmentLeadInPageComponent from './AssignmentLeadInPageComponent'

export type Props = {
	assignments: Array<Assignment>,
  color: string,
  step: number
};

export default ({ assignments, color, step }: Props) => (
  <View style={{ flex: 1 }}>
    <Pages horizontal={false}>
      {assignments.map((assignment , index) => 
        (<AssignmentLeadInPageComponent
          key={index}
          isLastItem={index === assignments.length - 1}
          assignment={assignment}
          color={color}
          index={index}
          step={step}
        />))
      }
    </Pages>
  </View>
)