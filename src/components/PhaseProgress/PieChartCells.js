// @flow
import React from 'react'
import { View, Text } from 'react-native'

import type, { ChartProps } from './PieChart'

import PieChartGrid from './PieChartGrid'

const style = {
    container: {
        flex: 1,    
        flexDirection: 'column',
        borderWidth: 0.25,
        borderColor: '#717171'
    },
    row:  {
        flex: 1,  
        flexDirection: 'row',
        borderWidth: 0.25,
        borderColor: '#717171',
    },
    cell: {
        flex: 1,
        flexDirection: 'column' 
    }
}

const PieChartCells = (props) => {
    const { width, maxColumns, elements } = props
    const numRows = Math.ceil(elements.length / maxColumns)

    return (
        <View style={{
                ...style.container,
                height: width
            }}>
            <PieChartGrid
                numRows={numRows}
                style={style}
                {...props}
            />
        </View>
    )
}

export default PieChartCells