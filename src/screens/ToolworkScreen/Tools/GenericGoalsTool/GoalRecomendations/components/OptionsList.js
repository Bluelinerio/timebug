// @flow
import React         from 'react'
import { View }      from 'react-native'
import OptionsButton from '../containers/OptionButtonContainer'
import styles        from '../styles'

type Props = {
  options: Array<string>,
}

class OptionsList extends React.PureComponent<Props> {
  render() {
    const { options } = this.props
    return (
      <View style={[styles.container, styles.padded, styles.center]}>
        {options &&
          options.map(opt => (
            <OptionsButton
              key={opt}
              option={opt}
              style={{ text: styles.optionsText, button: styles.optionsButton }}
            />
          ))}
        <OptionsButton
          option={"I'll create my own goal"}
          newGoalButton
          style={{ text: styles.optionsText, button: styles.optionsButton }}
        />
      </View>
    )
  }
}

export default OptionsList
