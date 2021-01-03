import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-elements";
import { connect } from "react-redux";

const HomeScreen = ({ user, navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text h2 style={styles.welcome}>
          Hello {user.user.fullName}!
        </Text>
        <Text h3 style={styles.welcome}>
          Welcome to Trackerus!
        </Text>
      </View>
      <View style={styles.goToTrack}>
        <Text h4 style={{ color: "white", textAlign: "center" }}>
          Would you like to track yourself?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Record");
          }}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Go To Tracking</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.goToFeed}>
        <Text
          h4
          style={{ color: "#0E6E23", textAlign: "center", fontWeight: "bold" }}
        >
          ...or check what your friend have been doing...
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Feed");
          }}
          style={styles.appButtonContainerFeed}
        >
          <Text style={styles.appButtonTextFeed}>Go To Feed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    marginVertical: 16,
    elevation: 8,
    backgroundColor: "#0E6E23",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonContainerFeed: {
    marginVertical: 16,
    elevation: 8,
    backgroundColor: "#BCFED2",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  appButtonTextFeed: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  goToTrack: {
    borderRadius: 20,
    padding: 20,
    backgroundColor: "rgba(44, 142, 62, 1)",
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").height * 0.25
  },
  goToFeed: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").height * 0.25
  },
  welcome: { textAlign: "center", color: "black" },
  container: {
    backgroundColor: "rgba(103, 205, 117, 1)",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 50
  }
});

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, {})(HomeScreen);
