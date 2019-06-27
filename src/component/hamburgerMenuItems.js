import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity, 
    FlatList, Platform, TouchableHighlight, List, ListItem } from 'react-native';
import { withNavigation } from 'react-navigation';
import imageSource from '../utils/iconData';

class HamburgerMenuItems extends Component {
    listofItems = (d,x) => {
        return d.map((item,i) => {
            return (
                <TouchableOpacity  
                    style={{ flexDirection: 'row', marginTop: 30, alignItems: 'flex-start', justifyContent:'flex-start' }} 
                    key={i}
                    onPress={() => this.props.navigation.navigate(item.key)}>
                    <Image source={item.drawer_image} style={{ marginLeft: 10 }} />
                    <Text style={[styles.iconText, x !== ' ' ? {fontWeight:'bold'} : {fontWeight:'normal'}]}>{item.title}</Text>
                </TouchableOpacity>
            )
        })
    }

    render() {
        return (
            <ScrollView>
                {this.listofItems(imageSource.icon, 'bold')}
                <View style={{borderTopColor:'#707070', borderTopWidth:2, marginTop: 20, marginLeft:10, marginRight: 10}}/>
                {this.listofItems(imageSource.menu_item1,' ')}
                <View style={{borderTopColor:'#707070', borderTopWidth:2, marginTop: 20, marginLeft:10, marginRight: 10}}/>
                {this.listofItems(imageSource.menu_item2,' ')}
                <View style={{borderTopColor:'#707070', borderTopWidth:2, marginTop: 20, marginLeft:10, marginRight: 10}}/>
                <Text style={{paddingLeft: 20, color: '#0071CE', fontSize: 16, fontWeight:'bold', marginTop: 20}}>Log out</Text>
            </ScrollView>
        )
    }
}

export default withNavigation(HamburgerMenuItems);

const styles = StyleSheet.create({
    iconText: {
        color: 'black',
        marginLeft: 10,
        fontSize: 16,        
    },
})