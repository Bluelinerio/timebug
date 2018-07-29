import React from 'react'
import { View } from 'react-native'
import styles from '../styles/EntryStyles'

const CarouselEntry = (props) => {
    return (
        <View style={styles.entry}>
            { props.children }
        </View>
    )
}

export default CarouselEntry