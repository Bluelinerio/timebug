// @flow
import React, { useMemo } from 'react'
import {
  mapPhaseToTextStyles,
  mapPhaseToColor,
  mapPhaseToButtonStyles,
  mapPhaseToElementBackground,
  mapPhaseToTextAndButtonColor,
} from '2020_utils/colorsForStep'
import {
  mapPhaseToColor as localMapPhaseToColor,
  mapPhaseToContrastColor,
} from '../utils'

type Props = {
  phase: String,
  children: React.ReactChildren,
}

export type ProvidedProps = {
  color: String,
  containerBackgroundColor: String,
  textContrastColor: String,
  formStyles: any,
  textAndButtonColor: any,
}

const initialState = {
  color: null,
  containerBackgroundColor: null,
  textContrastColor: null,
  formStyles: null,
  textAndButtonColor: null,
}

const StyleContext = React.createContext(initialState)

const _StyleProvider = (props: Props) => {
  const { phase } = props

  const formStyles = useMemo(
    () => {
      const textStyle = mapPhaseToTextStyles(phase)
      const buttonContainerStyle = mapPhaseToButtonStyles(phase)
      const elementContainerStyle = mapPhaseToElementBackground(phase)
      const color = mapPhaseToColor(phase)

      return {
        textStyle,
        buttonContainerStyle,
        accentColor: color,
        elementContainerStyle,
      }
    },
    [phase]
  )

  const color = useMemo(
    () => {
      return localMapPhaseToColor(phase)
    },
    [phase]
  )

  const containerBackgroundColor = useMemo(
    () => {
      return localMapPhaseToColor(phase)
    },
    [phase]
  )

  const textContrastColor = useMemo(
    () => {
      return mapPhaseToContrastColor(phase)
    },
    [phase]
  )

  const textAndButtonColor = useMemo(
    () => {
      return mapPhaseToTextAndButtonColor(phase)
    },
    [phase]
  )

  return (
    <StyleContext.Provider
      value={{
        formStyles,
        color,
        containerBackgroundColor,
        textContrastColor,
        textAndButtonColor,
      }}
    >
      {props.children}
    </StyleContext.Provider>
  )
}

const StyleProvider = React.memo(_StyleProvider)

export { StyleProvider, StyleContext }
