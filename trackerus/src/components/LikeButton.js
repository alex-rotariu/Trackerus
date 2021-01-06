import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function LikeButton({ liked, callback }) {
  return (
    <TouchableOpacity onPress={callback}>
      {liked ? (
        <Image
          source={require("../../assets/heartFull.png")}
          style={styles.ImageIconStyle}
        />
      ) : (
        <Image
          source={require("../../assets/heartEmpty.png")}
          style={styles.ImageIconStyle}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },

  GooglePlusStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dc4e41",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 5,
    margin: 5
  },

  FacebookStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#485a96",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 5,
    margin: 5
  },

  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch"
  },

  TextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginRight: 20
  },

  SeparatorLine: {
    backgroundColor: "#fff",
    width: 1,
    height: 40
  }
});
