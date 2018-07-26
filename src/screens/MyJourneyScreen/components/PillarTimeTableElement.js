import React from 'react'

import { View, Text } from 'react-native'

import { iOSUIKit } from 'react-native-typography'

const renderText = (typical) => (ideal) => {
    const result = typical - ideal
    return result > 0 
        ? `+${result} hrs`
        : result < 0
        ? `-${result} hrs`
        : `${result} hrs`
}

const rowStyle = {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 6
}

const headerRowStyle = {
    flex: 1,
    flexDirection: 'row'
}

const titleStyle = {
    text: {
        ...iOSUIKit.subheadEmphasizedObject
    }
}
const elementStyle = {
    view: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
    },
    text: {
        ...iOSUIKit.subheadEmphasizedObject,
        textAlign: 'center',
    }
}

const pillarStyle = {
    view: {
        flex: 2,
    },
    text: {
        ...iOSUIKit.subheadEmphasizedObject,
        textAlign: 'left',        
    }
}

export const PillarTimeTableHeader = () => (
    <View style={headerRowStyle}>
        <View style={[elementStyle.view, pillarStyle.view]}>
            <Text style={[pillarStyle.text, titleStyle.text]}>
                Area of life
            </Text>
        </View>
        <View style={elementStyle.view}>
            <Text style={[elementStyle.text, titleStyle.text]}>
                Current week
            </Text>
        </View>
        <View style={elementStyle.view}>
            <Text style={[elementStyle.text, titleStyle.text]}>
                Ideal week
            </Text>
        </View>
        <View style={elementStyle.view}>
            <Text style={[elementStyle.text, titleStyle.text]}>
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
                { typicalWeek ? `${typicalWeek} hrs` : '---' }
            </Text>
        </View>
        <View style={elementStyle.view}>
            <Text style={[elementStyle.text]}>
                { idealWeek ? `${idealWeek} hrs` : '---' }
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