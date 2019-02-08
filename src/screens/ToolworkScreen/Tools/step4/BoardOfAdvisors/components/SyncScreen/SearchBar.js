// @flow
import React                        from 'react'
import { View, TextInput }          from 'react-native'
import styles, { placeholderColor } from '../../styles/sync'

type Props = {
  value: string,
  onTextChange: string => any,
}

class SearchBar extends React.PureComponent<Props> {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value,
    }
  }

  _onInputTextChange = (text: String) => {
    const { onTextChange } = this.props
    onTextChange(text)
  }

  _inputTextChangeMechanic = (func, delay) => {
    let inDebounce
    return function(text: string) {
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func(text), delay)
    }
  }

  _inputTextEvent = this._inputTextChangeMechanic(this._onInputTextChange, 1000)

  _handleInput = (text: string) => {
    this.setState({ value: text })
    this._inputTextEvent(text)
  }

  render() {
    const { value } = this.state
    return (
      <View style={styles.searchBarContainer}>
        <TextInput
          value={value}
          placeholder={'Search by name . . .'}
          placeholderTextColor={placeholderColor}
          onChangeText={this._handleInput}
        />
      </View>
    )
  }
}

export default SearchBar
