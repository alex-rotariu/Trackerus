import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

import AppLoadingScreen from "../screens/AppLoadingScreen";
import AuthStack from "./AuthNavigator";
import BottomTabNavigator from "./BottomTabNavigator";

const RootStack = createStackNavigator();

function RootStackScreen({ isLoggedIn }) {
  return (
    <RootStack.Navigator>
      {isLoggedIn ? (
        <RootStack.Screen
          options={{ headerShown: false }}
          name="Authenticated"
          component={BottomTabNavigator}
        />
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

const mapStateToProps = (state) => {
  return { isLoggedIn: state.user.token ? true : false };
  // Commented for development
  // delete the next line to test auth
  // return { isLoggedIn: state.user.token ? false : true };
};

export default connect(mapStateToProps, null)(RootStackScreen);
