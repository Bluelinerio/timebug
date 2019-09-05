// @flow
import React, { useContext } from 'react'
import { ScreenContext } from '../../context/ScreenContext'
import ToolContent from '../components/ToolContent'

const ToolContentContainer = (props: any) => {
    const { screen } = useContext(ScreenContext)
    return <ToolContent {...props} screen={screen}/>
}

export default ToolContentContainer