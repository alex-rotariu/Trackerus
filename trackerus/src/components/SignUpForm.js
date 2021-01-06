import React, { useState } from "react";
import { Button, Input, Text } from "react-native-elements";
import {
  StyleSheet,
  Platform,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

import Spacer from "./Spacer";
import { signup } from "../redux/actions/userActions";

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
    <View style={styles.wrapper}>
      <ScrollView
        alwaysBounceVertical={true}
        showsVerticalScrollIndicator={false}
        style={{
          width: Dimensions.get("window").width * 0.8,
          height: Dimensions.get("window").height * 0.7
        }}
      >
        <View style={styles.inputs}>
          <Text style={styles.title}>Sign Up</Text>
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
              <TouchableOpacity
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  borderRadius: 4,
                  borderWidth: 2,
                  borderColor: "#2C8E3E"
                }}
                underlayColor="#fff"
                onPress={() => setShow(true)}
                title="Pick date"
              >
                <Text
                  style={{
                    color: "#2C8E3E",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 20,
                    paddingLeft: 10,
                    paddingRight: 10
                  }}
                >
                  Pick date
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {show && (
            <DateTimePicker
              value={values.dateOfBirth}
              mode="date"
              display="default"
              style={{
                shadowColor: "#fff",
                shadowRadius: 0,
                shadowOpacity: 1,
                shadowOffset: { height: 0, width: 0 }
              }}
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
            <TouchableOpacity
              onPress={() => signup(values)}
              style={styles.button}
            >
              <Text style={styles.text}>Sign Up</Text>
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
    marginVertical: Dimensions.get("window").height * 0.01,
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
  title: {
    paddingVertical: Dimensions.get("window").height * 0.01,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center"
  },
  inputs: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  wrapper: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 20
  },
  dateRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  dateInput: { flex: 1 },
  dateButton: { flex: 1, margin: 16 },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15
  }
});

export default connect(null, { signup })(SignUpForm);
