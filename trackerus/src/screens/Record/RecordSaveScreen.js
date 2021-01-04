import React from "react";
import { Text } from "react-native-elements";
import { connect } from "react-redux";
import {
  KeyboardAvoidingView,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";

import Map from "../../components/Map";
import Spacer from "../../components/Spacer";
import useCalculateDistance from "../../hooks/useCalculateDistance";
import { saveTrack } from "../../redux/actions/locationActions";
// TODO
// And add form for save
// Complete server upload

const RecordSaveScreen = ({ navigation, saveTrack, trackName, distance }) => {
  return (
    <View style={styles.wrapper}>
      <ScrollView style={{ width: Dimensions.get("window").width * 0.9 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "position"}
          style={{ flex: 1 }}
        >
          <SafeAreaView forceInset={{ top: "always" }}>
            <Text style={{ textAlign: "center" }} h3>
              Save your record
            </Text>
            <Map view={true} />
            <Spacer>
              <View style={styles.details}>
                <Text style={styles.textName}>{trackName}</Text>
                <Text style={styles.textDistance}>
                  {Math.round((distance / 1000 + Number.EPSILON) * 100) / 100}
                  km
                </Text>

                <TouchableOpacity
                  onPress={() => saveTrack(navigation)}
                  style={styles.button}
                >
                  <Text style={styles.textButton}>Save Track</Text>
                </TouchableOpacity>
              </View>
            </Spacer>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-around"
  },
  textName: {
    fontSize: 36,
    fontWeight: "bold"
  },
  textDistance: {
    marginTop: 4,
    fontSize: 22
  },
  button: {
    display: "flex",
    height: Dimensions.get("window").width * 0.1,
    width: Dimensions.get("window").width * 0.4,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,

    backgroundColor: "#rgba(44, 142, 62, 1)",
    shadowColor: "#2AC062",
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20
  },
  textButton: {
    fontSize: 22,
    textTransform: "uppercase",
    color: "white",
    fontWeight: "bold"
  },
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
    trackName: state.location.trackName,
    distance: state.location.distance
  };
};

export default connect(mapStateToProps, { saveTrack })(RecordSaveScreen);
