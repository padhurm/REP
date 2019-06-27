import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { withNavigation } from 'react-navigation';
import HamburgerMenuItem from './hamburgerMenuItems';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header, Body, Title, Left, Right } from 'native-base';

class CustomDrawer extends Component {
    _menuHeader = () => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} >
                <Header style={{ backgroundColor: '#004C91', justifyContent:'center', alignItems:'center' }}>
                    <Left style={{justifyContent:'flex-start',alignItems: 'center' }}>
                        <Icon name="home" size={30} color="orange" />
                    </Left>
                    <Title style={{ fontSize: 15, fontWeight: 'bold', color: 'white',justifyContent:'center',alignItems: 'center' }}> 
                        Realty Execution Platform
                    </Title>
                </Header>
            </ TouchableOpacity>
        )
    }

    render() {
        return (
            <View>
                {this._menuHeader()}
                <HamburgerMenuItem />
            </View >
        );
    }
}

export default withNavigation(CustomDrawer);

const styles = StyleSheet.create({

    iconText: {
        color: 'black',
        alignContent: 'center',
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 18,
    },

    iconContainer: {
        backgroundColor: '#0071CE',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    headerContainer: {
        backgroundColor: '#004C91',
        alignItems: 'center',
        justifyContent: 'center',
        // height: 88,
        alignSelf: 'stretch',
        flexDirection: 'row',
        marginTop: 35
    }
})