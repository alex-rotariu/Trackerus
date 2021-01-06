import React, { useEffect } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import FeedTrackCard from "../components/FeedTrackCard";
import { fetchFeed } from "../redux/actions/tracksActions";

const screenHeight = Dimensions.get("window").height;

const FeedScreen = ({ fetchFeed, posts }) => {
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchFeed();
      return function cleanup() {
        unsubscribe();
      };
    });
  }, []);

  const renderItem = ({ item }) => <FeedTrackCard post={item} />;
  return (
    <View style={styles.trackList}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
    // marginBottom: 50
  },
  trackList: {
    // flex: 1
    paddingTop: screenHeight * 0.005
    // marginBottom: screenHeight * 0.055
  }
});

const mapStateToProps = (state) => {
  return {
    posts: state.feed.posts
  };
};

export default connect(mapStateToProps, { fetchFeed })(FeedScreen);
