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

const rowStyle = {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 6
}

const elementStyle = {
    view: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
    }
}

const pillarStyle = {
    view: {
        flex: 2,
    },
    text: {
        textAlign: 'left',        
    }
}

export const PillarTimeTableHeader = () => (
    <View style={rowStyle}>
        <View style={[elementStyle.view, pillarStyle.view]}>
            <Text style={[pillarStyle.text]}>
                Area of life
            </Text>
        </View>
        <View style={elementStyle.view}>
            <Text style={[elementStyle.text]}>
                Current week
            </Text>
        </View>
        <View style={elementStyle.view}>
            <Text style={[elementStyle.text]}>
                Ideal week
            </Text>
        </View>
        <View style={elementStyle.view}>
            <Text style={[elementStyle.text]}>
                Diff
            </Text>
        </View>
    </View>
)

const PillarTimeTableElement = ({ pillar, typicalWeek, idealWeek }) => (
    <View style={rowStyle}>
        <View style={[elementStyle.view, pillarStyle.view]}>
            <Text style={[pillarStyle.text]}>
                { pillar }
            </Text>
        </View>
        <View style={elementStyle.view}>
            <Text style={[elementStyle.text]}>
                { typicalWeek ? typicalWeek : '---' }
            </Text>
        </View>
        <View style={elementStyle.view}>
            <Text style={[elementStyle.text]}>
                { idealWeek ? idealWeek : '---' }
            </Text>
        </View>
        <View style={elementStyle.view}>
            <Text style={[elementStyle.text]}>
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