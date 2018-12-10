import React             from 'react'
import { View }          from 'react-native'
import { SectionValues } from '../context/SectionContext'
import type { Sections } from '../context/SectionContext'
import WorkbookForm      from '../containers/WorkbookFormContainer'
import WorkbookSnippet   from '../containers/WorkbookSnippetContainer'
import type { Step }     from '../../../../services/cms'

type Props = {
  selectedSection: string,
  sections: Sections,
  changeSection: string => any,
  step: Step,
}

class WorkbookContent extends React.PureComponent<Props> {
  render() {
    const { selectedSection, step } = this.props
    return (
      <View style={{ flex: 1 }}>
        {selectedSection === SectionValues.form ? (
          <WorkbookForm step={`${step.number}`} />
        ) : (
          <WorkbookSnippet step={step} />
        )}
      </View>
    )
  }
}

export default WorkbookContent
