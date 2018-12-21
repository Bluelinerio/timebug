import React          from 'react'
import { View, Text } from 'react-native'
import CustomImage    from '../../../../components/CustomImage'
import styles         from '../styles'

export type Props = {
  phase: string,
  title: string,
  stepId: number,
  audio: string,
  source: string,
  barStyle: any,
}

class StepBar extends React.PureComponent<Props> {
  render() {
    const { title, stepId, source, barStyle } = this.props
    return (
      <View style={[styles.stepBarContainer, barStyle]}>
        <View style={styles.stepBarContentContainer}>
          <View style={styles.stepBarContent}>
            <Text style={styles.stepNumber}>STEP {stepId}</Text>
          </View>
          <View style={[styles.stepBarContent, styles.stepBarTitleContainer]}>
            <Text style={styles.stepTitle}>{title}</Text>
          </View>
        </View>
        <View style={styles.stepPictureContainer}>
          <CustomImage style={[styles.buttonImage]} source={source} />
        </View>
      </View>
    )
  }
}

export default StepBar
