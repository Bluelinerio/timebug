import React, { useContext, memo, useMemo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import selectors from '2020_redux/selectors'
import PhaseList from '../components/PhaseList'
import { PhaseContext } from '../context/PhaseContext'
import { getStyleForPhase } from '../utils/styleForPhase'
import { getUnlockedTools } from '2020_services/tools'

const PhaseListContainer = () => {
  const { phase } = useContext(PhaseContext)
  const style = useMemo(
    () => {
      const styleForPhase = getStyleForPhase(phase)

      return {
        backgroundColor: styleForPhase.background,
      }
    },
    [phase]
  )

  const completedSteps = useSelector(selectors.getCompletedSteps, shallowEqual)

  const unlockedTools = useMemo(
    () => {
      return getUnlockedTools(completedSteps)
    },
    [completedSteps]
  )

  return <PhaseList style={style} unlockedTools={unlockedTools} />
}

export default memo(PhaseListContainer)
