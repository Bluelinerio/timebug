// @flow
import React, { Fragment } from 'react'
import RootTool from '../components/RootToolComponent'
import { ToolDataProvider } from '../../context/ToolDataContext'
import { ScreenProvider } from '../../context/ScreenContext'
import { DreamProvider } from '../../context/DreamContext'
import { VISION_CREATION } from '2020_services/cms'

const RootToolContainer = (props: any) => {
  return (
    <Fragment>
      <ToolDataProvider {...props} phase={VISION_CREATION}>
        <ScreenProvider>
          <DreamProvider>
            <RootTool />
          </DreamProvider>
        </ScreenProvider>
      </ToolDataProvider>
    </Fragment>
  )
}

export default React.memo(RootToolContainer)
