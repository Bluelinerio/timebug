import React, { Fragment } from 'react'
import CategoryButton from './CategoryButton'

class CategoryList extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <CategoryButton category={'Category1'} />
        <CategoryButton category={'Category2'} />
        <CategoryButton category={'Category3'} />
      </Fragment>
    )
  }
}

export default CategoryList
