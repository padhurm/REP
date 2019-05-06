import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'native-base';
import AppsIcon from './appsIcon';

export default class IconPallette extends Component {
    iconTray = (d) => {
        if (d.length > 0) {
            return d.map((data, i) => {
                return (
                    <AppsIcon key={i}>
                        <Image source={data.image_name} />
                        <Text style={styles.iconText}>{data.title}</Text>
                    </AppsIcon>
                )
            })
        }
    }
    render() {
        let iconArray = [
            { title: "Scoping and Ordering", image_name: require("../../assets/images/Scoping_icon.png") },
            { title: "Planning", image_name: require("../../assets/images/Planning_icon.png") },
            { title: "Receiving", image_name: require("../../assets/images/Barcode.png") },
            { title: "Tracking and Tracing", image_name: require("../../assets/images/Track_and_trade.png") },
            { title: "Analytics", image_name: require("../../assets/images/Analytics.png") }]
        
        // let iconArray = [
        //     { "title": "Scoping and Ordering", "image_name": "require(\"../../assets/images/Scoping_icon.png\")"
        //     },
        //     { "title": "Planning", "image_name": "require(\"../../assets/images/Scoping_icon.png\")"
        //     },
        //     { "title": "Receiving", "image_name": "require(\"../../assets/images/Scoping_icon.png\")"
        //     },
        //     { "title": "Tracking and Tracing", "image_name": "require(\"../../assets/images/Scoping_icon.png\")"
        //     },
        //     { "title": "Analytics", "image_name": "require(\"../../assets/images/Scoping_icon.png\")"
        //     }
        // ]    
        return (
            <View style={styles.palleteStyle}>
                {this.iconTray(iconArray)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    palleteStyle: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        // display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 5
    },
    iconText: {
        color: '#FFFFFF',
        alignContent: 'center',
        fontWeight: 'bold',
        paddingTop: 10,
        fontSize: 15,
        justifyContent: 'center'
    },
})

