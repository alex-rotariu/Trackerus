import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AppLoadingScreen from "../screens/AppLoadingScreen";
import AppStack from "./AppNavigator";
import AuthStack from "./AuthNavigator";

export default function RootStackScreen({ isLoggedIn = true }) {
  const RootStack = createStackNavigator();
  return (
    <RootStack.Navigator>
      {isLoggedIn ? (
        <RootStack.Screen name="Authenticated" component={AppStack} />
      ) : (
        <RootStack.Screen
          options={{ headerShown: false }}
          name="NotAuthenticated"
          component={AuthStack}
        />
      )}
    </RootStack.Navigator>
  );
}
