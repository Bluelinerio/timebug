// @flow
import React from 'react'

export type Props = {
  data: any,
  tool: any,
  phase: string,
  storeAwardData: (value: any, tool: any) => void,
  children: React.ReactChildren,
}

export type ProvidedProps = {
  data: any,
  tool: any,
  phase: string,
  storeData: any => void,
}

const initialState: ProvidedProps = {
  data: null,
  tool: null,
  storeToolData: null,
}

const ToolDataContext = React.createContext(initialState)

class ToolDataProvider extends React.PureComponent<Props> {
  _storeData = (value: any) => {
    const { tool, storeAwardData } = this.props
    storeAwardData(value, tool)
  }

  render() {
    const { data, tool, phase } = this.props
    return (
      <ToolDataContext.Provider
        value={{ data, tool, phase, storeData: this._storeData }}
      >
        {this.props.children}
      </ToolDataContext.Provider>
    )
  }
}

export { ToolDataProvider, ToolDataContext }
