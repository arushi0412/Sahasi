import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ theme = 'light' }) => { // Accept the theme prop with a default value
  const isDarkMode = theme === 'dark';

  const dynamicStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF', // Dark mode background
      paddingHorizontal: 16,
      paddingVertical: 10,
      paddingTop: 20,
      shadowColor: isDarkMode ? '#FFFFFF' : '#000000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: isDarkMode ? 0.4 : 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    appName: {
      fontSize: 25,
      fontWeight: 'bold',
      color: isDarkMode ? '#8B5CF6' : '#8B5CF6', // Purple color, same for both themes
      letterSpacing: 0.5,
      marginRight: 4,
    },
    iconColor: isDarkMode ? '#FFFFFF' : '#000000', // Dynamic icon color
  });

  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };

  const handleMenuPress = () => {
    console.log('Menu pressed');
  };

  return (
    <View style={dynamicStyles.container}>
      {/* Left side - Logo and App Name */}
      <View style={styles.leftSection}>
        <Image
          source={require('../../assets/loading.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={dynamicStyles.appName}>Sahasi</Text>
      </View>

      {/* Right side - Icons */}
      <View style={styles.rightSection}>
        <TouchableOpacity 
          style={styles.iconButton} 
          onPress={handleNotificationPress}
          activeOpacity={0.7}
        >
          <Icon name="notifications-outline" size={24} color={dynamicStyles.iconColor} />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.iconButton} 
          onPress={handleMenuPress}
          activeOpacity={0.7}
        >
          <Icon name="menu-outline" size={24} color={dynamicStyles.iconColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Keep the static styles outside the component
const styles = StyleSheet.create({
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 45,
    height: 45,
    marginRight: 12,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
    borderRadius: 20,
  },
});

export default Header;