import React, { Component } from 'react';
import { 
  AppRegistry,
  StyleSheet,
  Text, 
  View,
  Image,
  ImageBackground,
 } from 'react-native';



export default class ProfileHeader extends Component {
  render() {
    return (
        <ImageBackground style={styles.headerBackground} source={require('../assets/img/header.png')} >
        <View style={styles.header}>

            
                <Image style={styles.profilepic} source={require('../assets/img/placeholder.png')} />
            

            <Text style={styles.name}>Emile Baelde</Text>
            <Text style={styles.name}>- Groene kerel -</Text>

        </View>

    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    headerBackground:{
        height: 150,
        width: 375,
        marginLeft:-8,
        
        alignSelf:'stretch'
    },

    header:{
        
    },

    profilepic:{
        height: 100,
        width: 100,
        borderRadius: 100,
        alignSelf:'center',
        marginTop: 75,
    },

    name:{
        color: 'white',
        alignSelf:'center',
        fontWeight: 'bold',

    },

});
