import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';
import * as firebase from 'firebase';
import { Root, Tabs } from './config/router';
import { Input } from './components/Input';
import { Button } from './components/Button';

export default class App extends React.Component {
  render() {
    return <Root />
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  form: {
    flex: 1,
  }
})