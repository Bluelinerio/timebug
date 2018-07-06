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
        console.log("Inside column Builder", rowElements)
        return Array(numElements)
                    .fill()
                    .map((el, index) => {
                        const element = rowElements[index]
                        return (
                        <View style={{flex: 1, height, flexDirection: 'column' }}>
                            <CellComponent
                                key={element.label}
                                element={element}
                                {...rest} height={height}
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
                return (<View key={`row-${index}`} style={{flex: 1, height, flexDirection: 'row'}}>
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
        <View style={{flex: 1, height: width, flexDirection: 'column'}}>
            {
               rows(elements, numRows, maxColumns)(ColumnBuilder(PieChartCell(props)))
            }
        </View>
    )
}

export default PieChartCells