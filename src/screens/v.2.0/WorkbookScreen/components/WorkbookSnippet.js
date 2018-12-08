import React                from 'react'
import { Text, ScrollView } from 'react-native'
import styles               from '../styles'
import type { Step }        from '../../../../services/cms'

type Props = {
  step: Step,
  setScreenStatus: any => null,
  model: any,
  data: any,
}

class WorkbookForm extends React.PureComponent<Props> {
  render() {
    const { step } = this.props
    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollView}
      >
        <Text style={styles.snippetStyle}>{step.description}</Text>
      </ScrollView>
    )
  }
}

export default WorkbookForm
