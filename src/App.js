/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';

import HouseList from './sections/houses/HousesList';

import * as Webservices from 'JuegoTronos/src/webservices/Webservices'

export default class App extends Component {

    componentWillMount() {
        Webservices.configureAxios()
    }

    render() {

        return (
            <Router>
              <Scene key="root">
                <Scene
                    key={'HouseList'}
                    component={ HouseList }
                />
              </Scene>
            </Router>
        );
    }

}

const styles = StyleSheet.create({

});