import React, { Component } from 'react'
import { View, Text as NativeText } from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import styles from '../../styles/components/PieCharts'

class PieChartProgress extends Component {
    render() {
        const { height, chartProps, textProps, style, element } = this.props

        const { label, total, slices } = element

        const data = slices.map(({ amount, color }, index) => ({
            key: index,
            amount,
            svg: { fill: color }
        }))

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
            <View style={{ borderWidth: 0.25, borderColor: '#717171' }}>
                <PieChart
                    style={{ height }}
                    valueAccessor={({ item }) => item.amount}
                    data={data}
                    {...chartProps}
                />
                <NativeText style={styles.label}>
                    {label}
                </NativeText>
            </View>
        )
    }
}

export default PieChartProgress