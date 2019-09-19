import React, { useMemo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import selectors from '2020_redux/selectors'
import { getUnlockedTools } from '2020_services/tools'
import { TOOL_KEYS } from '2020_static/tools'
import SelfAssessmentComponent from './SelfAssessment'

const SelfAssessmentContainer = () => {
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
      return unlockedTools.find(t => t.key === TOOL_KEYS.CareerGoalsTrackerKey)
    },
    [unlockedTools]
  )

  const toolData = useMemo(
    () => {
      if (!tool) return null
      return getDataForTool({ tool })
    },
    [tool]
  )

  return <SelfAssessmentComponent tool={tool} data={toolData} />
}

export default SelfAssessmentContainer
