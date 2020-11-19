import React from "react";
import { Text } from "react-native-elements";
import { connect } from "react-redux";
import {
  KeyboardAvoidingView,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions
} from "react-native";
import { Button } from "react-native-elements";

import Map from "../../components/Map";
import Spacer from "../../components/Spacer";
import useCalculateDistance from "../../hooks/useCalculateDistance";
import { saveTrack } from "../../redux/actions/locationActions";
// TODO
// And add form for save
// Complete server upload

const RecordSaveScreen = ({ saveTrack, coordinates, trackName }) => {
  const [distance] = useCalculateDistance(coordinates);

  return (
    <View style={styles.wrapper}>
      <ScrollView style={{ width: Dimensions.get("window").width * 0.9 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "position"}
          style={{ flex: 1 }}
        >
          <SafeAreaView forceInset={{ top: "always" }}>
            <Text h3>Save your record</Text>
            <Map view={true} />
            <Spacer>
              <Text>{trackName}</Text>
              <Text>{distance}</Text>
              <Button
                title="Save track"
                onPress={() => saveTrack(trackName, coordinates)}
              />
            </Spacer>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 20,
    margin: 20,
    alignItems: "center"
  }
});

const mapStateToProps = (state) => {
  return {
    coordinates: state.location.locations,
    trackName: state.location.trackName
  };
};

export default connect(mapStateToProps, { saveTrack })(RecordSaveScreen);
