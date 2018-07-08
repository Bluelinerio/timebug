import React from 'react'
import { View } from 'react-native'
import PieChart from './PieChart'

const buildCellStyle = (numCells, baseStyle = {}) => (cellIndex) =>{
    if(numCells === 1)
        return {
            ...baseStyle
        }
    else 
        return cellIndex > 0 
        ? {
            ...baseStyle,
            borderLeftWidth: 0.25, 
            borderColor: '#717171'
        }
        : {
            ...baseStyle,
        }
}

const Cell = ({columnsPerRow, ...rest}) => {
    const { rowElements, currentElementSet, height, style } = rest
    const { cell } = style
    const cellStyles = buildCellStyle(columnsPerRow, cell)
    return Array(columnsPerRow)
                .fill()
                .map((el, index) => {
                    const element = rowElements[index]
                    const cellStyle = cellStyles(index)
                    return (
                    <View key={element.label} style={cellStyle}>
                        <PieChart
                            element={element}
                            height={height}
                            {...rest} 
                        />
                    </View>)
                })
}

export default Cell