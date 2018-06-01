import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class Home extends Component {
    static navigationOptions = {
        title: 'jinwoo project'
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text style={styles.title}>시계 만들어 보자</Text>
                <Button
                    onPress={() => navigate('Clock')}
                    icon={{name: 'alarm'}}
                    backgroundColor='#fc5830'
                    title='똥꼬시계'
                />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        margin: 15
    }
});
