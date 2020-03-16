import React, { Component } from 'react';
import { View, Text,StyleSheet, } from 'react-native';
import Input from '../components/Input';
import MyButton from '../components/MyButton';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.singIn}> Sing In </Text>
        <Input 
        returnKeyType={"next"} autoCapitalize='none' placeholder='username'
        onSubmitEditing={()=>this.passwordInput.focus()}/>

        <Input 
        returnKeyType={"go"}
        inputRef={input=> this.passwordInput=input} 
        secureTextEntry={true} placeholder='password'/>

        <MyButton 
         bgColor={'#0065e0'}
         textColor={'#f1f1f1'}
         text={"Sing In Now :)"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    singIn:{
    marginVertical:10,
    fontSize:14,
    color:'#333'
    }
});