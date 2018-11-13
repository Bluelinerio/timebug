// @flow
import React                from 'react'
import { View, ScrollView } from 'react-native'
import styles               from '../styles'
import { SafeAreaView }     from 'react-navigation'
import Banner               from '../../../containers/NavigationAwareBanner'
import Form                 from '../../../forms/custom/components/Form'

type Props = {
  setScreenStatus: () => any,
  back: () => any,
  models: any,
  data: any,
  step: String
}

class GoalForm extends React.PureComponent<Props> {
  _onFinish = (data: any) => {
    const { setScreenStatus, back, step } = this.props
    setScreenStatus({ [step]: data })
    back()
  }

  render() {
    const { models, data, step } = this.props
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
          <Banner />
          <View style={[styles.container, styles.prototypeBackground]}>
            <Form model={model} value={formData} onFinish={this._onFinish} />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default GoalForm
