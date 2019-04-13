// @flow
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Form from '2020_forms/components/Form'
import styles from '../styles'

type Props = {
  tool: any,
  enableForm: boolean,
  onFinish: (value: any) => undefined,
  timeLeft: string,
}

class CheckinScreen extends React.PureComponent<Props> {
  _onFinish = (value: any) => {
    const { onFinish } = this.props
    onFinish(value)
  }

  render() {
    const { enableForm, tool, timeLeft } = this.props
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
              {' '}
              Please come back in {timeLeft}!
            </Text>
          </View>
        )}
      </React.Fragment>
    )
  }
}

export default CheckinScreen
