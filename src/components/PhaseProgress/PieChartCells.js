// @flow
import React from 'react'
import { View, Text, Platform } from 'react-native'

import type, { ChartProps } from './PieChart'

import PieChartGrid from './PieChartGrid'

const style = {
    container: {
        flex: 1,    
        flexDirection: 'column',
        borderRadius: 6
    },
    row:  {
        flex: 1,  
        flexDirection: 'row'
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