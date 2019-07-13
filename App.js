import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todoToAdd: '',
      todosList: [{key: "get this bread"}, {key: 'obtain this grain'}, {key: 'yeet this wheat'}]
    }
  }

  render() {
    console.log(this.state.todoToAdd)
    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Doss's Dope ToDos</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="add todo here" 
          style={
            {color: 'red', 
            textDecorationLine: 'underline'
            }}
          onChangeText={(text) => this.setState({todoToAdd: text})}
          value={this.state.text}></TextInput>
        <Button title="add to list" color='blue'></Button>
      </View>
      <View style={styles.listContainer}>
        <FlatList 
        data={this.state.todosList}
        renderItem={({item}) => <Text style={styles.todo}>{item.key}</Text>}>
        </FlatList>
      </View>
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
  header: {
    flex: 1,
    marginTop: 50
  },
  headerText: {
    color: 'blue',
    fontSize: 32,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  inputContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "white"
  },
  listContainer: {
    flex: 8,
    width: "100%",
    backgroundColor: 'red'  
  },
  todo: {
    color: 'black',
    fontSize: 24
  }
});
