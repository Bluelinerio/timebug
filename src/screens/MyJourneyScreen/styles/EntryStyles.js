import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    entry: {
        borderRadius: 6,
        paddingVertical: 30,
        paddingRight: 15,
        margin: 5,
        marginLeft: 0,
        backgroundColor: '#FAFAFA',
        ...Platform.select({
            android: { elevation: 2 },
            ios: {
              shadowColor: 'black',
              shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.2,
              shadowRadius: 2
            }
        })
    }
})