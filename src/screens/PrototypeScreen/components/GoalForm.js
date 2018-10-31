import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from '../styles'
import { SafeAreaView } from 'react-navigation'
import Banner from '../../../containers/NavigationAwareBanner'
import Form from './Form'

type Props = {
  setScreenStatus: () => any,
  back: () => any,
  models: any,
  data: any
}

const step = '5'

class GoalForm extends React.PureComponent<Props> {
  _onFinish = (data: any) => {
    const { setScreenStatus, back } = this.props
    setScreenStatus({ [step]: data })
    back()
  }

  render() {
    const { models, data } = this.props
    const model = models[step]
    const formData = data[step]
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
            <Form model={model} value={formData} onFinish={this._onFinish} />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default GoalForm
