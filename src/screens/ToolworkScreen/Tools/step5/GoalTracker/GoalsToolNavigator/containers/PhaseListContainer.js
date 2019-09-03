import React, { memo, useMemo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import selectors from '2020_redux/selectors'
import { getUnlockedTools } from '2020_services/tools'
import PhaseList from '../components/PhaseList'
import { getStyleForPhase } from '../utils/styleForPhase'
import { MEDITATION } from '2020_services/cms'

const PhaseListContainer = () => {
  const phase = MEDITATION
  const completedSteps = useSelector(selectors.getCompletedSteps, shallowEqual)

  const style = useMemo(
    () => {
      const styleForPhase = getStyleForPhase(phase)

      return {
        backgroundColor: styleForPhase.background,
      }
    },
    [phase]
  )

  const unlockedTools = useMemo(
    () => {
      return getUnlockedTools(completedSteps)
    },
    [completedSteps]
  )

  return <PhaseList style={style} unlockedTools={unlockedTools} />
}

export default memo(PhaseListContainer)
