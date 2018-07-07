import React from 'react'
import { View, Text } from 'react-native'
import PieChart from './PieChart'

const textProps = {
    fill: 'white',
    textAnchor: 'middle',
    alignmentBaseline: 'middle',
    fontSize: 14,
    stroke: 'black', 
    strokeWidth: 0.3
}

const chartProps = {
    spacing: 0,
    outerRadius: '95%',
    innerRadius: '20%'
}

const generalCellStyles = {
    flex: 1,
    flexDirection: 'column' 
}

const containerStyles = (width) => ({
    flex: 1,
    height: width,
    flexDirection: 'column',
    borderWidth: 0.25,
    borderColor: '#717171'
})

const rowStyles = {
    flex: 1,  
    flexDirection: 'row',
    borderWidth: 0.25,
    borderColor: '#717171',
}

const buildRowStyle = (numRows, baseStyle = {}) => (rowIndex) => {
    if(numRows === 1)
        return {
            ...baseStyle
        }
    else 
        return rowIndex > 0 ? {
            ...baseStyle,
            borderTopWidth: 0.25, 
            borderColor: '#717171'
        }
        : {
            ...baseStyle,
        }
}

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

const PieChartCells = (props) => {
    const { width, maxColumns, elements } = props
    const numRows = Math.ceil(elements.length / maxColumns)

    const PieChartCell = (props) => 
        (newProps) =>
            <View>
                <PieChart {...{...props, ...newProps}}/>
            </View>
    
    const ColumnBuilder = (CellComponent) => (numElements) => (rest) => {
        const { rowElements, currentElementSet, height } = rest
        const cellStyles = buildCellStyle(numElements)
        return Array(numElements)
                    .fill()
                    .map((el, index) => {
                        const element = rowElements[index]
                        const cellStyle = cellStyles(index)
                        return (
                        <View key={element.label} style={[
                            cellStyle, 
                            generalCellStyles
                        ]}>
                            <CellComponent
                                element={element}
                                {...rest} 
                                height={height}
                            />
                        </View>)
                    })
    }

    const rows = (elements, numRows, max) => (Component) => {
        return Array(numRows)
            .fill()
            .map((el, index) => {
                const height = (width / numRows) - 20
                const columnsPerRow = (max * (index + 1)) < elements.length 
                    ? max
                    : elements.length - (max * (index))
                const RowCellComponent = Component(columnsPerRow)
                const rowElements = elements.slice().slice((index * max), max * (index + 1))
                return (<View key={`row-${index + 1}`} style={[rowStyles, { height }]}>
                            {
                                RowCellComponent({
                                    rowElements,
                                    textProps,
                                    chartProps,
                                    height,
                                    elements,
                                    numRows,
                                    maxColumns: max
                                })
                            }
                        </View>)
            })
    }
        
        
    return (
        <View style={containerStyles(width)}>
            {
               rows(elements, numRows, maxColumns)(ColumnBuilder(PieChartCell(props)))
            }
        </View>
    )
}

export default PieChartCells