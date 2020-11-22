import React, { useReducer, useState } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import UserAvatar from "react-native-user-avatar";

export default TrackCardDetails = ({ props }) => {
  const { trackName, distance, createdAt } = props;
  return (
    <View style={styles.container}>
      <View style={styles.userDetails}>
        <UserAvatar
          size={32}
          name={"Alex"}
          src={"https://dummyimage.com/100x100/000/fff"}
          // colors={colors}
          style={styles.imageStyle}
        />
        <View>
          <Text>User name</Text>
          <Text style={styles.createdAtStyle}>{createdAt}</Text>
        </View>
      </View>
      <Text style={styles.titleStyle}>{trackName}</Text>
      <Text style={styles.textStyle}>
        {Math.round((distance / 1000 + Number.EPSILON) * 100) / 100}
        kilometers
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
    marginBottom: 10
  },
  imageStyle: {
    marginHorizontal: 10,
    width: 30,
    height: 30
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
