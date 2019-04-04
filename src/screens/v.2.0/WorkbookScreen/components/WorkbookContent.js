import React                            from 'react'
import { View }                         from 'react-native'
import { SafeAreaView }                 from 'react-navigation'
import { SectionValues }                from '../context/SectionContext'
import type { Sections }                from '../context/SectionContext'
import WorkbookForm                     from '../containers/WorkbookFormContainer'
import WorkbookSnippet                  from '../containers/WorkbookSnippetContainer'
import type { Step }                    from '../../../../services/cms'
import styles                           from '../styles'

type Props = {
  selectedSection: string,
  sections: Sections,
  changeSection: string => any,
  step: Step,
  phase: string,
  onSelectStep: Step => any,
  backgroundColor: any,
}

class WorkbookContent extends React.PureComponent<Props> {
  render() {
    const {
      selectedSection,
      step,
      phase,
      onSelectStep,
      backgroundColor,
      changeSection,
    } = this.props

    return (
      <SafeAreaView
        forceInset={{ top: 'never', bottom: 'never' }}
        style={styles.container}
      >
        <View style={[styles.container, styles.workbookContent, { flex: 2 }]}>
          {selectedSection === SectionValues.form ? (
            <WorkbookForm
              step={step}
              stepNumber={`${step.number}`}
              phase={phase}
              onSelectStep={onSelectStep}
              backgroundColor={backgroundColor}
              key={step.number}
            />
          ) : (
            <WorkbookSnippet
              step={step}
              phase={phase}
              changeSection={changeSection}
              backgroundColor={backgroundColor}
            />
          )}
        </View>
      </SafeAreaView>
    )
  }
}

export default WorkbookContent
