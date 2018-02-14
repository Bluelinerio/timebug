// @flow
import React, { Component, PureComponent } from 'react';
import { View } from 'react-native';
import { Pages } from 'react-native-pages';
import type { Assignment } from '../../../services/cms';
import AssignmentLeadInPageComponent from './AssignmentLeadInPageComponent'

export type Props = {
	assignments: [Assignment],
  color: string
};

type State = {
  index:number
}
export default class AssignmentsPages extends PureComponent<Props, State> {
  pages:Pages = null
  state = { index:0 }
  render() {
    const {	assignments, color } = this.props;
    return (
      <View style={{ flex: 1 }}>
        {assignments && 
        <Pages 
          horizontal={false}
          ref={ref => this.pages = ref }
          onScrollEnd={index => this.setState({ index })}
        >
          {assignments.map((assignment , index) => 
            (<AssignmentLeadInPageComponent
              key={index}
              isLastItem={index === assignments.length - 1}
              assignment={assignment}
              color={color}
              index={index}
              scrollToPage={index => this.pages && this.pages.scrollToPage(index) }
            />))
          }
        </Pages>
        }
    </View>
    )
  }
}
