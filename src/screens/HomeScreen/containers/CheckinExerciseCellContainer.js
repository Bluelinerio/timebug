import { connect } from 'react-redux';
import { compose, mapProps } from 'recompose';
import { withNavigation } from 'react-navigation';
import selectors from '../../../redux/selectors';
import YesNoSuggestionCellComponent from '../components/DashboardCells/YesNoSuggestionCellComponent';

const mapStateToProps = state => ({
  user: selectors.user(state),
});

const firstName = user => user && user.name && user.name.split(' ')[0];
const title = firstName =>
  `Hi${(firstName && ` ${firstName}, have`) ||
    `, have`} you meditated today?\n`;

const ExerciseCheckCellContainer = compose(
  withNavigation,
  connect(mapStateToProps),
  mapProps(({ user, ...rest }) => ({
    ...rest,
    title: title(firstName(user)),
    onPressYes: () => {},
    onPressNo: () => {},
    ...rest,
  }))
)(YesNoSuggestionCellComponent);

export default ExerciseCheckCellContainer;
