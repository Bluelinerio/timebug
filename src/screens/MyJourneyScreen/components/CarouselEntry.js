import React from 'react'
import { View } from 'react-native'
import styles from '../styles/EntryStyles'

const CarouselEntry = ({ width, children}) => {
    return (
        <View style={[
            styles.entry,
            { width }
        ]}>
            { children }
        </View>
    )
}

export default CarouselEntry