import React from "react";
import {View, Text, StyleSheet} from 'react-native';

//short cut nya -> rnfes

const Title = ({text}) => {
    return (
        <View>
            <Text style={style.title}>{text}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'navy',
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: 'yellow'
    }
});

export default Title;

