import * as React from 'react';
import {connect } from 'react-redux';
import { goToMeditation }     from '../../../redux/actions/nav.actions'
import MeditationDashobardCell from '../components/DashboardCells/MeditationDashbardCell';

export default connect(null, ({ onPress: goToMeditation }))(MeditationDashobardCell)
