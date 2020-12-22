import React, { useEffect, useState } from "react";
import { SearchBar, ListItem, Avatar } from "react-native-elements";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { connect } from "react-redux";

import { fetchUsers, setCurrentUser } from "../../redux/actions/searchActions";

const renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#000"
      }}
    />
  );
};

const SearchScreen = ({ navigation, fetchUsers, setCurrentUser, users }) => {
  const [name, setText] = useState("");

  const searchFilterFunction = (text) => {
    if (text) {
      fetchUsers(text);
      setText(text);
    } else {
      // // Inserted text is blank
      // // Update FilteredDataSource with masterDataSource
      // setFilteredDataSource(masterDataSource);
      setText(text);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <ListItem bottomDivider onPress={() => {
              setCurrentUser(item)
              navigation.navigate("SearchView")
            }}>
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

export default connect(mapStateToProps, { fetchUsers, setCurrentUser })(SearchScreen);
