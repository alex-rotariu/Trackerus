import React, { useReducer, useState } from "react";
import { Text, View, Dimensions, StyleSheet, Image } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default TrackCardDetails = ({ props }) => {
  const { trackName, distance, createdAt } = props;
  const { profilePic, username } = props
  return (
    <View style={styles.container}>
      <View style={styles.userDetails}>
        <Image
          size={32}
          name={"Alex"}
          source={{ uri: `data:image/gif;base64,${profilePic.base64}` }}
          // colors={colors}
          style={styles.imageStyle}
        />
        <View>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.createdAtStyle}>{createdAt}</Text>
        </View>
      </View>
      <Text style={styles.titleStyle}>{trackName}</Text>
      <Text style={styles.textStyle}>
        {Math.round((distance / 1000 + Number.EPSILON) * 100) / 100} kilometers
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 20,
    marginRight: 12
  },
  userDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginLeft: 15
  },
  imageStyle: {
    marginHorizontal: 10,
    width: screenHeight * 0.075,
    height: screenHeight * 0.075,
    borderRadius: 63,
  },
  username: {
    fontSize: 20,
    fontWeight: "600"
  },
  titleStyle: {
    fontSize: 22,
    marginLeft: 5,
    fontWeight: "600",
    marginBottom: 10
  },
  textStyle: { fontSize: 14, marginLeft: 5, fontWeight: "300" },
  createdAtStyle: {
    fontSize: 10
  }
});
