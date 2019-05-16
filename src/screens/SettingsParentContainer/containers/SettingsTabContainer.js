import { connectContext }  from 'react-connect-context'
import SettingsTab         from '../components/SettingsTab'
import { SectionConsumer } from '../context/SelectedSectionContext'

export default connectContext(SectionConsumer)(SettingsTab)
