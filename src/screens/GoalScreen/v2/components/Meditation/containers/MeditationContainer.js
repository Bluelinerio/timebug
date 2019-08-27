import React, { useMemo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import selectors from '2020_redux/selectors'
import { getUnlockedTools } from '2020_services/tools'
import { TOOL_KEYS } from '2020_static/tools'
import Meditation from '../components/Meditation'

const MeditationContainer = () => {
  const completedSteps = useSelector(selectors.getCompletedSteps, shallowEqual)
  const getDataForTool = useSelector(selectors.awardDataForTool)

  const unlockedTools = useMemo(
    () => {
      return getUnlockedTools(completedSteps)
    },
    [completedSteps]
  )

  const tool = useMemo(
    () => {
      return unlockedTools.find(t => t.key === TOOL_KEYS.GoalTrackerKey)
    },
    [unlockedTools]
  )

  const toolData = useMemo(
    () => {
      return getDataForTool({ tool })
    },
    [tool]
  )

  return <Meditation tool={tool} data={toolData} />
}

export default MeditationContainer
