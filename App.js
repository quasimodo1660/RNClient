import React from 'react';
import { Alert,StyleSheet, Text, View,Image,TextInput,Button } from 'react-native';

export default class App extends React.Component {
  _onPressButton(){
    Alert.alert('da sha cha!')
  }
  render() {
    let pic={
      uri:'https://i.imgur.com/Keg7X6S.png'
    };
    return (
      <View style={styles.container}>
       
          <Image source={pic} style={{width: 250, height: 250}}/>
          <Greeting name='SB' />
          <Greeting name='Liu' />
          <TextInput style={{height:40}} placeholder='Username'/>
          <Button onPress={this._onPressButton} title='Log in'/>
      </View>
    );
  }
}

class Greeting extends React.Component{
  render(){
    return (
     <Text style={[styles.bigblue]} >Hello {this.props.name}!</Text> 
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
