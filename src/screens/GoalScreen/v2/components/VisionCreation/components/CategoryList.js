// @flow
import React, { Fragment } from 'react'
import { View } from 'react-native'
import CategoryButton from '../containers/CategoryButtonContainer'
import Header from './Header'
import { Category } from '../static/Categories'
import BacklogLink from '../containers/BacklogLinkContainer'
import styles from '../styles'

type Props = {
  categories: Array<Category>,
  tool: any,
}

class CategoryList extends React.PureComponent<Props> {
  render() {
    const { categories, tool } = this.props
    return (
      <Fragment>
        <Header title={'Phase 3 goals'} />
        <View style={styles.categoryList}>
          {categories.map(cat => (
            <CategoryButton key={cat.key} category={cat} tool={tool} />
          ))}
        </View>
        <BacklogLink tool={tool} />
      </Fragment>
    )
  }
}

export default CategoryList
