// @flow
import * as React from 'react'
import { StyleSheet, Dimensions, StatusBar, View, SafeAreaView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Theme } from './components/Theme'
import Text from './components/Text'

type SlideProps = {
    title: string,
    description: string,
    icon: React.Element<*>
}

const {height} = Dimensions.get('window')
const TopHeight = 0.62;

export default class Slide extends React.Component<SlideProps> {

    render(): React.Node {
        const {title, description, icon} = this.props
        return (
            <View>
                  <StatusBar 
                    translucent 
                    barStyle="light-content"
                    backgroundColor={'white'}
                />
                <LinearGradient colors={['#0059FF', '#00AAFF']} 
                  style={{ height: height * 0.62 }}>
                  <SafeAreaView style={styles.container}>
                    <View style={styles.slide}>
                        <Text type='header2' style={styles.title}>{title}</Text>
                        <View style={styles.iconContainer}>{icon}</View>
                    </View>
                  </SafeAreaView>
                </LinearGradient>
                <View style={styles.description}>
                    <Text >{description}</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    slide: {
        paddingHorizontal: Theme.spacing.base * 2,
        paddingBottom: Theme.spacing.base * 2,
        paddingTop: Theme.spacing.base * 2 + StatusBar.currentHeight,
        flexGrow: 1
    },
    title: {
        marginTop: 20,
        color: 'white'
    },
    description: {
        height: height * 0.38,
        paddingHorizontal: Theme.spacing.base * 2,
        justifyContent: 'center'
    },
    iconContainer: {
        marginTop: 30,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})