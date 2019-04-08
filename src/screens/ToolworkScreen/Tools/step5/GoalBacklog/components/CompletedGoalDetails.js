// @flow
import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import globalStyles                     from '../../common/styles'
import styles                           from '../styles'
import type { GoalWithToolData }        from '../../common/types'
import OptionsDialog                    from './OptionsDialog'

type Props = {
  goal: GoalWithToolData,
  toggleGoal: () => any,
  setCGO: (cgo: string) => any,
  unsetGoal: () => any,
  title: string,
  dialogElements: Array<any>,
  completionDate: string,
  goalOutcome: string,
  expectedDate: string,
  goalOutcomeText: string,
}

class CompletedGoalReview extends React.PureComponent<Props> {
  state = {
    openDialog: false,
  }

  _onSelectETC = (result: any) => {
    const { setCGO } = this.props
    const { value } = result
    setCGO(value)
    this._onClose()
  }

  _onClose = () => {
    this.setState({ openDialog: false })
  }

  _openDialog = () => {
    this.setState({ openDialog: true })
  }

  render() {
    const {
      toggleGoal,
      title,
      dialogElements,
      completionDate,
      goalOutcome,
      expectedDate,
      goalOutcomeText,
    } = this.props
    const { openDialog } = this.state
    return (
      <React.Fragment>
        <OptionsDialog
          dialogVisible={openDialog}
          onClose={this._onClose}
          elements={dialogElements}
          onSelect={this._onSelectETC}
          selectedItem={goalOutcome}
        />
        <View style={[globalStyles.titleContainer, styles.titleContainer]}>
          <Text style={[globalStyles.goalScreenSubtitle, styles.title]}>
            {title}
          </Text>
        </View>
        <View style={globalStyles.container}>
          <View style={styles.goalDataCard}>
            <View
              style={[
                globalStyles.goalReviewTextBlock,
                styles.goalReviewTextBlock,
              ]}
            >
              <Text style={globalStyles.goalScreenContent}>
                Target completion date: {expectedDate}
              </Text>
            </View>
            <View
              style={[
                globalStyles.goalReviewTextBlock,
                styles.goalReviewTextBlock,
              ]}
            >
              <Text style={globalStyles.goalScreenContent}>
                Completed at: {completionDate}
              </Text>
            </View>
            <View style={globalStyles.goalReviewTextWithMargin}>
              <Text style={globalStyles.goalTimeLeft}>
                Congratulations completing this goal!
              </Text>
            </View>
          </View>
          <View style={styles.goalOutcomeTextContainer}>
            <Text style={styles.goalOutcomeText}>
              The goal outcome for this goal is:
            </Text>
            <TouchableOpacity
              style={styles.goalOutcomeSelectorContainer}
              onPress={this._openDialog}
            >
              <Text style={styles.goalOutcomeSelector}>
                {goalOutcome
                  ? goalOutcomeText
                  : 'Not selected - Press to select!'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={globalStyles.optionsContainer}>
            <TouchableOpacity
              style={[globalStyles.optionButton, styles.optionButton]}
              onPress={toggleGoal}
            >
              <Text
                style={[globalStyles.optionButtonText, styles.optionButtonText]}
              >
                Not complete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    )
  }
}

export default CompletedGoalReview
