import React, { useState } from "react";
import { connect } from "react-redux";
import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height * 0.5;

const Map = ({ currentLocation, coordinates, view }) => {
  const [mapRef, setMapRef] = useState(null);
  if (view) {
  }

  if (!currentLocation)
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;

  return (
    <View>
      <MapView
        ref={(ref) => {
          setMapRef(ref);
        }}
        loadingEnabled
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02
        }}
        onLayout={() =>
          mapRef.fitToCoordinates(coordinates, {
            edgePadding: { top: 10, right: 10, bottom: 10, left: 10 },
            animated: false
          })
        }
      >
        {!view ? (
          <Circle
            center={currentLocation.coords}
            radius={30}
            strokeColor="rgba(158,158,255,1.0)"
            fillColor="rgba(158,258,266,0.3)"
          />
        ) : null}
        <Polyline
          coordinates={coordinates}
          strokeColor="#000"
          fillColor="rgba(255,0,0,0.5)"
          strokeWidth={1}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width,
    height
  }
});

const mapStateToProps = (state) => {
  return {
    coordinates: state.location.locations.map((loc) => loc.coords),
    currentLocation: state.location.currentLocation
  };
};

export default connect(mapStateToProps, null)(Map);
