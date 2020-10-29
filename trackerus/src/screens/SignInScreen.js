import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text, Button } from "react-native-elements";

import Spacer from "../components/Spacer";
import SignInForm from "../components/SignInForm";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <SignInForm />
      </View>
      <Spacer>
        <Text h4>Don't have an account?</Text>
        <Button title="Sign up" onPress={() => navigation.navigate("SignUp")} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginVertical: Dimensions.get("window").width * 0.1
  },
  wrapper: {
    alignContent: "center",
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.7,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 20,
    padding: 20,
    alignItems: "center"
  }
});

export default SignInScreen;
