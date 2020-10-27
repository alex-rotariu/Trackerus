import React, { useState } from "react";
import { Button, Input } from "react-native-elements";
import {
  StyleSheet,
  Platform,
  View,
  ScrollView,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import Constants from "expo-constants";

import Spacer from "./Spacer";
import signup from "../redux/actions/userActions";

const SignUpForm = ({ signup }) => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    fullName: "",
    dateOfBirth: Date.now(),
    password: "",
    confirmPassword: ""
  });

  return (
    <ScrollView
      style={{
        width: Dimensions.get("window").width
      }}
    >
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        label="Username"
        value={values.username}
        onChangeText={(value) => setValues({ ...values, username: value })}
      />
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        label="Email"
        value={values.email}
        onChangeText={(value) => setValues({ ...values, email: value })}
      />
      <Input
        autoCorrect={false}
        label="Full Name"
        value={values.fullName}
        onChangeText={(value) => setValues({ ...values, fullName: value })}
      />
      <View style={styles.dateRow}>
        <View style={styles.dateInput}>
          <Input
            disabled
            textAlign={"center"}
            label="Date of Birth"
            value={moment(values.dateOfBirth).format("DD-MM-YYYY")}
          />
        </View>
        <View style={styles.dateButton}>
          <Button onPress={() => setShow(true)} title="Pick date" />
        </View>
      </View>
      {show && (
        <DateTimePicker
          value={values.dateOfBirth}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || values.dateOfBirth;
            setShow(Platform.OS === "ios");
            setValues({ ...values, dateOfBirth: currentDate });
          }}
        />
      )}
      <Input
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        label="Password"
        value={values.password}
        onChangeText={(value) => setValues({ ...values, password: value })}
      />
      <Input
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        label="Confirm Password"
        value={values.confirmPassword}
        onChangeText={(value) =>
          setValues({ ...values, confirmPassword: value })
        }
      />
      {/* {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null} */}
      <Spacer>
        <Button title="Sign Up!" onPress={() => signup(values)} />
      </Spacer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dateRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  dateInput: { flex: 1 },
  dateButton: { flex: 1, margin: 10 },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15
  }
});

export default connect(null, { signup })(SignUpForm);
