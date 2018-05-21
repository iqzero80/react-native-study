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
import moment from 'moment';

let randomHex = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date(), format: "A hh:mm:ss"};

    setInterval(() => {
      this.setState({
        time: new Date()
      })
    }, 1000);
  }
  change24 = () => {
    this.setState({
      format: 'HH:mm:ss'
    });
  }
  change12 = () => {
    this.setState({
      format: 'A hh:mm:ss'
    });
  }
  changeColor = () => {
    this.setState({
      fondColor: randomHex(),
      backgroundColor: randomHex()
    });
  }
  render() {
    const date = this.state.time;
    const formatDate = moment(date).format(this.state.format);
    return (
      <View style={[styles.container, {backgroundColor: this.state.backgroundColor}]}>
        <View style={styles.body}>
          <Text style={[styles.time, {color: this.state.fondColor}]}>
            {formatDate}
          </Text>
        </View>
        <View style={styles.footer}>
          <Button style={styles.button}
            title="24"
            onPress={() => this.change24()}
          />
          <Button style={styles.button}
            title="color"
            onPress={() => this.changeColor()}
          />
          <Button style={styles.button}
            title="12"
            onPress={() => this.change12()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  body: {
    flex: 6,
    justifyContent: 'center'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  time: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10
  },
  button: {
    flex: 1,
    backgroundColor: '#00FF00'
  }
});
