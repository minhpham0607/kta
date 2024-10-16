import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";

const App = () => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Image
          source={require("./images/login.png")}
          style={styles.backgroundImage}
        />
        <SafeAreaView style={styles.wrapper}>
          <Text style={styles.title}>Get your groceries with nectar</Text>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="VN"
            layout="first"
            placeholder="Nhập số điện thoại"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withShadow
            autoFocus
            containerStyle={styles.phoneInput}
            textContainerStyle={styles.textInputContainer}
          />
          
          <Text style={styles.orText}>Or connect with social media</Text>
          <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebookButton}>
            <Text style={styles.buttonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "relative",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: "cover",
    opacity: 0.7,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 16,
  },
  phoneInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  textInputContainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  googleButton: {
    backgroundColor: "#4285F4",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  facebookButton: {
    backgroundColor: "#3B5998",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default App;
