import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const RecordCreate = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Record create</Text>
      <Button
        buttonStyle={{ width: 200 }}
        title="Save"
        type="outline"
        onPress={() => navigation.navigate("RecordSave")}
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

export default RecordCreate;
