import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default UserInfoView = ({ props }) => {
  const { followers, following, trackCount } = props;
  console.log(followers, following, trackCount);
  return (
    <View style={styles.container}>
      <View style={styles.element}>
        <Text style={styles.number}>{trackCount}</Text>
        <Text style={styles.text}>Tracks</Text>
      </View>
      <View style={styles.element}>
        <Text style={styles.number}>{following}</Text>
        <Text style={styles.text}>Following</Text>
      </View>
      <View style={styles.element}>
        <Text style={styles.number}>{followers}</Text>
        <Text style={styles.text}>Followers</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  number: { textAlign: "center" },
  text: { textAlign: "center" },
  container: {
    marginTop: screenHeight * 0.1,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  element: {
    width: screenWidth * 0.2
    // marginHorizontal: screenHeight * 0.025
  }
});
