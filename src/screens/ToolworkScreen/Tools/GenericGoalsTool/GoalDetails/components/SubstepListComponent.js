// @flow
import React, { Fragment } from 'react'
import { View } from 'react-native'
import { Goal, Substep } from '../../types'
import styles from '../styles'
import GoalSubstep from '../containers/GoalSubstepContainer'
import OptionsDialog from '2020_components/OptionsDialog'

type DialogElement = {
  text: string,
  value: string,
}

type Props = {
  goal: Goal,
  dialogOpen?: boolean,
  dialogElements?: Array<DialogElement> | null,
  onClose: () => void,
  onSelectDue: DialogElement => void,
  onSelectStep: Substep => void,
  selectedStep: Substep | null,
  onStepStore: Substep => void,
  dueValue: string,
}

class SubstepListComponent extends React.PureComponent<Props> {
  render() {
    const {
      goal,
      dialogOpen = false,
      dialogElements = null,
      onClose,
      onSelectDue,
      onSelectStep,
      selectedStep = null,
      onStepStore,
      dueValue = null,
    } = this.props
    return (
      <Fragment>
        <OptionsDialog
          dialogVisible={dialogOpen}
          onClose={onClose}
          elements={dialogElements}
          onSelect={onSelectDue}
          text={'When will you complete this step?'}
        />
        <View style={styles.stepsContainer}>
          {goal.steps.map(s => (
            <GoalSubstep
              key={s.id}
              goal={goal}
              substep={s}
              onSelectStep={onSelectStep}
              selectedStep={selectedStep}
              onStepStore={onStepStore}
              dueValue={dueValue}
            />
          ))}
        </View>
      </Fragment>
    )
  }
}

export default SubstepListComponent
