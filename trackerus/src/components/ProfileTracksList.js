import React, { useEffect } from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  StatusBar
} from "react-native";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { fetchMyTracks } from "../redux/actions/tracksActions";
import TrackCard from "./TrackCard";

const ProfileTracksList = ({ tracks, fetchMyTracks }) => {
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchMyTracks();
      return function cleanup() {
        unsubscribe();
      };
    });
  }, []);
  const renderItem = ({ item }) => <TrackCard track={item} />;
  return (
    <FlatList
      style={{ paddingVertical: 10, marginBottom: 20 }}
      showsVerticalScrollIndicator={false}
      data={tracks}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
    />
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  return {
    tracks: state.myTracks
  };
};

export default connect(mapStateToProps, { fetchMyTracks })(ProfileTracksList);
