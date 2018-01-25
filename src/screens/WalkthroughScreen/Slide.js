// @flow
import * as React from 'react'
import { StyleSheet, Dimensions, StatusBar, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Theme } from './components/Theme'
import Text from './components/Text'

type SlideProps = {
    title: string,
    description: string,
    icon: React.Element<*>
}

export default class Slide extends React.Component<SlideProps> {

    render(): React.Node {
        const {title, description, icon} = this.props
        return (
            <View>
            
                <LinearGradient colors={['#0059FF', '#00AAFF']} style={{ height: height * 0.62 }}>
                    <View style={styles.slide}>
                        <Text type='header2' style={styles.title}>{title}</Text>
                        <View style={styles.iconContainer}>{icon}</View>
                    </View>
                </LinearGradient>
                <View style={styles.description}>
                    <Text>{description}</Text>
                </View>
            </View>
        )
    }
}

const {height} = Dimensions.get('window')
const styles = StyleSheet.create({
    slide: {
        paddingHorizontal: Theme.spacing.base * 2,
        paddingBottom: Theme.spacing.base * 2,
        paddingTop: Theme.spacing.base * 2 + StatusBar.currentHeight,
        flexGrow: 1
    },
    title: {
        color: 'white'
    },
    description: {
        height: height * 0.38,
        paddingHorizontal: Theme.spacing.base * 2,
        justifyContent: 'center'
    },
    iconContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
