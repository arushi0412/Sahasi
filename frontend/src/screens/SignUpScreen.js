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

const loadingPic = require('../../assets/loading.png');

const SignUpScreen = ({ navigation, route }) => {
  const { theme = 'light' } = route.params || {};
  const isDarkMode = theme === 'dark';
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // TODO: Add API call to your backend for user registration
    console.log('Sign up pressed with:', {
      firstName,
      lastName,
      phoneNumber,
      email,
      username,
      password,
      confirmPassword,
    });
    
    // Basic validation example
    if (!firstName || !lastName || !email || !password || !confirmPassword || !username) {
      console.log('Please fill all required fields');
      return;
    }
    
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    
    if (navigation) {
      navigation.replace('HomePage', { theme }); // Pass the theme to the next screen
    }
  };

  const handleLogIn = () => {
    if (navigation) {
      navigation.navigate('SignInScreen', { theme }); // Pass the theme to the next screen
    }
  };

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
      height: 52,
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
    signUpButton: {
      backgroundColor: '#8B5CF6',
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 12,
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
    signUpButtonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600',
      letterSpacing: 0.5,
    },
    logInText: {
      fontSize: 16,
      color: isDarkMode ? '#A0AEC0' : '#4A5568',
    },
    logInLink: {
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
          <View style={staticStyles.nameRowContainer}>
            <View style={staticStyles.nameInputContainer}>
              <Text style={dynamicStyles.inputLabel}>First Name</Text>
              <TextInput
                style={dynamicStyles.textInput}
                placeholder="Enter your first name"
                placeholderTextColor={isDarkMode ? '#A0AEC0' : '#A0AEC0'}
                value={firstName}
                onChangeText={setFirstName}
                autoCapitalize="words"
                autoCorrect={false}
              />
            </View>
            <View style={staticStyles.nameInputContainer}>
              <Text style={dynamicStyles.inputLabel}>Last Name</Text>
              <TextInput
                style={dynamicStyles.textInput}
                placeholder="Enter your last name"
                placeholderTextColor={isDarkMode ? '#A0AEC0' : '#A0AEC0'}
                value={lastName}
                onChangeText={setLastName}
                autoCapitalize="words"
                autoCorrect={false}
              />
            </View>
          </View>

          <View style={staticStyles.inputGroup}>
            <Text style={dynamicStyles.inputLabel}>Phone Number</Text>
            <TextInput
              style={dynamicStyles.textInput}
              placeholder="Enter your phone number"
              placeholderTextColor={isDarkMode ? '#A0AEC0' : '#A0AEC0'}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              autoCorrect={false}
            />
          </View>

          <View style={staticStyles.inputGroup}>
            <Text style={dynamicStyles.inputLabel}>Email</Text>
            <TextInput
              style={dynamicStyles.textInput}
              placeholder="Enter your email"
              placeholderTextColor={isDarkMode ? '#A0AEC0' : '#A0AEC0'}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={staticStyles.inputGroup}>
            <Text style={dynamicStyles.inputLabel}>Username</Text>
            <TextInput
              style={dynamicStyles.textInput}
              placeholder="Create a username"
              placeholderTextColor={isDarkMode ? '#A0AEC0' : '#A0AEC0'}
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={staticStyles.inputGroup}>
            <Text style={dynamicStyles.inputLabel}>Password</Text>
            <TextInput
              style={dynamicStyles.textInput}
              placeholder="Create a password"
              placeholderTextColor={isDarkMode ? '#A0AEC0' : '#A0AEC0'}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={staticStyles.inputGroup}>
            <Text style={dynamicStyles.inputLabel}>Confirm Password</Text>
            <TextInput
              style={dynamicStyles.textInput}
              placeholder="Confirm password"
              placeholderTextColor={isDarkMode ? '#A0AEC0' : '#A0AEC0'}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <TouchableOpacity 
            style={dynamicStyles.signUpButton} 
            onPress={handleSignUp}
            activeOpacity={0.8}
          >
            <Text style={dynamicStyles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={staticStyles.logInContainer}>
            <Text style={dynamicStyles.logInText}>Already have an account? </Text>
            <TouchableOpacity onPress={handleLogIn}>
              <Text style={dynamicStyles.logInLink}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const staticStyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 50,
    paddingBottom: 40,
  },
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  illustrationImage: {
    width: width * 0.5,
    height: undefined,
    aspectRatio: 1.15,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  formContainer: {
    flex: 1,
  },
  nameRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  nameInputContainer: {
    flex: 1,
    marginRight: 8,
  },
  inputGroup: {
    marginBottom: 20,
  },
  signUpButton: {
    backgroundColor: '#8B5CF6',
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
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
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  logInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
});

export default SignUpScreen;