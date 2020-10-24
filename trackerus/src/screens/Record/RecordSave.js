import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RecordSave = () => {
  return (
    <View style={styles.container}>
      <Text>Record save</Text>
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

export default RecordSave;
