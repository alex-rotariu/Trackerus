import React, { useCallback } from "react";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { connect } from "react-redux";

import Map from "../../components/Map";
import useLocation from "../../hooks/useLocation";
import { addLocation } from "../../redux/actions/locationActions";
import "../../_mockLocation";

const TrackCreateScreen = ({ addLocation, recording, isFocused }) => {
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [error] = useLocation(isFocused || recording, callback);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create a track</Text>
      <Map />
      {error ? <Text>Please enable location services</Text> : null}
      {/* <TrackForm /> */}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    recording: state.location.recording
  };
};

export default connect(mapStateToProps, { addLocation })(
  withNavigationFocus(TrackCreateScreen)
);
