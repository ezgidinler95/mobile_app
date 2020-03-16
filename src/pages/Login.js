
import React from 'react';
import LoginForm from './LoginForm';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';


const Login: () => React$Node = () => {
  return (
    <>
     <View style={styles.container}>
      <View style={styles.headBackgroundColor} />
      <KeyboardAvoidingView behavior={"position"}>
      <Text style={styles.logo}>UPAC</Text> 
      <Text style={styles.logoDec}>Property Tax Servey</Text>
      <ScrollView>
      <View style={styles.loginArea}>
        <Text style={styles.loginAreaTitle}>Proberty Tax Dervey</Text>
        <Text style={styles.loginAreaDec}>Proberty Tax Dervey Proberty Tax Dervey Proberty Tax Dervey
        </Text>
        <LoginForm />
     
      </View>
     </ScrollView>
     <View  style={styles.singUpArea}>
       <Text style={styles.singUpDec}>
          Bir Hesabınız Yok mu?
       </Text>
       <TouchableOpacity>
        <Text style={styles.singUpText}>  Sing Up</Text>
       </TouchableOpacity>

     </View>
     </KeyboardAvoidingView>
     </View>
    
    </>
  );
};

const styles = StyleSheet.create({
 container:{
  flex:1,
  backgroundColor:"#F5FCFF",
  paddingVertical:80
 },
 headBackgroundColor:{
   position:"absolute",
   top:0,
   left:0,
   backgroundColor:"#1572de",
   height:250,
   width:'100%'
 },
 logo:{
  textAlign:'center',
  fontSize:40,
  fontWeight:"bold",
  color:"#f2f2f2"
 },
 logoDec:{
  textAlign:'center',
  color:"#f2f2f2"
 },
 loginAreaTitle:{
    fontSize:20,
    textAlign:'center'
 },
 loginAreaDec:{
   fontSize:11,
   color:'#7e868f',
   marginVertical:10,
   textAlign:"center"
 },
 
 loginArea:{
   marginHorizontal:40,
   marginVertical:40,
   backgroundColor:'#fff',
   padding: 20,
   borderRadius:5,

   shadowColor:'black',
   shadowOpacity:0.2,
   shadowRadius:3,
   shadowOffset:{
     width:0,
     height:2,
   }
 },

 singUpArea:{
   alignItems:'center',
 },
 singUpDec:{
   color:'#999'
 },
 singUpText:{
  color:'#666'
}
 
});

export default Login;
