import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from '../styles'

type OptionButtonProps = {
    onPress: () => any
}

const OptionButton = ({ onPress }: OptionButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button]}>
                <Text style={[styles.buttonText]}>
                    Holi
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default OptionButton