// @flow
import React    from 'react'
import { View } from 'react-native'
import Insight  from '2020_components/Insight'
import styles   from '../styles'

export type Props = {
  insightText: string,
}

class InsightComponent extends React.PureComponent<Props> {
  render() {
    const { insightText } = this.props
    return !insightText ? null : (
      <View style={styles.insightContainer}>
        <Insight
          insightText={insightText}
          style={{ title: styles.insightTitle, text: styles.insightText }}
        />
      </View>
    )
  }
}

export default InsightComponent
