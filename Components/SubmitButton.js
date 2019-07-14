import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default class SubmitButton extends Component {

  render() {

    return (
      <View style={styles.buttonContainer}>
        <Button 
          title="add to list" 
          color='blue'
          onPress={async () => {
            await this.setState({todosList: [...this.state.todosList, {key: this.state.todoToAdd}]});
            await this.setState({todoToAdd: ''})
            await console.log("todoToAdd after it is added: ", this.state.todoToAdd)
          }}></Button>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "33%",
    marginVertical: 5
  }
});
