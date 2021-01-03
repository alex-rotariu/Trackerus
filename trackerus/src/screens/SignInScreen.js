import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text, Button } from "react-native-elements";

import Spacer from "../components/Spacer";
import SignInForm from "../components/SignInForm";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SignInForm />
      <View style={styles.bottomLink}>
        <Spacer>
          <Text h4>Don't have an account?</Text>
          <Button
            title="Sign up"
            onPress={() => navigation.navigate("SignUp")}
          />
        </Spacer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomLink: {
    alignSelf: "center"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginVertical: Dimensions.get("window").width * 0.1
  }
});

export default SignInScreen;
