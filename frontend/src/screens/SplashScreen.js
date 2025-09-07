import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

const womanIllustration = require('../../assets/loading.png');

const SplashScreen = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);
  const { theme = 'light' } = route.params || {};
  const isDarkMode = theme === 'dark';

  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#1A202C' : '#FFFFFF',
      paddingHorizontal: 20,
      paddingTop: 60,
      paddingBottom: 40,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    appTitle: {
      fontSize: 48,
      fontWeight: 'bold',
      color: isDarkMode ? '#FFFFFF' : '#1A202C',
      marginBottom: 8,
      letterSpacing: -1,
    },
    tagline: {
      fontSize: 16,
      color: isDarkMode ? '#D1D5DB' : '#4A5568',
      textAlign: 'center',
      fontWeight: '400',
    },
    socialButton: {
      width: 56,
      height: 56,
      backgroundColor: isDarkMode ? '#2D3748' : '#E2E8F0',
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 2,
      shadowColor: isDarkMode ? '#000' : '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: isDarkMode ? 0.4 : 0.1,
      shadowRadius: 2,
    },
    socialButtonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: isDarkMode ? '#E2E8F0' : '#4A5568',
    },
    phoneIcon: {
      fontSize: 20,
      color: isDarkMode ? '#E2E8F0' : '#4A5568',
    },
    getStartedButton: {
      backgroundColor: '#8B5CF6',
      paddingHorizontal: 60,
      paddingVertical: 16,
      borderRadius: 25,
      elevation: 3,
      shadowColor: '#C4B5FD',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      minWidth: width * 0.7,
      alignItems: 'center',
    },
    getStartedButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',
      letterSpacing: 0.5,
    },
    loadingIndicator: {
      position: 'absolute',
      bottom: 80,
    }
  });

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');

        if (userToken) {
          // Pass the theme to the next screen
          navigation.replace('HomePage', { theme });
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error('Failed to check user status:', error);
        setLoading(false);
      }
    };
    
    const splashTimer = setTimeout(() => {
        checkUserStatus();
    }, 1500);

    return () => clearTimeout(splashTimer);
  }, [navigation, theme]);

  if (loading) {
    return (
      <View style={dynamicStyles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={isDarkMode ? '#1A202C' : '#FFFFFF'} />
        <View style={staticStyles.contentWrapper}>
          <Image
            source={womanIllustration}
            style={staticStyles.illustration}
            resizeMode="contain"
          />
          <View style={staticStyles.textContainer}>
            <Text style={dynamicStyles.appTitle}>Sahasi</Text>
            <Text style={dynamicStyles.tagline}>Empowering women's safety</Text>
          </View>
        </View>
        <ActivityIndicator size="large" color={dynamicStyles.appTitle.color} style={dynamicStyles.loadingIndicator} />
      </View>
    );
  }

  return (
    <View style={dynamicStyles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={isDarkMode ? '#1A202C' : '#FFFFFF'} />
      <View style={staticStyles.contentWrapper}>
        <Image
          source={womanIllustration}
          style={staticStyles.illustration}
          resizeMode="contain"
        />
        <View style={staticStyles.textContainer}>
          <Text style={dynamicStyles.appTitle}>Sahasi</Text>
          <Text style={dynamicStyles.tagline}>Empowering women's safety</Text>
        </View>
      </View>

      <View style={staticStyles.buttonContainer}>
        <View style={staticStyles.socialButtonsRow}>
          <TouchableOpacity
            style={dynamicStyles.socialButton}
            onPress={() => console.log('Google sign-in pressed')}
            activeOpacity={0.7}
          >
            <Text style={dynamicStyles.socialButtonText}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={dynamicStyles.socialButton}
            onPress={() => console.log('Phone sign-in pressed')}
            activeOpacity={0.7}
          >
            <Text style={dynamicStyles.phoneIcon}>📞</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={dynamicStyles.getStartedButton}
          onPress={() => navigation.navigate('OnboardingScreen', { theme })} // Pass the theme here
          activeOpacity={0.8}
        >
          <Text style={dynamicStyles.getStartedButtonText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Static styles that don't change with the theme
const staticStyles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustration: {
    width: width * 0.6,
    height: undefined,
    aspectRatio: 1.15,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  socialButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 15,
  },
});

export default SplashScreen;