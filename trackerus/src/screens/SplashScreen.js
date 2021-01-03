import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Button, Text } from "react-native-elements";

import NavigationLink from "../components/NavigationLink";
import Spacer from "../components/Spacer";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text h1 style={{ color: "black" }}>
        Trackerus
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignIn")}
        style={styles.buttonSignIn}
      >
        <Text style={styles.textSignIn}>Sign In</Text>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: 20,
          padding: 20,
          alignSelf: "center",
          marginTop: Dimensions.get("window").height * 0.05
        }}
      >
        <Spacer>
          <Text
            style={{ textAlign: "center", fontSize: 16, fontWeight: "800" }}
          >
            Don't have an account?
          </Text>
        </Spacer>
        <Spacer>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={styles.buttonSignUp}
          >
            <Text style={styles.textSignUp}>Sign Up</Text>
          </TouchableOpacity>
        </Spacer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonSignUp: {
    display: "flex",
    height: Dimensions.get("window").width * 0.1,
    width: Dimensions.get("window").width * 0.4,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,

    backgroundColor: "#rgba(44, 142, 62, 1)",
    shadowColor: "#2AC062",
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20
  },
  buttonSignIn: {
    display: "flex",
    height: Dimensions.get("window").width * 0.125,
    width: Dimensions.get("window").width * 0.5,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",

    backgroundColor: "#rgba(14, 110, 35, 0.6)",
    shadowColor: "#2AC062",
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20
  },
  textSignIn: {
    fontSize: 28,
    textTransform: "uppercase",
    color: "white",
    fontWeight: "bold"
  },
  textSignUp: {
    fontSize: 22,
    textTransform: "uppercase",
    color: "white",
    fontWeight: "bold"
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-around",
    marginVertical: Dimensions.get("window").height * 0.2
  }
});

export default SplashScreen;
