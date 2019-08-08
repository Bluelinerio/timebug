// @flow
import React from 'react'
import { Tool } from '2020_static/tools/types'

type Props = {
  data: any,
  tool: Tool,
  storeAwardData: (value: any, tool: Tool) => void,
  children: React.Node,
}

const initialState = {
  storeData: () => null,
  storeFormData: () => null,
  storeToolData: () => null,
}

export type ProvidedProps = {
  data: any,
  tool: Tool,
  storeData: () => void,
  storeFormData: () => void,
  storeToolData: () => void
}

const ToolDataContext = React.createContext(initialState)

class ToolDataProvider extends React.PureComponent<Props> {
  _storeData = (value: any) => {
    const { tool, storeAwardData } = this.props
    storeAwardData(value, tool)
  }

  _storeFormData = (v: any) => {
    const { data, tool, storeAwardData } = this.props
    const value = data ? data.value : {}

    const newValue = {
      ...value,
      form: v,
    }

    storeAwardData(newValue, tool)
  }

  _storeToolData = (v: any) => {
    const { data, tool, storeAwardData } = this.props
    const value = data ? data.value : {}

    const newValue = {
      ...value,
      toolData: v,
    }

    storeAwardData(newValue, tool)
  }

  render() {
    const { data, tool } = this.props
    return (
      <ToolDataContext.Provider
        value={{ data, tool, storeData: this._storeData }}
      >
        {this.props.children}
      </ToolDataContext.Provider>
    )
  }
}

export { ToolDataProvider, ToolDataContext }
