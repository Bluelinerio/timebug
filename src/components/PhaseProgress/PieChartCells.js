import React from 'react'
import { View, Text } from 'react-native'

const PieChartCells = (props) => {
    const { width, columns } = props

    const rows = (num = 2) => 
        Array(num)
            .fill()
            .map(el => {
                const height = width / num
                return (
                    <View style={{flex: 1, height, flexDirection: 'row'}}>
                        <Text>
                            hi
                        </Text>
                    </View>
                )
            })
        
    return (
        <View style={{flex: 1, height: width, flexDirection: 'column'}}>
            {
               rows(2)
            }
        </View>
    )
}

export default PieChartCells