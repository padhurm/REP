import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { Header, Body, Title, Left, Icon, Right, View } from 'native-base';
import TitleHeader from './title';
import {withNavigation} from 'react-navigation';

class HeaderBar extends Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        return (
            <Header style={{
                backgroundColor: '#004C91', 
                alignSelf: 'stretch',
            }}>
                <Left style={{ flexDirection: 'row'}}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require("../../assets/images/Spark.png")}
                            style={{ width: 33, height: 35, paddingTop: 5 }}
                        />
                    </View>
                    <TitleHeader />
                </Left>
                {/* <Body style={{ flex: 2, justifyContent: 'space-around', alignItems: "flex-start" }}>

                </Body> */}
                <Right >
                    <View style={{alignContent: 'center',alignContent: 'center', }}>
                        <Text style={{
                            fontSize: 14,                            
                            color: '#FFF',
                            padding: 10,                            
                            textAlign: 'right'
                        }}>Hello, Phill</Text>
                    </View>
                    <Icon
                        name='ios-menu'
                        style={{ color: '#FFFFFF' }}
                        onPress={() => this.props.navigation.toggleDrawer()}
                    />
                </Right>
            </Header>
        )
    }
}
export default withNavigation(HeaderBar);