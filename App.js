import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Root from './src/Root';
import store, {persistor} from './src/Store/Store';
import {Provider} from 'react-redux';
import {Store} from './src/Store/Store';
const App = () => {
  return (
    <Provider store={Store}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#ffffff"
        translucent={false}
      />
      <Root />
    </Provider>
  );
};

export default App;
