import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-elements";

import Spacer from "../components/Spacer";
import SignUpForm from "../components/SignUpForm";

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SignUpForm />
      <View style={styles.bottomLink}>
        <Text h4>Already have an account?</Text>
        <Spacer>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            style={styles.button}
          >
            <Text style={styles.text}>Sign In</Text>
          </TouchableOpacity>
        </Spacer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    height: Dimensions.get("window").width * 0.1,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#2C8E3E",
    shadowColor: "#2AC062",
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 24,
    borderWidth: 2,
    borderColor: "white"
  },
  text: {
    fontSize: 24,
    textTransform: "uppercase",
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  bottomLink: {
    marginTop: 16,
    alignSelf: "center"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginVertical: Dimensions.get("window").width * 0.1
  }
});

export default SignUpScreen;
