import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';
import * as firebase from 'firebase';
import { Root, Tabs } from '../config/router';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { firebaseInit } from '../config/firebaseconfig';

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      error: '',
      authenticating: false,
    }
  }


  componentWillMount() {
    this.firebaseInit;
  }

  componentDidMount() {
      this._loadInitialState().done
  }

  onPressSignUp() {
    this.setState({
      authenticating: true,
    })
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        this.setState({authenticating: false});
        this.props.navigation.navigate('Tabs');
    })
    .catch(() => {
        this.setState({error: 'Authentication failed', authenticating: false});
    })
  }

  renderCurrentState() {
    if(this.state.authenticating) {
      return (
        <View>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <View style={styles.form}>
      <Text style={styles.loginText}>REGISTER</Text>
        <Input 
          placeholder='First name'
          label='firstName'
          onChangeText={firstName => this.setState({ firstName })}
        />
        <Input 
          placeholder='Last name'
          label='lastName'
          onChangeText={lastName => this.setState({ lastName })}
        />
        <Input 
          placeholder='Enter your email...'
          label='Email'
          onChangeText={email => this.setState({ email })}
        />
        <Input 
          placeholder='Enter your password...'
          label='Password'
          secureTextEntry
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Text>{this.state.error}</Text>
        <Button onPress={() => this.onPressSignUp()}>Sign Up</Button>
      </View>
    )
  }
  
  render() {
    return (
      <View style={styles.container}>
        {this.renderCurrentState()}
      </View>
     // <Tabs />
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

  },
  form: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  loginText: {
      fontSize: 34,
      color: '#2CEB73',
      textAlign: 'center',
      marginBottom: 20,
  }
})