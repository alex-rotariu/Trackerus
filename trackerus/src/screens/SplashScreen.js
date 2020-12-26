import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

import NavigationLink from "../components/NavigationLink";
import Spacer from "../components/Spacer";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Trackerus</Text>
      <Button
        buttonStyle={{ width: 200 }}
        title="SignIn"
        type="outline"
        onPress={() => navigation.navigate("SignIn")}
      />
      <Spacer>
        <Text>Don't have an account?</Text>
      </Spacer>
      <Button
        buttonStyle={{ width: 200 }}
        title="Sign Up"
        type="outline"
        onPress={() => navigation.navigate("SignUp")}
      />
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

export default SplashScreen;
