import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const AppStack = () => {
  const Application = createDrawerNavigator();
  return <Application.Navigator></Application.Navigator>;
};

export default AppStack;
