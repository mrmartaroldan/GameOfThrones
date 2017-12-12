import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';';

export default class Screen1 extends Component {

    render() {

        return (
            <View>
                <Text>Screen 2</Text>
                <Text>{  this.props.texto } </Text>
            </View>
        )
    }
}