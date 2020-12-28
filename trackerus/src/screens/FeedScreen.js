import React, { useEffect } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

import { fetchFeed } from "../redux/actions/tracksActions";

const FeedScreen = ({ fetchFeed, posts }) => {
  useEffect(() => {
    fetchFeed();
  }, []);

  console.log(posts);
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
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

const mapStateToProps = (state) => {
  return {
    posts: state.feed.posts
  };
};

export default connect(mapStateToProps, { fetchFeed })(FeedScreen);
