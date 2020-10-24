import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Profile from "../screens/ProfileScreen";
import BottomTabNavigator from "./BottomTabNavigator";

const AppStack = () => {
  const Application = createDrawerNavigator();
  return (
    <Application.Navigator>
      <Application.Screen name="Profile" component={Profile} />
      <Application.Screen name="Home" component={BottomTabNavigator} />
    </Application.Navigator>
  );
};

export default AppStack;
