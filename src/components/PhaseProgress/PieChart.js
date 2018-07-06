import React, { Component } from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

class PieChartProgress extends Component {
    render() {
        const data = [
            {
                key: 1,
                amount: 50,
                svg: { fill: '#600080' },
            },
            {
                key: 2,
                amount: 50,
                svg: { fill: '#9900cc' }
            },
            {
                key: 3,
                amount: 40,
                svg: { fill: '#c61aff' }
            },
            {
                key: 4,
                amount: 95,
                svg: { fill: '#d966ff' }
            },
            {
                key: 5,
                amount: 35,
                svg: { fill: '#ecb3ff' }
            }
        ]

        const { height, chartProps, textProps, style } = this.props

        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[ 0 ]}
                        y={pieCentroid[ 1 ]}
                        {...textProps}
                    >
                        {data.amount}
                    </Text>
                )
            })
        }

        return (
            <PieChart
                style={{ height }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                {...chartProps}
            >
                <Labels/>
            </PieChart>
        )
    }
}

export default PieChartProgress