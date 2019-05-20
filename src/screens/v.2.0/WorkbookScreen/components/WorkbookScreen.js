import React                               from 'react'
import { View }                            from 'react-native'
import { SafeAreaView }                    from 'react-navigation'
import Banner                              from '../../../../containers/PhaseHeaderContainer'
import styles                              from '../styles'
import type { Step }                       from '../../../../services/cms'
import StepBar                             from '../containers/StepBarContainer'
import Sidebar                             from '../containers/SidebarContainer'
// import { SectionProvider }              from '../context/SectionContext'
import { SectionValues }                   from '../context/SectionContext'
import WorkbookContent                     from '../containers/WorkbookContentContainer'
import { mapBarStylesHelper }              from '../utils/colorsForStep'
import { translateCMSPhaseToStandard }     from '../../../../services/cms'

type Props = {
  navigation: any,
}

type State = {
  selectedStep: Step | null,
  editionIndex?: number | null,
}

class WorkbookScreen extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props)
    const { navigation } = this.props
    const { state: { params } } = navigation
    const step = params.step || null
    const editionIndex = params.editionIndex
    this.state = {
      selectedStep: step,
      editionIndex,
      selectedSection:
        editionIndex || editionIndex === 0
          ? SectionValues.form
          : SectionValues.textContent,
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
    if (
      (currentIndex || currentIndex === 0) &&
      previousIndex !== currentIndex
    ) {
      this.setState(() => ({
        editionIndex: currentIndex,
        selectedSection: SectionValues.form,
        selectedStep:
          newSentStep.number !== currentStep.number ? newSentStep : currentStep,
      }))
      return
    }
    if (
      ((currentIndex || currentIndex === 0) &&
        currentSection !== previousSection) ||
      previousStep.number !== currentStep.number
    ) {
      this.setState(() => ({ editionIndex: null }))
    }
  }

  _changeSelectedStep = (step: Step) => {
    this.setState({ selectedStep: step })
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
    const { navigation: { state: { params: { phase } } } } = this.props
    const { selectedStep, selectedSection, editionIndex } = this.state

    const backgroundColor = this._getCurrentBackgroundColor(selectedStep)

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
