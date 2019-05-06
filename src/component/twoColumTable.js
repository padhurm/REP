import React, { Component } from 'react';
import { Text, Card, CardItem, Tab, Tabs, TabHeading, Button, ScrollableTab } from 'native-base';
import { View, Image, StyleSheet } from 'react-native';

export default class TwoColumTable extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor:'#ddd', padding:10 }}>
                    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={{ fontSize: 12 }}>{this.props.column1}</Text>
                    </View>
                    <View style={{ flex: 2, justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15 }}>{this.props.column2}</Text>
                    </View>
                </View>               
            </View>
        )
    }
}