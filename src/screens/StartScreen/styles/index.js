import { StyleSheet } from 'react-native'

export const colors = {
    background1: 'white',
}

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    buttonContainer: {
        flex: 1,
        padding:20
    },
    button: {
        backgroundColor: 'pink',
        borderRadius: 6,
        padding: 20,
        marginVertical: 10
    },
    buttonText: {
        color: 'white'
    }
})