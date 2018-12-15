import React from 'react'
import { View, Text } from 'react-native'
import tron from 'reactotron-react-native'
import types, { passiveTypes } from '../../forms/types'
import ConnectedSelect from './Connected/Select'

type Props = {
  onChange: () => any,
  value: any,
  field: any,
  buttonHandler: () => any,
  currentFormValue: any,
  allFields: any,
  component: any,
  dataElement: {
    text: string,
    value: Array<any>,
    type: string,
  },
}

const SwitchComponent = (props: { component: any, props: any }) => {
  const { component: { type } } = props
  tron.log(props)
  switch (type) {
  case types.string:
    return null
  case types.select:
    return <ConnectedSelect {...props} />
  default:
    return null
  }
}

class ConnectedComponent extends React.PureComponent<Props> {

  _onChange = (value) => {
    const { onChange } = this.props
    onChange(value)
  }

  render() {
    const { dataElement: { text, value: values, type } } = this.props
    return (
      <React.Fragment>
        {values &&
          values.map(val => {
            return (
              <React.Fragment key={val.listElementId}>
                <View
                  style={{ flex: 1, flexDirection: 'row', marginVertical: 16, minHeight: 50 }}
                >
                  <View
                    style={{
                      flex: 2,
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <Text>{text}:</Text>
                  </View>
                  <View
                    style={{
                      flex: 3,
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                    }}
                  >
                    {val.values &&
                      val.values.map((val, index) => (
                        <Text key={index}>{val}</Text>
                      ))}
                    <SwitchComponent {...this.props} />
                  </View>
                </View>
              </React.Fragment>
            )
          })}
      </React.Fragment>
    )
  }
}

export default ConnectedComponent
