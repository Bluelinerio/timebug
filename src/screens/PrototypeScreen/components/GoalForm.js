import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from '../styles'
import { SafeAreaView } from 'react-navigation'
import Banner from '../../../containers/NavigationAwareBanner'
import Form from './Form'

import tron from 'reactotron-react-native'

type Props = {
  setScreenStatus: () => any,
  models: any,
  data: any
}

const step = '5'

class GoalForm extends React.PureComponent<Props> {
  _onPress = (data: any, step: string) => {
    const { setScreenStatus } = this.props
    setScreenStatus({ [step]: data })
  }

  render() {
    const { models, data } = this.props
    const model = models[step]
    const formData = data[step]
    tron.log(this.props)
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollView}
        >
          <Banner backButton={true} />
          <View style={[styles.container, styles.prototypeBackground]}>
            <Form model={model} value={formData} />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default GoalForm
