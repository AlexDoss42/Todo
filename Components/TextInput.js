import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class MyTextInput extends Component {
  constructor(props) {
    super(props)

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
          value={this.props.todoToAdd}></TextInput>
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