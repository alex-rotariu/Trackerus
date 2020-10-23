import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStackScreen from "./src/navigation";

import { navigationRef, isReadyRef } from "./src/navigation/RootNavigation";

export default function App() {
  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <RootStackScreen />
    </NavigationContainer>
  );
}
