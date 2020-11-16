import React, { useCallback, useEffect, useState } from "react";
import { Text } from "react-native-elements";
import { connect } from "react-redux";
import {
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Dimensions
} from "react-native";

import Map from "../../components/Map";
import useLocation from "../../hooks/useLocation";
import { addLocation } from "../../redux/actions/locationActions";
import "../../_mockLocation";
import RecordCreateForm from "../../components/RecordCreateForm";

const RecordCreateScreen = ({ addLocation, recording, navigation }) => {
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    const unsubscribe1 = navigation.addListener("focus", () => {
      setIsFocused(true);
    });
    const unsubscribe2 = navigation.addListener("blur", () => {
      setIsFocused(false);
    });
    return function cleanup() {
      unsubscribe1();
      unsubscribe2();
    };
  }, []);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording, isFocused]
  );
  const [error] = useLocation(isFocused || recording, callback);
  return (
    <View style={styles.wrapper}>
      <ScrollView style={{ width: Dimensions.get("window").width * 0.9 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "position"}
          style={{ flex: 1 }}
        >
          <SafeAreaView forceInset={{ top: "always" }}>
            <Text h3>Create a track</Text>

            <Map />
            {error ? <Text>Please enable location services</Text> : null}
            <RecordCreateForm />
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
    recording: state.location.recording
  };
};

export default connect(mapStateToProps, { addLocation })(RecordCreateScreen);
