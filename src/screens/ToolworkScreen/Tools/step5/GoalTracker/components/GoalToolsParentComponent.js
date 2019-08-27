// @flow
import React, { useState, useEffect, memo, useCallback } from 'react'
import GoalScreen from '../containers/GoalScreenContainer'
import ArchiveScreen from '../../GoalBacklog'

const SCREENS = {
  GOALS: 'GOALS',
  ARCHIVE: 'ARCHIVE',
}

type Props = {
  navigation: any,
}

const GoalToolsParentComponent = (props: Props) => {
  const { navigation, ...rest } = props
  const payload = navigation.getParam('payload', {})

  const { screen = null, goalId = null, type = null } = payload

  const [selectedScreen, setSelectedScreen] = useState(SCREENS.GOALS)

  const openGoalsScreen = useCallback(() => {
    setSelectedScreen(SCREENS.GOALS)
  }, [])

  const openArchiveScreen = useCallback(() => {
    setSelectedScreen(SCREENS.ARCHIVE)
  }, [])

  useEffect(
    () => {
      if (
        (screen && screen === 'GOALS') ||
        (selectedScreen === 'ARCHIVE' && (type || goalId))
      ) {
        openGoalsScreen()
        navigation.setParams({ payload: { ...payload, screen: null } })
      } else if (screen && screen === 'ARCHIVE') {
        openArchiveScreen()
        navigation.setParams({ payload: { ...payload, screen: null } })
      }
    },
    [screen, goalId, type]
  )
  return (
    <React.Fragment>
      {selectedScreen === SCREENS.GOALS ? (
        <GoalScreen {...rest} openArchiveScreen={openArchiveScreen} />
      ) : selectedScreen === SCREENS.ARCHIVE ? (
        <ArchiveScreen {...rest} openGoalsScreen={openGoalsScreen} />
      ) : null}
    </React.Fragment>
  )
}

export default memo(GoalToolsParentComponent)
