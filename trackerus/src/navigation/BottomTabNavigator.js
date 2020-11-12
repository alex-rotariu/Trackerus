import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {
  HomeStackNavigator,
  FeedStackNavigator,
  RecordStackNavigator,
  SearchStackNavigator,
  ProfileStackNavigator
} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Feed":
              iconName = "newspaper";
              break;
            case "Record":
              iconName = "map-marker";
              break;
            case "Search":
              iconName = "magnify";
              break;
            case "Profile":
              iconName = "account";
              break;
          }
          if (iconName)
            return <Icon name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        style: {
          position: "absolute"
        }
      }}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Feed" component={FeedStackNavigator} />
      <Tab.Screen name="Record" component={RecordStackNavigator} />
      <Tab.Screen name="Search" component={SearchStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
