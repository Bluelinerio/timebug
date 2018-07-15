import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import dashboardStyles from '../../styles/dashboard.styles'

import Insight from '../../../components/Insight'

const styles = {
    suggestionText: {
        ...StyleSheet.flatten(dashboardStyles.suggestionText),
        ...StyleSheet.flatten(dashboardStyles.homeSuggestionText)  
    }
}

const InsightComponent = ({ insightText }) => {
    return (
        <View style={dashboardStyles.dashboardInsightContainer}>
            <Text style={styles.suggestionText}>
                {
                    insightText && 
                        <Insight insightText={insightText} style={{title: dashboardStyles.strong }}/>
                }
            </Text>
        </View>
    )
}

export default InsightComponent