import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class Input extends Component {
  state={
    text:"",
    
  };
  render() {
    return (
      <View>
        <TextInput 
        {...this.props}
        value={this.state.text}
        ref={this.props.inputRef}
        onChange={text=>{this.setState({text})}}
        placeholderTextColor='#ddd'
         style={styles.input}
        /> 
      </View>
    );
  }
}

const styles= StyleSheet.create({
    input:{
        height:40,
        paddingHorizontal:5,
        borderWidth:2,
        borderRadius:4,
        borderColor:'#f1f1f1',
        color:'black',
        marginBottom:5,
        fontSize:15,
        fontWeight:'600',
    }

});