import React, { useReducer, useState } from "react";
import { Text, View, Dimensions, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";

import LikeButton from "./LikeButton";

import { likeTrack } from "../redux/actions/tracksActions";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const TrackCardDetails = ({ props, currentUser, likeTrack }) => {
  const { _id, trackName, distance, createdAt } = props;
  const { profilePic, username, userId, likes } = props;
  // console.log(likes);
  return (
    <View style={styles.container}>
      <View style={styles.userDetails}>
        <View style={styles.userGroup}>
          <Image
            size={32}
            source={{ uri: `data:image/gif;base64,${profilePic.base64}` }}
            // colors={colors}
            style={styles.imageStyle}
          />
          <View>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.createdAtStyle}>{createdAt}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1
        }}
      />
      <Text style={styles.titleStyle}>{trackName}</Text>
      <Text style={styles.textStyle}>
        {Math.round((distance / 1000 + Number.EPSILON) * 100) / 100} kilometers{" "}
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignSelf: "center",
          marginTop: 4
        }}
      >
        {currentUser.user._id === userId ? (
          <></>
        ) : likes.some((el) => el.userId === currentUser.user._id) ? (
          <LikeButton liked={true} callback={() => likeTrack(_id)} />
        ) : (
          <LikeButton liked={false} callback={() => likeTrack(_id)} />
        )}
        <View style={{ alignSelf: "center" }}>
          <Text> {likes.length} likes</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userGroup: {
    flexDirection: "row"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 20,
    marginRight: 12
  },
  userDetails: {
    flex: 1,
    marginBottom: 2
  },
  imageStyle: {
    flexDirection: "column",
    marginHorizontal: 10,
    width: screenHeight * 0.075,
    height: screenHeight * 0.075,
    borderRadius: 63
  },
  username: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "600"
  },
  titleStyle: {
    flex: 1,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
    flexWrap: "wrap"
  },
  textStyle: {
    textAlign: "center",
    flexDirection: "row",
    flex: 1,
    fontSize: 14,
    fontWeight: "300"
  },
  createdAtStyle: {
    fontSize: 10
  }
});

const mapStateToProps = (state) => {
  return {
    currentUser: state.user
  };
};

export default connect(mapStateToProps, { likeTrack })(TrackCardDetails);
