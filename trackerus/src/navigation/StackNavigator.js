import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-elements";

import RecordCreate from "../screens/Record/RecordCreateScreen";
import RecordSave from "../screens/Record/RecordSaveScreen";
import Search from "../screens/Search/SearchScreen";
import SearchView from "../screens/Search/SearchView";
import Profile from "../screens/ProfileScreen";
import Home from "../screens/HomeScreen";
import Feed from "../screens/FeedScreen";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const FeedStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
};

const RecordStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RecordCreate" component={RecordCreate} />
      <Stack.Screen name="RecordSave" component={RecordSave} />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SearchView" component={SearchView} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = ({ signout }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  FeedStackNavigator,
  RecordStackNavigator,
  SearchStackNavigator,
  ProfileStackNavigator
};
