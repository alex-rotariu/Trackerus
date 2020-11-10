import React from "react";
import { connect } from "react-redux";
import { ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";

const Map = ({ currentLocation, locations }) => {
  if (!currentLocation)
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;

  return (
    <MapView
      loadingEnabled
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,258,266,0.3)"
      />
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

const mapStateToProps = (state) => {
  return {
    locations: state.location.locations,
    currentLocation: state.location.currentLocation
  };
};

export default connect(mapStateToProps, null)(Map);
