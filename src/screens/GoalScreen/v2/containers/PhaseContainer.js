// @flow
import React, { useCallback, useContext, useMemo } from 'react'
import { PhaseContext } from '../context/PhaseContext'
import { getStyleForPhase } from '../utils/styleForPhase'
import { MEDITATION, SELF_ASSESSMENT, VISION_CREATION } from '2020_services/cms'
import PhaseComponent from '../components/PhaseComponent'

type Props = {
  phase: string,
}

const mapPhaseToName = ({ phase }: { phase: string }) => {
  switch (phase) {
    case MEDITATION:
      return 'MEDITATION'
    case SELF_ASSESSMENT:
      return 'SELF-ASSESSMENT'
    case VISION_CREATION:
      return 'VISION CREATION'
    default:
      return ''
  }
}

const PhaseContainer = (props: Props) => {
  const { phase } = props
  const { phase: selectedPhase, selectPhase } = useContext(PhaseContext)

  const isSelected = phase === selectedPhase

  const style = useMemo(() => {
    const st = getStyleForPhase(phase)

    return {
      containerStyle: {
        backgroundColor: st.color,
      },
      textStyle: {
        color: st.textColor,
      },
    }
  }, [])

  const onPress = useCallback(
    () => {
      if (!isSelected) selectPhase(phase)
    },
    [phase, isSelected]
  )

  const name = mapPhaseToName({ phase })

  return (
    <PhaseComponent
      onPress={onPress}
      textStyle={style.textStyle}
      containerStyle={style.containerStyle}
      phase={name}
    />
  )
}

export default React.memo(PhaseContainer)
