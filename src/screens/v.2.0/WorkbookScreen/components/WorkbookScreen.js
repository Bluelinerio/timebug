import React                            from 'react'
import { View }                         from 'react-native'
import { SafeAreaView }                 from 'react-navigation'

import Banner                           from '../../../../containers/PhaseHeaderContainer'
import styles                           from '../styles'
import type { Step }                    from '../../../../services/cms'
import StepBar                          from '../containers/StepBarContainer'
import Sidebar                          from '../containers/SidebarContainer'
import { SectionProvider }              from '../context/SectionContext'
import WorkbookContent                  from '../containers/WorkbookContentContainer'
import { mapBarStylesHelper }           from '../utils/colorsForStep'
import { translateCMSPhaseToStandard } from '../../../../services/cms'

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
    }
  }

  _changeSelectedStep = (step: Step) => {
    this.setState({ selectedStep: step })
  }

  _getCurrentBackgroundColor = (step: Step) => {
    const { type } = step
    const phase = translateCMSPhaseToStandard(type)
    const styles = mapBarStylesHelper(phase)

    return styles.backgroundColor
  }

  render() {
    const { navigation: { state: { params: { phase } } } } = this.props
    const { selectedStep } = this.state

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
        <SectionProvider>
          <View style={{ flex: 3, flexDirection: 'row' }}>
            {selectedStep && <Sidebar step={selectedStep} />}
            <View style={{ flex: 1 }}>
              {selectedStep && <StepBar step={selectedStep} />}
              <WorkbookContent
                step={selectedStep}
                phase={phase}
                onSelectStep={this._changeSelectedStep}
                backgroundColor={backgroundColor}
              />
            </View>
          </View>
        </SectionProvider>
      </SafeAreaView>
    )
  }
}

export default WorkbookScreen
