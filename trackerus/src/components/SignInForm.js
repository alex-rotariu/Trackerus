import React, { useState } from "react";
import { Text, Button, Input } from "react-native-elements";
import { StyleSheet, ScrollView, Dimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";

import Spacer from "./Spacer";
import { signin } from "../redux/actions/userActions";

const SignInForm = ({ signin }) => {
  const [values, setValues] = useState({
    username: "",
    password: ""
  });
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.inputs}>
          <Text style={styles.title}>Sign in</Text>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            label="Username"
            value={values.username}
            onChangeText={(value) => setValues({ ...values, username: value })}
          />
          <Input
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            label="Password"
            value={values.password}
            onChangeText={(value) => setValues({ ...values, password: value })}
          />
          {/* {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null} */}
          <Spacer>
            <Button title="Sign In" onPress={() => signin(values)} />
          </Spacer>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").height * 0.7
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10
  },
  inputs: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: Dimensions.get("window").height * 0.1
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15
  },
  wrapper: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 20,
    padding: 20
  }
});

export default connect(null, { signin })(SignInForm);
