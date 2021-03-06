import React from "react";
import { View, Text, SafeAreaView, ScrollView, Dimensions, Image, Animated } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import {
    createStackNavigator,
    createSwitchNavigator,
    createDrawerNavigator,
    createBottomTabNavigator,
    createAppContainer,
    DrawerItems,
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
import { Header } from "native-base";
// import landingPage from "../src/Pages/landingPage";
// import Ionicons from 'react-native-vector-icons';
import landingPage from "../src/Pages/landingPage";

const width = Dimensions.get('window');
const feedStack = createStackNavigator(
    {
        Feed: {
            screen: Feed,
            navigationOptions: ({ navigation }) => {
                return {
                    headerTitle: 'Receiving',
                    headerRight: (
                        <Icon name="md-menu"
                            style={{ paddingRight: 10 }}
                            onPress={() => navigation.openDrawer()}
                            size={30} />
                    )
                }
            }
        },
        Detail: { screen: ScanDetail },

    }, {
        defaultNavigationOptions: {
            gesturesEnabled: true
        }
    }
)

const profileStack = createStackNavigator(
    {
        Profile: {
            screen: Profile,
            navigationOptions: ({ navigation }) => {
                return {
                    headerTitle: 'Auditing',
                    headerRight: (
                        <Icon name="md-menu"
                            style={{ paddingRight: 10 }}
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
                    headerTitle: 'Inventory',
                    headerRight: (
                        <Icon name="md-menu"
                            style={{ paddingRight: 10 }}
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
        Receiving: feedStack,
        Auditing: profileStack,
        Inventory: settingStack
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
                headerRight: (
                    <Icon name="md-menu"
                        style={{ paddingRight: 10 }}
                        onPress={() => navigation.openDrawer()}
                        size={30} />
                )
            }
        }
    }
)


const landingStack = createStackNavigator({
    Home: {
        screen: LandingPage,

        // drawerLabel: landingPage,
        // drawerIcon: ({ tintColor }) => (
        //     <Image
        //     source={require("../assets/images/Spark.png")}
        //     resizeMode="contain"
        //     style={{ width: 20, height: 20, tintColor: tintColor }}
        //   />
        // )
        // }
    },
}, {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            header: <CustomHeader />
        }
    })

const customDrawerComponent = props => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: '004C91', alignItems: 'center', justifyContent: 'center',width: 120, height: 120, }}>
                {/* <Image
                    source={require("../assets/images/Spark.png")}
                    style={{ width: 35, height: 35 }}
                /> */}
                {/* <Icon name="ios-person"
                        style={{ width: 120, height: 120, borderRadius:60, backgroundColor:'grey'}}
                        size={120} /> */}
                        <Text>Header</Text> 
            </View>
            <ScrollView>
                <DrawerItems
                    activeBackgroundColor={"black"}
                    activeTintColor={"white"}
                    iconContainerStyle={{ width: 50, height:50 }}
                    {...props}
                />
            </ScrollView>
     </SafeAreaView>
    )
}


const rootStack = createDrawerNavigator(
    {
        Home: {
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <Icon name="md-home" style={{ color: tintColor }} />
                ),
                drawerLabel: "Home",                
            },
            screen: landingPage,

        },
        Scoping: {
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <Icon name="md-home" style={{ color: tintColor }} />
                ),
                drawerLabel: "Scanning",                
            },
            screen: scanningStackNavigator,

        },
        Tracking: Tracking,
        Phasing: Phasing,
        Receiving: Receiving,
        Analytics: Analytics,
        SignOut: 'signOut'
    },
    {
        initialRouteName: 'Home',
        drawerPosition: 'right',
        drawerType: 'slide',
        // hideStatusBar: true,
        contentComponent: customDrawerComponent,
        useNativeAnimations: true,
        contentOptions: {
            activeTintColor: '#FFC220',
            activeBackgroundColor: '#004C91',
            itemsContainerStyle: {
                marginVertical: 0,
            },
            iconContainerStyle: {
                opacity: 1
            }

        },
    }
)

const AppContainer = createAppContainer(rootStack);

export default class Router extends React.Component {
    render() {
        return <View style={{ flex: 1 }}><AppContainer /></View>;
    }
}