import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Screen2 extends React.Component {

    goScreen2() {
        Actions.screen2({ texto: 'Estoy en la pantalla 2' })
    }

    render() {

        return (
            <View>
                <Text>Screen 2</Text>
                <Button
                    onPress={ () => this.goScreen2() }
                    title="Go to screen 2"
                />
            </View>
        )
    }
}