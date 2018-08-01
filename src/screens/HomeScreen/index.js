// @flow
import React from 'react'
import { connect } from 'react-redux'
import HomeScreenComponent from './components/HomeScreenComponent'
import DefaultIndicator from '../../components/DefaultIndicator'
import userSelectors from '../../redux/selectors/user.selectors'
import combineSelectors from '../../redux/selectors/combineSelectors';

type Props = { isAuthenticating: boolean, isUndetermined: boolean }

const HomeScreenContainer = ({ isAuthenticating, isUndetermined } : Props) => (
  isAuthenticating || isUndetermined
    ? <DefaultIndicator size="large" />
    : <HomeScreenComponent />
)

export default connect(
  combineSelectors(userSelectors)
)(HomeScreenContainer)
