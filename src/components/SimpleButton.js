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

const SimpleButton = ({ text='DEV: Press to reset steps', reset } : { text: string, reset: () => void }) => {
    return (
        <TouchableOpacity style={styles.reset} onPress={reset} >
            <Text style={styles.resetText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default SimpleButton