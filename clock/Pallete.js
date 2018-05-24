import React, { Component } from 'react';
import {
    Modal,
    StyleSheet,
    View,
    Text,
    Button,
    TouchableHighlight
} from 'react-native';

class Pallete extends Component {
    render() {
        return (
            <Modal
                transparent={true}
                animationType="fade"
                visible={this.props.modalVisible}
            >
                <TouchableHighlight style={{flex: 1}} onPress={() => {
                        this.props.close();
                    }}>
                    <View style={styles.mainbox}>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableHighlight onPress={() => {
                                this.props.color('#ffcdd2');
                            }}>
                                <View style={[styles.colorbox, {backgroundColor: '#ffcdd2'}]}></View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {
                                this.props.color('#f8bbd0');
                            }}>
                                <View style={[styles.colorbox, {backgroundColor: '#f8bbd0'}]}></View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {
                                this.props.color('#e1bee7');
                            }}>
                                <View style={[styles.colorbox, {backgroundColor: '#e1bee7'}]}></View>
                            </TouchableHighlight>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableHighlight onPress={() => {
                                this.props.color('#d1c4e9');
                            }}>
                                <View style={[styles.colorbox, {backgroundColor: '#d1c4e9'}]}></View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {
                                this.props.color('#c5cae9');
                            }}>
                                <View style={[styles.colorbox, {backgroundColor: '#c5cae9'}]}></View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {
                                this.props.color('#bbdefb');
                            }}>
                                <View style={[styles.colorbox, {backgroundColor: '#bbdefb'}]}></View>
                            </TouchableHighlight>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableHighlight onPress={() => {
                                this.props.color('#b3e5fc');
                            }}>
                                <View style={[styles.colorbox, {backgroundColor: '#b3e5fc'}]}></View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {
                                this.props.color('#b2ebf2');
                            }}>
                                <View style={[styles.colorbox, {backgroundColor: '#b2ebf2'}]}></View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {
                                this.props.color('#b2dfdb');
                            }}>
                                <View style={[styles.colorbox, {backgroundColor: '#b2dfdb'}]}></View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </TouchableHighlight>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    mainbox: {
        marginTop: 60,
        marginLeft: 30,
        width: 122,
        height: 122,
        borderWidth: 1
    },
    colorbox: {
        width: 40,
        height: 40
    }
});

export default Pallete;