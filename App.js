import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Root from './src/Root';
import store, {persistor} from './src/Store/Store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#ffffff"
        translucent={false}
      />
      <Root />
    </>
  );
};

export default App;
