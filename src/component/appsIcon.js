import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class AppsIcon extends Component{
    render(){        
        return(
            <View style={styles.iconContainer}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconContainer: {
        width: 100,
        height: 100,
        backgroundColor: '#0071CE',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    }
})

