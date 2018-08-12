import { compose, mapProps } from 'recompose'
import OptionButton from '../components/OptionButton'

export default compose(
  mapProps(({ onPress, style, ...props }) => ({
    ...props,
    onPress,
    styles: {
      ...style
    }
  }))
)(OptionButton)
