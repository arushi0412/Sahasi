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
const loadingPic = require('../../assets/loading_pic.png');

const SignInScreen = ({ navigation }) => {
  const [emailOrUsername, setEmailOrUsername] = useState(''); // Changed state name for clarity
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Add API call to your backend for user authentication
    // Your backend will determine if emailOrUsername is an email or a username.
    console.log('Login pressed with:', { identifier: emailOrUsername, password });
    
    // For demonstration, navigate to the home screen on successful login
    if (navigation) {
      navigation.replace('HomeScreen');
    }
  };

  const handleForgotPassword = () => {
    // TODO: Navigate to the Forgot Password screen
    console.log('Forgot password pressed');
    // if (navigation) {
    //   navigation.navigate('ForgotPasswordScreen');
    // }
  };

  const handleSignUp = () => {
    // Navigate to the Sign Up screen
    if (navigation) {
      navigation.navigate('SignUpScreen');
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Top Illustration */}
        <View style={styles.illustrationContainer}>
          <Image
            source={loadingPic}
            style={styles.illustrationImage}
            resizeMode="contain"
          />
        </View>

        {/* App Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.appTitle}>Sahasi</Text>
        </View>

        {/* Form Container */}
        <View style={styles.formContainer}>
          {/* Email/Username Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email / Username</Text> {/* Updated Label */}
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email or username" // Updated placeholder
              placeholderTextColor="#A0AEC0"
              value={emailOrUsername}
              onChangeText={setEmailOrUsername}
              keyboardType="email-address" // Keep for easier email entry on mobile keyboards
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Password Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              placeholderTextColor="#A0AEC0"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Forgot Password Link */}
          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>

          {/* Log In Button */}
          <TouchableOpacity 
            style={styles.loginButton} 
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
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
    width: width * 0.6,
    height: undefined,
    aspectRatio: 1.15,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  appTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1A202C',
    letterSpacing: -0.5,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  inputGroup: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
    marginBottom: 8,
  },
  textInput: {
    height: 56,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#2D3748',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 32,
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
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  signUpText: {
    fontSize: 16,
    color: '#4A5568',
  },
  signUpLink: {
    fontSize: 16,
    color: '#8B5CF6',
    fontWeight: '600',
  },
});

export default SignInScreen;