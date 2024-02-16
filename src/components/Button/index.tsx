import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MyButton = ({ backgroundColor = 'blue', onPress, title = 'Sign In' }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    onPress && onPress(); 
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>    
      <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={handleClick}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
      {isLoggedIn && <Text style={styles.signedInText}>Signed In</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    width: 250,
    height: 60
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signedInText: {
    color: 'blue',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 16,
    marginTop: 20
  },
});

export default MyButton;
