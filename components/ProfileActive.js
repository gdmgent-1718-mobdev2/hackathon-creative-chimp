import React, { Component } from 'react';
import { 
    AppRegistry,
    StyleSheet,
    Text,
    View, 
    Button } from 'react-native';

export default class ProfilActive extends Component {

    constructor(){
        
           super();
        
           this.state ={
        
             status:false
        
           }
         }
        
       ShowHideTextComponentView = () =>{
        
         if(this.state.status == true)
         {
           this.setState({status: false})
         }
         else
         {
           this.setState({status: true})
         }
       }
        
        render() {
          return (
            <View style={styles.MainContainer}>
            <Button title="Active challenges" onPress={this.ShowHideTextComponentView} />
                 {
                     // Pass any View or Component inside the curly bracket.
                     // Here the ? Question Mark represent the ternary operator.
            
                   this.state.status ? <Text style= {{ fontSize: 25, color: "#fff", textAlign: 'center' }}> Active Challenges </Text> : null
                 }
            
                 
            
                 </View>
              
          );
        }
      }

const styles = StyleSheet.create({
    MainContainer :{
        
      
       justifyContent: 'center',
       flex:1,
       margin: 10
        
       }
    
    });