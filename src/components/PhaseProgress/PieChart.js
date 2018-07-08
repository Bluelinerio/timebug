import React, { Component } from 'react'
import { View, Text as NativeText } from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import styles from '../../styles/components/PieCharts'

class PieChartProgress extends Component {
    render() {
        const { height, chartProps, style, element } = this.props

        const { label, total, slices } = element

        const data = slices.map(({ amount, color }, index) => ({
            key: index,
            amount,
            svg: { fill: color }
        }))

        return (
            <View>
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