import React, { useState } from "react";
import { connect } from "react-redux";
import { Input, Button } from "react-native-elements";
import { Dimensions, StyleSheet, View } from "react-native";

import Spacer from "./Spacer";
import TrackCreateModal from "./RecordCreateModal.js";
import {
  changeName,
  startRecording,
  stopRecording,
  confirmTrack,
  discardTrack
} from "../redux/actions/locationActions";

const RecordCreateForm = ({
  navigation,
  changeName,
  startRecording,
  stopRecording,
  confirmTrack,
  discardTrack,
  state: { trackName, recording, locations }
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [errors, setErrors] = useState("");

  const saveTrack = () => {
    if (trackName === "" || locations.length === 0) {
      setErrors("Please provide a title and locations");
      setModalVisible(true);
    } else {
      confirmTrack(navigation, locations);
    }
  };

  return (
    <View style={styles.body}>
      <TrackCreateModal
        errors={errors}
        setErrors={setErrors}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
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
              onPress={saveTrack}
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

      {recording ? (
        <Spacer>
          <Button
            buttonStyle={styles.stopButton}
            title="Stop recording"
            onPress={stopRecording}
          />
        </Spacer>
      ) : null}

      {!recording && locations.length === 0 ? (
        <Spacer>
          <Button
            buttonStyle={styles.startButton}
            title="Start Recording"
            onPress={startRecording}
          />
        </Spacer>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 25
  },
  body: {
    // marginBottom: Dimensions.get("window").height * 0.05
  },
  resumeButton: {
    backgroundColor: "#4AAE5A"
  },
  saveButton: {
    backgroundColor: "#0E6E23"
  },
  deleteButton: {
    backgroundColor: "#f33"
  },
  startButton: {
    backgroundColor: "#0E6E23"
  },
  stopButton: {
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
})(RecordCreateForm);
