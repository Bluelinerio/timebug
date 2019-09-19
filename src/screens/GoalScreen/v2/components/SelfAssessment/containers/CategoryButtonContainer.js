// @flow
import React, { useMemo } from 'react'
import CategoryButton from '../components/CategoryButton'
import { goToTool } from '2020_redux/actions/nav.actions'
import type { GoToToolParams } from '2020_redux/actions/nav.actions'
import mapNavigationDispatch from '2020_HOC/NavigationServiceHOC'
import { iconStyle, color } from '../styles'
import { useIcon } from '../hooks/categoryHooks'
import { useGoals } from '../hooks/categoryHooks'

type Props = {
  category: Category,
  tool: any,
  goToTool: any => () => void,
  data: any,
}

const mapDispatchToProps = (dispatch: any) => ({
  goToTool: (payload: GoToToolParams) => () => {
    dispatch(goToTool(payload))
  },
})

const CategoryButtonContainer = (props: Props) => {
  const { category, tool, goToTool, data } = props
  const iconName = useIcon(category.key)
  const goals = useGoals(data, category.key)

  const onPress = useMemo(
    () => {
      return goToTool({ tool, payload: { category: category.key } })
    },
    [category]
  )

  const goalCount = goals.length

  return (
    <CategoryButton
      category={category.name}
      categoryKey={category.key}
      onPress={onPress}
      iconStyle={iconStyle}
      color={color}
      iconName={iconName}
      goalCount={goalCount}
    />
  )
}

export default mapNavigationDispatch(mapDispatchToProps)(
  CategoryButtonContainer
)
