// @flow
import React, { Component, PureComponent } from 'react';
import { View} from 'react-native';
import { Pages } from 'react-native-pages';
import type { Assignment, Step } from '../../../services/cms';
import AssignmentLeadInPageComponent from './AssignmentLeadInPageComponent'
import BeginWorkbookButton 	from '../containers/BeginWorkbookButton';

export type Props = {
	assignments: Array<Assignment>,
  color: string,
  step: number
};

type State = {
  index:number
}
export default class PageWrapper extends Component<Props, State> {
  pages:Pages = null
  state = {
    index:0
  }
  render() {
    debugger
    const {	assignments, color, step } = this.props;
    const { page } = this.state;
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
              step={step}
              scrollToPage={index => this.pages && this.pages.scrollToPage(index) }
            />))
          }
        </Pages>
        }
    </View>
    )
  }
}
