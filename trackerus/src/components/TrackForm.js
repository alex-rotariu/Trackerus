import React from "react";
import { connect } from "react-redux";
import { Input, Button } from "react-native-elements";
import { StyleSheet } from "react-native";

import Spacer from "./Spacer";
import {
  changeName,
  startRecording,
  stopRecording
} from "../redux/actions/locationActions";

const TrackForm = ({
  changeName,
  startRecording,
  stopRecording,
  state: { trackName, recording, locations }
}) => {
  return (
    <Spacer>
      <Input
        style={styles.input}
        value={trackName}
        onChangeText={changeName}
        placeholder="Enter track name"
      />
    </Spacer>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 25
  }
});

const mapStateToProps = (state) => {
  return {
    state: state.location
  };
};

export default connect(mapStateToProps, {
  changeName,
  startRecording,
  stopRecording
})(TrackForm);
