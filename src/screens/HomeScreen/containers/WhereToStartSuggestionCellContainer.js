import { connect } from 'react-redux';
import { compose, branch, renderNothing, mapProps } from 'recompose';
import { withNavigation } from 'react-navigation';
import selectors from '../../../redux/selectors';
import { goToMarkdownScreen } from '../../../redux/actions/nav.actions';
import AppInstructionsCellComponent from '../components/DashboardCells/AppInstructionsCellComponent';
import markdownStyles from '../../../styles/Markdown/stepScreen';
import { headerBackgrounds } from '../../../resources/images';
import { randomItem } from '../../../utils/random';

const mapStateToProps = state => ({
  user: selectors.user(state),
  appInstructions: selectors.appInstructions(state),
  colors: selectors.uniqueColors(state),
});

const title = ({ user, ...rest }) => ({
  ...rest,
  title: `${(user && `Hey ${user.name.split(' ')[0]}, not`) ||
    `Not`} sure where to start?\n`,
});

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
          title: `Not sure where to start?\n`,
        })
      ),
    title: 'Learn more',
  },
});

const WhereToStartSuggestionCellContainer = compose(
  connect(mapStateToProps),
  branch(({ appInstructions }) => !appInstructions, renderNothing),
  withNavigation,
  mapProps(title),
  mapProps(button)
)(AppInstructionsCellComponent);

export default WhereToStartSuggestionCellContainer;
