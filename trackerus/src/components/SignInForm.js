import React, { useState } from "react";
import { Text, Button, Input } from "react-native-elements";
import { StyleSheet, ScrollView, Dimensions } from "react-native";
import { connect } from "react-redux";

import Spacer from "./Spacer";
import { signin } from "../redux/actions/userActions";

const SignInForm = ({ signin }) => {
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  return (
    <>
      <ScrollView style={{ width: Dimensions.get("window").width }}>
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
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15
  }
});

export default connect(null, { signin })(SignInForm);
