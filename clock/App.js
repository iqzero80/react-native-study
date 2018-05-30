/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';

const App = props => {
  const { navigate } = props.navigation;
  return (
    <Button
      title='Go to Clock'
      onPress={() =>
        navigate('ClockScreen')
      }
    />
  );
};

export default App;
