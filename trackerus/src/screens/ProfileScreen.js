import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView
} from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import * as ImagePicker from "expo-image-picker";

import { signout, uploadImage } from "../redux/actions/userActions";
import ProfileTracksList from "../components/ProfileTracksList";
import Spacer from "../components/Spacer";
import UserInfoView from "../components/UserInfoView";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const ProfileScreen = ({
  navigation,
  signout,
  uploadImage,
  user: { user }
}) => {
  const [profilePic, setProfilePic] = useState(user.profilePic);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          buttonStyle={{
            width: 100,
            marginHorizontal: screenWidth * 0.05,
            color: "#000"
          }}
          title="Sign Out"
          titleStyle={{
            fontSize: 18,
            fontWeight: "800",
            color: "#000"
          }}
          type="outline"
          onPress={signout}
        />
      )
    });
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.1,
      allowsMultipleSelection: false,
      base64: true
    });
    uploadImage(result);
    if (!result.cancelled) {
      setProfilePic(result);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.name}>{user.fullName ? user.fullName : ""}</Text>
          <Button
            titleStyle={{ fontSize: 14 }}
            buttonStyle={{
              width: screenWidth * 0.28,
              marginLeft: screenWidth * 0.2,
              backgroundColor: "#0E6E23",
              borderWidth: 1,
              borderColor: "#fff"
            }}
            title={profilePic.base64 ? "Change image" : "Pick image"}
            onPress={pickImage}
          />
        </View>
      </View>
      {profilePic && (
        <Image
          source={{ uri: `data:image/gif;base64,${profilePic.base64}` }}
          style={styles.profilePic}
        />
      )}
      <UserInfoView
        props={{
          followers: user.followerCount,
          following: user.followingCount,
          trackCount: user.trackCount
        }}
      />
      <SafeAreaView style={styles.trackList}>
        <ProfileTracksList />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  trackList: {
    flex: 1,
    marginTop: screenHeight * 0.025
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: screenHeight * 0.05,
    marginLeft: screenWidth * 0.05
  },
  name: {
    fontSize: 24,
    color: "#696969",
    fontWeight: "600"
  },
  info: { fontSize: 24, color: "#696969", textAlign: "right" },
  header: {
    backgroundColor: "#85ED90",
    height: screenHeight * 0.15,
    flexDirection: "column",
    justifyContent: "center"
  },
  profilePic: {
    width: screenHeight * 0.15,
    height: screenHeight * 0.15,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: screenHeight * 0.075
  },
  container: {
    flex: 1
  }
});

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { signout, uploadImage })(
  ProfileScreen
);
