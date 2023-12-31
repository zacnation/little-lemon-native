import React from "react";
import { Alert, Image, Text, TextInput, View, StyleSheet } from "react-native";
import { validateEmail } from "../utils";
import Button from "../components/Button";

export const SubscribeScreen = () => {
  const [email, setEmail] = React.useState("");
  const isEmailValid = validateEmail(email);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/little-lemon-logo-grey.png")}
        />
      </View>
      <Text style={styles.title}>Subscribe for more!</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder={"Input your email:"}
      />
      <Button
        onPress={() => {
          Alert.alert("Subscribed!");
        }}
        disabled={!isEmailValid}
      >
        Subscribe
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
  },
  title: {
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
    marginBottom: 32,
  },
  input: {
    height: 40,
    marginVertical: 24,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
  },
});
