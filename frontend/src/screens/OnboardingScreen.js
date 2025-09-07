import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OnboardingScreen = ({ navigation, route }) => {
  const { theme = 'light' } = route.params || {}; // Get the theme here
  const isDarkMode = theme === 'dark';

  const handleAuthPress = () => {
    // Pass the theme to the next screen
    navigation.navigate('SignInScreen', { theme }); 
  };

  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#1F2937' : '#E6EEF4',
      padding: 20,
    },
    text: {
      fontSize: 28,
      fontWeight: 'bold',
      color: isDarkMode ? '#FFFFFF' : '#3A4B5C',
      marginBottom: 10,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 18,
      color: isDarkMode ? '#D1D5DB' : '#4A5568',
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

  return (
    <View style={dynamicStyles.container}>
      <Text style={dynamicStyles.text}>Welcome to Sahasi!</Text>
      <Text style={dynamicStyles.subtitle}>Let's get you started with your safety journey.</Text>
      
      <TouchableOpacity onPress={handleAuthPress} style={dynamicStyles.button}>
        <Text style={dynamicStyles.buttonText}>Log In / Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;