import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import List from './Components/List'
import MyTextInput from './Components/TextInput'
import SubmitButton from './Components/SubmitButton'
import MyHeader from './Components/Header'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      todoToAdd: '',
      todosList: [{key: "get this bread"}, {key: 'obtain this grain'}, {key: 'yeet this wheat'}]
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <MyHeader style={styles.header}/>
        <View style={styles.addTodoContainer}>
          <MyTextInput
            props = {
            todoToAdd = this.state.todoToAdd
            }
          />
          <SubmitButton/>
        </View>
        <List style={styles.list}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addTodoContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  list: {
    flex: 7
  }
});
