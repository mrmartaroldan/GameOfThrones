import React, { Component } from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class Screen1 extends Component {

    render() {

        console.log("this.props: ", this.props)

        return (
            <View>
                <Text>{  this.props.title} </Text>
                <Text>{  this.props.texto } </Text>
                <Button
                    onPress={ () => Actions.pop() }
                    title="Volver atrás"
                />
            </View>
        )
    }
}