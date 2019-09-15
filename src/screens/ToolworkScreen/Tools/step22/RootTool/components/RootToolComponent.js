// @flow
import React, { Fragment } from 'react'
import ToolContent from './ToolContent'
import TabBar from '../containers/TabBarContainer'

const RootToolComponent = () => {
  return (
    <Fragment>
      <TabBar />
      <ToolContent />
    </Fragment>
  )
}

export default RootToolComponent
