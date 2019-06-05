import React, { Component } from 'react';
import {View, Text, Button, Image} from 'react-native';
import { withNavigation } from 'react-navigation';

class ScanningFeed extends Component {
    static navigationOptions ={
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
            source={require("../../assets/images/Spark.png")}
            // resizeMode="contain"
            style={{  width: 24,
                height: 24, tintColor: tintColor }}
          />)
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Scanning Feed</Text>
                <Button title='Go to Detail' onPress={()=>this.props.navigation.navigate('Detail')}/>
            </View>
        )
    }

}

export default withNavigation(ScanningFeed);