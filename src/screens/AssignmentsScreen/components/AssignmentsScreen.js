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
            number={i + 1}
          />
          }
          <Markdown markdownStyles={{
            u: {
              fontWeight: 'bold',
              fontFamily: "Helvetica",
              color: 'rgba(236, 0, 140, 0.72)',
            },
            block: {
              textAlign: 'left',
              fontFamily: "Helvetica",
              fontSize: 18,
              marginBottom: 15,
              width: Dimensions.get('window').width - ( !isLastItem ? 130 : 30 ),
            },
            list: {
              width: Dimensions.get('window').width - ( !isLastItem ? 130 : 30 ),
            },
            listItemContent: {
              textAlign: 'left',
              fontFamily: "Helvetica",
              fontSize: 18,
            }
          }}>
            {assignment.content}
          </Markdown>
        </View>
      )
    });

    return (
      <ScrollView contentContainerStyle={[styles.assignmentsScreenContainer, {paddingBottom: 30}]}>
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
