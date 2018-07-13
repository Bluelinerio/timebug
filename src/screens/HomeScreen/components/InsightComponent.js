import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import dashboardStyles from '../../styles/dashboard.styles'
import {
    human,
    systemWeights,
    iOSColors,
    iOSUIKit,
    material,
    sanFranciscoWeights,
    robotoWeights
} from 'react-native-typography'

const styles = {
    suggestionText: {
        ...StyleSheet.flatten(dashboardStyles.suggestionText),
        color: '#6AC2ED',
        fontSize: 16,
        lineHeight: 20        
    },
    view: {
        borderRadius: 6,
        marginHorizontal: 16,
        marginVertical: 8,
        padding: 12,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: iOSColors.white,
        elevation: 2,
    }
}

const InsightComponent = ({ insightText, children }) => {
    return (
        <View style={styles.view}>
            <Text style={styles.suggestionText}>
                    {
                      insightText && 
                        <Text>
                          <Text style={dashboardStyles.strong}>{`Did You Know?\n`}</Text>
                          <Text>{`${insightText}`}</Text>
                        </Text>
                    }
                    {children}
                </Text>
        </View>
    )
}

export default InsightComponent