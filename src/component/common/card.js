import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Card extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {containerStyle} = styles;
        return (
            <View style={containerStyle}>
                {this.props.children}
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 10,

    }
}