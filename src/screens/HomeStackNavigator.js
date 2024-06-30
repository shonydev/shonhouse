import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./HomeScreen";
import { ListScreen } from "./ListScreen";
import { RandomScreen } from "./RandomScreen";

const Stack = createNativeStackNavigator();

export const HomeStackNavigator = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "Home",
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#000000", // Color de fondo del header
      },
      headerTintColor: "#ffffff",
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
      <Stack.Screen
        name="RandomScreen"
        component={RandomScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
