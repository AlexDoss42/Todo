import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default class MyTextInput extends Component {
  constructor() {
    super()

    this.state = {
      todoToAdd: '',
      todosList: [{key: "get this bread"}, {key: 'obtain this grain'}, {key: 'yeet this wheat'}]
    }
  }

  render() {

    return (
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="add to do item here" 
          style={
            {color: 'red', 
            textDecorationLine: 'underline'
            }}
          onChangeText={(text) => this.setState({todoToAdd: text})}
          value={this.state.text}></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    width: "90%",
    backgroundColor: "white"
  }
});
