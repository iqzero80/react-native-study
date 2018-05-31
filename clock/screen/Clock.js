import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import moment from 'moment';
import Pallete from './Pallete';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            format: "A hh:mm:ss",
            modalVisible: false,
            color: '#FFFFFF'
        };

        setInterval(() => {
            this.setState({
            time: new Date()
            })
        }, 1000);
    };
    modalOpen = () => {
        this.setState({
            modalVisible: true
        });
    };
    modalClose = () => {
        this.setState({
            modalVisible: false
        });
    };
    changeColor = (color) => {
        this.setState({
            backgroundColor: color,
            modalVisible: false
        });
    };
    changeTime = () => {
        if (this.state.format == 'A hh:mm:ss') {
            this.setState({
            format: 'HH:mm:ss'
            });
        } else {
            this.setState({
            format: 'A hh:mm:ss'
            });
        }
    };
        
    render() {
        const date = this.state.time;
        const formatDate = moment(date).format(this.state.format);
        return (
            <View style={[styles.container, {backgroundColor: this.state.backgroundColor}]}>
            <Pallete modalVisible={this.state.modalVisible} close={this.modalClose} color={this.changeColor} />

            <View style={styles.header}>
                <Button
                    title="color"
                    onPress={() => this.modalOpen()}
                />
                <Button
                    title="24 <> 12"
                    onPress={() => this.changeTime()}
                />
            </View>
            <View style={styles.body}>
                <Text style={styles.time}>
                    {formatDate}
                </Text>
            </View>
            </View>
        );
    };
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF'
    },
    body: {
      flex: 6,
      justifyContent: 'center'
    },
    header: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    time: {
      fontSize: 40,
      textAlign: 'center',
      margin: 10
    }
});