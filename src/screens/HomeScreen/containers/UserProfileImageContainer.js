import React from 'react'
import { goToMyJourneyScreen } from '../../../redux/actions/nav.actions'
import UserProfileImageComponent from '../components/UserProfileImageComponent'

export default (props) => (
    <UserProfileImageComponent onPress={() => goToMyJourneyScreen()} {...props} />
)