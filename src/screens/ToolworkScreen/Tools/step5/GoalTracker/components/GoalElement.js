// @flow
import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import SvgIcon                          from '2020_components/SvgIcon'
import styles, { iconStyle }            from '../../common/styles'

type Props = {
  goal: any,
  onSelect: String => any,
  title: string,
  icon: string,
}

// TODO: Rename award data to tool data
class GoalElement extends React.PureComponent<Props> {
  _onPress = () => {
    const { goal, onSelect } = this.props
    onSelect(goal)
  }

  render() {
    const { goal, icon, title } = this.props
    const awardData = goal.award || {}
    return (
      !awardData.deleted &&
      !awardData.completed && (
        <TouchableOpacity
          style={styles.elementContainer}
          onPress={this._onPress}
        >
          <View style={[styles.leftBlock, styles.leftIcon]}>
            <SvgIcon name={icon} {...iconStyle} />
          </View>
          <View style={styles.rightBlock}>
            <Text style={styles.elementText}>{title}</Text>
          </View>
        </TouchableOpacity>
      )
    )
  }
}

export default GoalElement
