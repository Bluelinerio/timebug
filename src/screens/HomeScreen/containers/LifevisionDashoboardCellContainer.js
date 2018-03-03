import * as React from 'react';
import LifevisionDashboardCell from '../components/DashboardCells/LifevisionDashboardCell';
import type { Props } from '../components/DashboardCells/LifevisionDashboardCell';
import { connect } from 'react-redux';
import selectors from '../../../redux/selectors';
import type { Phase } from '../../../services/cms';

const mapStateToProps = state => ({
  phaseColors: selectors.phaseColors(state)
});

const merge = (stateProps, dispatchProps, ownProps): Props => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
});

export default connect(mapStateToProps, null, merge)(LifevisionDashboardCell);
