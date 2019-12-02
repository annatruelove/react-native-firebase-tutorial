import React from 'react'
import { Text, View, TouchableHighlight, StyleSheet, TextInput, Alert } from 'react-native';

export default class Screen extends React.Component {

    render() {
        return (
            <View style={{ flex: 5 }}>

                <AddItem />

            </View>
        )
    }
}

class AddItem extends React.Component {

    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.title}>Add to List!</Text>

                <TextInput style={styles.itemInput} />

                <TouchableHighlight style={styles.button} underlayColor="white">
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight> 

            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#CAEBDB'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center'
    },
    itemInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});