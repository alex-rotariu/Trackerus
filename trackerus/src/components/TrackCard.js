import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Dimensions, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import moment from "moment";

import TrackCardDetails from "./TrackCardDetails";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const INITIAL_REGION = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA
};

export default TrackCard = (props) => {
  const { track, mapInitialRegion } = props;
  const coordinates = track.locations.map((obj) => obj.coords);
  const [mapRef, setMapRef] = useState(null);
  return (
    <View style={styles.shadowStyle}>
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <MapView
            ref={(ref) => {
              setMapRef(ref);
            }}
            loadingEnabled
            liteMode
            initialRegion={mapInitialRegion}
            style={styles.mapStyle}
            onLayout={() =>
              mapRef.fitToCoordinates(coordinates, {
                edgePadding: { top: 10, right: 10, bottom: 10, left: 10 },
                animated: false
              })
            }
          >
            <Polyline
              coordinates={coordinates}
              strokeColor="#000"
              fillColor="rgba(255,0,0,0.5)"
              strokeWidth={1}
            />
          </MapView>
        </View>
        <TrackCardDetails
          props={{
            trackName: track.trackName,
            distance: track.distance,
            createdAt: moment(track.createdAt).fromNow(),
            username: track.username,
            profilePic: track.profilePic
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowStyle: {
    marginBottom: 10,
    shadowColor: "#ccc",
    shadowOpacity: 0.7,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0
    },
    // elevation: 3,
    backgroundColor: "#0000",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    width: width * 0.9,
    height: height * 0.25,
    borderColor: "#0E6E23",
    borderLeftWidth: 10,
    backgroundColor: "#67CD75",
    borderRadius: 32,
    flexDirection: "row"
  },
  mapContainer: {
    marginLeft: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#ccc",
    shadowOpacity: 0.7,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0
    }
    // elevation: 3
  },

  mapStyle: { width: 125, height: 125, borderRadius: 32 }
});

TrackCard.defaultProps = {
  height: 150,
  listHeight: 85,
  shadowColor: "#ccc",
  borderLeftWidth: 5,
  markerLat: LATITUDE,
  markerLng: LONGITUDE,
  title: "Testimonial",
  borderColor: "#f54242",
  backgroundColor: "#fff",
  width: width * 0.9,
  mapInitialRegion: INITIAL_REGION
};
