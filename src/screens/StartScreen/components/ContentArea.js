import React from 'react'
import { View } from 'react-native'
import tron from 'reactotron-react-native'

import OptionsButton from './OptionsButton'
import styles from '../styles'

const ContentArea = () => {
    <View style={styles.container}>
        <OptionsButton onPress={() => tron.log("Holi") }/>
        <OptionsButton onPress={() => tron.log("2") }/>
        <OptionsButton onPress={() => tron.log("3") }/>
        <OptionsButton onPress={() => tron.log("4") }/>        
    </View>
}

export default ContentArea