import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Profile from "../screens/ProfileScreen";
import BottomTabNavigator from "./BottomTabNavigator";
const Application = createDrawerNavigator();

const AppStack = () => {
  return (
    <Application.Navigator>
      <Application.Screen name="Home" component={BottomTabNavigator} />
      <Application.Screen name="Profile" component={Profile} />
    </Application.Navigator>
  );
};

export default AppStack;
