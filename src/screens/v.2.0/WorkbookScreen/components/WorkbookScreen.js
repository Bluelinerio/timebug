import React                           from 'react'
import { View }                        from 'react-native'
import { SafeAreaView }                from 'react-navigation'
import Banner                          from '2020_containers/PhaseHeaderContainer'
import styles                          from '../styles'
import type { Step }                   from '../../../../services/cms'
import { phaseForStep, MEDITATION }    from '2020_services/cms'
import StepBar                         from '../containers/StepBarContainer'
import Sidebar                         from '../containers/SidebarContainer'
import { SectionValues }               from '../context/SectionContext'
import WorkbookContent                 from '../containers/WorkbookContentContainer'
import { mapBarStylesHelper }          from '../utils/colorsForStep'
import { translateCMSPhaseToStandard } from '2020_services/cms'

type Props = {
  navigation: any,
}

type State = {
  selectedStep: Step | null,
  editionIndex?: number | null,
  selectedSection: string,
}

const validateSelectedSection = (section: string) => {
  switch (section) {
  case 'f':
  case 'form':
  case 'FORM':
  case SectionValues.form:
    return SectionValues.form
  case 't':
  case 'text':
  case 'content':
  case SectionValues.textContent:
    return SectionValues.textContent
  default:
    return SectionValues.textContent
  }
}

class WorkbookScreen extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props)
    const { navigation } = this.props
    const step = navigation.getParam('step', null)
    const editionIndex = navigation.getParam('editionIndex', null)
    const navSection = navigation.getParam('section', null)
    const selectedSection =
      editionIndex || editionIndex === 0
        ? SectionValues.form
        : navSection
          ? validateSelectedSection(navSection)
          : SectionValues.textContent
    this.state = {
      selectedStep: step,
      editionIndex,
      selectedSection,
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    const previousIndex = prevProps.navigation.getParam('editionIndex', null)
    const currentIndex = this.props.navigation.getParam('editionIndex', null)
    const newSentStep = this.props.navigation.getParam('step', null)
    const currentStep = this.state.selectedStep
    const previousStep = prevState.selectedStep
    const currentSection = this.state.selectedSection
    const previousSection = prevState.selectedSection

    const navSection = this.props.navigation.getParam('section', null)

    if (
      (currentIndex || currentIndex === 0) &&
      previousIndex !== currentIndex
    ) {
      this.setState(() => ({
        editionIndex: currentIndex,
        selectedSection: SectionValues.form,
        selectedStep:
          newSentStep && newSentStep.number !== currentStep.number
            ? newSentStep
            : currentStep,
      }))
      return
    }
    if (
      ((currentIndex || currentIndex === 0) &&
        currentSection !== previousSection) ||
      previousStep.number !== currentStep.number
    ) {
      this.setState(() => ({ editionIndex: null }))
      return
    }
    if (newSentStep && newSentStep.number !== currentStep.number) {
      const selectedSection = navSection
        ? validateSelectedSection(navSection)
        : SectionValues.textContent
      this.setState(() => ({
        selectedStep: newSentStep,
        selectedSection,
        editionIndex: null,
      }))
      return
    }
  }

  _phaseForStep = (step: Step) => {
    if (!step) return MEDITATION
    return phaseForStep(step)
  }

  _changeSelectedStep = (step: Step) => {
    const { navigation } = this.props
    this.setState({ selectedStep: step }, () => {
      navigation.setParams({ step: null })
    })
  }

  _changeSection = (section: String) => {
    this.setState({ selectedSection: section })
  }

  _getCurrentBackgroundColor = (step: Step) => {
    const { type } = step
    const phase = translateCMSPhaseToStandard(type)
    const styles = mapBarStylesHelper(phase)

    return styles.backgroundColor
  }

  _onFinish = () => {
    const { editionIndex } = this.state
    if (editionIndex || editionIndex === 0) {
      this.setState({ editionIndex: null })
      this.props.navigation.setParams({ editionIndex: null })
    }
  }

  render() {
    const { selectedStep, selectedSection, editionIndex } = this.state

    const backgroundColor = this._getCurrentBackgroundColor(selectedStep)
    const phase = this._phaseForStep(selectedStep)

    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <Banner
          step={selectedStep}
          phase={phase}
          onSelectStep={this._changeSelectedStep}
        />
        <View style={{ flex: 3, flexDirection: 'row' }}>
          {selectedStep && (
            <Sidebar
              step={selectedStep}
              selectedSection={selectedSection}
              changeSection={this._changeSection}
            />
          )}
          <View style={{ flex: 1 }}>
            {selectedStep && <StepBar step={selectedStep} />}
            <WorkbookContent
              step={selectedStep}
              phase={phase}
              onSelectStep={this._changeSelectedStep}
              backgroundColor={backgroundColor}
              selectedSection={selectedSection}
              changeSection={this._changeSection}
              onFinish={this._onFinish}
              editionIndex={editionIndex}
            />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default WorkbookScreen
