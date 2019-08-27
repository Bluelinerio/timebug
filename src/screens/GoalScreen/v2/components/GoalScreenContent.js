// @flow
import React, { memo } from 'react'
import { View } from 'react-native'
import { MEDITATION, SELF_ASSESSMENT, VISION_CREATION } from '2020_services/cms'
import MeditationComponent from './MeditationComponent'
import SelfAssessmentComponent from './SelfAssessmentComponent'
import VisionCreationComponent from './VisionCreationComponent'
import styles from '../styles'

type Props = {
  style: any,
  phase: string,
}

const Switch = ({ phase }) => {
  switch (phase) {
    case MEDITATION:
      return <MeditationComponent />
    case SELF_ASSESSMENT:
      return <SelfAssessmentComponent />
    case VISION_CREATION:
      return <VisionCreationComponent />
    default:
      return null
  }
}

const GoalScreenContent = (props: Props) => {
  const { style, phase } = props
  return <View style={[styles.scroll, style]}>{<Switch phase={phase} />}</View>
}

export default memo(GoalScreenContent)
