import { connectContext } from 'react-connect-context'
import { ScreenConsumer } from '../../context/ScreenContext'
import ToolContent from '../components/ToolContent'

export default connectContext(ScreenConsumer)(ToolContent)