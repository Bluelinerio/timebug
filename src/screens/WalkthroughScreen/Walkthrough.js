// @flow
import * as React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import { withNavigation } from 'react-navigation'
import Swiper from 'react-native-swiper';

import Slide from './Slide';
import Connect from './Connect';
import Chat from './Chat';
import Share from './Share';
import Logo from './Logo'

import Button from './components/Button'
import { resetAction } from '../../navigation/helpers'
import { Theme } from './components/Theme';
import type { ScreenProps } from './components/Types';


class Walkthrough extends React.Component<ScreenProps<>> {

    home = () => {
        const { navigation } = this.props;
        navigation.dispatch(resetAction('HomeScreen'))
    }

    renderPagination = (index: number, total: number, context: Swiper): React.Node => {
        const isFirst = index === 0;
        const isLast = index === total - 1;
        const back = () => context.scrollBy(-1);
        return (
            <SafeAreaView style={styles.footer}>
                <Button label={isFirst ? 'Close' : 'Back'} onPress={isFirst ? this.home : back } />
                <Button 
                    label={isLast ? 'Start' : 'Next'} 
                    onPress={isLast ? this.home : () => context.scrollBy(1)} 
                    primary={true} 
                    transparent={true} />
            </SafeAreaView>
        );
    }

    onIndexChanged = (index: number) => {
        slides[index].makeVisible();
    }

    render(): React.Node {
        const {renderPagination, onIndexChanged} = this;
        return (
            <Swiper loop={false} {...{ renderPagination, onIndexChanged }}>
                {
                    slides.map(slide => (
                        <View key={slide.title}>
                            <Slide {...slide} />
                        </View>
                    ))
                }
            </Swiper>
        );
    }
}

export default withNavigation(Walkthrough)
/*
*/
let chat: Chat;
let share: Share;
let logo: Logo;

const slides = [
    {
        title: 'Welcome to Lifevision',
        description: 'Welcome 2020 Life Vision Challenge! This app is designed around contemplation and self-discovery. Expect to gain renewed energy, propelling you into a new life plan.\nYou will review your major goals, strengths, weaknesses, support networks and more! Let’s get started!',
        icon: <Logo />,
        makeVisible: () => logo.makeVisible()
    },
    {
        title: 'Get Motivated',
        description: 'A slide about the content: a. 30 steps, b. creating the expectation of the user for motivational content that allow them to see new growth opportunities..',
        icon: <Connect />,
        makeVisible: () => true
    },
    {
        title: 'Meditate',
        description: 'A slide about cultivating an open minded, positive approach moving through the guidebook and workbook',
        icon: <Chat ref={ref => ref ? chat = ref : undefined} />,
        makeVisible: () => chat.makeVisible()
    },
    {
        title: 'Engage',
        description: 'Fill in the forms, unlock achievement engage with the dashboard and engage others, in do it in your own way, your own where ever you want',
        icon: <Share ref={ref => ref ? share = ref : undefined} />,
        makeVisible: () => share.makeVisible()
    },
    {
        title: 'Engage',
        description: 'Fill in the forms, unlock achievement engage with the dashboard and engage others, in do it in your own way, your own where ever you want',
        icon: <Share ref={ref => ref ? share = ref : undefined} />,
        makeVisible: () => share.makeVisible()
    }];
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: Theme.spacing.base
    }
});
