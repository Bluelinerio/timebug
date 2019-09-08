// @flow
import { useState, useEffect, useContext } from 'react'
import { screens } from '../context/ScreenContext'
import { ToolDataContext } from '../context/ToolDataProvider'
import { MEDITATION, SELF_ASSESSMENT, VISION_CREATION } from '2020_services/cms'

const titleForPhase = (phase: string) => {
  switch (phase) {
    case MEDITATION:
      return 'GOALS'
    case SELF_ASSESSMENT:
      return 'CAREER GOALS'
    case VISION_CREATION:
      return 'CAREER DREAMS'
  }
}

export const useTitle = (screen: string, goal: any = null) => {
  const [title, setTitle] = useState('')
  const { phase } = useContext(ToolDataContext)

  useEffect(
    () => {
      switch (screen) {
        case screens.CATEGORIES:
        case screens.GOAL_LIST:
        case screens.GOAL_RECOMMENDATIONS:
          setTitle(titleForPhase(phase))
          break
        case screens.FORM:
          setTitle('Goal Workbook')
          break
        case screens.GOAL_DETAIL:
          setTitle(`${goal ? goal.name : ''}`)
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
          setTitle(titleForPhase(phase))
      }
    },
    [screen, goal]
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
    [screen, category]
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
