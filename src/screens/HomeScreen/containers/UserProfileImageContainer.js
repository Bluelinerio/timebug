import React from 'react'
import { compose, mapProps }            from 'recompose'
import { withNavigation }               from 'react-navigation'
import { goToMyJourneyScreen }          from '../../../redux/actions/nav.actions'
import UserProfileImageComponent        from '../components/UserProfileImageComponent'

const UserProfileImageContainer = (props) => (
    <UserProfileImageComponent onPress={props.onPress} {...props} />
)


export default compose(
    withNavigation,
    mapProps(({ navigation, ...props }) => ({
            ...props,
            onPress: () => navigation.dispatch(goToMyJourneyScreen())
        })
    )
)(UserProfileImageContainer)