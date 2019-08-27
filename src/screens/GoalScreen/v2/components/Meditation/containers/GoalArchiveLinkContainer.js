// @flow
import React, { useMemo } from 'react'
import mapNavigationDispatch from '2020_HOC/NavigationServiceHOC'
import GoalArchiveLink from '../components/GoalArchiveLink'
import { goToTool } from '2020_redux/actions/nav.actions'
import type { GoToToolParams } from '2020_redux/actions/nav.actions'

const mapDispatchToProps = (dispatch: any) => ({
  goToTool: (payload: GoToToolParams) => () => {
    dispatch(goToTool(payload))
  },
})

type Props = {
  tool: any,
  goToTool: any => () => void,
}

const GoalArchiveLinkContainer = (props: Props) => {
  const { goToTool, tool } = props

  const openScreen = useMemo(
    () => {
      return goToTool({ tool, payload: { screen: 'ARCHIVE' } })
    },
    [goToTool]
  )

  return <GoalArchiveLink display openScreen={openScreen} />
}

export default mapNavigationDispatch(mapDispatchToProps)(
  React.memo(GoalArchiveLinkContainer)
)
