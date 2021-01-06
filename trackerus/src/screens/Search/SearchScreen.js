import React, { useEffect, useState } from "react";
import { SearchBar, ListItem, Avatar } from "react-native-elements";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Dimensions
} from "react-native";
import { connect } from "react-redux";

import {
  fetchUsers,
  setCurrentUser,
  clearUsers
} from "../../redux/actions/searchActions";

const renderSeparator = () => {
  return (
    <View
      style={{
        height: 2,
        width: "100%",
        backgroundColor: "#0E6E23"
      }}
    />
  );
};

const SearchScreen = ({
  navigation,
  fetchUsers,
  setCurrentUser,
  users,
  clearUsers
}) => {
  const [name, setText] = useState("");

  const searchFilterFunction = (text) => {
    if (text) {
      fetchUsers(text);
      setText(text);
    } else {
      clearUsers();
      setText(text);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <ListItem
              bottomDivider
              onPress={() => {
                setCurrentUser(item);
                navigation.navigate("SearchView");
              }}
            >
              {/* {item.profilePic && ( */}
              <Avatar
                rounded
                source={{
                  uri: item.profilePic
                    ? `data:image/gif;base64,${item.profilePic.base64}`
                    : null
                }}
              />
              {/* )} */}
              <ListItem.Content>
                <ListItem.Title>{item.username}</ListItem.Title>
                <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          )}
          keyExtractor={(item) => item.email}
          ItemSeparatorComponent={renderSeparator}
          ListEmptyComponent={
            <View
              style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "space-around",
                marginVertical: Dimensions.get("window").height * 0.25
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  marginBottom: Dimensions.get("window").height * 0.2,
                  fontSize: 28,
                  color: "#0E6E23",
                  fontWeight: "bold"
                }}
              >
                No users to display...
              </Text>
            </View>
          }
          ListHeaderComponent={
            <SearchBar
              placeholder="Type Here..."
              round
              searchIcon={{ size: 24 }}
              onChangeText={(text) => {
                searchFilterFunction(text);
              }}
              onClear={(text) => searchFilterFunction(text)}
              autoCorrect={false}
              value={name}
              autoCapitalize="none"
              showLoading
              round
              lightTheme
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  }
});

const mapStateToProps = (state) => {
  return {
    users: state.search.users
  };
};

export default connect(mapStateToProps, {
  fetchUsers,
  setCurrentUser,
  clearUsers
})(SearchScreen);
