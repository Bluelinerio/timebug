//@flow
import React             from 'react'
import { View, Text }    from 'react-native'
import { CHILDREN_KEYS } from '2020_forms/forms/goals'
import globalStyles      from '../../common/styles'
import styles            from '../styles'

type Step = {
  [x: string]: {
    _id: string,
    value: any,
  },
  _id: string,
  award: {
    estimate?: string,
    status: boolean,
  },
}

type Props = {
  step: Step,
  onPress: Step => {},
  onSubstepPress: Step => any,
}

class GoalSubstep extends React.PureComponent<Props> {
  render() {
    const { step } = this.props
    return (
      <View style={[globalStyles.rightBlock, styles.substepDataContainer]}>
        <Text style={[globalStyles.elementText, styles.substepTitle]}>
          - {step[CHILDREN_KEYS.form_5_steps.step_to_life_goal].value}
        </Text>

        <Text
          style={[
            globalStyles.elementText,
            styles.substepTitle,
            step.award && step.award.status === true
              ? styles.completedSubstep
              : styles.incompleteSubstep,
          ]}
        >
          {step.award && step.award.status === true
            ? `: Completed`
            : `: Not complete`}
        </Text>
      </View>
    )
  }
}

export default GoalSubstep
