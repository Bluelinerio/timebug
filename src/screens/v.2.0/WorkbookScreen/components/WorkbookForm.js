import React                               from 'react'
import { View, Text, ScrollView, Linking } from 'react-native'
import Form                                from '../../../../forms/custom/components/Form'
import styles                              from '../styles'

type Props = {
  step: string,
  setScreenStatus: any => null,
  model: any,
  data: any,
}

class WorkbookForm extends React.PureComponent<Props> {
  _onFinish = (data: any) => {
    const { setScreenStatus, step } = this.props
    setScreenStatus({ [step]: data })
  }

  _goToUrl = () => {
    Linking.openURL('https://2020lifevision.com/').catch(() => {})
  }

  render() {
    const { model, step, data } = this.props
    const isMvp = false

    return model && !isMvp ? (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollView}
      >
        <Form
          model={model}
          value={data}
          onFinish={this._onFinish}
          step={step}
          formContainerStyle={styles.prototypeBackground}
          key={step}
        />
      </ScrollView>
    ) : (
      <View style={[styles.scrollView, styles.snippetParagraph]}>
        <Text style={[styles.formPlaceholderStyle]}>
          The 20/20 Life Vision Workbook is on the way! {'\n\n'}
          In the meantime, enjoy the guidebook and audio book content and keep
          checking back for updates.{'\n'}
          {'\n'}
          You can also find the PDF version of the workbook available at{' '}
          {'\n\n'}
          <Text style={styles.link} onPress={this._goToUrl}>
            2020lifevision.com
          </Text>
        </Text>
      </View>
    )
  }
}

export default WorkbookForm
