import React, { useCallback } from "react";
import { Text } from "react-native-elements";
import { withNavigationFocus } from "react-navigation";
import { connect } from "react-redux";
import { KeyboardAvoidingView, StyleSheet, SafeAreaView } from "react-native";

import Map from "../../components/Map";
import useLocation from "../../hooks/useLocation";
import { addLocation } from "../../redux/actions/locationActions";
import "../../_mockLocation";
import TrackForm from "../../components/TrackForm";

const TrackCreateScreen = ({ addLocation, recording, isFocused }) => {
  const callback = useCallback(
    (location) => {
      // console.log(location);
      addLocation(location, recording);
    },
    [recording]
  );
  const [error] = useLocation(isFocused || recording, callback);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "position"}
      style={{ flex: 1 }}
    >
      <SafeAreaView forceInset={{ top: "always" }}>
        <Text h3>Create a track</Text>

        <Map />
        {error ? <Text>Please enable location services</Text> : null}
        <TrackForm />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  return {
    recording: state.location.recording
  };
};

export default connect(mapStateToProps, { addLocation })(
  withNavigationFocus(TrackCreateScreen)
);
