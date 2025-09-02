// src/screens/OnboardingScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  const handleAuthPress = () => {
    // Navigate to the Sign In screen, which will handle the login/signup flow
    navigation.navigate('SignInScreen'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Sahasi!</Text>
      <Text style={styles.subtitle}>Let's get you started with your safety journey.</Text>
      
      <TouchableOpacity onPress={handleAuthPress} style={styles.button}>
        <Text style={styles.buttonText}>Log In / Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6EEF4',
    padding: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3A4B5C',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#4A5568',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;