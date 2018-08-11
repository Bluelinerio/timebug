import React                                    from 'react'
import { Text, View, Image, TouchableOpacity }  from 'react-native'
import LogoutButtonContainer                    from '../containers/LogoutButtonContainer'
import style                                    from '../styles/components/UserProfileImage'

export default ({ onPress, styles, source }) => {
    return (
            <View>
                <LogoutButtonContainer>
                    <Image source={source} style={styles.headerAvatar} />
                </LogoutButtonContainer>
                <TouchableOpacity onPress={onPress} style={style.myJourneyContainer}>
                    <Text style={style.myJourneyText}>My Journey</Text>
                </TouchableOpacity>
            </View>
    )
}