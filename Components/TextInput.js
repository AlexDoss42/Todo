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
          placeholder="Add to do item here" 
          style={
            {color: 'white', 
             borderBottomColor: 'white',
             borderBottomWidth: 1
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
    width: '100%',
    backgroundColor: "black"
  }
});