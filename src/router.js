import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LandingPage from '../src/Pages/landingPage';
import Scoping from '../src/Pages/scoping';
import Tracking from '../src/Pages/tracking';
import Receiving from '../src/Pages/receiving';
import Phasing from '../src/Pages/phasing';
import Analytics from '../src/Pages/analytics';
import CustomHeader from '../src/component/headerBar';

LandingPage.navigationOptions = () => {
    return {
        header: <CustomHeader page="landing" />,
    };
};

Scoping.navigationOptions = () => {
    return {
        headerTitle: "Scoping",
        headerStyle: {
            backgroundColor: '#004C91',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
}

Tracking.navigationOptions = () => {
    return {
        headerTitle: "Tracking & Tracing",
        headerStyle: {
            backgroundColor: '#004C91',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
}

Phasing.navigationOptions = () => {
    return {
        headerTitle: "Phasing",
        headerStyle: {
            backgroundColor: '#004C91',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
}

Analytics.navigationOptions = () => {
    return {
        headerTitle: "Analytics",
        headerStyle: {
            backgroundColor: '#004C91',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
}

Receiving.navigationOptions = () => {
    return {
        headerTitle: "Receiving",
        headerStyle: {
            backgroundColor: '#004C91',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
}

const RootStack = createStackNavigator(
    {
        Home: {
            screen: LandingPage
        },
        Scoping: Scoping,
        Tracking: Tracking,
        Phasing: Phasing,
        Receiving: Receiving,
        Analytics: Analytics
    },
    {
        initialRouteName: 'Home',
        headerMode: null,

    },

);

const AppContainer = createAppContainer(RootStack);

export default class Router extends React.Component {
    render() {
        return <AppContainer />;
    }
}