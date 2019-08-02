// @flow
import React, { Fragment } from 'react'
import CategoryButton from '../containers/CategoryButtonContainer'
import { Category } from '../../context/CategoryContext'

type Props = {
  categories: Array<Category>,
}

class CategoryList extends React.PureComponent<Props> {
  render() {
    const { categories } = this.props
    return (
      <Fragment>
        {categories.map(cat => (
          <CategoryButton key={cat.key} category={cat} />
        ))}
      </Fragment>
    )
  }
}

export default CategoryList
