import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class List extends Component {
  constructor() {
    super()

    this.state = {
      todosList: [{key: "Get this bread"}, {key: 'Obtain this grain'}, {key: 'Yeet this wheat'}]
    }
  }

  render() {

    return (
            <View style={styles.listContainer}>
                <FlatList 
                    data={this.state.todosList}
                    renderItem={({item}) => <Text style={styles.todo}>{item.key}</Text>}>
                </FlatList>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 8,
    width: "90%",
  },
  todo: {
    color: 'white',
    fontSize: 24
  }
});
