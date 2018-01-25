// @flow
import React from 'react'
import { TextInput, Modal } from 'react-native'

type State = {
  height: number
}
type Props = any & {
  style: any,
  onContentSizeChange: (event:any) => void,
}

export default class ExpandingTextInput extends React.Component<Props,State> {
  state:State = {
    height: 0
  }
  
  textInput:?TextInput = null

  focus () {
    this.textInput && this.textInput.focus()
  }
  render () {
    return (
      <TextInput
        {...this.props}
        onFocus={() => {

        }}
        ref={(c) => (this.textInput = c)}
        multiline
        onContentSizeChange={(event) => {
          if (event && event.nativeEvent && event.nativeEvent.contentSize) {
            this.setState({
              height: event.nativeEvent.contentSize.height
            })
          }
          this.props.onContentSizeChange && this.props.onContentSizeChange(event)
        }}
        style={[this.props.style, { height: Math.min(400, Math.max(this.state.height, 44)) }]}
      />
    )
  }
}

