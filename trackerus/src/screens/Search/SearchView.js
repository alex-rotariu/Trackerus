import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const SearchView = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Search view</Text>
      <Button
        buttonStyle={{ width: 200 }}
        title="Search"
        type="outline"
        onPress={() => navigation.navigate("Search")}
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

export default SearchView;
