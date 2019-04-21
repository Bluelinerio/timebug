// @flow
import React                      from 'react'
import { View, Text, ScrollView } from 'react-native'
import Form                       from '2020_forms/components/Form'
import styles                     from '../styles'

export type Props = {
  tool: any,
  enableForm: boolean,
  onFormFinish: (value: any) => undefined,
  timeLeft: string,
  goToMenu: () => any,
  text: string,
}

class CheckinScreen extends React.PureComponent<Props> {
  _onFinish = (value: any) => {
    const { onFormFinish, goToMenu } = this.props
    onFormFinish(value)
    goToMenu()
  }

  render() {
    const { enableForm, tool, timeLeft, text } = this.props
    return (
      <React.Fragment>
        {enableForm ? (
          <ScrollView
            style={[styles.scrollView, styles.fullWidth]}
            contentContainerStyle={styles.scrollView}
          >
            <Form
              key={tool.key}
              model={tool.form}
              value={null}
              onFinish={this._onFinish}
              disableAnswers
              formStyles={tool.formStyles}
            />
          </ScrollView>
        ) : (
          <View style={[styles.container, styles.centered]}>
            <Text style={[styles.centeredText, styles.captionText]}>
              You have already checked in twice this {text}
            </Text>
            <Text style={[styles.centeredText, styles.captionText]}>
              Please come back in {timeLeft}!
            </Text>
          </View>
        )}
      </React.Fragment>
    )
  }
}

export default CheckinScreen
