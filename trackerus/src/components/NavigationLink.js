import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Spacer from "./Spacer";
import * as RootNavigation from "../navigation/RootNavigation";

const NavigationLink = ({ text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => RootNavigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue"
  }
});

export default NavigationLink;
