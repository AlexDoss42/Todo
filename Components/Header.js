import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MyHeader extends Component {

  render() {

    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Doss's Dope ToDos</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginTop: 50
  },
  headerText: {
    color: 'blue',
    fontSize: 32,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
});
