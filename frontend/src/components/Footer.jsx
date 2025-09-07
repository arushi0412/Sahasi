import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Footer = ({ theme = 'light' }) => {
  const isDarkMode = theme === 'dark';

  const handleHomePress = () => {
    console.log('Home pressed');
  };

  const handleMapPress = () => {
    console.log('Map pressed');
  };

  const handleSOSPress = () => {
    console.log('SOS pressed');
  };

  const handleCameraPress = () => {
    console.log('Camera pressed');
  };

  const handlePhonePress = () => {
    console.log('Phone pressed');
  };

  const dynamicStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF', // Dark mode background
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: isDarkMode ? '#FFFFFF' : '#000',
      shadowOffset: {
        width: 0,
        height: -2,
      },
      shadowOpacity: isDarkMode ? 0.3 : 0.15,
      shadowRadius: 8,
      elevation: 10,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    iconColor: isDarkMode ? '#E5E7EB' : '#6B7280', // Light gray in dark mode, dark gray in light mode
  });

  return (
    <View style={dynamicStyles.container}>
      {/* Home Icon */}
      <TouchableOpacity 
        style={styles.iconButton} 
        onPress={handleHomePress}
        activeOpacity={0.7}
      >
        <Icon name="home-outline" size={24} color={dynamicStyles.iconColor} />
      </TouchableOpacity>

      {/* Map/Location Icon */}
      <TouchableOpacity 
        style={styles.iconButton} 
        onPress={handleMapPress}
        activeOpacity={0.7}
      >
        <Icon name="map-outline" size={24} color={dynamicStyles.iconColor} />
      </TouchableOpacity>

      {/* SOS Button - Bigger Red Circle */}
      <TouchableOpacity 
        style={styles.sosButton} 
        onPress={handleSOSPress}
        activeOpacity={0.8}
      >
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity>

      {/* Camera Icon */}
      <TouchableOpacity 
        style={styles.iconButton} 
        onPress={handleCameraPress}
        activeOpacity={0.7}
      >
        <Icon name="camera-outline" size={24} color={dynamicStyles.iconColor} />
      </TouchableOpacity>

      {/* Phone/Call Icon */}
      <TouchableOpacity 
        style={styles.iconButton} 
        onPress={handlePhonePress}
        activeOpacity={0.7}
      >
        <Icon name="call-outline" size={24} color={dynamicStyles.iconColor} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 40,
    minHeight: 40,
  },
  sosButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#EF4444',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#EF4444',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  sosText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default Footer;