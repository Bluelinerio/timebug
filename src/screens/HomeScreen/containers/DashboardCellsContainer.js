//@flow
import * as React from 'react';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import User from './../../../containers/User';
import { goToMeditation } from './../../../redux/actions/nav.actions';
import MeditationDashboardCell from './../components/DashboardCells/MeditationDashboardCell';

// Dashboard should determind  visibilty based on a feed switch or A/B signal
const MeditationDashboardCellContainer = compose(
  connect(null, {
    onPress: () => goToMeditation('local-armchair-meditation'),
  }),
  withProps({
    title: `I want to Meditate`,
  })
)(MeditationDashboardCell);

const DashboardCellsContainer = ({ show = true }: { show: boolean }) => {
  return show ? (
    <User>
      {() => (
        <React.Fragment>
          <MeditationDashboardCellContainer />
        </React.Fragment>
      )}
    </User>
  ) : null;
};

export default DashboardCellsContainer;
