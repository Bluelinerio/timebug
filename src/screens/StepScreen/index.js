import screen from './containers/StepScreenContainer';

screen.navigationOptions = ({ navigation: { state: { params } } }) => ( { header: false } );

export default {
  screen,

}