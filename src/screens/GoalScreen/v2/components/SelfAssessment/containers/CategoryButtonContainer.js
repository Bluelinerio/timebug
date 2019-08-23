// @flow
import React, { useMemo } from 'react'
import CategoryButton from '../components/CategoryButton'
import { goToTool } from '2020_redux/actions/nav.actions'
import type { GoToToolParams } from '2020_redux/actions/nav.actions'
import mapNavigationDispatch from '2020_HOC/NavigationServiceHOC'

type Props = {
  category: Category,
  tool: any,
  goToTool: any => () => void,
}

const mapDispatchToProps = (dispatch: any) => ({
  goToTool: (payload: GoToToolParams) => () => {
    dispatch(goToTool(payload))
  },
})

const CategoryButtonContainer = (props: Props) => {
  const { category, tool, goToTool } = props

  const onPress = useMemo(
    () => {
      return goToTool({ tool, payload: { category: category.key } })
    },
    [category]
  )

  return (
    <CategoryButton
      category={category.name}
      categoryKey={category.key}
      onPress={onPress}
    />
  )
}

export default mapNavigationDispatch(mapDispatchToProps)(
  CategoryButtonContainer
)
