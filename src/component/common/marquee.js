import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import TextTicker from 'react-native-text-ticker';

export default class Example extends PureComponent {
  render(){
    return(
      <View style={styles.container}>
        <TextTicker
          style={{ fontSize: 13 }}
          duration={10000}
          loop
          bounce
        //   repeatSpacer={50}
          marqueeDelay={5000}
        //   scrollingSpeed={0}
        >
          
          {this.props.children}
        </TextTicker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFC220',
    // height:37
    padding:10
  },
});
