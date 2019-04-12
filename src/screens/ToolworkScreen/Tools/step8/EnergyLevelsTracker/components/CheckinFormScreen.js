// @flow
import React          from 'react'
import { View, Text } from 'react-native'
import Form           from '2020_forms/components/Form'

type Props = {
  tool: any,
  enableForm: boolean,
  onFinish: (value: any) => undefined,
}

class CheckinScreen extends React.PureComponent<Props> {
  _onFinish = (value: any) => {
    const { onFinish } = this.props
    onFinish(value)
  }

  render() {
    const { enableForm, tool } = this.props
    return (
      <View>
        {enableForm ? (
          <Form
            key={tool.key}
            model={tool.form}
            value={null}
            onFinish={this._onFinish}
            disableAnswers
            formStyles={tool.formStyles}
          />
        ) : (
          <Text> Please try again later!</Text>
        )}
      </View>
    )
  }
}

export default CheckinScreen
