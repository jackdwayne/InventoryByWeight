import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {CSVLink} from "react-csv";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});



export default class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      totalWeight: 0,
      itemWeight: 0,
      iD: 0,
      itemName: "",
      amount: 0,
    }
  }
  
  _handleButtonPress= () => {
    var ans = this.state.totalWeight/this.state.itemWeight;
    if(this.state.itemWeight == 0 || this.state.totalWeight == 0){
      alert("Cannot divide by 0");
    }
    else{
    alert("Number of items: " + ans);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Step 1: Weigh individual item and place this number in item weight box.</Text>
        <Text style={styles.text}>Step 2: Tare scale with empty container.</Text>
        <Text style={styles.text}>Step 3: Place items in container, get the weight, and place number in total weight box.</Text>
        <TextInput 
          style ={styles.userInput} 
          placeholder="Total Weight"
          onChangeText={(total) => this.setState({totalWeight:total})}
        />
        <TextInput 
          style ={styles.userInput} 
          placeholder="Item Weight"
          onChangeText={(single) => this.setState({itemWeight:single})}
        />
        <Button title="Calculate" onPress={this._handleButtonPress}></Button>
        
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },  
  userInput: {
    borderWidth: 1,
    height: 40,
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },

});
