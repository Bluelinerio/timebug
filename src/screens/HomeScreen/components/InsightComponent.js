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
    return insightText 
        ? (
            <View style={dashboardStyles.dashboardInsightContainer}>
                <Text style={styles.suggestionText}>
                    <Insight insightText={insightText} style={{ title: dashboardStyles.strong, text: { textAlign: 'justify'} }}/>
                </Text>
            </View>
        )
        : null
}

export default InsightComponent