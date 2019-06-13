import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Image, FlatList, Platform, TouchableHighlight, List, ListItem } from 'react-native';
import { withNavigation } from 'react-navigation';
import HamburgerMenuItem from './hamburgerMenuItems';
// import { Icon } from 'react-native-elements';

class CustomDrawer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    backgroundColor: '#004C91',
                    alignItems: 'center', justifyContent: 'center',
                    height: 89, alignSelf: 'stretch', flexDirection: 'row'
                }}>
                    {/* <Icon
                        raised
                        name='fa-home'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => console.log('hello')} /> */}
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
                        Realty Execution Platform
                    </Text>
                </View>
                <HamburgerMenuItem />
                {/* <View style={styles.footerContainer}>
                    <Text>This is my fixed footer</Text>
                </View> */}
            </View>
        );
    }
}

export default withNavigation(CustomDrawer);

const styles = StyleSheet.create({

    container: {
        // paddingTop:10,
        flex: 1
    },
    navItemStyle: {
        // padding: 10,
        flex: 1
    },
    navSectionStyle: {
        backgroundColor: 'lightgrey',
        flex: 1,
        flexDirection: 'row'
    },
    sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    footerContainer: {
        padding: 20,
        backgroundColor: 'lightgrey'
    },
    iconText: {
        color: 'black',
        alignContent: 'center',
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 18,
        // justifyContent: 'center'
    },
    iconContainer: {
        // width: 100,
        // height: 100,
        backgroundColor: '#0071CE',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    }
})