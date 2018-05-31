import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './screen/Home';
import Clock from './screen/Clock';

const App = StackNavigator({
  Home: { screen: Home },
  Clock: { screen: Clock }
});

export default App;
