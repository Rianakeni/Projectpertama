import React from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native';

const Input = ({placeholder = 'default value'}) => {
    return (    
        <TextInput style={style.inputUsername} placeholder={placeholder}/>
    )
}


const style = StyleSheet.create({
    inputUsername: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        padding: 10,
    }
});

export default Input;

//jangan lupa import -> export 