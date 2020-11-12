import React from "react";
import { connect } from "react-redux";
import { Input, Button } from "react-native-elements";
import { Dimensions, StyleSheet, View } from "react-native";

import Spacer from "./Spacer";
import {
  changeName,
  startRecording,
  stopRecording,
  confirmTrack,
  discardTrack
} from "../redux/actions/locationActions";

const TrackForm = ({
  changeName,
  startRecording,
  stopRecording,
  confirmTrack,
  discardTrack,
  state: { trackName, recording, locations }
}) => {
  return (
    <View style={styles.body}>
      <Spacer>
        <Input
          style={styles.input}
          value={trackName}
          onChangeText={changeName}
          placeholder="Enter track name"
        />
      </Spacer>
      {!recording && locations.length ? (
        <>
          <Spacer>
            <Button
              buttonStyle={styles.resumeButton}
              title="Resume recording"
              onPress={startRecording}
            />
          </Spacer>
          <Spacer>
            <Button
              buttonStyle={styles.saveButton}
              title="Save recording"
              onPress={confirmTrack}
            />
          </Spacer>
          <Spacer>
            <Button
              buttonStyle={styles.deleteButton}
              title="Delete recording"
              onPress={discardTrack}
            />
          </Spacer>
        </>
      ) : null}
      <Spacer>
        {recording ? (
          <Button title="Stop recording" onPress={stopRecording} />
        ) : null}
      </Spacer>
      <Spacer>
        {!recording && locations.length === 0 ? (
          <Button title="Start Recording" onPress={startRecording} />
        ) : null}
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 25
  },
  body: {
    marginBottom: Dimensions.get("window").height * 0.05
  },
  resumeButton: {
    backgroundColor: "#4AAE5A"
  },
  saveButton: {
    backgroundColor: "#0E6E23"
  },
  deleteButton: {
    backgroundColor: "#f33"
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
  stopRecording,
  confirmTrack,
  discardTrack
})(TrackForm);
