// @flow
import React                            from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import SvgIcon                          from '2020_components/SvgIcon'
import styles                           from '../styles'

type Props = {
  onPress: () => void,
  category: string,
  categoryKey: string,
  setCategory: string => void,
  openGoalList: () => void,
  iconStyle: any,
  iconName: string,
}

class CategoryButton extends React.PureComponent<Props> {
  _onPress = () => {
    const { setCategory, openGoalList, categoryKey } = this.props
    setCategory(categoryKey)
    openGoalList()
  }

  render() {
    const { category, iconStyle, iconName } = this.props
    return (
      <TouchableOpacity style={styles.categoryButton} onPress={this._onPress}>
        <View style={styles.leftBlock}>
          <SvgIcon name={iconName} {...iconStyle} />
        </View>
        <View style={styles.rightBlock}>
          <Text style={styles.categoryButtonText}>{category}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default CategoryButton
