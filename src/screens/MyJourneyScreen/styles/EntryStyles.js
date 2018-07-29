import { StyleSheet, Platform } from 'react-native'
import { minimumItemHeight } from './CarouselStyles'

export default StyleSheet.create({
    entry: {
        borderRadius: 6,
        paddingVertical: 5,
        backgroundColor: '#FAFAFA',
        minHeight: minimumItemHeight,
        ...Platform.select({
            android: { 
                elevation: 2, 
                margin: 1 
            },
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