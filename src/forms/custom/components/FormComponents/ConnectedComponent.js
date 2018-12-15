import React from 'react'
import { View, Text } from 'react-native'
import tron from 'reactotron-react-native'
import types from '../../forms/types'

type Props = {
  onChange: () => any,
  value: any,
  field: any,
  buttonHandler: () => any,
  currentFormValue: any,
  allFields: any,
  dataElement: {
    text: string,
    value: Array<any>,
    type: string,
  },
}

type ParentProps = {
  text: string,
  values: Array<string>,
}

class ConnectedSelect extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <View>
          <Text>I am a select</Text>
        </View>
      </React.Fragment>
    )
  }
}

class ParentTextComponent extends React.PureComponent<ParentProps> {
  render() {
    const { text, values = [] } = this.props
    return (
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Text>{text}</Text>
        </View>
        <View>
          {values && values.map((val, index) => <Text key={index}>{val}</Text>)}
        </View>
      </View>
    )
  }
}

const SwitchComponent = (props: { component: any, props: any }) => {
  const { component: { type } } = props
  switch (type) {
  case types.string:
    return null
  case types.select:
    return <ConnectedSelect {...props} />
  default:
    return null
  }
}

// TODO: use
class ConnectedElement extends React.PureComponent {
  render() {
    return null
  }
}

class ConnectedComponent extends React.PureComponent<Props> {
  render() {
    tron.log(this.props)
    const { dataElement: { text, value: values, type } } = this.props
    return (
      <React.Fragment>
        {values &&
          values.map(val => {
            return (
              <React.Fragment key={val.listElementId}>
                <ParentTextComponent
                  text={text}
                  values={val.values}
                  type={type}
                />
                <SwitchComponent {...this.props} />
              </React.Fragment>
            )
          })}
      </React.Fragment>
    )
  }
}

export default ConnectedComponent
