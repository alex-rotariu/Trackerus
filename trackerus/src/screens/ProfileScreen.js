import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";

import { signout } from "../redux/actions/userActions";

const ProfileScreen = ({ signout }) => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button
        buttonStyle={{ width: 200 }}
        title="Sign Out"
        type="outline"
        onPress={signout}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginBottom: 50
  }
});

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { signout })(ProfileScreen);
