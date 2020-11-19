import React from "react";
import { View, Text } from "react-native";

export default TrackCard = ({ track }) => {
  return (
    // React native map card
    <View>
      <Text>{track.trackName}</Text>
    </View>
  );
};
