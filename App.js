// import React, { Component } from 'react';
// import { StyleSheet, View } from 'react-native';

// import List from './Components/List'
// import MyTextInput from './Components/TextInput'
// import SubmitButton from './Components/SubmitButton'
// import MyHeader from './Components/Header'

// export default class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       todoToAdd: '',
//       todosList: [{key: "get this bread"}, {key: 'obtain this grain'}, {key: 'yeet this wheat'}]
//     }
//   }

//   render() {

//     return (
//       <View style={styles.container}>
//         <MyHeader style={styles.header}/>
//         <View style={styles.addTodoContainer}>
//           <MyTextInput
//             props = {
//             todoToAdd = this.state.todoToAdd
//             }
//           />
//           <SubmitButton/>
//         </View>
//         <List/>
//     </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   addTodoContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: "90%"
//   }
// });


import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      todoToAdd: '',
      todosList: [{key: "Get this Bread"}, {key: 'Obtain this Grain'}, {key: 'Yeet this Wheat'}]
    }
  }

  render() {

    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Doss's Dope ToDos</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="add to do item here" 
          style={
            {color: 'white', 
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            marginBottom: 5
            }}
          onChangeText={(text) => this.setState({todoToAdd: text})}
          value={this.state.todoToAdd}></TextInput>
        <Button 
          title="add to list" 
          color='blue'
          onPress={async () => {
            await this.setState({todosList: [...this.state.todosList, {key: this.state.todoToAdd}]});
            await this.setState({todoToAdd: ''})
          }}></Button>
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
    width: "90%",
    backgroundColor: "black"
  },
  listContainer: {
    flex: 8,
    width: "90%",  
  },
  todo: {
    color: 'white',
    fontSize: 24
  }
});

