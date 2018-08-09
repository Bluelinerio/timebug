import * as React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'
import {
    iOSColors,
} from 'react-native-typography'

const styles = StyleSheet.create({
    reset: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: iOSColors.blue,
        borderRadius: 6,
        padding: 8,
      },
      resetText: {
        color: '#FAFAFA'
      }
})

const SimpleButton = ({
    hide,
    text,
    onPress
} : {
    show: boolean,
    text: string,
    onPress: () => void
}) => {
    return !hide && (
        <TouchableOpacity style={styles.reset} onPress={onPress} >
            <Text style={styles.resetText}>{'DEV: Press to reset steps'}</Text>
        </TouchableOpacity>
    )
}

export default SimpleButton