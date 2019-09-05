// @flow
import React, { useContext } from 'react'
import WorkArea from '../components/WorkArea'
import { ToolContext } from '../context/ToolContext'

const WorkAreaContainer = () => {
  const { tool, toolData, storeAwardValue } = useContext(ToolContext)
  return (
    <WorkArea
      tool={tool}
      toolData={toolData}
      storeAwardValue={storeAwardValue}
    />
  )
}

export default WorkAreaContainer
