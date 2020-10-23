import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginBottom: 50
  }
});

export default SignUpScreen;
