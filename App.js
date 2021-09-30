import { type } from 'os';
import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View ,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from 'react-native';

const image = {uri: 'https://reactjs.org/logo-og.png'};

type Props = {};
export default class App extends Component<Props>{
  render(){
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor= '#1e90ff'
        barStyle='light-content'/>
        <Text style={styles.welcome}>Login</Text>
        <TextInput style={styles.input} placeholder="UserName" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.userBtn}
          onPress={()=> alert("Login Detected")}
          >
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userBtn}
          onPress={()=> alert("SignUp Detected")}
          >
            <Text style={styles.btnTxt}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
  },
  welcome: {
    fontSize: 30,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 35,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  userBtn: {
    backgroundColor: '#FFD700',
    padding: 15,
    width: '45%',
    borderRadius: 35,
  },
  btnTxt: {
    fontSize: 18,
    textAlign: 'center',
  },
});
