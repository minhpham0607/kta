import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

const Onboarding = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('../minh/images/intro.png')} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.iconContainer}>
          <Image 
            source={require('../minh/images/icon.png')} 
            style={styles.icon}
          />
        </View>
        <Text style={styles.title}>Welcome{'\n'}to our store</Text>
        <Text style={styles.description}>Get your groceries in as fast as one hour</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
      },
      overlay: {
        flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'center',
        width: '100%',
        padding: 20,
        paddingBottom: 60,
      },
      iconContainer: {
        marginBottom: 20,
      },
      icon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
      },
      title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
      },
      description: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 30,
      },
      button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 15,
        width: '90%',
        alignItems: 'center',
        marginBottom: 20, 
      },
      buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
      },
});

export default Onboarding;
