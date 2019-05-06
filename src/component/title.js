import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default class headerTitle extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginBottom: 10 }}>
                {/* <Text style={{marginBottom: 10}}> */}
                    <Text style={styles.titleStyle}>Realty</Text>
                    <Text style={styles.titleStyle}>Execution</Text>
                    <Text style={styles.titleStyle}>Platform</Text>
                {/* </Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold',
        alignContent: 'center',
        justifyContent: 'center',
        // fontFamily:"Bogle-Bold",
        alignItems: 'center', paddingLeft: 10,

    },
});