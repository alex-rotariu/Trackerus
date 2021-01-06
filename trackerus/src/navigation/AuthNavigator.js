import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";
import Splash from "../screens/SplashScreen";
import SignUp from "../screens/SignUpScreen";
import SignIn from "../screens/SignInScreen";

import image from "../../assets/frontpage_background.jpg";

const TransitionScreen = {
  gestureDirection: "horizontal",
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0]
            })
          },
          {
            translateX: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -layouts.screen.width]
                })
              : 1
          }
        ]
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0]
        })
      }
    };
  }
};

const CardOptions = {
  cardStyle: { backgroundColor: "rgba(133,237,144,0.6)" },
  shadowColor: "transparent",
  ...TransitionScreen
};

const AuthStack = () => {
  const Authenticate = createStackNavigator();
  return (
    <View style={styles.containerView}>
      <ImageBackground source={image} style={styles.image}>
        <Authenticate.Navigator
          screenOptions={{
            opacity: 1,
            headerShown: false
          }}
        >
          <Authenticate.Screen
            name="Splash"
            options={CardOptions}
            component={Splash}
          />
          <Authenticate.Screen
            name="SignUp"
            options={CardOptions}
            component={SignUp}
          />
          <Authenticate.Screen
            name="SignIn"
            options={CardOptions}
            component={SignIn}
          />
        </Authenticate.Navigator>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});

export default AuthStack;
