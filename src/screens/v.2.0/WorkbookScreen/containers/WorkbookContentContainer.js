import { connectContext } from 'react-connect-context'
import { SectionConsumer } from '../context/SectionContext'
import WorkbookContent from '../components/WorkbookContent'
import { compose } from 'recompose'

export default compose(connectContext(SectionConsumer))(
  WorkbookContent
)
