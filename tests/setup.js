import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

jest.mock('react-native-sound', () => 'Sound')

enzyme.configure({ adapter: new Adapter() })
