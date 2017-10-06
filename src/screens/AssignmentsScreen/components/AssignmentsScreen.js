// @flow

import React, { Component }             from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { styles }                       from 'react-native-theme';
import Button                           from '../../../components/Button'
import Markdown                         from 'react-native-easy-markdown';
import { IAssignment }                  from "../../../interfaces";
import AssignmentNumber                 from "./AssignmentNumber";

type Props = {
  assignments: IAssignment[],
  goToWorkBookScreen(): any
}

type State = {
  currentSlide: number
}

export default class AssignmentsScreen extends Component<Props, State> {
  constructor() {
    super();

    this.state = {
      currentSlide: 0,
    }
  }

  render() {
    const { assignments } = this.props;
    let steps             = assignments.map((assignment, i) => {
      let isLastItem = i === assignments.length - 1;
      return (
        <View style={styles.assignmentsScreenSlide} key={i}>
          {!isLastItem &&
          <AssignmentNumber
            number={assignment.order}
          />
          }
          <Markdown markdownStyles={{
            u: { fontWeight: 'bold' },
            block: {
              textAlign: 'justify',
              alignSelf: 'center',
              fontSize: 14,
              marginBottom: 15,
              paddingVertical: 20,
              width: Dimensions.get('window').width - ( !isLastItem ? 130 : 30 ),
            },
          }}>
            {assignment.content}
          </Markdown>
        </View>
      )
    });

    return (
      <ScrollView contentContainerStyle={styles.assignmentsScreenContainer}>
        {steps}
        <Button
          onPress={() => this.props.goToWorkBookScreen({})}
          text="BEGIN"
        >
        </Button>
      </ScrollView>
    );
  }
}
