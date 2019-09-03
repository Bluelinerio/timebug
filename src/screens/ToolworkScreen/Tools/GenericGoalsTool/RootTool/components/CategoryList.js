// @flow
import React, { Fragment } from 'react'
import { View } from 'react-native'
import CategoryButton from '../containers/CategoryButtonContainer'
import Header from '../containers/HeaderContainer'
import { Category } from '../../context/CategoryContext'
import BacklogLink from '../containers/BacklogLinkContainer'
import GoalNavigator from '../../GoalsToolNavigator'
import styles from '../styles'

type Props = {
  categories: Array<Category>,
}

class CategoryList extends React.PureComponent<Props> {
  render() {
    const { categories } = this.props
    return (
      <Fragment>
        <GoalNavigator />
        <Header />
        <View style={styles.categoryList}>
          {categories.map(cat => (
            <CategoryButton key={cat.key} category={cat} />
          ))}
        </View>
        <BacklogLink />
      </Fragment>
    )
  }
}

export default CategoryList
