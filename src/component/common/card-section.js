import React, { Component } from 'react';
import { View } from 'react-native';

export class CardSection extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { containerStyle } = style;
        return (
            <View style={containerStyle}>
                {this.props.children}
            </View>
        )
    }
}

const style = {
    containerStyle: {
        // borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        // borderColor: '#ddd',
        // position: 'relative'
    }
}