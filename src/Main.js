import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


  class Main extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCbvRBlfHkdUFLb63mr0LjRz4GAJujgvDI',
      authDomain: 'tuys-713d4.firebaseapp.com',
      databaseURL: 'https://tuys-713d4.firebaseio.com',
      projectId: 'tuys-713d4',
      storageBucket: 'tuys-713d4.appspot.com',
      messagingSenderId: '705125966945'
  });
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default Main;
