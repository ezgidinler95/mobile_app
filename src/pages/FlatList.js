import React, { Component } from 'react';
import { View, Text , SafeAreaView , StyleSheet ,Button} from 'react-native';
import axios from 'axios';


export default class FlatList extends Component {
 state={
   name:'',
   surname:'',
   loading:true,
 };
 componentDidMount(){
  this.getRandomUser();
 }

 getRandomUser =()=>{
  this.setState({
    loading:true,
 } )
  axios.get('https://randomuser.me/api/')
  .then(user=>user.data.results[0])
  .then(user=>{
    this.setState({
       name:user.name.first,
       surname:user.name.last,
       loading:false,
    } )
  })
 }

  render() {
    const {name, surname , loading}= this.state;
    return (
    <SafeAreaView style={styles.container}>
     <View>
     {loading ?  <Text style={styles.text}>Please weating! loading...</Text> :
     <Text style={styles.text}> {name}  {surname}</Text>} 
       <Button 
       title='Değiştir :D' 
       onPress={this.getRandomUser}
       />
     </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
   container:{
  flex: 1,
  justifyContent:'center',
  alignItems:'center'
   },
   text:{
     textAlign:'center'
   }


});