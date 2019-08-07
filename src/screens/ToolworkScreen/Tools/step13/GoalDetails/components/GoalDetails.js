import React from 'react'
import Header from '../../RootTool/containers/HeaderContainer'
import { View } from 'react-native'
import styles from '../styles'

class GoalDetails extends React.PureComponent {
    render() {
        return (
            <View style={styles.container} >
                <Header></Header>
            </View>
        )
    }
}

export default GoalDetails