import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBS7gX2ElEhKaDCJfu2Ep5SzU5C_WYhKWA',
      authDomain: 'auth-d2d7d.firebaseapp.com',
      databaseURL: 'https://auth-d2d7d.firebaseio.com',
      projectId: 'auth-d2d7d',
      storageBucket: '',
      messagingSenderId: '699152777017',
      appId: '1:699152777017:web:b07d62142c6d1283'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
