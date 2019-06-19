import React                 from 'react'
import { connectContext }    from 'react-connect-context'
import PhaseProgressListComponent, {
  PhaseProgressListProps,
}                            from '../components/Tools/PhaseProgressList'
import { PhaseConsumer }     from '../context/PhaseContext'
import type { ContextState } from '../context/PhaseContext'

const PhaseProgressContainer = (
  props: ContextState
): PhaseProgressListProps => {
  const { phases } = props
  return <PhaseProgressListComponent phases={phases} />
}

export default connectContext(PhaseConsumer)(PhaseProgressContainer)
