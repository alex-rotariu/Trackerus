import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import RootStackScreen from "./src/navigation";
import { navigationRef, isReadyRef } from "./src/navigation/RootNavigation";
import { store } from "./src/redux/store";

export default function App() {
  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}
      >
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
}
