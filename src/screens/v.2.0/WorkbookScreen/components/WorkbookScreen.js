import React               from 'react'
import { View }            from 'react-native'
import { SafeAreaView }    from 'react-navigation'

import Banner              from '../../../../containers/PhaseHeaderContainer'
import styles              from '../styles'
import type { Step }       from '../../../../services/cms'
import StepBar             from '../containers/StepBarContainer'
import Sidebar             from '../containers/SidebarContainer'
import { SectionValues } from '../context/SectionContext'
import WorkbookContent     from '../containers/WorkbookContentContainer'

type Props = {
  navigation: any,
}

type State = {
  selectedStep: Step | null,
}

class WorkbookScreen extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props)
    const { navigation: { state: { params } } } = this.props
    const step = params.step || null
    this.state = {
      selectedStep: step,
      selectedSection: SectionValues.textContent,
    }
  }

  _changeSelectedStep = (step: Step) => {
    this.setState({ selectedStep: step })
  }

  _changeSection = (section: String) => {
    this.setState({ selectedSection: section })
  }

  render() {
    const { navigation: { state: { params: { phase } } } } = this.props
    const { selectedStep, selectedSection } = this.state

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
        <View style={{ flex: 1, flexDirection: 'row' }}>
          { selectedStep &&
            <Sidebar step={selectedStep} selectedSection={selectedSection} changeSection={this._changeSection} />
          }
          <View style={{ flex: 1 }}>
            {selectedStep && <StepBar step={selectedStep} />}
            <WorkbookContent
              step={selectedStep}
              phase={phase}
              selectedSection={selectedSection}
              changeSection={this._changeSection}
            />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default WorkbookScreen
