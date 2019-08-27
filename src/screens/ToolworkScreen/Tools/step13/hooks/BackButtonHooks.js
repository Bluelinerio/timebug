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
        case screens.GOAL_RECOMMENDATIONS:
          setTitle('Phase 2 goals')
          break
        case screens.FORM:
          setTitle('Goal workbook')
          break
        case screens.GOAL_DETAIL:
          setTitle(`Goal Details: ${goal ? goal.name : ''}`)
          break
        case screens.BACKLOG:
          setTitle(`Completed goals`)
          break
        case screens.DELETED_BACKLOG:
          setTitle(`Backlogged goals`)
          break
        case screens.BACKLOG_GOAL_DETAILS:
          setTitle(`Completed goal: ${goal ? goal.name : ''}`)
          break
        case screens.DELETED_GOAL_BACKLOG_DETAILS:
          setTitle(`Backlogged goal: ${goal ? goal.name : ''}`)
          break
        default:
          setTitle('Phase 2 goals')
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
        case screens.BACKLOG_GOAL_DETAILS:
        case screens.DELETED_GOAL_BACKLOG_DETAILS:
        case screens.BACKLOG:
        case screens.DELETED_BACKLOG:
          setSubtitle('')
          break
        case screens.GOAL_LIST:
        case screens.FORM:
        case screens.GOAL_DETAIL:
        case screens.GOAL_RECOMMENDATIONS:
          setSubtitle(`${category}`)
          break
        default:
          setSubtitle(`${category}`)
      }
    },
    [screen]
  )

  return subtitle
}

export const useBackHandler = (screen: string) => {
  const [showBackHandler, setShowBackHandler] = useState(false)

  useEffect(
    () => {
      switch (screen) {
        case screens.CATEGORIES:
          setShowBackHandler(false)
          break
        case screens.GOAL_LIST:
        case screens.FORM:
        case screens.GOAL_DETAIL:
        case screens.GOAL_RECOMMENDATIONS:
        case screens.BACKLOG_GOAL_DETAILS:
        case screens.DELETED_GOAL_BACKLOG_DETAILS:
        case screens.BACKLOG:
        case screens.DELETED_BACKLOG:
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
