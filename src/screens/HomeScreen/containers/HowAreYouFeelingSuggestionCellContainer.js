import { connect } from 'react-redux'
import { compose, mapProps } from 'recompose'
import { withNavigation } from 'react-navigation'
import selectors from '../../../redux/selectors'
import { goToEmojiPickerScreen } from '../../../redux/actions/nav.actions'
import EmotionCheckinCellComponent from '../components/DashboardCells/EmotionCheckinCellComponent'
import { randomItem } from '../../../utils/random'
import moment from 'moment'

const mapStateToProps = state => ({
  user: selectors.user(state),
  uniqueColors: selectors.uniqueColors(state)
})

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

const firstName = user => user && user.name && user.name.split(' ')[0]
const title = firstName =>
  `Hi${(firstName && ` ${firstName}, how`) ||
    `, how`} are you feeling EMOTIONALLY this ${getGreetingTime(moment())}?\n`

const button = ({ user, uniqueColors, navigation, ...rest }) => ({
  ...rest,
  title: title(firstName(user)),
  button: {
    onPress: () =>
      navigation.dispatch(
        goToEmojiPickerScreen({
          color: randomItem(uniqueColors)
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