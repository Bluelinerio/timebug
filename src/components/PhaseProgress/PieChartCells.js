// @flow
import React from 'react'
import { View, Text, Platform } from 'react-native'

import type, { ChartProps, Chart } from './PieChart'

import PieChartGrid from './PieChartGrid'

type PieChartStyles = {
    container?: any,
    row?: any,
    cell?: any
}

const style : PieChartStyles = {
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

export type PieChartCellsProps = {
    width: number,
    maxColumns: number,
    elements: Array<Chart>,
    chartProps: ChartProps,
}

const PieChartCells = (props : PieChartCellsProps) : any => {
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