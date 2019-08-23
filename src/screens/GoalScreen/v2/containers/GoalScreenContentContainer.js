import React, { Fragment, useMemo, memo, useContext } from 'react'
import GoalScreenContent from '../components/GoalScreenContent'
import { PhaseContext } from '../context/PhaseContext'
import { getStyleForPhase } from '../utils/styleForPhase'

const GoalScreenContentContainer = () => {
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
  return (
    <Fragment>
      <GoalScreenContent style={style} phase={phase} />
    </Fragment>
  )
}

export default memo(GoalScreenContentContainer)
