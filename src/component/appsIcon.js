import React, { Component } from 'react';
import { StyleSheet, View, Button, TouchableOpacity } from 'react-native';
// import console = require('console');
// import Scoping from '../Pages/scoping';


export default class AppsIcon extends Component{
    constructor(props){
        super(props)
    }

    _display =()=>{
        console.log("this.props:", this.props.navigator);
    }
    render(){    
                     
        return(
            <TouchableOpacity style={styles.iconContainer} 
                onPress={() => 
                this.props.navigator.push('Scoping')}
                >
                {this.props.children}
            </TouchableOpacity>
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

