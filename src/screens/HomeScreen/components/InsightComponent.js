import React from 'react'
import { View, Text } from 'react-native'

const InsightComponent = ({ insight }) => {
    return (
        <View>
            <Text>
                Did you know?
            </Text>
            <Text>
                {insight}
            </Text>
        </View>
    )
}

export default InsightComponent