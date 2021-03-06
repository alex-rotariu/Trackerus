import React, { useEffect } from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  StatusBar
} from "react-native";

import TrackCard from "./TrackCard";

const SearchTracksList = ({ tracks }) => {
  const renderItem = ({ item }) => <TrackCard track={item} />;
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={tracks}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
    />
  );
};

const styles = StyleSheet.create({});

export default SearchTracksList;
