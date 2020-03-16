import React, { Component } from 'react';
import { View, Text , StyleSheet} from 'react-native';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {text} =this.props;
    return (
     <View style={[styles.cardContainer ]}>
        <Text style={ styles.cardText}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    cardContainer:{
      width:100,
      height:100,
      borderColor:"blue",
    },
     cardText:{
       textAlign:"center",
       fontSize:20,
     }
 });