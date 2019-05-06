import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { Header, Body, Title, Left, Icon, Right, View } from 'native-base';
import TitleHeader from './title';

export default class HeaderBar extends Component {
    render() {
        return (
            <Header style={{ backgroundColor: '#004C91',  height:64 }}>
                <Left style={{ flexDirection: 'row', flex: 1}}>
                    <Image source={require("../../assets/images/Spark.png")} 
                    style={{width:33,height:35, justifyContent:'center', alignItems:'center'}}/>
                    <TitleHeader/>
                </Left>
                {/* <Body style={{ flex: 2, justifyContent: 'space-around', alignItems: "flex-start" }}>

                </Body> */}
                <Right style={{ flex: 1 }}>
                    <Text style={{
                        fontSize: 14, flex: 1,
                        alignContent: 'center',
                        color: '#FFF', padding:10,
                        alignContent: 'center', textAlign: 'right'
                    }}>Hello, Phill</Text>
                    <Icon
                        name='ios-menu'
                        style={{ color: '#FFFFFF' }}
                    />
                </Right>
            </Header>
        )
    }
}