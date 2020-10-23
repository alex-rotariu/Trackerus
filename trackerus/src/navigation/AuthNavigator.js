import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";

const AuthStack = () => {
  const Authenticate = createStackNavigator();
  return (
    <Authenticate.Navigator>
      <Authenticate.Screen
        options={{ headerShown: false }}
        name="Splash"
        component={SplashScreen}
      />
      <Authenticate.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUpScreen}
      />
      <Authenticate.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignInScreen}
      />
    </Authenticate.Navigator>
  );
};

export default AuthStack;
