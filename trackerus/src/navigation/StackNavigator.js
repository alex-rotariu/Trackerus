import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RecordCreate from "../screens/Record/RecordCreate";
import RecordSave from "../screens/Record/RecordSave";
import Search from "../screens/Search/SearchScreen";
import SearchView from "../screens/Search/SearchView";

const Stack = createStackNavigator();

const RecordStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RecordCreate" component={RecordCreate} />
      <Stack.Screen name="RecordSave" component={RecordSave} />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SearchView" component={SearchView} />
    </Stack.Navigator>
  );
};

export { RecordStackNavigator, SearchStackNavigator };
