import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class List extends Component {
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
  listContainer: {
    flex: 8,
    width: "90%",
    backgroundColor: 'red'  
  },
  todo: {
    color: 'black',
    fontSize: 24
  }
});
