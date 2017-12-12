import React, { Component } from 'react';
import { View, Text, FlatList, Button, StyleSheet} from 'react-native'
import { AsyncCalls, Colors } from 'JuegoTronos/src/commons'

export default class HouseList extends Component {

    constructor(props){
        super(props)
        this.state = {
            list: [],
            selected: null
        }
    }

    componentWillMount(){
        AsyncCalls.fetchHouseList()
        .then((response) => {
            console.log("axios get response: ", response);
            const list = response.data && response.data.records ? response.data.records : []
            this.setState({ list: list }) 
            /*Es lo mismo 
              this.setState({ list }) 
              porque se llaman igual
            */
        })
        
        .catch((error) => {
            console.log("axios get error: ", error);
        });
        
    }

    checkIsSelected(item) {

        if((this.state.selected !=null) && (this.state.selected.id == item.id)){
            return true
        } else {
            return false
        }
    }

    onSelectedItem(item) {
        this.setState( { selected: item })
    }


    renderItem(item){
        const isSelected = this.checkIsSelected(item)
        const cellStyle = isSelected ? { backgroundColor: Colors.pink } : {backgroundColor: 'grey'}
        const textStyle = isSelected ?  'black' : 'white'
        return (
            <View style={[styles.cell, cellStyle]}>
                <Text>{ item.nombre }</Text>

                <Button
                    title={'Seleccionar casa'}
                    onPress={ () => this.onSelectedItem(item) }
                    color={textStyle}
                />
            </View>
        )
    }

    render() {

        const nombre = this.state.selected ? this.state.selected.nombre : ''
        return (
            <View>
                <Text style={styles.title}> { nombre }</Text>
                <FlatList
                    data={ this.state.list }
                    renderItem={ ({ item, index }) => this.renderItem(item, index) }
                    keyExtractor={ (item, index) => item.id }
                    extraData={ this.state }

                    /* Es lo mismo, renderItem recibe un elemento y devuelve una función, en este caso
                    la función va en línea

                    renderItem={ ({item}) => <Text>{ item.nombre } </Text> }
                    
                    renderItem={ () => {
                        return (
                            <Text>{ item.nombre } </Text> 
                        )
                    }
                    */

                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cell: {
        height: 200,
        marginVertical: 10
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 20
    }
})