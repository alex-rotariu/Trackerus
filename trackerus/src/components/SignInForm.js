import React, { useState } from "react";
import { Text, Button, Input } from "react-native-elements";
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  TouchableOpacity
} from "react-native";
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
    <View style={styles.wrapper}>
      <ScrollView
        alwaysBounceVertical={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <View style={styles.inputs}>
          <Text style={styles.title}>Sign In</Text>
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
            <TouchableOpacity
              onPress={() => signin(values)}
              style={styles.button}
            >
              <Text style={styles.text}>Sign In</Text>
            </TouchableOpacity>
          </Spacer>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    height: Dimensions.get("window").width * 0.1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#2C8E3E",
    shadowColor: "#2AC062",
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20
  },
  text: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  scrollView: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.5
  },
  title: {
    paddingVertical: Dimensions.get("window").height * 0.01,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10
  },
  inputs: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
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
    borderRadius: 20
  }
});

export default connect(null, { signin })(SignInForm);
