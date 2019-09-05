import React, { useContext, memo, useMemo } from 'react'
import selectors from '2020_redux/selectors'
import { useSelector, shallowEqual } from 'react-redux'
import { getUnlockedTools } from '2020_services/tools'
import PhaseList from '../components/PhaseList'
import { ToolDataContext } from '../../context/ToolDataProvider'
import { getStyleForPhase } from '../utils/styleForPhase'

const PhaseListContainer = () => {
  const { phase } = useContext(ToolDataContext)
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
