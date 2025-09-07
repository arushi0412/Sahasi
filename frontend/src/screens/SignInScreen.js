import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

// Import your illustration image from the assets folder.
const loadingPic = require('../../assets/loading.png');

const SignInScreen = ({ navigation, route }) => {
  const { theme = 'light' } = route.params || {};
  const isDarkMode = theme === 'dark';

  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login pressed with:', { identifier: emailOrUsername, password });
    
    if (navigation) {
      // Pass the theme when navigating to HomePage
      navigation.replace('HomePage', { theme });
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot password pressed');
    // TODO: Navigate to the Forgot Password screen with the theme prop.
    // navigation.navigate('ForgotPasswordScreen', { theme });
  };

  const handleSignUp = () => {
    if (navigation) {
      // Pass the theme when navigating to SignUpScreen
      navigation.navigate('SignUpScreen', { theme });
    }
  };

  // Styles that depend on the theme
  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#1A202C' : '#FFFFFF',
    },
    appTitle: {
      fontSize: 36,
      fontWeight: 'bold',
      color: isDarkMode ? '#FFFFFF' : '#1A202C',
      letterSpacing: -0.5,
    },
    inputLabel: {
      fontSize: 16,
      fontWeight: '500',
      color: isDarkMode ? '#E2E8F0' : '#2D3748',
      marginBottom: 8,
    },
    textInput: {
      height: 56,
      backgroundColor: isDarkMode ? '#2D3748' : '#FFFFFF',
      borderWidth: 1,
      borderColor: isDarkMode ? '#4A5568' : '#E2E8F0',
      borderRadius: 12,
      paddingHorizontal: 16,
      fontSize: 16,
      color: isDarkMode ? '#FFFFFF' : '#2D3748',
      shadowColor: isDarkMode ? '#000000' : '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: isDarkMode ? 0.3 : 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    forgotPasswordText: {
      fontSize: 14,
      color: '#8B5CF6',
      fontWeight: '500',
    },
    loginButton: {
      backgroundColor: '#8B5CF6',
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 24,
      shadowColor: '#8B5CF6',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 3,
    },
    loginButtonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600',
      letterSpacing: 0.5,
    },
    signUpText: {
      fontSize: 16,
      color: isDarkMode ? '#A0AEC0' : '#4A5568',
    },
    signUpLink: {
      fontSize: 16,
      color: '#8B5CF6',
      fontWeight: '600',
    },
  });

  return (
    <KeyboardAvoidingView 
      style={dynamicStyles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={isDarkMode ? '#1A202C' : '#FFFFFF'} />
      <ScrollView 
        contentContainerStyle={staticStyles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={staticStyles.illustrationContainer}>
          <Image
            source={loadingPic}
            style={staticStyles.illustrationImage}
            resizeMode="contain"
          />
        </View>

        <View style={staticStyles.titleContainer}>
          <Text style={dynamicStyles.appTitle}>Sahasi</Text>
        </View>

        <View style={staticStyles.formContainer}>
          <View style={staticStyles.inputGroup}>
            <Text style={dynamicStyles.inputLabel}>Email / Username</Text>
            <TextInput
              style={dynamicStyles.textInput}
              placeholder="Enter your email or username"
              placeholderTextColor={isDarkMode ? '#A0AEC0' : '#A0AEC0'}
              value={emailOrUsername}
              onChangeText={setEmailOrUsername}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={staticStyles.inputGroup}>
            <Text style={dynamicStyles.inputLabel}>Password</Text>
            <TextInput
              style={dynamicStyles.textInput}
              placeholder="Enter your password"
              placeholderTextColor={isDarkMode ? '#A0AEC0' : '#A0AEC0'}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={staticStyles.forgotPasswordContainer}>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={dynamicStyles.forgotPasswordText}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={dynamicStyles.loginButton} 
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={dynamicStyles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          <View style={staticStyles.signUpContainer}>
            <Text style={dynamicStyles.signUpText}>Don't have an account? </Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={dynamicStyles.signUpLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// Static styles that don't change with the theme
const staticStyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  illustrationImage: {
    width: width * 0.5,
    height: undefined,
    aspectRatio: 1.15,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  inputGroup: {
    marginBottom: 24,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 32,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
});

export default SignInScreen;