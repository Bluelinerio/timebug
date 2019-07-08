// @flow
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Banner from '2020_containers/PhaseHeaderContainer'
import styles from '../styles'
import type { Step } from '../../../../services/cms'
import { phaseForStep, MEDITATION } from '2020_services/cms'
import StepBar from '../containers/StepBarContainer'
import Sidebar from '../containers/SidebarContainer'
import { SectionValues } from '../context/SectionContext'
import WorkbookContent from '../containers/WorkbookContentContainer'
import { mapBarStylesHelper } from '../utils/colorsForStep'
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

  componentDidMount() {
    this.props.navigation.setParams({ step: null })
  }

  componentDidUpdate = (prevProps, prevState) => {
    const previousIndex = prevProps.navigation.getParam('editionIndex', null)
    const currentIndex = this.props.navigation.getParam('editionIndex', null)

    const newSentStep = this.props.navigation.getParam('step', null)

    const navSection = this.props.navigation.getParam('section', null)
    const baseValues = this.props.navigation.getParam('valuesForForm', null)
    // const previousBaseValues = prevProps.navigation.getParam(
    //   'valuesForForm',
    //   null
    // )
    const currentStep = this.state.selectedStep
    const previousStep = prevState.selectedStep

    const currentSection = this.state.selectedSection
    const previousSection = prevState.selectedSection

    //If I just requested a baseValues update, remove any existing edition sessions
    // if (previousBaseValues === null && baseValues && (currentIndex || currentIndex === 0)) {
    //   this.setState(
    //     {
    //       editionIndex: null,
    //     },
    //     () => {
    //       this.props.navigation.setParams({
    //         editionIndex: null,
    //       })
    //     }
    //   )
    // }
    // If there is currently an item being edited and a new request to edit is sent
    // update with the new element, open the form and update step if it changed
    if (
      (currentIndex || currentIndex === 0) &&
      previousIndex !== currentIndex
    ) {
      this.setState(
        () => ({
          editionIndex: currentIndex,
          selectedSection: SectionValues.form,
          selectedStep:
            newSentStep && newSentStep.number !== currentStep.number
              ? newSentStep
              : currentStep,
        }),
        () => {
          if (baseValues)
            this.props.navigation.setParams({
              valuesForForm: null,
              editionIndex: null,
              section: null,
            })
        }
      )
      return
    }

    // If step or section changes while editing or baseValues are set, disable editions and base data
    if (
      (previousStep.number !== currentStep.number ||
        currentSection !== previousSection) &&
      (baseValues || (currentIndex || currentIndex === 0))
    ) {
      this.setState(
        () => ({ editionIndex: null }),
        () => {
          if (baseValues)
            this.props.navigation.setParams({
              valuesForForm: null,
              editionIndex: null,
              section: null,
            })
        }
      )
      return
    }

    // if a new navigation to step request is sent and it's not the same as the current one restore everything
    if (newSentStep && newSentStep.number !== currentStep.number) {
      const selectedSection = navSection
        ? validateSelectedSection(navSection)
        : SectionValues.textContent
      this.setState(
        () => ({
          selectedStep: newSentStep,
          selectedSection,
          editionIndex: null,
        }),
        () => {
          if (baseValues)
            this.props.navigation.setParams({
              valuesForForm: null,
              step: null,
              section: null,
            })
        }
      )
      return
    }

    // If a section change is requested execute it as long as it's not the same
    if (navSection) {
      if (navSection !== currentSection)
        this.setState(
          { selectedSection: validateSelectedSection(navSection) },
          () => {
            this.props.navigation.setParams({ section: null })
          }
        )
      this.props.navigation.setParams({ section: null })
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
      this.props.navigation.setParams({
        editionIndex: null,
        valuesForForm: null,
      })
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
