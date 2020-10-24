import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
      <Button
        buttonStyle={{ width: 200 }}
        title="View Results"
        type="outline"
        onPress={() => navigation.navigate("SearchView")}
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

export default SearchScreen;
