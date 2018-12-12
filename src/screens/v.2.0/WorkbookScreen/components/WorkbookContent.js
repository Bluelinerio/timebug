import React             from 'react'
import { View }          from 'react-native'
import { SectionValues } from '../context/SectionContext'
import type { Sections } from '../context/SectionContext'
import WorkbookForm      from '../containers/WorkbookFormContainer'
import WorkbookSnippet   from '../containers/WorkbookSnippetContainer'
import type { Step }     from '../../../../services/cms'
import styles            from '../styles'

type Props = {
  selectedSection: string,
  sections: Sections,
  changeSection: string => any,
  step: Step,
  phase: string,
}

class WorkbookContent extends React.PureComponent<Props> {
  render() {
    const { selectedSection, step, phase } = this.props
    return (
      <View style={[styles.container, styles.workbookContent]}>
        {selectedSection === SectionValues.form ? (
          <WorkbookForm step={`${step.number}`} phase={phase}/>
        ) : (
          <WorkbookSnippet step={step} phase={phase} />
        )}
      </View>
    )
  }
}

export default WorkbookContent
