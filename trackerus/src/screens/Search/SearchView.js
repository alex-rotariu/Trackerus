import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView
} from "react-native";
import { connect } from "react-redux";
import { Button } from "react-native-elements";

import {
  fetchUserTracks,
  cleanUserTracks,
  followUser
} from "../../redux/actions/searchActions";
import SearchTracksList from "../../components/SearchTracksList";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const SearchView = ({
  cleanUserTracks,
  fetchUserTracks,
  followUser,
  user,
  tracks,
  followed
}) => {
  useEffect(() => {
    if (user._id) fetchUserTracks(user._id);
    return () => {
      cleanUserTracks();
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.name}>{user.fullName ? user.fullName : ""}</Text>
          <Button
            titleStyle={{
              fontSize: 14,
              fontWeight: "bold",
              color: followed ? "#000" : "#fff"
            }}
            buttonStyle={{
              width: screenWidth * 0.28,
              marginLeft: screenWidth * 0.2,
              backgroundColor: followed ? "#fff" : "#0E6E23",
              borderWidth: 1,
              borderColor: followed ? "#000" : "#fff"
            }}
            title={followed ? "Stop following" : "Follow"}
            onPress={() => followUser(user._id)}
          />
        </View>
      </View>
      {user.profilePic && (
        <Image
          source={{ uri: `data:image/gif;base64,${user.profilePic.base64}` }}
          style={styles.profilePic}
        />
      )}
      <UserInfoView
        props={{
          followers: user.followerCount,
          following: user.followingCount,
          trackCount: user.trackCount
        }}
      />
      <SafeAreaView style={styles.trackList}>
        <SearchTracksList tracks={tracks} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  trackList: {
    flex: 1,
    marginTop: screenHeight * 0.025
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: screenHeight * 0.05,
    marginLeft: screenWidth * 0.05
  },
  name: {
    fontSize: 24,
    color: "#696969",
    fontWeight: "600"
  },
  info: { fontSize: 24, color: "#696969", textAlign: "right" },
  header: {
    backgroundColor: "#85ED90",
    height: screenHeight * 0.15,
    flexDirection: "column",
    justifyContent: "center"
  },
  profilePic: {
    width: screenHeight * 0.15,
    height: screenHeight * 0.15,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: screenHeight * 0.075
  },
  container: {
    flex: 1
  }
});

const mapStateToProps = (state) => {
  const followExists = (user) => {
    return user.followerId === state.search.currentUser._id;
  };
  return {
    user: state.search.currentUser,
    tracks: state.search.tracks,
    followed: state.user.user.followed.some(followExists)
  };
};

export default connect(mapStateToProps, {
  fetchUserTracks,
  cleanUserTracks,
  followUser
})(SearchView);
