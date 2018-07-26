import React from 'react'

import { View, Text } from 'react-native'

const renderText = (typical) => (ideal) => {
    const result = typical - ideal
    return result > 0 
        ? `+${result}`
        : result < 0
        ? `-${result}`
        : `${result}`
}
const PillarTimeTableElement = ({ pillar, typicalWeek, idealWeek }) => (
    <View style={{
        flex: 1,
        flexDirection: 'row'
    }}>
        <View>
            <Text>
                { pillar }
            </Text>
        </View>
        <View>
            <Text>
                { typicalWeek ? typicalWeek : '---' }
            </Text>
        </View>
        <View>
            <Text>
                { idealWeek ? idealWeek : '---' }
            </Text>
        </View>
        <View>
            <Text>
                {
                    idealWeek && typicalWeek 
                        ? renderText(typicalWeek)(idealWeek)
                        : '---'
                }
            </Text>
        </View>
    </View>
)


export default PillarTimeTableElement