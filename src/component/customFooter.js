import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import lang from '../../assets/util/lang';

export default class CustomFooter extends Component {
    render() {
        return (            
            <View style={styles.footerHeight}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require("../../assets/images/Logo_Atl_BG_color.png")}
                        style={{ marginTop: 5, padding: 1 }}
                    />
                    <Text style={styles.footerFont1}>Realty Execution Platform</Text>
                </View>
                <View style={styles.versionContent}>
                    <Text style={styles.footerFont}>© 2019 Walmart. All Rights Reserved.</Text>
                    <Text style={styles.footerFont}> {lang.POWERED_BY_GBS} | Version {lang.APP_VERSION}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footerFont1: {
        fontSize: 12,
        color: '#041E42',
        marginTop: 12,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    footerFont: {
        fontSize: 12,
        color: '#041E42',
        // marginTop: 5

    },
    footerHeight: {
        height: 100,
        backgroundColor: '#FFFFFF',
        borderColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    imageStyle: {
        width: 25,
        height: 25,
    },
    versionContent: {
        flex: 1,
        // height: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 5,
        paddingBottom: 5,
        color: 'black'
    },
    versionFont: {
        color: 'black',
        textAlign: 'right',
        fontSize: 12,
    },
    footerContent: {
        flex: 2,
        borderColor: "#FFF",
        borderTopWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})