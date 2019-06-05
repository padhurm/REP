import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import {
    createStackNavigator,
    createSwitchNavigator,
    createDrawerNavigator,
    createBottomTabNavigator,
    createAppContainer
} from "react-navigation";
import LandingPage from '../src/Pages/landingPage';
import Scoping from '../src/Pages/scoping';
import Tracking from '../src/Pages/tracking';
import Receiving from '../src/Pages/receiving';
import Phasing from '../src/Pages/phasing';
import Analytics from '../src/Pages/analytics';
import CustomHeader from '../src/component/headerBar';
import Feed from '../src/Pages/scanningFeed';
import Profile from '../src/Pages/scanningProfile';
import Settings from '../src/Pages/scanningSetting';
import ScanDetail from '../src/Pages/scanningFeedDetail';

const feedStack = createStackNavigator(
    {
        Feed: {
            screen: Feed,
            navigationOptions: ({ navigation }) => {
                return {
                    headerTitle: 'Feed',
                    headerLeft: (
                        <Icon name="md-menu"
                            style={{ paddingLeft: 10 }}
                            onPress={() => navigation.openDrawer()}
                            size={30} />
                    )
                }
            }
        },
        Detail: { screen: ScanDetail },

    }, {
        defaultNavigationOptions: {
            gesturesEnabled: false
        }
    }
)

const profileStack = createStackNavigator(
    {
        Profile: {
            screen: Profile,
            navigationOptions: ({ navigation }) => {
                return {
                    headerTitle: 'Profile',
                    headerLeft: (
                        <Icon name="md-menu"
                            style={{ paddingLeft: 10 }}
                            onPress={() => navigation.openDrawer()}
                            size={30} />
                    )
                }
            }
        },
        Detail: { screen: ScanDetail }
    }
)

const settingStack = createStackNavigator(
    {
        Settings: {
            screen: Settings,
            navigationOptions: ({ navigation }) => {
                return {
                    headerTitle: 'Settings',
                    headerLeft: (
                        <Icon name="md-menu"
                            style={{ paddingLeft: 10 }}
                            onPress={() => navigation.openDrawer()}
                            size={30} />
                    )
                }
            }
        },
        Detail: { screen: ScanDetail }
    }
)

const scanningTabNavigator = createBottomTabNavigator(
    {
        feedStack,
        profileStack,
        settingStack
    }, {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index]
            return {
                header: null,
                headerTitle: routeName
            }
        }
    }
)

const scanningStackNavigator = createStackNavigator(
    {
        scanningTabNavigator: scanningTabNavigator
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon name="md-menu"
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        size={30} />
                )
            }
        }
    }
)


const appDrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: LandingPage
        },
        Scoping: scanningStackNavigator,
        Tracking: Tracking,
        Phasing: Phasing,
        Receiving: Receiving,
        Analytics: Analytics
    },
    {
        initialRouteName: 'Home',
        // navigationOptions: {
        //     header: <CustomHeader page="landing" />,
        // }
        // headerMode: null,
        defaultNavigationOptions: {
            header: <CustomHeader page="landing" />,
        },

    },

);

const AppContainer = createAppContainer(appDrawerNavigator);

export default class Router extends React.Component {
    render() {
        return <View style={{flex:1}}><AppContainer /></View>;
    }
}