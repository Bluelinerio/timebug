import React            from 'react'
import { View, Text }   from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Banner           from '../../../../containers/PhaseHeaderContainer'
import styles           from '../styles'
import type { Step }    from '../../../../services/cms'

type Props = {
  navigation: any
}

type State = {
  selectedStep: Step | null
}

class WorkbookScreen extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props)
    const { navigation: { state: { params } } } = this.props
    const step = params.step || null
    this.state = {
      selectedStep: step
    }
  }

  _changeSelectedStep = (step: Step) => {
    this.setState({ selectedStep: step })
  }

  render() {
    const { navigation: { state: { params: { step, phase } } } } = this.props
    const { selectedStep } = this.state
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <Banner
          step={step}
          phase={phase}
          onSelectStep={this._changeSelectedStep}
        />
        <View>
          <Text>{selectedStep ? selectedStep.stepId : 'No step'}</Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default WorkbookScreen
