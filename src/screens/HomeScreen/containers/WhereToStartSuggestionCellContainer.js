import { connect } from 'react-redux'
import { compose, branch, renderNothing, withProps } from 'recompose'
import { withNavigation } from 'react-navigation'
import { user } from '../../../redux/selectors/user.selectors'
import { appInstructions, uniqueColors } from '../../../redux/selectors/cms.selectors'
import { goToMarkdownScreen } from '../../../redux/actions/nav.actions'
import AppInstructionsCellComponent from '../components/DashboardCells/AppInstructionsCellComponent'
import markdownStyles from '../../../styles/Markdown/stepScreen'
import { headerBackgrounds } from '../../../resources/images'
import { randomItem } from '../../../utils/random'
import combineSelectors from '../../../redux/selectors/combineSelectors';

const title = ({ user, ...rest }) => ({
  ...rest,
  title: `${(user && `Hey ${user.name.split(' ')[0]}, not`) ||
    `Not`} sure where to start?\n`
})

const button = ({ appInstructions, colors, navigation, ...rest }) => ({
  ...rest,
  button: {
    onPress: () =>
      navigation.dispatch(
        goToMarkdownScreen({
          ...appInstructions,
          markdownStyles,
          image: randomItem(Object.values(headerBackgrounds)),
          color: randomItem(colors),
          statusBar: 'bright',
          headerTitle: 'Start here',
          title: `Not sure where to start?\n`
        })
      ),
    title: 'Learn more'
  }
})

const WhereToStartSuggestionCellContainer = compose(
  connect(
    combineSelectors({
      user,
      appInstructions,
      colors: uniqueColors
    })
  ),
  branch(({ appInstructions }) => !appInstructions, renderNothing),
  withNavigation,
  withProps(title),
  withProps(button)
)(AppInstructionsCellComponent)


export default WhereToStartSuggestionCellContainer