import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text } from "react-native-elements";

import Spacer from "../components/Spacer";
import SignUpForm from "../components/SignUpForm";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign up</Text>
      </Spacer>
      <SignUpForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: Dimensions.get("window").width * 0.1
  }
});

export default SignUpScreen;
