// @flow
import { compose }        from 'recompose'
import { withNavigation } from 'react-navigation'
import ToolworkScreen     from '../components/ToolworkScreen'

const screen = compose(withNavigation)(ToolworkScreen)

export default screen
