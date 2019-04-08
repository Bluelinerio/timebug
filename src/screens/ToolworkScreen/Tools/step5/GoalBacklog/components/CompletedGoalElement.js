import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import SvgIcon                          from '2020_components/SvgIcon'
import styles, { iconStyle }            from '../../common/styles'
import type { GoalWithToolData }        from '../../common/types'

type Props = {
  goal: GoalWithToolData,
  onPress: (goal: GoalWithToolData) => any,
  title: string,
  icon: string,
}

class CompletedGoalElement extends React.PureComponent<Props> {
  _onPress = () => {
    const { goal, onPress } = this.props
    onPress(goal)
  }

  render() {
    const { title, icon } = this.props
    return (
      <TouchableOpacity style={styles.elementContainer} onPress={this._onPress}>
        <View style={[styles.leftBlock, styles.leftIcon]}>
          <SvgIcon name={icon} {...iconStyle} />
        </View>
        <View style={styles.rightBlock}>
          <Text style={styles.elementText}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default CompletedGoalElement
