import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

import { StackNavigator } from 'react-navigation';
import ClockScreen from './ClockScreen';

const reactNavigationSample = props => {
    return <App navigation={props.navigation} />;
};

reactNavigationSample.navigationOptions = {
    title: "Home Screen"
};

const SampleApp = StackNavigator({
    Home: {screen: reactNavigationSample},
    ClockScreen: {screen: ClockScreen, title: "Clock Sreen"}
});

AppRegistry.registerComponent('clock', () => SampleApp);
