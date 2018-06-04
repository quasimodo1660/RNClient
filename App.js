import React from 'react';
import { Alert,StyleSheet, ActivityIndicator,FlatList,Text, View,Image,TextInput,Button } from 'react-native';
import { List,ListItem } from 'react-native-elements'
import Masonry from 'react-native-masonry';
import FastImage from 'react-native-fast-image';



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={isLoading:true}
  }

  _onPressButton(){
    Alert.alert('da sha cha!')
  }
  
  componentDidMount(){
    return fetch('http://bentoman.yubinwang.com/api/lunchbox')
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson)
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    let pic={
      uri:'https://i.imgur.com/Keg7X6S.png'
    };
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      // <List>
      //   <FlatList
      //     data={this.state.dataSource}
      //     renderItem={({ item }) => (
      //       <ListItem
             
      //         title={item.title}
      //         subtitle={item.email}
            
      //       />
      //     )}
      //   />
      // </List>
      <View style={styles.container}>
        <Masonry
          bricks={[
            { uri: 'http://bentoman.yubinwang.com/media/Lunchbox/Gadot/Isreali%20food/slide_377196_4504130_free.jpg' },
            { uri: 'http://bentoman.yubinwang.com/media/Lunchbox/Emily/Beef%20Tofu/Lunchbox.jpg' }
           
  ]}
/>
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
