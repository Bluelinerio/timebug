import React from 'react'
import { View } from 'react-native'
import Cell from './PieChartCell'

const Grid = ({ elements, numRows, maxColumns, ...rest }) => {
    return Array(numRows)
        .fill()
        .map((el, index) => {
            const { width } = rest
            const height = (width / numRows) - 20
            const { style: { row } } = rest
            const columnsPerRow = (maxColumns * (index + 1)) < elements.length 
                ? maxColumns
                : elements.length - (maxColumns * index)
            const rowElements = elements.slice().slice((index * maxColumns), maxColumns * (index + 1))
            return (
                <View key={`row-${index + 1}`} style={[row, { height }]}>
                    <Cell 
                        columnsPerRow={columnsPerRow}
                        rowElements={rowElements}
                        height={height}
                        numRows={numRows}
                        maxColumns={maxColumns}
                        {...rest}
                    />
                </View>
            )
        })
}

export default Grid