import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
export default ({ onPress, styles, source }) => { 
    return (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Image source={source} style={styles.headerAvatar} />
                <Text>My Journey</Text>
            </View>
        </TouchableOpacity>
    )
}