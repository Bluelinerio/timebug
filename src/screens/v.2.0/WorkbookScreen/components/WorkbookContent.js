import React                            from 'react'
import { View, Image }                  from 'react-native'
import { SafeAreaView }                 from 'react-navigation'
import { SectionValues }                from '../context/SectionContext'
import type { Sections }                from '../context/SectionContext'
import WorkbookForm                     from '../containers/WorkbookFormContainer'
import WorkbookSnippet                  from '../containers/WorkbookSnippetContainer'
import type { Step }                    from '../../../../services/cms'
import styles                           from '../styles'
import { headerBackgrounds }            from '../../../../resources/images'

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
    } = this.props

    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <View style={[styles.container, styles.workbookContent, { flex: 2 }]}>
          {selectedSection === SectionValues.form ? (
            <WorkbookForm step={step} stepNumber={`${step.number}`} phase={phase} onSelectStep={onSelectStep}/>
          ) : (
            <WorkbookSnippet step={step} phase={phase} />
          )}
        </View>
        <View style={[styles.backgroundImage]}>
          <Image source={headerBackgrounds[step.number]} style={{ width: '100%', height: 'auto', tintColor: backgroundColor }}/>
        </View>
      </SafeAreaView>
    )
  }
}

export default WorkbookContent
