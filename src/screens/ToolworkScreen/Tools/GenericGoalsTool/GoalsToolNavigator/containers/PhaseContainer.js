// @flow
import React, { useCallback, useContext, useMemo } from 'react'
import { Alert } from 'react-native'
import { withNavigation } from 'react-navigation'
import { getStyleForPhase } from '../utils/styleForPhase'
import { MEDITATION, SELF_ASSESSMENT, VISION_CREATION } from '2020_services/cms'
import { TOOL_KEYS } from '2020_static/tools'
import PhaseComponent from '../components/PhaseComponent'
import { ToolDataContext } from '../../context/ToolDataProvider'

type Props = {
  phase: string,
  navigation: any,
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
  const { phase, navigation, unlockedTools } = props
  const { phase: selectedPhase } = useContext(ToolDataContext)

  const tool = useMemo(
    () => {
      return unlockedTools.find(t => t.key === getKeyForPhase(phase))
    },
    [unlockedTools]
  )

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
      if (!tool)
        Alert.alert(
          'Locked',
          'You have not fulfilled the requirements to use this feature'
        )
      if (tool && !isSelected) navigation.setParams({ tool, phase })
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

export default withNavigation(React.memo(PhaseContainer))
