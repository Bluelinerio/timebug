import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import dashboardStyles from '../../styles/dashboard.styles'

const styles = {
    suggestionText: {
        ...StyleSheet.flatten(dashboardStyles.suggestionText),
        color: '#0098AA'
    },
}

const InsightComponent = ({ insightText, children }) => {
    return (
        <View>
            <Text style={styles.suggestionText}>
                    {
                      insightText && 
                        <Text>
                          <Text style={dashboardStyles.strong}>{`Did You Know?\n`}</Text>
                          <Text>{`${insightText}'\n\n`}</Text>
                        </Text>
                    }
                    {children}
                </Text>
        </View>
    )
}

export default InsightComponent