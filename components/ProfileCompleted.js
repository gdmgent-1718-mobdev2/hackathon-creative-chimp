import React, { Component } from 'react';
import { 
    AppRegistry,
    StyleSheet,
    Text,
    View, 
    Button } from 'react-native';

export default class ProfileCompleted extends Component {

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
            <Button title="Completed Challenges" onPress={this.ShowHideTextComponentView} />
                 {
                     // Pass any View or Component inside the curly bracket.
                     // Here the ? Question Mark represent the ternary operator.
            
                   this.state.status ? <Text style= {{ fontSize: 25, color: "#fff", textAlign: 'center' }}> Completed Challenges </Text> : null
                 }
            
                 
            
                 </View>
              
          );
        }
      }

const styles = StyleSheet.create({
    MainContainer :{
        
       // Setting up View inside content in Vertically center.
       justifyContent: 'center',
       flex:1,
       margin: 10
        
       }
    
    });