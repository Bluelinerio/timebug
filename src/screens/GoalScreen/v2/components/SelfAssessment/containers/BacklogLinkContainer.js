// @flow
import React, { useMemo } from 'react'
import BacklogLink from '../components/BacklogLink'
import { goToTool } from '2020_redux/actions/nav.actions'
import type { GoToToolParams } from '2020_redux/actions/nav.actions'
import mapNavigationDispatch from '2020_HOC/NavigationServiceHOC'

type Props = {
  tool: any,
  goToTool: any => () => void,
}

const mapDispatchToProps = (dispatch: any) => ({
  goToTool: (payload: GoToToolParams) => () => {
    dispatch(goToTool(payload))
  },
})

const BacklogLinkContainer = (props: Props) => {
  const { tool, goToTool } = props

  const onPress = useMemo(
    () => {
      return goToTool({ tool, payload: { screen: 'BACKLOG' } })
    },
    [tool]
  )

  return <BacklogLink onPress={onPress} />
}

export default mapNavigationDispatch(mapDispatchToProps)(BacklogLinkContainer)
