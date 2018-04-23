import { connect } from 'react-redux'
import { compose, mapProps } from 'recompose'
import { withNavigation } from 'react-navigation'
import selectors from '../../../redux/selectors'
import { goToEmojiPickerScreen } from '../../../redux/actions/nav.actions'
import EmotionCheckinCellComponent from '../components/DashboardCells/EmotionCheckinCellComponent'
import { randomItem } from '../../../utils/random'
import moment from 'moment'

const getGreetingTime = m => {
  if (!m || !m.isValid()) return ''

  var split_afternoon = 12 //24hr time to split the afternoon
  var split_evening = 17 //24hr time to split the evening
  var currentHour = parseFloat(m.format('HH'))

  if (currentHour >= split_afternoon && currentHour <= split_evening) {
    return 'afternoon'
  } else if (currentHour >= split_evening) {
    return 'evening'
  } else {
    return 'morning'
  }
}

const firstNameFromUser = user => user && user.name && user.name.split(' ')[0]

const EMOTION = 'Emotion'
const PHYSICAL = 'Physical'
const MENTAL = 'Mental'

type CheckinType = EMOTION | PHYSICAL | MENTAL

type CheckinSuggestion = {
  type: CheckingType,
  title: string,
  color: string,
  id: string
}

const createNewHowAreYouFeelingSuggestionCheckin = ({ user, uniqueColors }) => {
  const randomCheckinType = (): CheckinType =>
    randomItem([EMOTION, PHYSICAL, MENTAL])

  const checkinTypeInSentence = (checkin: CheckinType) =>
    ({
      [EMOTION]: 'EMOTIONALLY',
      [PHYSICAL]: 'physically',
      [MENTAL]: 'Mentally'
    }[checkin])

  const suggestionTitleFromFirstNameAndCheckinType = (
    firstName: string,
    checkinType: CheckingType
  ) =>
    `Hi${(firstName && ` ${firstName}, how`) ||
      `, how`} are you feeling ${checkinTypeInSentence(
      checkinType
    ).toUpperCase()} this ${getGreetingTime(moment())}?\n`

  const randomId = () => '' // randomBytes(16).toString('hex'),
  const checkinType = randomCheckinType()

  return {
    title: suggestionTitleFromFirstNameAndCheckinType(
      firstNameFromUser(user),
      checkinType
    ),
    color: randomItem(uniqueColors),
    id: randomId(),
    checkinType
  }
}

const mapStateToProps = state =>
  createNewHowAreYouFeelingSuggestionCheckin({
    user: selectors.user(state),
    uniqueColors: selectors.uniqueColors(state)
  })

const button = ({ title, color, id, checkinType, navigation, ...rest }) => ({
  title,
  button: {
    onPress: () =>
      navigation.dispatch(
        goToEmojiPickerScreen({
          color,
          id,
          checkinType
        })
      ),
    title: 'Emoji'
  }
})

const HowAreYouFeelingSuggestionCellContainer = compose(
  withNavigation,
  connect(mapStateToProps),
  mapProps(button)
)(EmotionCheckinCellComponent)

export default HowAreYouFeelingSuggestionCellContainer
