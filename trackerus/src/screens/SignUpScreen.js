import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text, Button } from "react-native-elements";

import Spacer from "../components/Spacer";
import SignUpForm from "../components/SignUpForm";

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SignUpForm />
      <Spacer>
        <Text h4>Already have an account?</Text>
        <Button title="Sign In" onPress={() => navigation.navigate("SignIn")} />
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
  }
});

export default SignUpScreen;
