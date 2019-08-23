import React, { useContext, memo, useMemo } from 'react'
import PhaseList from '../components/PhaseList'
import { PhaseContext } from '../context/PhaseContext'
import { getStyleForPhase } from '../utils/styleForPhase'

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
  return <PhaseList style={style} />
}

export default memo(PhaseListContainer)
