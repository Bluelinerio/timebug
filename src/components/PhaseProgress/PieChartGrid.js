import React from 'react'
import { View } from 'react-native'
import Cell from './PieChartCell'

const buildRowStyle = (numRows, baseStyle = {}) => (rowIndex) =>    
    rowIndex > 0 
        ? {
            ...baseStyle,
            borderTopWidth: 0.25, 
            borderColor: '#717171'
        }
        : {
            ...baseStyle,
        }


const Grid = ({ elements, numRows, maxColumns, ...rest }) => {
    const { style: { row } } = rest    
    const rowStyle = buildRowStyle(numRows, row)    
    return Array(numRows)
        .fill()
        .map((el, index) => {
            const { width } = rest
            const height = (width / numRows) - 20
            const columnsPerRow = (maxColumns * (index + 1)) < elements.length 
                ? maxColumns
                : elements.length - (maxColumns * index)
            const rowElements = elements.slice().slice((index * maxColumns), maxColumns * (index + 1))
            return (
                <View key={`row-${index + 1}`} style={[rowStyle(index), { height }]}>
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