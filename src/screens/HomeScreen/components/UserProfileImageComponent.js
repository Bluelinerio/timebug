import React from 'react'
import { Text, View, Image } from 'react-native'

export default ({ onPress, styles, source }) => { 
    return (
        <View>
            <Image source={source} style={styles.headerAvatar} />
            <Text>My Journey</Text>
        </View>
    )
}