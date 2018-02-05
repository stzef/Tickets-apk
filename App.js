import React, { Component } from 'react';
import {  Platform,  StyleSheet,  Text,  View,  ScrollView,  TextInput,  Picker,  Button } from 'react-native';
import { Header } from 'react-native-elements';
import Ticket from './src/views/Ticket';
export default class App extends Component<{}> {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff',size: 30 }}
          centerComponent={{ text: 'TICKETS', style: { color: '#fff', fontSize: 25, fontWeight: 'bold'  } }}
          rightComponent={{ icon: 'airport-shuttle', color: '#fff',size: 30, onPress: console.log('Hello')}}
          outerContainerStyles={{ backgroundColor: '#191414' }}
        />
        <Ticket></Ticket>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgrey',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    textAlign: 'center', 
    margin: 5,
  },
});
