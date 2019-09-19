// @flow
import React, { useCallback, useContext, useMemo } from 'react'
import { PhaseContext } from '../context/PhaseContext'
import { getStyleForPhase } from '../utils/styleForPhase'
import { MEDITATION, SELF_ASSESSMENT, VISION_CREATION } from '2020_services/cms'
import { TOOL_KEYS } from '2020_static/tools'
import PhaseComponent from '../components/PhaseComponent'
import { useGoalsForPhase } from '../../../ToolworkScreen/Tools/GenericGoalsTool/hooks/goalExtraction'

type Props = {
  phase: string,
  unlockedTools: Array<any>,
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

const getKeyForPhase = (phase: string) => {
  switch (phase) {
    case MEDITATION:
      return TOOL_KEYS.GoalTrackerKey
    case SELF_ASSESSMENT:
      return TOOL_KEYS.CareerGoalsTrackerKey
    case VISION_CREATION:
      return TOOL_KEYS.VisionCreationDreamsTrackerKey
    default:
      return ''
  }
}

const PhaseContainer = (props: Props) => {
  const { phase, unlockedTools } = props
  const { phase: selectedPhase, selectPhase } = useContext(PhaseContext)

  const isSelected = phase === selectedPhase

  const tool = useMemo(
    () => {
      return unlockedTools.find(t => t.key === getKeyForPhase(phase))
    },
    [unlockedTools]
  )

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

  const goals = useGoalsForPhase(phase, tool)

  const goalCount = goals.length

  return (
    <PhaseComponent
      onPress={onPress}
      textStyle={style.textStyle}
      containerStyle={style.containerStyle}
      phase={name}
      goalCount={goalCount}
    />
  )
}

export default React.memo(PhaseContainer)
