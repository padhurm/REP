import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Text } from 'native-base';
import imageSource from '../utils/iconData';

class IconPallette extends Component {
    iconTray = (d) => {
        if (d.length > 0) {
            return d.map((data, i) => {
                return (
                    <TouchableOpacity style={styles.iconContainer}
                        onPress={() => this.props.navigation.navigate(data.key)}
                        key={i}>
                        <Image source={data.image_name} />
                        <Text style={styles.iconText}>{data.title}</Text>
                    </TouchableOpacity>
                )
            })
        }
    }
    render() {
        
        return (
            <View style={styles.palleteStyle}>
                {this.iconTray(imageSource.icon)}
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
    iconContainer: {
        width: 100,
        height: 100,
        backgroundColor: '#0071CE',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    }
})

export default withNavigation(IconPallette);