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
  storeAllData: () => null,
}

export type ProvidedProps = {
  data: any,
  tool: Tool,
  storeData: () => void,
  storeFormData: () => void,
  storeToolData: () => void,
  storeAllData: (formData: any, toolData: any) => void,
}

const ToolDataContext = React.createContext(initialState)

class ToolDataProvider extends React.PureComponent<Props, any, ProvidedProps> {
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

  _storeAllData = (formData: any, toolData: any) => {
    const { data, tool, storeAwardData } = this.props
    const value = data ? data.value : {}

    const newValue = {
      ...value,
      toolData: toolData,
      form: formData,
    }

    storeAwardData(newValue, tool)
  }

  render() {
    const { data, tool } = this.props
    return (
      <ToolDataContext.Provider
        value={{
          data,
          tool,
          storeData: this._storeData,
          storeFormData: this._storeFormData,
          storeToolData: this._storeToolData,
          storeAllData: this._storeAllData,
        }}
      >
        {this.props.children}
      </ToolDataContext.Provider>
    )
  }
}

export { ToolDataProvider, ToolDataContext }
