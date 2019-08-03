// @flow
import { useState, useEffect } from 'react'
import { screens } from '../context/ScreenContext'

export const useTitle = (screen: string, goal: any = null) => {
  const [title, setTitle] = useState('')

  useEffect(
    () => {
      switch (screen) {
        case screens.CATEGORIES:
        case screens.GOAL_LIST:
          setTitle('Phase 2 goals')
          break
        case screens.FORM:
          setTitle('Goal workbook')
          break
        case screens.GOAL_DETAIL:
          setTitle(`Goal Details: ${goal}`)
          break
        default:
          setTitle('')
      }
    },
    [screen]
  )

  return title
}

export const useSubtitle = (screen: string, category?: string) => {
  const [subtitle, setSubtitle] = useState('')

  useEffect(
    () => {
      switch (screen) {
        case screens.CATEGORIES:
          setSubtitle('')
          break
        case screens.GOAL_LIST:
        case screens.FORM:
        case screens.GOAL_DETAIL:
          setSubtitle(`${category}`)
          break
        default:
          setSubtitle('')
      }
    },
    [screen]
  )

  return subtitle
}

export const useBackHandler = (
  screen: string,
) => {
  const [showBackHandler, setShowBackHandler] = useState(false)

  useEffect(
    () => {
      switch (screen) {
        case screens.CATEGORIES:
          setShowBackHandler(false)
          break
        case screens.GOAL_LIST:
          setShowBackHandler(true)
          break
        case screens.FORM:
          setShowBackHandler(true)
          break
        case screens.GOAL_DETAIL:
          setShowBackHandler(true)
          break
        default:
        setShowBackHandler(false)
      }
    },
    [screen]
  )

  return [showBackHandler]
}
