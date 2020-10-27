import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text } from "react-native-elements";

import Spacer from "../components/Spacer";
import SignInForm from "../components/SignInForm";

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Spacer>
          <Text h3>Sign in</Text>
        </Spacer>
        <SignInForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: Dimensions.get("window").width * 0.1
  },
  wrapper: {
    alignItems: "center"
  }
});

export default SignInScreen;
