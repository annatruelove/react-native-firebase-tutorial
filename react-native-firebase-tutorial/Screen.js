import React from 'react'
import { Text, View, TouchableHighlight, StyleSheet, TextInput, Alert } from 'react-native';
import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBxF98fqZgMHU73LKGO8o6ZUIK7mzG_ejc",
    authDomain: "tutorial-f1cd4.firebaseapp.com",
    databaseURL: "https://tutorial-f1cd4.firebaseio.com",
    projectId: "tutorial-f1cd4",
    storageBucket: "tutorial-f1cd4.appspot.com",
    messagingSenderId: "981650514141",
    appId: "1:981650514141:web:fdfdb5675890aa441cfb34",
    measurementId: "G-89SK124S5Q"
};

let app

if (!Firebase.apps.length) {
    app = Firebase.initializeApp(config);
}

//let app = Firebase.initializeApp(config);

const db = app.database();

let addItem = item => {
    db.ref('/items').push({
    name: item
    });
};





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
    state = {
        item: ''
    };

    handleChange = e => {
        this.setState({
            item: e.nativeEvent.text
        });
    };
    
    handleSubmit = () => {
        addItem(this.state.item);
        Alert.alert('Item saved successfully');
    };


    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.title}>Add to List!</Text>

                <TextInput style={styles.itemInput} onChange={this.handleChange}
/>

                <TouchableHighlight style={styles.button} underlayColor="white" onPress={this.handleSubmit}>
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