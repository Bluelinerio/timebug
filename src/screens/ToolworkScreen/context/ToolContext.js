// @flow
import React, { useMemo, useCallback } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import selectors from '2020_redux/selectors'
import { submitAwardAnswers } from '../../../redux/actions/award.actions'
import type { SubmitAwardValuePayload } from '../../../redux/actions/award.actions'

type Props = {
  navigation: any,
  children: React.ReactChild,
}

export type ProvidedProps = {
  tool: any,
  toolData: any,
  storeAwardValue: SubmitAwardValuePayload => null,
}

const initialState: ProvidedProps = {
  tool: null,
  toolData: null,
  storeAwardValue: () => null,
}

const ToolContext = React.createContext(initialState)

const ToolProvider = (props: Props) => {
  const { navigation } = props

  const getDataForTool = useSelector(
    selectors.awardDataForTool,
    shallowEqual
  )

  const dispatch = useDispatch()

  const storeAwardValue = useCallback(
    (params: SubmitAwardValuePayload) => dispatch(submitAwardAnswers(params)),
    [dispatch]
  )

  const tool = navigation.getParam('tool', null)

  const toolData = tool ? getDataForTool({ tool }) : null

  return (
    <ToolContext.Provider value={{ tool, toolData, storeAwardValue }}>
      {props.children}
    </ToolContext.Provider>
  )
}

export { ToolProvider, ToolContext }
