import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./HomeScreen";
import { ListScreen } from "./ListScreen";

const Stack = createNativeStackNavigator();

export const HomeStackNavigator = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "Home",
      headerTitleAlign: "center",
    });
  });
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="List" component={ListScreen} />
    </Stack.Navigator>
  );
};
