import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import SignUpLoginScreen from './screen/SignUpLoginScreen';

export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      emailId:'',
      password:'',
      firstName:'',
      lastName:'',
      address:'',
      contact:'',
      confirmPassword:'',
      isModalVisible:'false'
    }
  }
  render(){
  return (
    <View style={styles.container}>
      <SignUpLoginScreen/>
    </View>
  );
  }
}
/*const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
})

const AppContainer = createAppContainer(SwitchNavigator);*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
